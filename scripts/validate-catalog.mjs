import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const PRODUCTS_DIR = join(ROOT, "data", "products");
const SERVICES_DIR = join(ROOT, "data", "services");
const PUBLIC_DIR = join(ROOT, "public");
const SRC_DIR = join(ROOT, "src");

const PRODUCT_CATEGORIES = new Set([
  "lithium",
  "meter-modules",
  "accessories",
  "solar-stations",
  "solar-panels",
  "inverters",
  "solar-batteries",
  "solar-accessories",
  "backup-power",
  "energy-storage",
  "energy-storage-systems",
  "ev-charging",
]);

const SERVICE_CATEGORIES = new Set([
  "battery-service",
  "verification",
  "installation",
  "plumbing",
  "energy-analysis-design",
  "energy-supply-construction",
  "energy-storage-integration",
  "energy-control-service",
]);

const DIRECTIONS = new Set(["metering-and-comfort", "energy-solutions"]);
const SOURCES = new Set(["manual", "solarverse", "namato"]);
const STATUSES = new Set(["in-stock", "preorder", "consult"]);

/** @type {string[]} */
const errors = [];

function walkJsonFiles(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  /** @type {Array<{ category: string; slug: string; path: string; data: Record<string, unknown> }>} */
  const entries = [];

  for (const categoryEntry of readdirSync(directory, { withFileTypes: true })) {
    if (!categoryEntry.isDirectory()) {
      continue;
    }

    const categoryDir = join(directory, categoryEntry.name);
    for (const fileEntry of readdirSync(categoryDir, { withFileTypes: true })) {
      if (!fileEntry.isFile() || !fileEntry.name.endsWith(".json")) {
        continue;
      }

      const slug = fileEntry.name.slice(0, -".json".length);
      const path = join(categoryDir, fileEntry.name);
      const data = JSON.parse(readFileSync(path, "utf8"));
      entries.push({ category: categoryEntry.name, slug, path, data });
    }
  }

  return entries;
}

function requireString(data, field, label) {
  if (typeof data[field] !== "string" || !data[field].trim()) {
    errors.push(`${label}: missing or empty "${field}"`);
  }
}

function validateImagePath(imagePath, label) {
  if (typeof imagePath !== "string" || !imagePath.startsWith("/")) {
    errors.push(`${label}: image must be an absolute public path`);
    return;
  }

  const diskPath = join(PUBLIC_DIR, imagePath.replace(/^\//, ""));
  if (!existsSync(diskPath)) {
    errors.push(`${label}: image not found at ${imagePath}`);
  }
}

function validateProducts() {
  const products = walkJsonFiles(PRODUCTS_DIR);
  const slugs = new Set();

  for (const entry of products) {
    const label = entry.path.replace(`${ROOT}/`, "");
    if (!PRODUCT_CATEGORIES.has(entry.category)) {
      errors.push(`${label}: unknown category folder "${entry.category}"`);
    }
    if (entry.data.slug !== entry.slug) {
      errors.push(
        `${label}: slug "${entry.data.slug}" does not match filename`,
      );
    }
    if (slugs.has(entry.slug)) {
      errors.push(`${label}: duplicate slug "${entry.slug}"`);
    }
    slugs.add(entry.slug);

    for (const legacy of entry.data.legacySlugs ?? []) {
      if (typeof legacy !== "string" || !legacy.trim()) {
        errors.push(`${label}: empty legacySlug`);
        continue;
      }
      if (slugs.has(legacy)) {
        errors.push(`${label}: duplicate legacySlug "${legacy}"`);
      }
      slugs.add(legacy);
    }

    requireString(entry.data, "title", label);
    requireString(entry.data, "shortDescription", label);
    requireString(entry.data, "description", label);
    requireString(entry.data, "image", label);

    if (!SOURCES.has(entry.data.source)) {
      errors.push(`${label}: invalid source "${entry.data.source}"`);
    }
    if (!DIRECTIONS.has(entry.data.direction)) {
      errors.push(`${label}: invalid direction "${entry.data.direction}"`);
    }
    if (!STATUSES.has(entry.data.status)) {
      errors.push(`${label}: invalid status "${entry.data.status}"`);
    }
    if (typeof entry.data.showPrice !== "boolean") {
      errors.push(`${label}: showPrice must be boolean`);
    }
    if (typeof entry.data.featured !== "boolean") {
      errors.push(`${label}: featured must be boolean`);
    }
    if (!Array.isArray(entry.data.specs)) {
      errors.push(`${label}: specs must be an array`);
    }
    if (!Array.isArray(entry.data.compatibility)) {
      errors.push(`${label}: compatibility must be an array`);
    }

    validateImagePath(entry.data.image, label);
    for (const image of entry.data.images ?? []) {
      validateImagePath(image, `${label} gallery`);
    }
  }

  return products.length;
}

function validateServices() {
  const services = walkJsonFiles(SERVICES_DIR);
  const slugs = new Set();

  for (const entry of services) {
    const label = entry.path.replace(`${ROOT}/`, "");
    if (!SERVICE_CATEGORIES.has(entry.category)) {
      errors.push(`${label}: unknown category folder "${entry.category}"`);
    }
    if (entry.data.slug !== entry.slug) {
      errors.push(
        `${label}: slug "${entry.data.slug}" does not match filename`,
      );
    }
    if (slugs.has(entry.slug)) {
      errors.push(`${label}: duplicate slug "${entry.slug}"`);
    }
    slugs.add(entry.slug);

    requireString(entry.data, "title", label);
    requireString(entry.data, "shortDescription", label);
    requireString(entry.data, "description", label);
    requireString(entry.data, "duration", label);
    requireString(entry.data, "image", label);

    if (!SOURCES.has(entry.data.source)) {
      errors.push(`${label}: invalid source "${entry.data.source}"`);
    }
    if (!DIRECTIONS.has(entry.data.direction)) {
      errors.push(`${label}: invalid direction "${entry.data.direction}"`);
    }
    if (!STATUSES.has(entry.data.status)) {
      errors.push(`${label}: invalid status "${entry.data.status}"`);
    }
    if (!Array.isArray(entry.data.includes)) {
      errors.push(`${label}: includes must be an array`);
    }

    validateImagePath(entry.data.image, label);
  }

  return services.length;
}

function walkSourceFiles(directory) {
  /** @type {string[]} */
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkSourceFiles(path));
      continue;
    }
    if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

function validateClientImports() {
  for (const file of walkSourceFiles(SRC_DIR)) {
    const source = readFileSync(file, "utf8");
    if (!source.includes('"use client"') && !source.includes("'use client'")) {
      continue;
    }

    if (
      /from\s+["']@\/lib\/data["']/.test(source) ||
      /from\s+["']@\/lib\/catalog["']/.test(source) ||
      /from\s+["']@\/lib\/catalog\/(?!list-projection)[^"']+["']/.test(source)
    ) {
      errors.push(
        `${file.replace(`${ROOT}/`, "")}: client component imports catalog data module`,
      );
    }
  }
}

const productCount = validateProducts();
const serviceCount = validateServices();
validateClientImports();

if (errors.length > 0) {
  console.error(`Catalog validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Catalog OK: ${productCount} products, ${serviceCount} services (${statSync(PRODUCTS_DIR).isDirectory() ? "data/" : "missing"}).`,
);
