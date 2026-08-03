import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, relative, resolve } from "node:path";

const SITE_URL = "https://www.namato.net";
const OUTPUT_PATH = resolve("src/lib/namato-products.ts");
const IMAGES_DIRECTORY = resolve("public/images/products/namato");
const RESPONSE_CACHE_DIRECTORY = "/private/tmp/namato-import-cache";

const sourceCategories = [
  { sourcePath: "/category/акумулятори", fallbackCategory: "solar-batteries" },
  {
    sourcePath: "/category/комплекти-резервного-живлення",
    fallbackCategory: "backup-power",
  },
  { sourcePath: "/category/інвертори", fallbackCategory: "inverters" },
  { sourcePath: "/category/сонячні-панелі", fallbackCategory: "solar-panels" },
];

const additionalProductPaths = [];

function decodeHtml(value) {
  const namedEntities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value
    .replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, code) => {
      if (code.startsWith("#x")) {
        return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
      }

      if (code.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
      }

      return namedEntities[code.toLowerCase()] ?? entity;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeModel(value) {
  return value
    .normalize("NFKC")
    .toLocaleUpperCase("uk-UA")
    .replace(/[^A-ZА-ЯІЇЄҐ0-9]/g, "");
}

async function fetchWithRetry(url, attempts = 6) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(45_000),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response;
    } catch (error) {
      lastError = error;

      if (attempt < attempts) {
        await new Promise((resolveDelay) =>
          setTimeout(resolveDelay, 1_500 * attempt),
        );
      }
    }
  }

  throw new Error(`Не вдалося завантажити ${url}: ${lastError}`);
}

async function fetchTextWithCache(url, attempts = 6) {
  const normalizedUrl = url.toString();
  const cacheKey = createHash("sha256").update(normalizedUrl).digest("hex");
  const cachePath = resolve(RESPONSE_CACHE_DIRECTORY, `${cacheKey}.html`);

  try {
    return await readFile(cachePath, "utf8");
  } catch {
    const response = await fetchWithRetry(normalizedUrl, attempts);
    const html = await response.text();

    await mkdir(dirname(cachePath), { recursive: true });
    await writeFile(cachePath, html);
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 600));
    return html;
  }
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, worker),
  );

  return results;
}

function extractProductPaths(html) {
  return [
    ...html.matchAll(/(?:https:\/\/www\.namato\.net)?(\/product-page\/[^"'<\\]+)/g),
  ].map((match) => {
    const rawPath = decodeHtml(match[1]).replace(/\\u002F/g, "/");
    return decodeURIComponent(new URL(rawPath, SITE_URL).pathname);
  });
}

function extractCatalogTotal(html) {
  const totals = [...html.matchAll(/"totalCount":(\d+)/g)].map((match) =>
    Number.parseInt(match[1], 10),
  );

  if (totals.length === 0) {
    throw new Error("Не вдалося визначити загальну кількість товарів Namato.");
  }

  return Math.max(...totals);
}

function extractProductJsonLd(html, sourceUrl) {
  const scripts = [
    ...html.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];

  for (const script of scripts) {
    try {
      const parsed = JSON.parse(script[1]);
      const candidates = Array.isArray(parsed) ? parsed : [parsed];
      const product = candidates.find((candidate) => candidate?.["@type"] === "Product");

      if (product) {
        return product;
      }
    } catch {
      // Some unrelated JSON-LD blocks can be malformed; continue to the product block.
    }
  }

  throw new Error(`На сторінці ${sourceUrl} не знайдено Product JSON-LD.`);
}

function decodeJsonText(value) {
  try {
    return JSON.parse(`"${value}"`);
  } catch {
    return value;
  }
}

function extractSourceOptions(html) {
  const options = new Map();
  const optionPattern =
    /"title":"([^"]+)","optionType":"[^"]+","key":"[^"]+","selections":\[\{"id":[^,]+,"value":"([^"]*)"/g;

  for (const match of html.matchAll(optionPattern)) {
    options.set(
      decodeHtml(decodeJsonText(match[1])),
      decodeHtml(decodeJsonText(match[2])),
    );
  }

  return options;
}

function classifyProduct(fallbackCategory, title) {
  const normalizedTitle = title.toLocaleLowerCase("uk-UA");

  if (
    normalizedTitle.includes("зарядна станція") ||
    normalizedTitle.includes("зарядний пристрій для електромобіля")
  ) {
    return "ev-charging";
  }

  if (
    normalizedTitle.includes("сонячна електростанція") ||
    normalizedTitle.includes("сонячної електростанції") ||
    normalizedTitle.includes("гібридної станції") ||
    normalizedTitle.includes("комплект для сес")
  ) {
    return "solar-stations";
  }

  if (
    normalizedTitle.includes("bess") ||
    normalizedTitle.includes("система зберігання енергії")
  ) {
    return "energy-storage-systems";
  }

  if (
    fallbackCategory === "solar-batteries" &&
    (normalizedTitle.includes("стійка") ||
      normalizedTitle.includes("блок bms") ||
      normalizedTitle.startsWith("bms "))
  ) {
    return "solar-accessories";
  }

  return fallbackCategory;
}

// Partner descriptions are a single paragraph where every characteristic is written
// as "Назва: значення". A value therefore ends where the next capitalised label starts.
// A label is a capitalised word (optionally a short phrase) ending with a colon. Units such
// as "В", "DC" or "кВт·год" are excluded by requiring at least two lowercase letters, so a
// value keeps its unit instead of being cut in half.
const NEXT_LABEL_PATTERN =
  /(?<=[\s\d%+)\p{Ll}])\p{Lu}\p{Ll}{2,}[\p{L}’'-]*(?:\s+[\p{L}’'-]+){0,3}\s*:/u;
const EXPLANATION_SEPARATOR = /\s[—–]\s/;
const MAX_SPEC_VALUE_LENGTH = 60;

function cutAtNextLabel(value) {
  const boundary = value.match(NEXT_LABEL_PATTERN);
  const untilNextLabel = boundary?.index ? value.slice(0, boundary.index) : value;

  return untilNextLabel.split(EXPLANATION_SEPARATOR)[0].trim();
}

function findDescriptionValue(description, labels) {
  for (const label of labels) {
    const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = description.match(
      new RegExp(`${escapedLabel}\\s*[:–-]\\s*(.+)$`, "i"),
    );

    if (!match?.[1]) {
      continue;
    }

    const value = cutAtNextLabel(match[1]);

    // Anything longer is prose that leaked past the label boundary, not a spec value.
    if (value && !value.includes(":") && value.length <= MAX_SPEC_VALUE_LENGTH) {
      return value;
    }
  }

  return undefined;
}

function canonicalSpecs(product, options) {
  const specs = [];
  const addSpec = (label, value) => {
    const normalizedValue = value?.trim();

    if (
      normalizedValue &&
      !specs.some((spec) => spec.label === label && spec.value === normalizedValue)
    ) {
      specs.push({ label, value: normalizedValue });
    }
  };
  const description = decodeHtml(product.description ?? "");
  const category = product.category;
  const brand =
    product.brand?.name ??
    options.get("Бренд") ??
    product.title.match(/\b(Deye|Livoltek|Astronergy|Longi|BYD|Biom)\b/i)?.[1];
  const sourcePower = options.get("Потужність");
  const sourceVoltage = options.get("Напруга батареї");

  addSpec("Бренд", brand);
  addSpec("Модель", product.model);
  addSpec("Тип", options.get("Тип"));

  if (category === "inverters") {
    addSpec("Номінальна потужність", sourcePower);
    addSpec("Кількість фаз", options.get("Фази"));
    addSpec("Вихідна напруга АКБ", sourceVoltage);
  } else if (category === "solar-batteries") {
    addSpec("Технологія", /lifepo4|літій-залізо-фосфат/i.test(description) ? "LiFePO4" : undefined);
    addSpec("Енергія батареї", sourcePower);
    addSpec("Номінальна напруга", sourceVoltage);
  } else if (category === "solar-panels") {
    addSpec("Потужність", sourcePower ?? product.title.match(/\b(\d{3,4})\s*(?:Вт|W)\b/i)?.[0]);
    addSpec("Тип панелі", /bifacial|біфіціал|двосторон/i.test(product.title) ? "Двостороння (bifacial)" : "Монокристалічна");
  } else if (category === "backup-power") {
    addSpec("Потужність інвертора", sourcePower ?? product.title.match(/(\d+[,.]?\d*)\s*квт/i)?.[1]?.concat(" кВт"));
    addSpec("Запас енергії батарей", product.title.match(/акб\D{0,10}(\d+[,.]?\d*)\s*квт[·\s/-]*год/i)?.[1]?.concat(" кВт·год"));
    addSpec("Кількість фаз", options.get("Фази"));
  } else if (category === "energy-storage-systems") {
    addSpec("Номінальна потужність АС", sourcePower ?? product.title.match(/(\d+[,.]?\d*)\s*квт/i)?.[1]?.concat(" кВт"));
    addSpec("Сумарна енергія, що зберігається в блоку батарей", product.title.match(/(\d+[,.]?\d*)\s*квт[·\s/-]*год/i)?.[1]?.concat(" кВт·год"));
    addSpec("Кількість фаз", options.get("Фази"));
  } else if (category === "ev-charging") {
    addSpec("Потужність", sourcePower ?? product.title.match(/(\d+[,.]?\d*)\s*квт/i)?.[1]?.concat(" кВт"));
    addSpec("Кількість фаз", options.get("Фази"));
    addSpec("Тип роз’єму", product.title.match(/\bType\s*[12]\b/i)?.[0]);
  } else if (category === "solar-stations") {
    addSpec("Потужність станції", sourcePower ?? product.title.match(/(\d+[,.]?\d*)\s*квт/i)?.[1]?.concat(" кВт"));
    addSpec("Запас енергії батарей", product.title.match(/акб\D{0,10}(\d+[,.]?\d*)\s*квт[·\s/-]*год/i)?.[1]?.concat(" кВт·год"));
    addSpec("Кількість фаз", options.get("Фази"));
  } else if (category === "solar-accessories") {
    addSpec("Призначення", product.title.toLocaleLowerCase("uk-UA").includes("стійка") ? "Для встановлення акумуляторних батарей" : "Керування акумуляторною системою");
    addSpec("Сумісність", findDescriptionValue(description, ["Сумісність"]));
  }

  addSpec("Ємність батареї", findDescriptionValue(description, ["Ємність"]));
  addSpec("Енергія батареї", findDescriptionValue(description, ["Номінальна енергія", "Корисна енергія"]));
  addSpec("Цикл життя", findDescriptionValue(description, ["Кількість циклів", "Ресурс"]));
  addSpec("Номінальна напруга", findDescriptionValue(description, ["Номінальна напруга", "Напруга"]));
  addSpec("Зарядний струм (макс.)", findDescriptionValue(description, ["Максимальний струм заряду", "Струм заряду/розряду"]));
  addSpec("Ступінь захисту від вологи та пилу", description.match(/\bIP\d{2}\b/i)?.[0]?.toUpperCase());
  addSpec("Гарантія", findDescriptionValue(description, ["Гарантія"]));

  return specs;
}

function parseProduct(html, sourcePath, fallbackCategory) {
  const sourceUrl = new URL(sourcePath, SITE_URL).toString();
  const jsonLd = extractProductJsonLd(html, sourceUrl);
  const title = decodeHtml(jsonLd.name ?? "");
  const model = decodeHtml(jsonLd.sku ?? "");
  const category = classifyProduct(fallbackCategory, title);
  const options = extractSourceOptions(html);
  const imageObjects = Array.isArray(jsonLd.image) ? jsonLd.image : [jsonLd.image];
  const remoteImages = imageObjects
    .map((image) => (typeof image === "string" ? image : image?.contentUrl))
    .filter(Boolean)
    .map((url) => url.replace(/\/v1\/fit\/w_500,h_500,q_90\//, "/v1/fit/w_1400,h_1400,q_90/"));
  const offer = jsonLd.Offers ?? jsonLd.offers;
  const price = Number.parseFloat(offer?.price);

  if (!title || !model) {
    throw new Error(`Товар ${sourceUrl} не має назви або моделі.`);
  }

  return {
    category,
    description: decodeHtml(jsonLd.description ?? ""),
    model,
    price: Number.isFinite(price) ? price : undefined,
    remoteImages,
    slug: decodeURIComponent(new URL(sourceUrl).pathname.split("/").filter(Boolean).at(-1)),
    sourceUrl,
    specs: [],
    title,
    brand: jsonLd.brand,
    options,
  };
}

function decodeJsonString(value) {
  try {
    return JSON.parse(`"${value}"`);
  } catch {
    return value.replace(/\\\//g, "/");
  }
}

function parseListingProduct(listingHtml, sourcePath, fallbackCategory) {
  const slug = decodeURIComponent(
    new URL(sourcePath, SITE_URL).pathname.split("/").filter(Boolean).at(-1),
  );
  const marker = `"urlPart":"${slug}"`;
  const markerIndex = listingHtml.indexOf(marker);

  if (markerIndex < 0) {
    throw new Error(`Товар ${sourcePath} відсутній і в картках каталогу.`);
  }

  const productStarts = [
    ...listingHtml.slice(0, markerIndex).matchAll(/\{"id":"[^"]+","options":\[/g),
  ];
  const blockStart = productStarts.at(-1)?.index ?? 0;
  const nextProduct = listingHtml
    .slice(markerIndex)
    .match(/\},\{"id":"[^"]+","options":\[/);
  const nextBlock = nextProduct?.index
    ? markerIndex + nextProduct.index
    : -1;
  const block = listingHtml.slice(
    blockStart,
    nextBlock > markerIndex ? nextBlock : markerIndex + 12_000,
  );
  const readValue = (pattern) => {
    const match = block.match(pattern);
    return match?.[1] ? decodeHtml(decodeJsonString(match[1])) : undefined;
  };
  const title = readValue(/"name":"([^"]+)"/);
  const model = readValue(/"sku":"([^"]+)"/);
  const price = Number.parseFloat(block.match(/"price":([\d.]+)/)?.[1]);
  const remoteImages = [
    ...block.matchAll(/"fullUrl":"([^"]+)"/g),
  ].map((match) =>
    decodeJsonString(match[1]).replace(
      /\/v1\/fit\/w_500,h_500,q_90\//,
      "/v1/fit/w_1400,h_1400,q_90/",
    ),
  );

  if (!title || !model || remoteImages.length === 0) {
    throw new Error(`Картка каталогу ${sourcePath} не містить повних даних.`);
  }

  return {
    category: classifyProduct(fallbackCategory, title),
    description:
      `${title}. Детальні характеристики, комплектацію та сумісність ` +
      "потрібно уточнити перед замовленням.",
    model,
    price: Number.isFinite(price) ? price : undefined,
    remoteImages,
    slug,
    sourceUrl: new URL(sourcePath, SITE_URL).toString(),
    specs: [],
    title,
    brand: undefined,
    options: extractSourceOptions(block),
  };
}

async function loadExistingCatalogText() {
  return [
    await readFile(resolve("src/lib/data.ts"), "utf8"),
    await readFile(resolve("src/lib/solarverse-equipment-products.ts"), "utf8"),
  ].join("\n");
}

function findDuplicate(product, existingCatalogText) {
  const panelModel =
    product.category === "solar-panels"
      ? product.title.match(/\bLR[0-9A-ZА-ЯІЇЄҐ-]*-\d{3,4}M\b/i)?.[0] ??
        product.title.match(/\bCHSM[0-9A-Z()/-]+(?:\s*-\s*)?\d{3,4}\b/i)?.[0]
      : undefined;
  const normalizedModel = normalizeModel(panelModel ?? product.model);

  if (normalizedModel.length < 5) {
    return undefined;
  }

  return existingCatalogText
    .match(/"title":\s*"([^"]+)"|title:\s*"([^"]+)"/g)
    ?.map((line) => line.match(/"([^"]+)"\s*[,}]?$/)?.[1] ?? line.match(/title:\s*"([^"]+)"/)?.[1])
    .filter(Boolean)
    .find((title) => normalizeModel(title).includes(normalizedModel));
}

function imageExtension(remoteUrl) {
  const originalPath = new URL(remoteUrl).pathname.split("/v1/")[0];
  const extension = extname(originalPath).toLowerCase();

  return [".avif", ".jpeg", ".jpg", ".png", ".webp"].includes(extension)
    ? extension
    : ".webp";
}

async function importImages(products) {
  const publicDirectory = resolve("public");
  const downloads = products.flatMap((product) =>
    product.remoteImages.map((remoteUrl, imageIndex) => {
      const filePath = resolve(
        IMAGES_DIRECTORY,
        product.slug,
        `${imageIndex + 1}${imageExtension(remoteUrl)}`,
      );

      return {
        filePath,
        product,
        publicPath: `/${relative(publicDirectory, filePath)}`,
        remoteUrl,
      };
    }),
  );

  console.log(`Завантажую ${downloads.length} зображень нових товарів Namato...`);
  await mapWithConcurrency(downloads, 10, async (download, index) => {
    try {
      await access(download.filePath);
    } catch {
      const response = await fetchWithRetry(download.remoteUrl);
      const image = Buffer.from(await response.arrayBuffer());

      await mkdir(dirname(download.filePath), { recursive: true });
      await writeFile(download.filePath, image);
    }

    if ((index + 1) % 25 === 0 || index + 1 === downloads.length) {
      console.log(`Збережено ${index + 1} із ${downloads.length} зображень.`);
    }
  });

  for (const product of products) {
    product.images = downloads
      .filter((download) => download.product === product)
      .map((download) => download.publicPath);
  }
}

function serialize(products) {
  const data = JSON.stringify(
    products.map(({ category, description, images, model, price, slug, specs, title }) => ({
      category,
      slug,
      title,
      model,
      price,
      description,
      specs,
      images,
    })),
    null,
    2,
  );

  return `// Generated from the Namato partner catalog.
// Products whose model already existed in the local catalog were excluded.
import type { Product, ProductCategory } from "./types";
import { toLatinSlug } from "./slugs";

type NamatoProduct = {
  category: ProductCategory;
  slug: string;
  title: string;
  model: string;
  price?: number;
  description: string;
  specs: Array<{ label: string; value: string }>;
  images: string[];
};

const importedProducts: NamatoProduct[] = ${data};

function sanitizePartnerCopy(value: string) {
  return value
    .replace(
      /комплексне рішення від namato install/giu,
      "Комплексне рішення. ",
    )
    .replace(/фахівці namato install/giu, "Наші фахівці")
    .replace(/інженери namato install/giu, "Наші інженери")
    .replace(
      /чому варто обрати namato install/giu,
      "Переваги комплексного рішення",
    )
    .replace(/namato install/giu, "наша команда")
    .replace(/namato/giu, "")
    .replace(/\\s{2,}/g, " ")
    .trim();
}

function shorten(value: string, limit = 140) {
  const normalized = sanitizePartnerCopy(value).replace(/\\s+/g, " ").trim();

  return normalized.length > limit
    ? \`\${normalized.slice(0, limit - 1).trimEnd()}…\`
    : normalized;
}

function buildProductDescription(product: NamatoProduct, itemName: string) {
  const keySpecs = product.specs
    .filter((spec) => spec.label.trim() && spec.value.trim())
    .slice(0, 5)
    .map((spec) => \`• \${shorten(spec.label, 55)}: \${shorten(spec.value)}\`);

  return [
    \`\${shorten(product.title, 180)} — \${itemName} для комплектації енергосистеми відповідно до параметрів об’єкта.\`,
    keySpecs.length
      ? \`Основні характеристики:\\n\${keySpecs.join("\\n")}\`
      : undefined,
    "Перед замовленням уточнюємо актуальну ціну, наявність, комплектацію, гарантію та сумісність з іншими компонентами системи.",
  ]
    .filter(Boolean)
    .join("\\n\\n");
}

const categoryCopy: Record<
  NamatoProduct["category"],
  { itemName: string; fallbackImage: string; compatibility: string[] }
> = {
  "solar-batteries": {
    itemName: "акумуляторна батарея",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: ["систем резервного й автономного живлення", "сонячних електростанцій із накопиченням енергії", "сумісних інверторів після перевірки протоколу зв’язку та напруги"],
  },
  "backup-power": {
    itemName: "комплект резервного живлення",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: ["резервного живлення будинку, офісу або невеликого бізнесу", "критичних навантажень після розрахунку їхньої потужності", "подальшого масштабування після перевірки конфігурації"],
  },
  inverters: {
    itemName: "інвертор",
    fallbackImage: "/images/products/hybrid-solar-station.png",
    compatibility: ["сонячних електростанцій і систем резервного живлення", "приватних та комерційних об’єктів після розрахунку навантаження", "сумісних акумуляторних систем відповідної напруги"],
  },
  "solar-panels": {
    itemName: "сонячна панель",
    fallbackImage: "/images/products/grid-tied-solar-station.png",
    compatibility: ["дахових і наземних сонячних електростанцій", "мережевих, гібридних та автономних систем", "приватних і комерційних об’єктів після проєктного розрахунку"],
  },
  "solar-accessories": {
    itemName: "аксесуар",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: ["сумісних акумуляторних систем", "монтажу й керування енергетичним обладнанням", "дооснащення після перевірки конкретної моделі"],
  },
  "energy-storage-systems": {
    itemName: "система зберігання енергії",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: ["резервного та автономного живлення", "комерційних і промислових об’єктів після енергетичного розрахунку", "інтеграції з сонячною генерацією та мережею"],
  },
  "ev-charging": {
    itemName: "зарядна станція для електромобіля",
    fallbackImage: "/images/products/ev-charging-station.png",
    compatibility: ["приватного або комерційного заряджання електромобілів", "об’єктів із відповідною доступною потужністю мережі", "інтеграції з енергосистемою після перевірки типу роз’єму й фазності"],
  },
  "solar-stations": {
    itemName: "комплект сонячної електростанції",
    fallbackImage: "/images/products/hybrid-solar-station.png",
    compatibility: ["приватних і комерційних об’єктів після енергетичного розрахунку", "автономного, резервного або гібридного живлення", "монтажу після перевірки комплектації та умов об’єкта"],
  },
} as Record<NamatoProduct["category"], { itemName: string; fallbackImage: string; compatibility: string[] }>;

export const namatoProducts: Product[] = importedProducts
  .filter((product) => product.category !== "solar-stations")
  .map((product, index) => {
    const copy = categoryCopy[product.category];
    const publicSlug = toLatinSlug(product.slug);
    const brand = product.specs.find(
      (spec) => spec.label === "Бренд",
    )?.value;

    return {
      id: \`namato-product-\${index + 1}\`,
      slug: publicSlug,
      legacySlugs: publicSlug === product.slug ? undefined : [product.slug],
      title: product.title,
      sourceUrl: \`https://www.namato.net/product-page/\${product.slug}\`,
      direction: "energy-solutions",
      category: product.category,
      price: product.price
        ? \`\${product.price.toLocaleString("uk-UA")} грн · Ціну уточнюйте\`
        : "Ціну уточнюйте",
      showPrice: true,
      status: "consult",
      shortDescription: brand
        ? \`\${copy.itemName} \${brand}, модель \${product.model}.\`
        : \`\${copy.itemName}, модель \${product.model}.\`,
      description: buildProductDescription(product, copy.itemName),
      specs: product.specs,
      compatibilityTitle: "Підходить для",
      compatibility: copy.compatibility,
      notice:
        "Ціна наведена довідково. Актуальну ціну, наявність, комплектацію, гарантію та сумісність потрібно уточнити перед замовленням.",
      image: product.images[0] ?? copy.fallbackImage,
      images: product.images,
      featured: false,
    };
  });
`;
}

const productsByPath = new Map();
const allProductsHtml = await fetchTextWithCache(
  `${SITE_URL}/category/all-products`,
);
const expectedTotal = extractCatalogTotal(allProductsHtml);
let listingHtml = allProductsHtml;

for (const sourcePath of extractProductPaths(allProductsHtml)) {
  productsByPath.set(sourcePath, undefined);
}

for (const sourceCategory of sourceCategories) {
  const html = await fetchTextWithCache(
    new URL(sourceCategory.sourcePath, SITE_URL),
  );
  listingHtml += html;

  for (const sourcePath of extractProductPaths(html)) {
    productsByPath.set(sourcePath, sourceCategory.fallbackCategory);
  }
}

for (const product of additionalProductPaths) {
  productsByPath.set(product.sourcePath, product.fallbackCategory);
}

if (productsByPath.size !== expectedTotal) {
  console.warn(
    `Wix повідомляє про ${expectedTotal} товарів, але публічно віддає ${productsByPath.size} у картках категорій.`,
  );
}

console.log(`Знайдено ${productsByPath.size} товарів Namato. Читаю сторінки...`);
const fetchedProducts = await mapWithConcurrency(
  [...productsByPath.entries()],
  1,
  async ([sourcePath, fallbackCategory], index) => {
    let product;
    const additionalProduct = additionalProductPaths.find(
      (candidate) => candidate.sourcePath === sourcePath,
    );

    if (additionalProduct?.knownDuplicate) {
      product = {
        category: fallbackCategory,
        description: "",
        model: additionalProduct.knownDuplicate.model,
        price: undefined,
        remoteImages: [],
        slug: sourcePath.split("/").at(-1),
        sourceUrl: new URL(sourcePath, SITE_URL).toString(),
        specs: [],
        title: additionalProduct.knownDuplicate.title,
        brand: { name: "Deye" },
        options: new Map(),
      };
    } else try {
      const html = await fetchTextWithCache(
        new URL(sourcePath, SITE_URL),
        additionalProduct ? 6 : 2,
      );
      product = parseProduct(html, sourcePath, fallbackCategory);
    } catch {
      console.warn(`Сторінка ${sourcePath} недоступна, читаю картку каталогу.`);
      product = parseListingProduct(listingHtml, sourcePath, fallbackCategory);
    }

    product.specs = canonicalSpecs(product, product.options);

    if ((index + 1) % 10 === 0 || index + 1 === productsByPath.size) {
      console.log(`Прочитано ${index + 1} із ${productsByPath.size} сторінок.`);
    }

    return product;
  },
);

const existingCatalogText = await loadExistingCatalogText();
const skipped = [];
const products = [];

for (const product of fetchedProducts) {
  const existingTitle = findDuplicate(product, existingCatalogText);

  if (existingTitle) {
    skipped.push({ model: product.model, title: product.title, existingTitle });
  } else {
    products.push(product);
  }
}

console.log(`Пропущено наявних моделей: ${skipped.length}.`);
for (const duplicate of skipped) {
  console.log(`  ${duplicate.model}: ${duplicate.title} → ${duplicate.existingTitle}`);
}

await importImages(products);
await writeFile(OUTPUT_PATH, serialize(products));

for (const category of [...new Set(products.map((product) => product.category))]) {
  console.log(`${category}: ${products.filter((product) => product.category === category).length} нових товарів.`);
}

console.log(`Імпортовано ${products.length} нових товарів у ${OUTPUT_PATH}.`);
