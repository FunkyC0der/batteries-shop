import { describe, expect, it } from "vitest";

import {
  filterProducts,
  filterServices,
  formatProductCount,
  getFeaturedProducts,
  getFeaturedServices,
  getProductBySlug,
} from "../src/lib/catalog";

describe("catalog helpers", () => {
  it("keeps every product slug unique", () => {
    const allProducts = filterProducts({});

    expect(new Set(allProducts.map((product) => product.slug)).size).toBe(
      allProducts.length,
    );
    expect(
      allProducts.every((product) => /^[a-z0-9-]+$/.test(product.slug)),
    ).toBe(true);
  });

  it("formats automatically calculated product counts in Ukrainian", () => {
    expect(formatProductCount(1)).toBe("1 товар");
    expect(formatProductCount(4)).toBe("4 товари");
    expect(formatProductCount(11)).toBe("11 товарів");
    expect(formatProductCount(368)).toBe("368 товарів");
  });

  it("resolves an old Ukrainian slug to its canonical Latin slug", () => {
    const legacySlug =
      "комплект-резервного-живлення-інвертор-20-квт-акб-20-квт-год";

    expect(getProductBySlug(encodeURIComponent(legacySlug))?.slug).toBe(
      "komplekt-rezervnoho-zhyvlennya-invertor-20-kvt-akb-20-kvt-hod",
    );
  });

  it("filters products by category and Ukrainian search text", () => {
    const results = filterProducts({
      category: "lithium",
      query: "теплолічильник",
    });

    expect(results.length).toBeGreaterThan(0);
    expect(results.every((product) => product.category === "lithium")).toBe(
      true,
    );
    expect(
      results.some((product) => product.title.toLowerCase().includes("saft")),
    ).toBe(true);
  });

  it("filters services by category and included work", () => {
    const results = filterServices({
      category: "battery-service",
      query: "батарейки",
    });

    expect(results.length).toBeGreaterThan(0);
    expect(
      results.every((service) => service.category === "battery-service"),
    ).toBe(true);
  });

  it("finds grouped energy products by power and equipment model", () => {
    const byPower = filterProducts({
      category: "solar-stations",
      query: "1 МВт",
    });
    const byModel = filterProducts({ query: "SNA5000" });

    expect(byPower.map((product) => product.slug)).toContain(
      "industrial-solar-station",
    );
    expect(byModel.map((product) => product.slug)).toEqual(
      expect.arrayContaining([
        "autonomous-solar-station",
        "hybrid-solar-station",
      ]),
    );
  });

  it("separates products into heat and energy directions", () => {
    const heatProducts = filterProducts({
      direction: "metering-and-comfort",
    });
    const energyProducts = filterProducts({
      direction: "energy-solutions",
    });

    expect(heatProducts).toHaveLength(4);
    expect(energyProducts).toHaveLength(368);
    expect(
      heatProducts.every(
        (product) => product.direction === "metering-and-comfort",
      ),
    ).toBe(true);
    expect(
      energyProducts.every(
        (product) => product.direction === "energy-solutions",
      ),
    ).toBe(true);
  });

  it("lists imported systems in a dedicated category with a price warning", () => {
    const systems = filterProducts({
      category: "energy-storage-systems",
    });

    expect(systems).toHaveLength(149);
    expect(
      systems.every(
        (product) =>
          product.showPrice && product.price?.includes("Ціну уточнюйте"),
      ),
    ).toBe(true);
    expect(
      systems.every(
        (product) =>
          product.images?.length && product.image === product.images[0],
      ),
    ).toBe(true);
  });

  it("lists imported partner equipment in dedicated categories", () => {
    const expectedCounts = {
      inverters: 79,
      "solar-batteries": 78,
      "solar-panels": 33,
      "solar-accessories": 16,
    } as const;

    for (const [category, expectedCount] of Object.entries(expectedCounts)) {
      const importedProducts = filterProducts({
        category: category as keyof typeof expectedCounts,
      });

      expect(importedProducts).toHaveLength(expectedCount);
      expect(
        importedProducts.every(
          (product) =>
            product.showPrice &&
            product.price?.includes("Ціну уточнюйте") &&
            product.images?.length &&
            product.image === product.images[0],
        ),
      ).toBe(true);
    }
  });

  it("adds only the new Namato models with local image galleries", () => {
    const namatoProducts = filterProducts({}).filter(
      (product) => product.source === "namato",
    );

    expect(namatoProducts).toHaveLength(40);
    expect(
      namatoProducts.every(
        (product) =>
          /^[a-z0-9-]+$/.test(product.slug) &&
          (!product.legacySlugs ||
            product.legacySlugs.some((slug) => /[а-яіїєґ]/i.test(slug))) &&
          product.showPrice &&
          product.price?.includes("Ціну уточнюйте") &&
          product.images?.length &&
          product.images.every((image) =>
            image.startsWith("/images/products/namato/"),
          ),
      ),
    ).toBe(true);
  });

  it("merges Namato solar kits into the existing hybrid station", () => {
    const stations = filterProducts({ category: "solar-stations" });
    const hybridStation = getProductBySlug("hybrid-solar-station");

    expect(stations).toHaveLength(4);
    expect(
      stations.some((product) =>
        product.slug.startsWith("комплект-для-гібридної-станції"),
      ),
    ).toBe(false);
    expect(hybridStation?.configurations).toHaveLength(11);
    expect(hybridStation?.sourceUrls).toHaveLength(8);
    expect(
      hybridStation?.configurations?.map((configuration) => configuration.label),
    ).toEqual(
      expect.arrayContaining([
        "6 кВт + АКБ 5,1 кВт·год",
        "30 кВт + АКБ 60 кВт·год",
      ]),
    );
  });

  it("keeps original source links in imported product data", () => {
    const importedProducts = filterProducts({}).filter(
      (product) =>
        product.source === "solarverse" || product.source === "namato",
    );

    expect(importedProducts).toHaveLength(361);
    expect(importedProducts.every((product) => product.sourceUrl)).toBe(true);
    expect(
      importedProducts.every((product) => {
        if (product.source === "namato") {
          return product.sourceUrl?.startsWith(
            "https://www.namato.net/product-page/",
          );
        }

        return product.sourceUrl?.startsWith(
          "https://solarverse.ua/product/",
        );
      }),
    ).toBe(true);
  });

  it("does not expose the partner name in customer-facing product copy", () => {
    const customerFacingCopy = filterProducts({}).flatMap((product) => [
      product.title,
      product.shortDescription,
      product.description,
      product.price ?? "",
      product.notice ?? "",
      ...product.specs.flatMap((spec) => [spec.label, spec.value]),
      ...product.compatibility,
      ...(product.configurations?.flatMap((configuration) => [
        configuration.label,
        configuration.price ?? "",
        ...configuration.equipment,
      ]) ?? []),
    ]);

    expect(customerFacingCopy.join(" ")).not.toMatch(/namato/i);
  });

  it("formats imported descriptions as concise product summaries", () => {
    const importedProducts = filterProducts({}).filter(
      (product) => product.source === "namato",
    );

    expect(
      importedProducts.every(
        (product) =>
          product.description.length < 1_200 &&
          product.description.includes("\n\nОсновні характеристики:\n• ") &&
          !product.description.includes("КОМПЛЕКСНЕ РІШЕННЯ"),
      ),
    ).toBe(true);
  });

  it("filters services by the energy-solutions direction", () => {
    const results = filterServices({
      direction: "energy-solutions",
    });

    expect(results).toHaveLength(8);
    expect(
      results.every((service) => service.direction === "energy-solutions"),
    ).toBe(true);
  });

  it("finds a new energy service by Ukrainian search text", () => {
    const results = filterServices({
      direction: "energy-solutions",
      query: "дистанційний моніторинг",
    });

    expect(results.map((service) => service.slug)).toContain(
      "energy-automation-monitoring-control",
    );
  });

  it("returns featured catalog items for the homepage", () => {
    expect(getFeaturedProducts()).toHaveLength(3);
    expect(getFeaturedProducts("metering-and-comfort")).toHaveLength(3);
    expect(getFeaturedProducts("energy-solutions")).toHaveLength(3);
    expect(getFeaturedServices("metering-and-comfort")).toHaveLength(3);
    expect(getFeaturedServices("energy-solutions")).toHaveLength(3);
  });
});
