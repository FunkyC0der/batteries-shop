import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

const SOURCE_URL =
  "https://solarverse.ua/catalog/sistemy-khraneniya-energii";

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

function parsePage(html) {
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
      const specs = [...block.matchAll(
        /class="goods-card__desc-key">([\s\S]*?)<\/span>[\s\S]*?class="goods-card__desc-value">([\s\S]*?)<\/span>/g,
      )].map((match) => ({
        label: decodeHtml(match[1]).replace(/:$/, ""),
        value: decodeHtml(match[2]),
      }));

      if (specs.length === 0) {
        throw new Error(`Товар «${title}» не має характеристик.`);
      }

      return {
        slug: new URL(sourceUrl).pathname.split("/").filter(Boolean).at(-1),
        sourceUrl,
        listingImage,
        title,
        price,
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

async function importProductImages(products, imagesDirectory) {
  const publicDirectory = resolve("public");
  const targetDirectory = resolve(imagesDirectory);

  if (relative(publicDirectory, targetDirectory).startsWith("..")) {
    throw new Error("Каталог зображень має знаходитися всередині public.");
  }

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
        targetDirectory,
        product.slug,
        `${imageIndex + 1}.webp`,
      );
      const publicPath = `/${relative(publicDirectory, filePath)}`;

      return {
        filePath,
        product,
        publicPath,
        remoteUrl: new URL(remoteImage, SOURCE_URL).toString(),
      };
    }),
  );

  console.log(`Завантажую ${downloads.length} зображень...`);
  await mapWithConcurrency(downloads, 12, async (download, index) => {
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
    products.map((product) => ({
      slug: product.slug,
      title: product.title,
      price: product.price,
      specs: product.specs,
      images: product.images,
    })),
    null,
    2,
  );

  return `// Generated from ${SOURCE_URL}.
// Prices are reference values and must be confirmed before sale.
import type { Product } from "./types";

type ImportedEnergyStorageProduct = {
  slug: string;
  title: string;
  price?: number;
  images?: string[];
  specs: Array<{ label: string; value: string }>;
};

const importedProducts: ImportedEnergyStorageProduct[] = ${data};

function getSpec(
  product: ImportedEnergyStorageProduct,
  label: string,
  fallback: string,
) {
  return product.specs.find((spec) => spec.label === label)?.value ?? fallback;
}

export const solarverseEnergyStorageProducts: Product[] = importedProducts.map(
  (product, index) => {
    const brand = getSpec(product, "Бренд", "Система зберігання енергії");
    const power = getSpec(product, "Номінальна потужність АС", "підбір за запитом");
    const energy = getSpec(
      product,
      "Сумарна енергія, що зберігається в блоку батарей",
      "підбір за запитом",
    );
    const batteryType = getSpec(product, "Тип батареї", "акумуляторна система");

    return {
      id: \`energy-storage-system-\${index + 1}\`,
      slug: product.slug,
      title: product.title,
      direction: "energy-solutions",
      category: "energy-storage-systems",
      price: product.price
        ? \`\${product.price.toLocaleString("uk-UA")} грн · Ціну уточнюйте\`
        : "Ціну уточнюйте",
      showPrice: true,
      status: "consult",
      shortDescription: \`Готова система \${brand}: потужність \${power}, запас енергії \${energy}, батарея \${batteryType}.\`,
      description:
        \`Готова система зберігання енергії \${brand} для резервного та автономного живлення. \` +
        \`Конфігурація розрахована на номінальну потужність \${power} і запас енергії \${energy}. \` +
        "Перед замовленням уточнюємо актуальну ціну, наявність, комплектацію та сумісність із мережею об’єкта.",
      specs: product.specs,
      compatibilityTitle: "Підходить для",
      compatibility: [
        "резервного живлення приватних будинків і квартир",
        "офісів, магазинів та інших комерційних об’єктів",
        "інтеграції із сонячною генерацією після технічного розрахунку",
      ],
      notice:
        "Ціна наведена довідково за даними джерела. Актуальну ціну, наявність і склад комплекту потрібно уточнити перед замовленням.",
      image: product.images?.[0] ?? "/images/products/energy-storage-system.png",
      images: product.images,
      featured: false,
    };
  },
);
`;
}

const args = process.argv.slice(2);
const outputFlagIndex = args.indexOf("--output");

if (outputFlagIndex === -1 || !args[outputFlagIndex + 1]) {
  throw new Error(
    "Вкажіть HTML-файли каталогу та шлях призначення через --output.",
  );
}

const outputPath = args[outputFlagIndex + 1];
const sourceFiles = args.slice(0, outputFlagIndex);
const imagesDirectoryIndex = args.indexOf("--images-dir");
const imagesDirectory =
  imagesDirectoryIndex === -1 ? undefined : args[imagesDirectoryIndex + 1];

if (sourceFiles.length === 0) {
  throw new Error("Потрібен щонайменше один HTML-файл каталогу.");
}

const pages = await Promise.all(
  sourceFiles.map(async (sourceFile) => readFile(sourceFile, "utf8")),
);
const products = pages.flatMap(parsePage);
const uniqueSlugs = new Set(products.map((product) => product.slug));

if (uniqueSlugs.size !== products.length) {
  throw new Error("У каталозі знайдено дублікати товарів.");
}

if (imagesDirectoryIndex !== -1 && !imagesDirectory) {
  throw new Error("Після --images-dir потрібно вказати каталог зображень.");
}

if (imagesDirectory) {
  await importProductImages(products, imagesDirectory);
}

await writeFile(outputPath, serialize(products));
console.log(`Імпортовано ${products.length} товарів у ${outputPath}.`);
