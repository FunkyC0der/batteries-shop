import { readFile, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";

import {
  listImageFiles,
  optimizeImageFile,
} from "./lib/optimize-image.mjs";
import { listProductFiles, writeProductFile } from "./lib/catalog-files.mjs";

const ROOT = resolve(import.meta.dirname, "..");
const IMAGES_DIR = resolve(ROOT, "public/images");
const SERVICES_DIR = resolve(ROOT, "data/services");

function toPublicPath(absolutePath) {
  return `/${relative(resolve(ROOT, "public"), absolutePath).split("\\").join("/")}`;
}

function rewritePath(path) {
  if (typeof path !== "string") {
    return path;
  }
  return path.replace(/\.(png|jpe?g|gif|avif)$/i, ".webp");
}

async function rewriteServiceFiles(pathMap) {
  const { readdir } = await import("node:fs/promises");
  const { join } = await import("node:path");

  let categories;
  try {
    categories = await readdir(SERVICES_DIR, { withFileTypes: true });
  } catch {
    return 0;
  }

  let updated = 0;
  for (const category of categories) {
    if (!category.isDirectory()) continue;
    const dir = join(SERVICES_DIR, category.name);
    const files = await readdir(dir);
    for (const file of files.filter((name) => name.endsWith(".json"))) {
      const fullPath = join(dir, file);
      const raw = JSON.parse(await readFile(fullPath, "utf8"));
      const nextImage = rewritePath(raw.image);
      if (nextImage !== raw.image && pathMap.has(nextImage)) {
        raw.image = nextImage;
        await writeFile(fullPath, `${JSON.stringify(raw, null, 2)}\n`);
        updated += 1;
      }
    }
  }
  return updated;
}

async function main() {
  const images = await listImageFiles(IMAGES_DIR);
  console.log(`Optimizing ${images.length} images under public/images...`);

  let optimized = 0;
  let skipped = 0;
  let savedBytes = 0;
  /** @type {Map<string, string>} */
  const pathMap = new Map();

  for (const [index, imagePath] of images.entries()) {
    const result = await optimizeImageFile(imagePath, { maxWidth: 1200 });
    const publicInput = toPublicPath(imagePath);
    const publicOutput = toPublicPath(result.outputPath);
    pathMap.set(publicOutput, publicOutput);
    if (publicInput !== publicOutput) {
      pathMap.set(publicInput, publicOutput);
    }

    if (result.skipped) {
      skipped += 1;
    } else {
      optimized += 1;
      savedBytes += Math.max(0, result.bytesBefore - result.bytesAfter);
    }

    if ((index + 1) % 100 === 0 || index + 1 === images.length) {
      console.log(`Processed ${index + 1}/${images.length}`);
    }
  }

  const products = await listProductFiles();
  let productsUpdated = 0;
  for (const product of products) {
    const nextImage = rewritePath(product.data.image);
    const nextImages = Array.isArray(product.data.images)
      ? product.data.images.map((image) => rewritePath(image))
      : product.data.images;

    const changed =
      nextImage !== product.data.image ||
      JSON.stringify(nextImages) !== JSON.stringify(product.data.images);

    if (!changed) {
      continue;
    }

    product.data.image = nextImage;
    if (nextImages) {
      product.data.images = nextImages;
    }
    await writeProductFile(product.category, product.data);
    productsUpdated += 1;
  }

  const servicesUpdated = await rewriteServiceFiles(pathMap);

  console.log(
    `Done. optimized=${optimized}, skipped=${skipped}, saved≈${Math.round(savedBytes / 1024 / 1024)}MB, productsUpdated=${productsUpdated}, servicesUpdated=${servicesUpdated}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
