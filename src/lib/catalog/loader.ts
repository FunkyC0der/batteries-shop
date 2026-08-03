import fs from "node:fs";
import path from "node:path";

import type {
  CatalogSourceId,
  Product,
  ProductCategory,
  ProductFile,
  Service,
  ServiceCategory,
  ServiceFile,
} from "../types";
import {
  PRODUCT_CATEGORY_VALUES,
  SERVICE_CATEGORY_VALUES,
} from "./taxonomy";

const ROOT = process.cwd();
const PRODUCTS_DIR = path.join(ROOT, "data", "products");
const SERVICES_DIR = path.join(ROOT, "data", "services");

type Cache = {
  products: Product[];
  services: Service[];
  productsBySlug: Map<string, Product>;
  servicesBySlug: Map<string, Service>;
};

let cache: Cache | undefined;

function shouldBypassCache() {
  return process.env.NODE_ENV === "development";
}

function readJsonFiles(directory: string): Array<{
  category: string;
  slug: string;
  data: unknown;
}> {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries: Array<{ category: string; slug: string; data: unknown }> = [];

  for (const categoryEntry of fs.readdirSync(directory, {
    withFileTypes: true,
  })) {
    if (!categoryEntry.isDirectory()) {
      continue;
    }

    const categoryDir = path.join(directory, categoryEntry.name);

    for (const fileEntry of fs.readdirSync(categoryDir, {
      withFileTypes: true,
    })) {
      if (!fileEntry.isFile() || !fileEntry.name.endsWith(".json")) {
        continue;
      }

      const slug = fileEntry.name.slice(0, -".json".length);
      const raw = fs.readFileSync(path.join(categoryDir, fileEntry.name), "utf8");
      entries.push({
        category: categoryEntry.name,
        slug,
        data: JSON.parse(raw) as unknown,
      });
    }
  }

  return entries;
}

function assertObject(value: unknown, label: string): asserts value is Record<
  string,
  unknown
> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} must be a JSON object`);
  }
}

function loadProducts(): Product[] {
  const productCategorySet = new Set<string>(PRODUCT_CATEGORY_VALUES);
  const products: Product[] = [];

  for (const entry of readJsonFiles(PRODUCTS_DIR)) {
    if (!productCategorySet.has(entry.category)) {
      throw new Error(
        `Unknown product category folder "${entry.category}" for ${entry.slug}`,
      );
    }

    assertObject(entry.data, `Product ${entry.slug}`);
    const file = entry.data as ProductFile & { $schema?: string };

    if (file.slug !== entry.slug) {
      throw new Error(
        `Product slug mismatch: file ${entry.slug}.json has slug "${file.slug}"`,
      );
    }

    const { $schema: _schema, ...rest } = file as ProductFile & {
      $schema?: string;
    };

    products.push({
      ...(rest as ProductFile),
      id: file.slug,
      category: entry.category as ProductCategory,
    });
  }

  return products;
}

function loadServices(): Service[] {
  const serviceCategorySet = new Set<string>(SERVICE_CATEGORY_VALUES);
  const services: Service[] = [];

  for (const entry of readJsonFiles(SERVICES_DIR)) {
    if (!serviceCategorySet.has(entry.category)) {
      throw new Error(
        `Unknown service category folder "${entry.category}" for ${entry.slug}`,
      );
    }

    assertObject(entry.data, `Service ${entry.slug}`);
    const file = entry.data as ServiceFile & { $schema?: string };

    if (file.slug !== entry.slug) {
      throw new Error(
        `Service slug mismatch: file ${entry.slug}.json has slug "${file.slug}"`,
      );
    }

    const { $schema: _schema, ...rest } = file as ServiceFile & {
      $schema?: string;
    };

    services.push({
      ...(rest as ServiceFile),
      id: file.slug,
      category: entry.category as ServiceCategory,
    });
  }

  return services;
}

function buildCache(): Cache {
  const products = loadProducts();
  const services = loadServices();
  const productsBySlug = new Map<string, Product>();
  const servicesBySlug = new Map<string, Service>();

  for (const product of products) {
    if (productsBySlug.has(product.slug)) {
      throw new Error(`Duplicate product slug: ${product.slug}`);
    }
    productsBySlug.set(product.slug, product);
    for (const legacySlug of product.legacySlugs ?? []) {
      if (productsBySlug.has(legacySlug)) {
        throw new Error(`Duplicate product legacy slug: ${legacySlug}`);
      }
      productsBySlug.set(legacySlug, product);
    }
  }

  for (const service of services) {
    if (servicesBySlug.has(service.slug)) {
      throw new Error(`Duplicate service slug: ${service.slug}`);
    }
    servicesBySlug.set(service.slug, service);
  }

  return { products, services, productsBySlug, servicesBySlug };
}

function getCache(): Cache {
  if (!cache || shouldBypassCache()) {
    cache = buildCache();
  }
  return cache;
}

export function listProducts(): Product[] {
  return getCache().products;
}

export function listServices(): Service[] {
  return getCache().services;
}

export function getProductBySlug(slug: string): Product | undefined {
  return getCache().productsBySlug.get(slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getCache().servicesBySlug.get(slug);
}

export function listProductsBySource(source: CatalogSourceId): Product[] {
  return listProducts().filter((product) => product.source === source);
}

export function resetCatalogCache() {
  cache = undefined;
}
