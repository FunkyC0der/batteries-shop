import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

export const ROOT = resolve(import.meta.dirname, "../..");
export const PRODUCTS_DIR = join(ROOT, "data", "products");
export const PRODUCT_SCHEMA = "../../../schema/product.schema.json";

/**
 * @typedef {{
 *   category: string;
 *   slug: string;
 *   path: string;
 *   data: Record<string, unknown>;
 * }} CatalogProductFile
 */

/**
 * @returns {Promise<CatalogProductFile[]>}
 */
export async function listProductFiles() {
  /** @type {CatalogProductFile[]} */
  const entries = [];

  let categoryEntries;
  try {
    categoryEntries = await readdir(PRODUCTS_DIR, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }

  for (const categoryEntry of categoryEntries) {
    if (!categoryEntry.isDirectory()) {
      continue;
    }

    const categoryDir = join(PRODUCTS_DIR, categoryEntry.name);
    const fileEntries = await readdir(categoryDir, { withFileTypes: true });

    for (const fileEntry of fileEntries) {
      if (!fileEntry.isFile() || !fileEntry.name.endsWith(".json")) {
        continue;
      }

      const slug = fileEntry.name.slice(0, -".json".length);
      const path = join(categoryDir, fileEntry.name);
      const data = JSON.parse(await readFile(path, "utf8"));

      entries.push({
        category: categoryEntry.name,
        slug,
        path,
        data,
      });
    }
  }

  return entries;
}

/**
 * @param {string} slug
 * @param {CatalogProductFile[]} [files]
 * @returns {Promise<CatalogProductFile | undefined>}
 */
export async function findProductBySlug(slug, files) {
  const catalog = files ?? (await listProductFiles());
  return catalog.find((entry) => entry.slug === slug);
}

/**
 * @param {string} source
 * @param {CatalogProductFile[]} [files]
 * @returns {Promise<CatalogProductFile[]>}
 */
export async function listProductsBySource(source, files) {
  const catalog = files ?? (await listProductFiles());
  return catalog.filter((entry) => entry.data.source === source);
}

/**
 * Decide whether a product file may be written for the given source.
 * Returns the existing entry (if any) when the write should proceed, or a skip reason.
 *
 * @param {string} slug
 * @param {string} source
 * @param {CatalogProductFile[]} [files]
 * @returns {Promise<
 *   | { action: "create" }
 *   | { action: "update"; existing: CatalogProductFile }
 *   | { action: "skip"; reason: "locked" | "source-mismatch"; existing: CatalogProductFile }
 * >}
 */
export async function resolveUpsert(slug, source, files) {
  const existing = await findProductBySlug(slug, files);

  if (!existing) {
    return { action: "create" };
  }

  if (existing.data.locked === true) {
    return { action: "skip", reason: "locked", existing };
  }

  if (existing.data.source !== source) {
    return { action: "skip", reason: "source-mismatch", existing };
  }

  return { action: "update", existing };
}

/**
 * @param {string} category
 * @param {Record<string, unknown>} product
 *   Must include `slug` and `source`. Category is the folder name, not a field.
 * @param {{ existing?: CatalogProductFile }} [options]
 */
export async function writeProductFile(category, product, options = {}) {
  const slug = product.slug;
  if (typeof slug !== "string" || !slug) {
    throw new Error("Product must include a slug before writing.");
  }

  const targetDir = join(PRODUCTS_DIR, category);
  const targetPath = join(targetDir, `${slug}.json`);

  await mkdir(targetDir, { recursive: true });

  const payload = {
    $schema: PRODUCT_SCHEMA,
    ...product,
  };

  await writeFile(targetPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  // If the same-source product lived under a different category, remove the old file.
  if (options.existing && options.existing.path !== targetPath) {
    await unlink(options.existing.path);
  }

  return targetPath;
}

/**
 * Delete unlocked products for `source` whose slug is not in `keepSlugs`.
 *
 * @param {string} source
 * @param {Iterable<string>} keepSlugs
 * @param {CatalogProductFile[]} [files]
 * @returns {Promise<string[]>} deleted file paths
 */
export async function deleteStaleProducts(source, keepSlugs, files) {
  const keep = new Set(keepSlugs);
  const catalog = files ?? (await listProductFiles());
  /** @type {string[]} */
  const deleted = [];

  for (const entry of catalog) {
    if (entry.data.source !== source) {
      continue;
    }
    if (entry.data.locked === true) {
      continue;
    }
    if (keep.has(entry.slug)) {
      continue;
    }

    await unlink(entry.path);
    deleted.push(entry.path);
  }

  return deleted;
}

/**
 * @param {number | undefined} price
 * @returns {string}
 */
export function formatPriceLabel(price) {
  return Number.isFinite(price)
    ? `${price.toLocaleString("uk-UA")} грн · Ціну уточнюйте`
    : "Ціну уточнюйте";
}
