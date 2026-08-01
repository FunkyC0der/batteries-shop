import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

const SITE_URL = "https://solarverse.ua";
const OUTPUT_PATH = resolve("src/lib/solarverse-equipment-products.ts");
const IMAGES_DIRECTORY = resolve("public/images/products/solarverse/equipment");

const catalogs = [
  {
    key: "inverters",
    sourceUrl: `${SITE_URL}/catalog/invertory`,
  },
  {
    key: "solar-batteries",
    sourceUrl: `${SITE_URL}/catalog/batarei`,
  },
  {
    key: "solar-panels",
    sourceUrl: `${SITE_URL}/catalog/solnechnye-paneli`,
  },
  {
    key: "solar-accessories",
    sourceUrl: `${SITE_URL}/catalog/aksessuary`,
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

function parseCatalog(html, catalog) {
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
        catalog: catalog.key,
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
    parseCatalog(firstHtml, catalog).map((product) => [product.slug, product]),
  );

  for (let page = 2; productsBySlug.size < expectedTotal; page += 1) {
    if (page > 20) {
      throw new Error(`Забагато сторінок у каталозі ${catalog.key}.`);
    }

    const response = await fetchWithRetry(`${catalog.sourceUrl}/page=${page}`);
    const html = await response.text();
    const pageProducts = parseCatalog(html, catalog);

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
        IMAGES_DIRECTORY,
        product.catalog,
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
      return;
    } catch {
      // The file is not downloaded yet.
    }

    const response = await fetchWithRetry(download.remoteUrl);
    const image = Buffer.from(await response.arrayBuffer());

    await mkdir(dirname(download.filePath), { recursive: true });
    await writeFile(download.filePath, image);

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

function serialize(products) {
  const data = JSON.stringify(
    products.map(({ catalog, slug, title, price, specs, images }) => ({
      catalog,
      slug,
      title,
      price,
      specs,
      images,
    })),
    null,
    2,
  );

  return `// Generated from Solarverse equipment catalogs.
// Prices are reference values and must be confirmed before sale.
import type { Product, ProductCategory } from "./types";

type ImportedCatalogKey =
  | "inverters"
  | "solar-batteries"
  | "solar-panels"
  | "solar-accessories";

type ImportedEquipmentProduct = {
  catalog: ImportedCatalogKey;
  slug: string;
  title: string;
  price?: number;
  images?: string[];
  specs: Array<{ label: string; value: string }>;
};

const importedProducts: ImportedEquipmentProduct[] = ${data};

const catalogDefinitions: Record<
  ImportedCatalogKey,
  {
    category: ProductCategory;
    itemName: string;
    fallbackImage: string;
    compatibility: string[];
  }
> = {
  inverters: {
    category: "inverters",
    itemName: "інвертор",
    fallbackImage: "/images/products/hybrid-solar-station.png",
    compatibility: [
      "сонячних електростанцій і систем резервного живлення",
      "приватних та комерційних об’єктів після розрахунку навантаження",
      "сумісних акумуляторних систем відповідної напруги",
    ],
  },
  "solar-batteries": {
    category: "solar-batteries",
    itemName: "акумуляторна батарея",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: [
      "систем резервного й автономного живлення",
      "сонячних електростанцій із накопиченням енергії",
      "сумісних інверторів після перевірки протоколу зв’язку та напруги",
    ],
  },
  "solar-panels": {
    category: "solar-panels",
    itemName: "сонячна панель",
    fallbackImage: "/images/products/grid-tied-solar-station.png",
    compatibility: [
      "дахових і наземних сонячних електростанцій",
      "мережевих, гібридних та автономних систем",
      "приватних і комерційних об’єктів після проєктного розрахунку",
    ],
  },
  "solar-accessories": {
    category: "solar-accessories",
    itemName: "аксесуар",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: [
      "монтажу та підключення енергетичного обладнання",
      "сумісних інверторів, батарей і систем моніторингу",
      "сервісного дооснащення після перевірки моделі обладнання",
    ],
  },
};

function getSpec(
  product: ImportedEquipmentProduct,
  labels: string[],
  fallback: string,
) {
  return (
    product.specs.find((spec) => labels.includes(spec.label))?.value ?? fallback
  );
}

export const solarverseEquipmentProducts: Product[] = importedProducts.map(
  (product, index) => {
    const definition = catalogDefinitions[product.catalog];
    const brand = getSpec(
      product,
      ["Бренд", "Виробник (бренд)"],
      "Solarverse",
    );
    const mainParameter = getSpec(
      product,
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
      id: \`solarverse-equipment-\${index + 1}\`,
      slug: product.slug,
      title: product.title,
      direction: "energy-solutions",
      category: definition.category,
      price: product.price
        ? \`\${product.price.toLocaleString("uk-UA")} грн · Ціну уточнюйте\`
        : "Ціну уточнюйте",
      showPrice: true,
      status: "consult",
      shortDescription: \`\${definition.itemName} \${brand}: \${mainParameter}.\`,
      description:
        \`\${product.title}. Характеристики наведені за даними джерела. \` +
        "Перед замовленням уточнюємо актуальну ціну, наявність, комплектацію, гарантію та сумісність з іншими компонентами системи.",
      specs: product.specs,
      compatibilityTitle: "Підходить для",
      compatibility: definition.compatibility,
      notice:
        "Ціна наведена довідково за даними джерела. Актуальну ціну, наявність і сумісність потрібно уточнити перед замовленням.",
      image: product.images?.[0] ?? definition.fallbackImage,
      images: product.images,
      featured: false,
    };
  },
);
`;
}

const catalogProducts = await Promise.all(catalogs.map(fetchCatalogProducts));
const products = catalogProducts.flat();
const uniqueSlugs = new Set(products.map((product) => product.slug));

if (uniqueSlugs.size !== products.length) {
  throw new Error("У каталогах знайдено дублікати товарів.");
}

for (const catalog of catalogs) {
  const count = products.filter((product) => product.catalog === catalog.key).length;
  console.log(`${catalog.key}: ${count} товарів.`);
}

await importImages(products);
await writeFile(OUTPUT_PATH, serialize(products));
console.log(`Імпортовано ${products.length} товарів у ${OUTPUT_PATH}.`);
