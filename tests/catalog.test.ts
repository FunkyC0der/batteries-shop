import { describe, expect, it } from "vitest";

import {
  filterProducts,
  filterServices,
  getFeaturedProducts,
  getFeaturedServices,
} from "../src/lib/catalog";

describe("catalog helpers", () => {
  it("keeps every product slug unique", () => {
    const allProducts = filterProducts({});

    expect(new Set(allProducts.map((product) => product.slug)).size).toBe(
      allProducts.length,
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
    expect(results[0].title.toLowerCase()).toContain("saft");
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

    expect(byPower.map((product) => product.id)).toContain(
      "industrial-solar-station",
    );
    expect(byModel.map((product) => product.id)).toEqual(
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
    expect(energyProducts).toHaveLength(328);
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

    expect(systems).toHaveLength(147);
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

  it("lists imported Solarverse equipment in dedicated categories", () => {
    const expectedCounts = {
      inverters: 65,
      "solar-batteries": 72,
      "solar-panels": 24,
      "solar-accessories": 13,
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

    expect(results.map((service) => service.id)).toContain(
      "service-energy-automation",
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
