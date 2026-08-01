import type { Product, ProductCategory } from "./types";

export type ProductFacetDefinition = {
  id: string;
  label: string;
  specLabels: readonly string[];
  sort?: "alphabetical" | "count" | "natural";
  initialValueLimit?: number;
  valueAliases?: Readonly<Record<string, string>>;
};

export type ProductFacetConfig = {
  category: ProductCategory;
  title: string;
  description: string;
  mobileFacetLimit?: number;
  facets: readonly ProductFacetDefinition[];
};

export type ProductFacetSelection = Record<string, readonly string[]>;

export type ProductFacetOption = {
  value: string;
  count: number;
  selected: boolean;
};

export type ProductFacetModel = {
  definition: ProductFacetDefinition;
  options: ProductFacetOption[];
};

export const productFacetConfigs: Partial<
  Record<ProductCategory, ProductFacetConfig>
> = {
  "energy-storage-systems": {
    category: "energy-storage-systems",
    title: "Характеристики системи",
    description:
      "Уточніть технічні параметри. У межах одного фільтра можна вибрати кілька значень.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд"],
        sort: "count",
      },
      {
        id: "ac-power",
        label: "Номінальна потужність АС",
        specLabels: ["Номінальна потужність АС"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "stored-energy",
        label: "Запас енергії батарей",
        specLabels: [
          "Сумарна енергія, що зберігається в блоку батарей",
        ],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "system-type",
        label: "Тип системи",
        specLabels: ["Тип"],
        sort: "count",
      },
      {
        id: "battery-count",
        label: "Кількість батарей",
        specLabels: ["Кількість батарей"],
        sort: "natural",
      },
      {
        id: "phase-count",
        label: "Кількість фаз",
        specLabels: ["Кількість фаз"],
        sort: "natural",
      },
    ],
  },
};

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function getProductFacetConfig(category: string) {
  return productFacetConfigs[category as ProductCategory];
}

export function getProductFacetValue(
  product: Product,
  definition: ProductFacetDefinition,
) {
  const spec = product.specs.find((candidate) =>
    definition.specLabels.includes(candidate.label),
  );

  if (!spec?.value.trim()) {
    return undefined;
  }

  const rawValue = normalize(spec.value);
  return definition.valueAliases?.[rawValue] ?? rawValue;
}

export function matchesProductFacetSelection(
  product: Product,
  definitions: readonly ProductFacetDefinition[],
  selection: ProductFacetSelection,
  excludedFacetId?: string,
) {
  return definitions.every((definition) => {
    if (definition.id === excludedFacetId) {
      return true;
    }

    const selectedValues = selection[definition.id] ?? [];
    if (selectedValues.length === 0) {
      return true;
    }

    const productValue = getProductFacetValue(product, definition);
    return productValue ? selectedValues.includes(productValue) : false;
  });
}

export function filterProductsByFacets(
  products: readonly Product[],
  definitions: readonly ProductFacetDefinition[],
  selection: ProductFacetSelection,
  excludedFacetId?: string,
) {
  return products.filter((product) =>
    matchesProductFacetSelection(
      product,
      definitions,
      selection,
      excludedFacetId,
    ),
  );
}

function compareOptions(
  first: ProductFacetOption,
  second: ProductFacetOption,
  sort: ProductFacetDefinition["sort"],
) {
  if (sort === "count" && first.count !== second.count) {
    return second.count - first.count;
  }

  return new Intl.Collator("uk-UA", {
    numeric: sort === "natural",
    sensitivity: "base",
  }).compare(first.value, second.value);
}

export function buildProductFacetModels(
  products: readonly Product[],
  definitions: readonly ProductFacetDefinition[],
  selection: ProductFacetSelection,
): ProductFacetModel[] {
  return definitions.map((definition) => {
    const allValues = new Set(
      products
        .map((product) => getProductFacetValue(product, definition))
        .filter((value): value is string => Boolean(value)),
    );
    const productsWithoutOwnFacet = filterProductsByFacets(
      products,
      definitions,
      selection,
      definition.id,
    );
    const counts = new Map<string, number>();

    for (const product of productsWithoutOwnFacet) {
      const value = getProductFacetValue(product, definition);
      if (value) {
        counts.set(value, (counts.get(value) ?? 0) + 1);
      }
    }

    const selectedValues = selection[definition.id] ?? [];
    const options = [...allValues]
      .map((value) => ({
        value,
        count: counts.get(value) ?? 0,
        selected: selectedValues.includes(value),
      }))
      .sort((first, second) =>
        compareOptions(first, second, definition.sort),
      );

    return { definition, options };
  });
}
