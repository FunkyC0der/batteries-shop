import {
  getProductBySlug as loadProductBySlug,
  getServiceBySlug as loadServiceBySlug,
  listProducts,
  listServices,
} from "./loader";
import type {
  CatalogSearch,
  Product,
  Service,
  ServiceDirection,
} from "../types";

function normalize(value: string) {
  return value.trim().toLocaleLowerCase("uk-UA");
}

function matchesQuery(values: string[], query?: string) {
  if (!query || !normalize(query)) {
    return true;
  }

  const normalizedQuery = normalize(query);

  return values.some((value) => normalize(value).includes(normalizedQuery));
}

export function filterProducts(search: CatalogSearch = {}): Product[] {
  return listProducts().filter((product) => {
    const directionMatches =
      !search.direction ||
      search.direction === "all" ||
      product.direction === search.direction;
    const categoryMatches =
      !search.category ||
      search.category === "all" ||
      product.category === search.category;

    return (
      directionMatches &&
      categoryMatches &&
      matchesQuery(
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
        ],
        search.query,
      )
    );
  });
}

export function filterServices(search: CatalogSearch = {}): Service[] {
  return listServices().filter((service) => {
    const directionMatches =
      !search.direction ||
      search.direction === "all" ||
      service.direction === search.direction;
    const categoryMatches =
      !search.category ||
      search.category === "all" ||
      service.category === search.category;

    return (
      directionMatches &&
      categoryMatches &&
      matchesQuery(
        [
          service.title,
          service.shortDescription,
          service.description,
          service.duration,
          ...service.includes,
        ],
        search.query,
      )
    );
  });
}

export function getFeaturedProducts(direction?: ServiceDirection) {
  return listProducts()
    .filter(
      (product) =>
        product.featured &&
        (!direction || product.direction === direction),
    )
    .slice(0, 3);
}

export function getFeaturedServices(direction?: ServiceDirection) {
  return listServices()
    .filter(
      (service) =>
        service.featured &&
        (!direction || service.direction === direction),
    )
    .slice(0, 3);
}

export function getProductBySlug(slug: string) {
  let decodedSlug = slug;

  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    // Keep the original value when a malformed URL segment reaches the route.
  }

  return loadProductBySlug(decodedSlug);
}

export function getServiceBySlug(slug: string) {
  return loadServiceBySlug(slug);
}
