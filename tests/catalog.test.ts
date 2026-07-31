import { describe, expect, it } from "vitest";

import {
  filterProducts,
  filterServices,
  getFeaturedProducts,
  getFeaturedServices,
} from "../src/lib/catalog";

describe("catalog helpers", () => {
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
    expect(getFeaturedServices("metering-and-comfort")).toHaveLength(3);
    expect(getFeaturedServices("energy-solutions")).toHaveLength(3);
  });
});
