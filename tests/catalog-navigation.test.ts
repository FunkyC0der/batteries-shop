import { describe, expect, it } from "vitest";

import {
  buildCatalogHref,
  buildProductDetailHref,
  clampCatalogPage,
  getCatalogPageForIndex,
  getSafeCatalogReturnHref,
  parseCatalogPage,
  parseFacetSelection,
  parseReturnProductSlug,
  PRODUCTS_PER_PAGE,
} from "../src/lib/catalog-navigation";

describe("catalog navigation", () => {
  it("splits product indexes into stable pages of 24", () => {
    expect(PRODUCTS_PER_PAGE).toBe(24);
    expect(getCatalogPageForIndex(0)).toBe(1);
    expect(getCatalogPageForIndex(23)).toBe(1);
    expect(getCatalogPageForIndex(24)).toBe(2);
    expect(clampCatalogPage(99, 4)).toBe(4);
    expect(parseCatalogPage("invalid")).toBe(1);
  });

  it("round-trips category, query, page and repeated facets", () => {
    const href = buildCatalogHref({
      direction: "energy-solutions",
      category: "energy-storage-systems",
      query: "  Deye  ",
      page: 3,
      facetSelection: {
        brand: ["Growatt", "DEYE"],
        "phase-count": ["3"],
      },
      returnToSlug: "deye-sun-10k",
    });
    const url = new URL(href, "https://catalog.local");

    expect(url.searchParams.get("direction")).toBe("energy-solutions");
    expect(url.searchParams.get("category")).toBe("energy-storage-systems");
    expect(url.searchParams.get("q")).toBe("Deye");
    expect(url.searchParams.get("page")).toBe("3");
    expect(
      parseFacetSelection(url.searchParams, ["brand", "phase-count"]),
    ).toEqual({
      brand: ["DEYE", "Growatt"],
      "phase-count": ["3"],
    });
    expect(parseReturnProductSlug(url.searchParams, url.hash)).toBe(
      "deye-sun-10k",
    );
  });

  it("round-trips a return anchor for a product with a Ukrainian slug", () => {
    const slug =
      "комплект-резервного-живлення-інвертор-20-квт-акб-20-квт-год";
    const href = buildCatalogHref({
      direction: "energy-solutions",
      category: "backup-power",
      query: "",
      page: 1,
      facetSelection: {},
      returnToSlug: slug,
    });
    const url = new URL(href, "https://catalog.local");

    expect(parseReturnProductSlug(url.searchParams, url.hash)).toBe(slug);
  });

  it("ignores facet keys that are not configured for the subcategory", () => {
    const params = new URLSearchParams(
      "facet.brand=DEYE&facet.unknown=unexpected",
    );

    expect(parseFacetSelection(params, ["brand"])).toEqual({
      brand: ["DEYE"],
    });
  });

  it("keeps the catalog return target inside the products list", () => {
    const returnHref =
      "/products?direction=energy-solutions&page=2&return=product#product-deye";
    const detailHref = buildProductDetailHref("deye", returnHref);
    const detailUrl = new URL(detailHref, "https://catalog.local");

    expect(detailUrl.searchParams.get("from")).toBe(returnHref);
    expect(getSafeCatalogReturnHref(returnHref)).toBe(returnHref);
    expect(getSafeCatalogReturnHref("https://evil.example/products")).toBe(
      "/products",
    );
    expect(getSafeCatalogReturnHref("/products/deye?from=/products")).toBe(
      "/products",
    );
    expect(getSafeCatalogReturnHref("javascript:alert(1)")).toBe("/products");
  });
});
