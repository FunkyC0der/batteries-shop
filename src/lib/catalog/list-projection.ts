import { productFacetConfigs } from "../product-facets";
import { PRODUCTS_PER_PAGE } from "../catalog-navigation";
import type { Product, Service } from "../types";

const FACET_SPEC_LABELS = new Set(
  Object.values(productFacetConfigs).flatMap(
    (config) =>
      config?.facets.flatMap((facet) => [...facet.specLabels]) ?? [],
  ),
);

function normalizeSearch(value: string) {
  return value.trim().toLocaleLowerCase("uk-UA");
}

export type ProductListItem = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  status: Product["status"];
  showPrice: boolean;
  price?: string;
  image: string;
  direction: Product["direction"];
  category: Product["category"];
  searchText: string;
  specs: Array<{ label: string; value: string }>;
  configurations?: Array<{ label: string }>;
};

export type ServiceListItem = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  status: Service["status"];
  showPrice: boolean;
  price?: string;
  image: string;
  direction: Service["direction"];
  category: Service["category"];
  searchText: string;
  duration: string;
  includes: string[];
};

export function buildProductSearchText(product: Product) {
  return normalizeSearch(
    [
      product.title,
      product.shortDescription,
      product.description,
      ...product.compatibility,
      ...(product.configurations?.flatMap((configuration) => [
        configuration.label,
        ...configuration.equipment,
      ]) ?? []),
      ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
    ].join(" "),
  );
}

export function buildServiceSearchText(service: Service) {
  return normalizeSearch(
    [
      service.title,
      service.shortDescription,
      service.description,
      service.duration,
      ...service.includes,
    ].join(" "),
  );
}

export function toProductListItem(product: Product): ProductListItem {
  const facetSpecs = product.specs.filter((spec) =>
    FACET_SPEC_LABELS.has(spec.label),
  );

  return {
    id: product.id,
    slug: product.slug,
    title: product.title,
    shortDescription: product.shortDescription,
    status: product.status,
    showPrice: product.showPrice,
    price: product.price,
    image: product.image,
    direction: product.direction,
    category: product.category,
    searchText: buildProductSearchText(product),
    specs: facetSpecs.length > 0 ? facetSpecs : product.specs.slice(0, 8),
    configurations: product.configurations?.map((configuration) => ({
      label: configuration.label,
    })),
  };
}

export function toServiceListItem(service: Service): ServiceListItem {
  return {
    id: service.id,
    slug: service.slug,
    title: service.title,
    shortDescription: service.shortDescription,
    status: service.status,
    showPrice: service.showPrice,
    price: service.price,
    image: service.image,
    direction: service.direction,
    category: service.category,
    searchText: buildServiceSearchText(service),
    duration: service.duration,
    includes: service.includes,
  };
}

export function sortProductsForCatalog(products: Product[]) {
  return [...products].sort(
    (first, second) =>
      Number(Boolean(second.configurations)) -
      Number(Boolean(first.configurations)),
  );
}

export function getInitialCatalogProducts(products: Product[]) {
  return sortProductsForCatalog(products)
    .slice(0, PRODUCTS_PER_PAGE)
    .map(toProductListItem);
}

export function buildProductCatalogProjection(products: Product[]) {
  return sortProductsForCatalog(products).map(toProductListItem);
}

export function buildServiceCatalogProjection(services: Service[]) {
  return services.map(toServiceListItem);
}

export const PRODUCTS_CATALOG_URL = "/catalog/products.json";
export const SERVICES_CATALOG_URL = "/catalog/services.json";
