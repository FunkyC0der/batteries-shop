import type { ProductFacetSelection } from "./product-facets";

export const PRODUCTS_PER_PAGE = 24;

const FACET_PREFIX = "facet.";
const RETURN_MARKER = "product";
const PRODUCT_ANCHOR_PREFIX = "product-";

type CatalogHrefOptions = {
  direction: string;
  category: string;
  query: string;
  page: number;
  facetSelection: ProductFacetSelection;
  returnToSlug?: string;
  anchorSlug?: string;
};

export function parseCatalogPage(value: string | null) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
}

export function clampCatalogPage(page: number, totalPages: number) {
  return Math.min(Math.max(page, 1), Math.max(totalPages, 1));
}

export function getCatalogPageForIndex(index: number) {
  return Math.floor(Math.max(index, 0) / PRODUCTS_PER_PAGE) + 1;
}

export function getProductAnchorId(slug: string) {
  return `${PRODUCT_ANCHOR_PREFIX}${slug}`;
}

export function parseReturnProductSlug(
  searchParams: URLSearchParams,
  hash: string,
) {
  if (searchParams.get("return") !== RETURN_MARKER) {
    return undefined;
  }

  let decodedHash: string;
  try {
    decodedHash = decodeURIComponent(hash.replace(/^#/, ""));
  } catch {
    return undefined;
  }
  if (!decodedHash.startsWith(PRODUCT_ANCHOR_PREFIX)) {
    return undefined;
  }

  const slug = decodedHash.slice(PRODUCT_ANCHOR_PREFIX.length);
  return /^[\p{L}\p{N}-]+$/u.test(slug) ? slug : undefined;
}

export function parseFacetSelection(
  searchParams: URLSearchParams,
  allowedFacetIds: readonly string[],
): ProductFacetSelection {
  const selection: Record<string, string[]> = {};

  for (const facetId of allowedFacetIds) {
    const values = [...new Set(searchParams.getAll(`${FACET_PREFIX}${facetId}`))]
      .map((value) => value.trim())
      .filter(Boolean);

    if (values.length > 0) {
      selection[facetId] = values;
    }
  }

  return selection;
}

export function buildCatalogHref({
  direction,
  category,
  query,
  page,
  facetSelection,
  returnToSlug,
  anchorSlug,
}: CatalogHrefOptions) {
  const searchParams = new URLSearchParams();
  const normalizedQuery = query.trim();

  if (direction !== "all") {
    searchParams.set("direction", direction);
  }
  if (direction !== "all" && category !== "all") {
    searchParams.set("category", category);
  }
  if (normalizedQuery) {
    searchParams.set("q", normalizedQuery);
  }
  if (page > 1) {
    searchParams.set("page", String(page));
  }

  for (const facetId of Object.keys(facetSelection).sort()) {
    for (const value of [...(facetSelection[facetId] ?? [])].sort()) {
      searchParams.append(`${FACET_PREFIX}${facetId}`, value);
    }
  }

  if (returnToSlug) {
    searchParams.set("return", RETURN_MARKER);
  }

  const queryString = searchParams.toString();
  const slugForAnchor = returnToSlug ?? anchorSlug;
  const hash = slugForAnchor
    ? `#${encodeURIComponent(getProductAnchorId(slugForAnchor))}`
    : "";

  return `/products${queryString ? `?${queryString}` : ""}${hash}`;
}

export function buildProductDetailHref(slug: string, returnHref: string) {
  const searchParams = new URLSearchParams({ from: returnHref });
  return `/products/${slug}?${searchParams.toString()}`;
}

export function getSafeCatalogReturnHref(value?: string) {
  if (!value || value.length > 8_000) {
    return "/products";
  }

  try {
    const base = new URL("https://catalog.local");
    const candidate = new URL(value, base);
    if (candidate.origin !== base.origin || candidate.pathname !== "/products") {
      return "/products";
    }

    return `${candidate.pathname}${candidate.search}${candidate.hash}`;
  } catch {
    return "/products";
  }
}
