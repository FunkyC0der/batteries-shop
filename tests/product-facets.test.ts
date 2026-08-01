import { describe, expect, it } from "vitest";

import { products } from "../src/lib/data";
import {
  buildProductFacetModels,
  filterProductsByFacets,
  getProductFacetConfig,
  matchesProductFacetSelection,
  type ProductFacetDefinition,
} from "../src/lib/product-facets";

const systems = products.filter(
  (product) => product.category === "energy-storage-systems",
);
const config = getProductFacetConfig("energy-storage-systems");

if (!config) {
  throw new Error("Missing energy storage facet configuration");
}

describe("product facets", () => {
  it("combines values with OR inside a facet", () => {
    const filtered = filterProductsByFacets(systems, config.facets, {
      brand: ["DEYE", "Growatt"],
    });

    expect(filtered).toHaveLength(117);
    expect(
      filtered.every((product) =>
        product.specs.some(
          (spec) =>
            spec.label === "Бренд" &&
            ["DEYE", "Growatt"].includes(spec.value),
        ),
      ),
    ).toBe(true);
  });

  it("combines separate facets with AND", () => {
    const filtered = filterProductsByFacets(systems, config.facets, {
      brand: ["DEYE"],
      "phase-count": ["3"],
      "system-type": ["Гібридний"],
    });

    expect(filtered.length).toBeGreaterThan(0);
    expect(
      filtered.every(
        (product) =>
          product.specs.some(
            (spec) => spec.label === "Бренд" && spec.value === "DEYE",
          ) &&
          product.specs.some(
            (spec) => spec.label === "Кількість фаз" && spec.value === "3",
          ) &&
          product.specs.some(
            (spec) => spec.label === "Тип" && spec.value === "Гібридний",
          ),
      ),
    ).toBe(true);
  });

  it("builds self-excluding counts from all other active facets", () => {
    const models = buildProductFacetModels(systems, config.facets, {
      brand: ["Growatt"],
      "phase-count": ["3"],
    });
    const brandModel = models.find(
      (model) => model.definition.id === "brand",
    );
    const deyeCount = brandModel?.options.find(
      (option) => option.value === "DEYE",
    )?.count;
    const expectedDeyeCount = systems.filter(
      (product) =>
        product.specs.some(
          (spec) => spec.label === "Бренд" && spec.value === "DEYE",
        ) &&
        product.specs.some(
          (spec) => spec.label === "Кількість фаз" && spec.value === "3",
        ),
    ).length;

    expect(deyeCount).toBe(expectedDeyeCount);
    expect(deyeCount).toBeGreaterThan(0);
  });

  it("fails closed when a configured characteristic is missing", () => {
    const definition: ProductFacetDefinition = {
      id: "mppt",
      label: "Кількість MPPT",
      specLabels: ["Кількість MPPT"],
    };
    const productWithoutMppt = {
      ...systems[0],
      specs: systems[0].specs.filter(
        (spec) => spec.label !== "Кількість MPPT",
      ),
    };

    expect(
      matchesProductFacetSelection(productWithoutMppt, [definition], {
        mppt: ["2"],
      }),
    ).toBe(false);
  });

  it("accepts a new declarative facet without evaluator changes", () => {
    const definition: ProductFacetDefinition = {
      id: "battery-type",
      label: "Тип батареї",
      specLabels: ["Тип батареї"],
    };
    const filtered = filterProductsByFacets(systems, [definition], {
      "battery-type": ["LiFePO4"],
    });

    expect(filtered).toHaveLength(147);
  });
});
