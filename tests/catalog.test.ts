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
      category: "replacement",
      query: "пайка",
    });

    expect(results.length).toBeGreaterThan(0);
    expect(results.every((service) => service.category === "replacement")).toBe(
      true,
    );
  });

  it("returns featured catalog items for the homepage", () => {
    expect(getFeaturedProducts()).toHaveLength(3);
    expect(getFeaturedServices()).toHaveLength(3);
  });
});
