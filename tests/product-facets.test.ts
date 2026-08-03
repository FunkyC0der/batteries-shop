import { describe, expect, it } from "vitest";

import { products } from "../src/lib/data";
import {
  buildProductFacetModels,
  filterProductsByFacets,
  getProductFacetConfig,
  matchesProductFacetSelection,
  productFacetConfigs,
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

  it("configures useful filters for every imported equipment category", () => {
    const expectedFacets = {
      inverters: [
        "brand",
        "inverter-type",
        "nominal-power",
        "battery-voltage",
        "phase-count",
        "warranty",
      ],
      "solar-batteries": [
        "brand",
        "battery-technology",
        "battery-capacity",
        "battery-energy",
        "cycle-life",
        "nominal-voltage",
        "max-charge-current",
        "warranty",
      ],
      "solar-panels": [
        "brand",
        "panel-power",
        "protection-rating",
        "warranty",
      ],
      "solar-accessories": [
        "brand",
        "purpose",
        "compatibility",
        "warranty",
      ],
    } as const;

    for (const [category, facetIds] of Object.entries(expectedFacets)) {
      const categoryConfig = getProductFacetConfig(category);
      const categoryProducts = products.filter(
        (product) => product.category === category,
      );

      expect(categoryConfig).toBeDefined();
      expect(categoryConfig?.facets.map((facet) => facet.id)).toEqual(facetIds);

      const models = buildProductFacetModels(
        categoryProducts,
        categoryConfig?.facets ?? [],
        {},
      );
      expect(models.every((model) => model.options.length > 1)).toBe(true);
    }
  });

  it("filters imported categories by their source characteristics", () => {
    const cases = [
      {
        category: "inverters",
        facetId: "inverter-type",
        value: "Гібридний",
      },
      {
        category: "solar-batteries",
        facetId: "battery-technology",
        value: "Літій-залізо-фосфатна (LiFePO4)",
      },
      {
        category: "solar-panels",
        facetId: "protection-rating",
        value: "IP68",
      },
      {
        category: "solar-accessories",
        facetId: "purpose",
        value: "Для встановлення акумуляторних батарей",
      },
    ] as const;

    for (const testCase of cases) {
      const categoryConfig = getProductFacetConfig(testCase.category);
      const categoryProducts = products.filter(
        (product) => product.category === testCase.category,
      );
      const filtered = filterProductsByFacets(
        categoryProducts,
        categoryConfig?.facets ?? [],
        { [testCase.facetId]: [testCase.value] },
      );

      expect(filtered.length).toBeGreaterThan(0);
      expect(filtered.length).toBeLessThan(categoryProducts.length);
    }
  });

  it("merges inconsistent source casing into one brand option", () => {
    const inverterConfig = getProductFacetConfig("inverters");
    const inverters = products.filter(
      (product) => product.category === "inverters",
    );
    const brandModel = buildProductFacetModels(
      inverters,
      inverterConfig?.facets ?? [],
      {},
    ).find((model) => model.definition.id === "brand");

    expect(brandModel?.options.some((option) => option.value === "Deye")).toBe(
      true,
    );
    expect(brandModel?.options.some((option) => option.value === "DEYE")).toBe(
      false,
    );
  });

  it("keeps every facet option short and free of leaked description text", () => {
    const embeddedLabel = /\s\p{Lu}\p{Ll}{2,}[\p{L}’'\- ]*:/u;

    for (const category of Object.keys(productFacetConfigs)) {
      const categoryConfig = getProductFacetConfig(category);
      const models = buildProductFacetModels(
        products.filter((product) => product.category === category),
        categoryConfig?.facets ?? [],
        {},
      );

      for (const model of models) {
        for (const option of model.options) {
          expect(option.value).not.toMatch(embeddedLabel);
          expect(option.value.length).toBeLessThanOrEqual(60);
        }
      }
    }
  });

  it("enables declarative filters for Namato backup and station categories", () => {
    for (const category of ["backup-power", "solar-stations"] as const) {
      const categoryConfig = getProductFacetConfig(category);
      const categoryProducts = products.filter(
        (product) => product.category === category,
      );
      const models = buildProductFacetModels(
        categoryProducts,
        categoryConfig?.facets ?? [],
        {},
      );

      expect(categoryConfig).toBeDefined();
      expect(categoryProducts.length).toBeGreaterThan(0);
      expect(models.filter((model) => model.options.length > 0).length).toBeGreaterThanOrEqual(2);
    }
  });
});
