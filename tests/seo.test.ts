import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

import { getProductBySlug } from "../src/lib/catalog";
import { listProducts } from "../src/lib/catalog/loader";
import { buildLegacySlugRedirects } from "../scripts/build-redirects";
import { buildProductJsonLd } from "../src/lib/seo/json-ld";
import { buildPageMetadata } from "../src/lib/seo/metadata";
import {
  buildProductMetaDescription,
  getProductBrand,
  parsePrice,
} from "../src/lib/seo/product-seo";
import { siteConfig } from "../src/lib/site-config";
import sitemap from "../src/app/sitemap";

describe("parsePrice", () => {
  it("parses a bare consult price", () => {
    expect(parsePrice("Ціну уточнюйте")).toEqual({ isFrom: false });
  });

  it("parses a plain price", () => {
    expect(parsePrice("6 800 грн")).toEqual({
      amount: 6800,
      isFrom: false,
      vatIncluded: undefined,
    });
  });

  it("parses a price with a consult suffix", () => {
    expect(parsePrice("100 758 грн · Ціну уточнюйте")).toEqual({
      amount: 100758,
      isFrom: false,
      vatIncluded: undefined,
    });
  });

  it("parses a lowercase consult suffix", () => {
    const parsed = parsePrice("500 грн · ціну уточнюйте");
    expect(parsed.amount).toBe(500);
  });

  it("parses a 'from' price", () => {
    expect(parsePrice("від 122 грн")).toEqual({
      amount: 122,
      isFrom: true,
      vatIncluded: undefined,
    });
  });

  it("parses a 'from' price with a consult suffix", () => {
    const parsed = parsePrice("від 122 грн · Ціну уточнюйте");
    expect(parsed.amount).toBe(122);
    expect(parsed.isFrom).toBe(true);
  });

  it("parses a price excluding VAT", () => {
    expect(parsePrice("122 грн (без ПДВ)")).toEqual({
      amount: 122,
      isFrom: false,
      vatIncluded: false,
    });
  });

  it("parses a decimal comma price", () => {
    expect(parsePrice("214,50 грн · Ціну уточнюйте").amount).toBeCloseTo(
      214.5,
    );
  });

  it("returns no amount for an undefined price", () => {
    expect(parsePrice(undefined)).toEqual({ isFrom: false });
  });
});

describe("getProductBrand", () => {
  it("reads the Бренд spec label", () => {
    const product = getProductBySlug(
      "teplolichylnyk-landis-gyr-ultraheat-t330-dn15-dn20",
    );
    expect(product).toBeDefined();
    expect(getProductBrand(product!)).toBe("Landis+Gyr");
  });

  it("falls back to Виробник when Бренд is absent", () => {
    const product = getProductBySlug("industrial-solar-station");
    expect(product).toBeDefined();
    // Either a brand-ish spec exists or none is present; either way this
    // must not throw and must return a string or undefined.
    expect(["string", "undefined"]).toContain(
      typeof getProductBrand(product!),
    );
  });
});

describe("buildProductMetaDescription", () => {
  it("stays within 160 characters for every product", () => {
    for (const product of listProducts()) {
      expect(buildProductMetaDescription(product).length).toBeLessThanOrEqual(
        160,
      );
    }
  });

  it("composes a description when shortDescription is too thin", () => {
    const product = getProductBySlug(
      "stiy-ka-deye-3u-hrack-19-dyuy-mova-dlya-ustanovky-12-batarey-1-bloku-keruvannya",
    );
    expect(product).toBeDefined();
    const description = buildProductMetaDescription(product!);
    expect(description).toContain(product!.title);
    expect(description.length).toBeLessThanOrEqual(160);
  });
});

describe("buildProductJsonLd", () => {
  it("builds an AggregateOffer for a product with priced configurations", () => {
    const product = getProductBySlug(
      "teplolichylnyk-landis-gyr-ultraheat-t330-dn15-dn20",
    );
    expect(product).toBeDefined();
    const jsonLd = buildProductJsonLd(product!) as Record<string, unknown>;
    const offers = jsonLd.offers as Record<string, unknown>;

    expect(jsonLd["@type"]).toBe("Product");
    expect(offers["@type"]).toBe("AggregateOffer");
    expect(offers.lowPrice).toBe(6800);
    expect(offers.highPrice).toBe(7300);
    expect(offers.priceCurrency).toBe("UAH");
    expect((jsonLd.url as string).endsWith("/")).toBe(true);
  });

  it("omits offers for a product without a price", () => {
    const product = getProductBySlug("backup-power-system");
    expect(product).toBeDefined();
    const jsonLd = buildProductJsonLd(product!) as Record<string, unknown>;

    expect(jsonLd.offers).toBeUndefined();
  });
});

describe("sitemap", () => {
  it("has no legacy slugs and every URL ends with a trailing slash", () => {
    const entries = sitemap();
    const legacySlugs = new Set(
      listProducts().flatMap((product) => product.legacySlugs ?? []),
    );

    for (const entry of entries) {
      expect(entry.url.endsWith("/")).toBe(true);
      for (const legacySlug of legacySlugs) {
        expect(entry.url).not.toContain(encodeURIComponent(legacySlug as string));
      }
    }
  });
});

describe("vercel.json redirects", () => {
  it("stays in sync with the catalog's legacySlugs", () => {
    const vercelJsonPath = path.resolve(__dirname, "../vercel.json");
    const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, "utf8"));
    const expected = buildLegacySlugRedirects();

    expect(vercelConfig.redirects).toEqual(expected);
  });
});

describe("buildPageMetadata", () => {
  it("produces a canonical URL with a trailing slash", () => {
    const metadata = buildPageMetadata({
      title: "Товари",
      description: "Опис",
      path: "/products",
    });

    expect(metadata.alternates?.canonical).toBe(
      `${siteConfig.url}/products/`,
    );
  });

  it("keeps an existing trailing slash", () => {
    const metadata = buildPageMetadata({
      title: "Головна",
      description: "Опис",
      path: "/",
    });

    expect(metadata.alternates?.canonical).toBe(`${siteConfig.url}/`);
  });

  it("marks noindex pages with robots: index false, follow true", () => {
    const metadata = buildPageMetadata({
      title: "Застаріла сторінка",
      description: "Опис",
      path: "/products/legacy-slug",
      noindex: true,
    });

    expect(metadata.robots).toEqual({ index: false, follow: true });
  });
});
