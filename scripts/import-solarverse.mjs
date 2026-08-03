import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

import {
  deleteStaleProducts,
  formatPriceLabel,
  listProductFiles,
  resolveUpsert,
  writeProductFile,
} from "./lib/catalog-files.mjs";

const SITE_URL = "https://solarverse.ua";
const SOURCE = "solarverse";
const IMAGES_ROOT = resolve("public/images/products/solarverse");

/** @type {const} */
const energyStorageCatalog = {
  key: "energy-storage-systems",
  category: "energy-storage-systems",
  sourceUrl: `${SITE_URL}/catalog/sistemy-khraneniya-energii`,
  imagesDir: IMAGES_ROOT,
  fallbackImage: "/images/products/energy-storage-system.png",
  compatibility: [
    "резервного живлення приватних будинків і квартир",
    "офісів, магазинів та інших комерційних об’єктів",
    "інтеграції із сонячною генерацією після технічного розрахунку",
  ],
  buildCopy(product) {
    const brand = getSpec(product, ["Бренд"], "Система зберігання енергії");
    const power = getSpec(
      product,
      ["Номінальна потужність АС"],
      "підбір за запитом",
    );
    const energy = getSpec(
      product,
      ["Сумарна енергія, що зберігається в блоку батарей"],
      "підбір за запитом",
    );
    const batteryType = getSpec(product, ["Тип батареї"], "акумуляторна система");

    return {
      shortDescription: `Готова система ${brand}: потужність ${power}, запас енергії ${energy}, батарея ${batteryType}.`,
      description:
        `Готова система зберігання енергії ${brand} для резервного та автономного живлення. ` +
        `Конфігурація розрахована на номінальну потужність ${power} і запас енергії ${energy}. ` +
        "Перед замовленням уточнюємо актуальну ціну, наявність, комплектацію та сумісність із мережею об’єкта.",
      notice:
        "Ціна наведена довідково за даними джерела. Актуальну ціну, наявність і склад комплекту потрібно уточнити перед замовленням.",
    };
  },
};

/** @type {const} */
const equipmentCatalogs = [
  {
    key: "inverters",
    category: "inverters",
    sourceUrl: `${SITE_URL}/catalog/invertory`,
    imagesDir: resolve(IMAGES_ROOT, "equipment", "inverters"),
    itemName: "інвертор",
    fallbackImage: "/images/products/hybrid-solar-station.png",
    compatibility: [
      "сонячних електростанцій і систем резервного живлення",
      "приватних та комерційних об’єктів після розрахунку навантаження",
      "сумісних акумуляторних систем відповідної напруги",
    ],
  },
  {
    key: "solar-batteries",
    category: "solar-batteries",
    sourceUrl: `${SITE_URL}/catalog/batarei`,
    imagesDir: resolve(IMAGES_ROOT, "equipment", "solar-batteries"),
    itemName: "акумуляторна батарея",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: [
      "систем резервного й автономного живлення",
      "сонячних електростанцій із накопиченням енергії",
      "сумісних інверторів після перевірки протоколу зв’язку та напруги",
    ],
  },
  {
    key: "solar-panels",
    category: "solar-panels",
    sourceUrl: `${SITE_URL}/catalog/solnechnye-paneli`,
    imagesDir: resolve(IMAGES_ROOT, "equipment", "solar-panels"),
    itemName: "сонячна панель",
    fallbackImage: "/images/products/grid-tied-solar-station.png",
    compatibility: [
      "дахових і наземних сонячних електростанцій",
      "мережевих, гібридних та автономних систем",
      "приватних і комерційних об’єктів після проєктного розрахунку",
    ],
  },
  {
    key: "solar-accessories",
    category: "solar-accessories",
    sourceUrl: `${SITE_URL}/catalog/aksessuary`,
    imagesDir: resolve(IMAGES_ROOT, "equipment", "solar-accessories"),
    itemName: "аксесуар",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: [
      "монтажу та підключення енергетичного обладнання",
      "сумісних інверторів, батарей і систем моніторингу",
      "сервісного дооснащення після перевірки моделі обладнання",
    ],
  },
];

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
    .replace(/<[^>]+>/g, " ")
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

function matchRequired(block, pattern, field) {
  const match = block.match(pattern);

  if (!match) {
    throw new Error(`Не вдалося прочитати поле «${field}» у картці товару.`);
  }

  return decodeHtml(match[1]);
}

function parseCatalog(html, catalogKey) {
  return html
    .split(/<div class="goods-card"[^>]*>/)
    .slice(1)
    .map((block) => {
      const sourceUrl = matchRequired(
        block,
        /class="goods-card__img"[\s\S]*?href="([^"]+)"/,
        "посилання",
      );
      const listingImage = matchRequired(
        block,
        /class="goods-card__image"[\s\S]*?src="([^"]+)"/,
        "зображення",
      ).replace("/350_gallery_", "/600_gallery_");
      const title = matchRequired(
        block,
        /class="goods-card__title"[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/,
        "назва",
      );
      const priceMatch = block.match(
        /class="price-regular"[^>]*>([\s\S]*?)<\/span>/,
      );
      const price = priceMatch
        ? Number.parseInt(decodeHtml(priceMatch[1]).replace(/\s/g, ""), 10)
        : undefined;
      const specs = [
        ...block.matchAll(
          /class="goods-card__desc-key">([\s\S]*?)<\/span>[\s\S]*?class="goods-card__desc-value">([\s\S]*?)<\/span>/g,
        ),
      ].map((match) => ({
        label: decodeHtml(match[1]).replace(/:$/, ""),
        value: decodeHtml(match[2]),
      }));

      if (specs.length === 0) {
        throw new Error(`Товар «${title}» не має характеристик.`);
      }

      return {
        catalog: catalogKey,
        slug: new URL(sourceUrl).pathname.split("/").filter(Boolean).at(-1),
        sourceUrl: new URL(sourceUrl, SITE_URL).toString(),
        listingImage,
        title,
        price: Number.isFinite(price) ? price : undefined,
        specs,
      };
    });
}

async function fetchWithRetry(url, attempts = 3) {
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
        await new Promise((resolveDelay) => setTimeout(resolveDelay, 750));
      }
    }
  }

  throw new Error(`Не вдалося завантажити ${url}: ${lastError}`);
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

function extractCatalogTotal(html) {
  const total = html.match(/Підібрано\s+(\d+)\s+із/)?.[1];

  if (!total) {
    throw new Error("Не вдалося визначити загальну кількість товарів.");
  }

  return Number.parseInt(total, 10);
}

async function fetchCatalogProducts(catalog) {
  const firstResponse = await fetchWithRetry(catalog.sourceUrl);
  const firstHtml = await firstResponse.text();
  const expectedTotal = extractCatalogTotal(firstHtml);
  const productsBySlug = new Map(
    parseCatalog(firstHtml, catalog.key).map((product) => [product.slug, product]),
  );

  for (let page = 2; productsBySlug.size < expectedTotal; page += 1) {
    if (page > 20) {
      throw new Error(`Забагато сторінок у каталозі ${catalog.key}.`);
    }

    const response = await fetchWithRetry(`${catalog.sourceUrl}/page=${page}`);
    const html = await response.text();
    const pageProducts = parseCatalog(html, catalog.key);

    if (pageProducts.length === 0) {
      throw new Error(
        `Сторінка ${page} каталогу ${catalog.key} не містить товарів.`,
      );
    }

    for (const product of pageProducts) {
      productsBySlug.set(product.slug, product);
    }
  }

  if (productsBySlug.size !== expectedTotal) {
    throw new Error(
      `Каталог ${catalog.key}: очікувалося ${expectedTotal}, прочитано ${productsBySlug.size}.`,
    );
  }

  return [...productsBySlug.values()];
}

function extractGalleryPaths(html, fallbackPath) {
  const primaryProductId = html.match(
    /\/storage\/images\/products\/(\d+)\/gallery\/[^"']+\/600_gallery_[^"']+\.webp/,
  )?.[1];

  if (!primaryProductId) {
    return [fallbackPath];
  }

  const paths = [
    ...html.matchAll(
      /["'](\/storage\/images\/products\/(\d+)\/gallery\/[^"']+\/600_gallery_[^"']+\.webp)["']/g,
    ),
  ]
    .filter((match) => match[2] === primaryProductId)
    .map((match) => match[1]);

  return [...new Set(paths.length ? paths : [fallbackPath])];
}

/**
 * @param {Array<{
 *   slug: string;
 *   sourceUrl: string;
 *   listingImage: string;
 *   catalog: string;
 *   imagesDir: string;
 * }>} products
 */
async function importImages(products) {
  const publicDirectory = resolve("public");

  console.log(`Завантажую галереї для ${products.length} товарів...`);
  const galleries = await mapWithConcurrency(products, 6, async (product, index) => {
    const response = await fetchWithRetry(product.sourceUrl);
    const html = await response.text();
    const remoteImages = extractGalleryPaths(html, product.listingImage);

    if ((index + 1) % 10 === 0 || index + 1 === products.length) {
      console.log(`Прочитано ${index + 1} із ${products.length} сторінок.`);
    }

    return { product, remoteImages };
  });

  const downloads = galleries.flatMap(({ product, remoteImages }) =>
    remoteImages.map((remoteImage, imageIndex) => {
      const filePath = resolve(
        product.imagesDir,
        product.slug,
        `${imageIndex + 1}.webp`,
      );

      return {
        filePath,
        product,
        publicPath: `/${relative(publicDirectory, filePath)}`,
        remoteUrl: new URL(remoteImage, SITE_URL).toString(),
      };
    }),
  );

  console.log(`Завантажую ${downloads.length} зображень...`);
  await mapWithConcurrency(downloads, 12, async (download, index) => {
    try {
      await access(download.filePath);
    } catch {
      const response = await fetchWithRetry(download.remoteUrl);
      const image = Buffer.from(await response.arrayBuffer());

      await mkdir(dirname(download.filePath), { recursive: true });
      await writeFile(download.filePath, image);
      const { optimizeDownloadedImage } = await import("./lib/optimize-image.mjs");
      download.publicPath = await optimizeDownloadedImage(
        download.filePath,
        download.publicPath,
      );
      if (!download.filePath.endsWith(".webp") && download.publicPath.endsWith(".webp")) {
        download.filePath = download.filePath.replace(
          /\.(png|jpe?g|gif|avif)$/i,
          ".webp",
        );
      }
    }

    if ((index + 1) % 50 === 0 || index + 1 === downloads.length) {
      console.log(`Збережено ${index + 1} із ${downloads.length} зображень.`);
    }
  });

  for (const { product } of galleries) {
    product.images = downloads
      .filter((download) => download.product === product)
      .map((download) => download.publicPath);
  }
}

function getSpec(product, labels, fallback) {
  return (
    product.specs.find((spec) => labels.includes(spec.label))?.value ?? fallback
  );
}

function buildEnergyStorageProduct(raw) {
  const copy = energyStorageCatalog.buildCopy(raw);

  return {
    category: energyStorageCatalog.category,
    product: {
      slug: raw.slug,
      source: SOURCE,
      title: raw.title,
      sourceUrl: `${SITE_URL}/product/${raw.slug}`,
      direction: "energy-solutions",
      price: formatPriceLabel(raw.price),
      showPrice: true,
      status: "consult",
      shortDescription: copy.shortDescription,
      description: copy.description,
      specs: raw.specs,
      compatibilityTitle: "Підходить для",
      compatibility: [...energyStorageCatalog.compatibility],
      notice: copy.notice,
      image: raw.images?.[0] ?? energyStorageCatalog.fallbackImage,
      images: raw.images,
      featured: false,
    },
  };
}

function buildEquipmentProduct(raw, definition) {
  const brand = getSpec(raw, ["Бренд", "Виробник (бренд)"], "Solarverse");
  const mainParameter = getSpec(
    raw,
    [
      "Номінальна потужність",
      "Потужність",
      "Енергія батареї",
      "Призначення",
      "Сумісність",
    ],
    "характеристики за запитом",
  );

  return {
    category: definition.category,
    product: {
      slug: raw.slug,
      source: SOURCE,
      title: raw.title,
      sourceUrl: `${SITE_URL}/product/${raw.slug}`,
      direction: "energy-solutions",
      price: formatPriceLabel(raw.price),
      showPrice: true,
      status: "consult",
      shortDescription: `${definition.itemName} ${brand}: ${mainParameter}.`,
      description:
        `${raw.title}. Характеристики наведені за даними джерела. ` +
        "Перед замовленням уточнюємо актуальну ціну, наявність, комплектацію, гарантію та сумісність з іншими компонентами системи.",
      specs: raw.specs,
      compatibilityTitle: "Підходить для",
      compatibility: [...definition.compatibility],
      notice:
        "Ціна наведена довідково за даними джерела. Актуальну ціну, наявність і сумісність потрібно уточнити перед замовленням.",
      image: raw.images?.[0] ?? definition.fallbackImage,
      images: raw.images,
      featured: false,
    },
  };
}

async function loadEnergyStorageFromHtmlFiles(sourceFiles) {
  const pages = await Promise.all(
    sourceFiles.map(async (sourceFile) => readFile(sourceFile, "utf8")),
  );
  return pages.flatMap((html) => parseCatalog(html, energyStorageCatalog.key));
}

function parseArgs(argv) {
  const htmlFlagIndex = argv.indexOf("--energy-storage-html");
  /** @type {string[]} */
  let energyStorageHtmlFiles = [];
  /** @type {string[]} */
  let rest = argv;

  if (htmlFlagIndex !== -1) {
    energyStorageHtmlFiles = argv.slice(htmlFlagIndex + 1);
    rest = argv.slice(0, htmlFlagIndex);

    if (energyStorageHtmlFiles.length === 0) {
      throw new Error(
        "Після --energy-storage-html потрібно вказати щонайменше один HTML-файл.",
      );
    }
  }

  if (rest.length > 0) {
    throw new Error(
      `Невідомі аргументи: ${rest.join(" ")}. ` +
        "Опційно: --energy-storage-html <file.html> [...]",
    );
  }

  return { energyStorageHtmlFiles };
}

const { energyStorageHtmlFiles } = parseArgs(process.argv.slice(2));

/** @type {Array<{
 *   slug: string;
 *   title: string;
 *   price?: number;
 *   specs: Array<{ label: string; value: string }>;
 *   sourceUrl: string;
 *   listingImage: string;
 *   catalog: string;
 *   imagesDir: string;
 *   images?: string[];
 *   kind: "energy-storage" | "equipment";
 *   equipmentKey?: string;
 * }>} */
const rawProducts = [];

if (energyStorageHtmlFiles.length > 0) {
  const products = await loadEnergyStorageFromHtmlFiles(energyStorageHtmlFiles);
  for (const product of products) {
    rawProducts.push({
      ...product,
      imagesDir: energyStorageCatalog.imagesDir,
      kind: "energy-storage",
    });
  }
  console.log(
    `energy-storage-systems: ${products.length} товарів (з HTML-файлів).`,
  );
} else {
  const products = await fetchCatalogProducts(energyStorageCatalog);
  for (const product of products) {
    rawProducts.push({
      ...product,
      imagesDir: energyStorageCatalog.imagesDir,
      kind: "energy-storage",
    });
  }
  console.log(`energy-storage-systems: ${products.length} товарів.`);
}

for (const catalog of equipmentCatalogs) {
  const products = await fetchCatalogProducts(catalog);
  for (const product of products) {
    rawProducts.push({
      ...product,
      imagesDir: catalog.imagesDir,
      kind: "equipment",
      equipmentKey: catalog.key,
    });
  }
  console.log(`${catalog.key}: ${products.length} товарів.`);
}

const uniqueSlugs = new Set(rawProducts.map((product) => product.slug));
if (uniqueSlugs.size !== rawProducts.length) {
  throw new Error("У каталогах знайдено дублікати товарів.");
}

await importImages(rawProducts);

const equipmentByKey = Object.fromEntries(
  equipmentCatalogs.map((catalog) => [catalog.key, catalog]),
);

const built = rawProducts.map((raw) => {
  if (raw.kind === "energy-storage") {
    return buildEnergyStorageProduct(raw);
  }

  const definition = equipmentByKey[raw.equipmentKey];
  if (!definition) {
    throw new Error(`Невідомий каталог обладнання: ${raw.equipmentKey}`);
  }

  return buildEquipmentProduct(raw, definition);
});

const existingFiles = await listProductFiles();
let written = 0;
let skippedLocked = 0;
let skippedSource = 0;
/** @type {string[]} */
const importedSlugs = [];

for (const { category, product } of built) {
  const decision = await resolveUpsert(product.slug, SOURCE, existingFiles);

  if (decision.action === "skip") {
    if (decision.reason === "locked") {
      skippedLocked += 1;
      // Locked products stay; treat as still present so they are not deleted.
      importedSlugs.push(product.slug);
      console.log(`Пропущено (locked): ${product.slug}`);
    } else {
      skippedSource += 1;
      console.log(
        `Пропущено (source=${decision.existing.data.source}): ${product.slug}`,
      );
    }
    continue;
  }

  await writeProductFile(category, product, {
    existing: decision.action === "update" ? decision.existing : undefined,
  });
  importedSlugs.push(product.slug);
  written += 1;
}

// Locked solarverse products that were not in this import must also be kept.
for (const entry of existingFiles) {
  if (
    entry.data.source === SOURCE &&
    entry.data.locked === true &&
    !importedSlugs.includes(entry.slug)
  ) {
    importedSlugs.push(entry.slug);
  }
}

const deleted = await deleteStaleProducts(SOURCE, importedSlugs);

console.log(
  `Solarverse: записано ${written}, пропущено locked ${skippedLocked}, ` +
    `пропущено інше джерело ${skippedSource}, видалено застарілих ${deleted.length}.`,
);
