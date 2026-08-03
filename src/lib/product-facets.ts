import type { Product, ProductCategory } from "./types";

type FacetableProduct = Pick<Product, "specs">;

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
  "solar-stations": {
    category: "solar-stations",
    title: "Характеристики сонячної станції",
    description:
      "Оберіть потужність станції, запас енергії та кількість фаз.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
      },
      {
        id: "station-power",
        label: "Потужність станції",
        specLabels: ["Потужність станції", "Потужність"],
        sort: "natural",
      },
      {
        id: "stored-energy",
        label: "Запас енергії батарей",
        specLabels: ["Запас енергії батарей"],
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
  inverters: {
    category: "inverters",
    title: "Характеристики інвертора",
    description:
      "Оберіть тип, потужність і параметри акумуляторної системи.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
        valueAliases: {
          DEYE: "Deye",
          GROWATT: "Growatt",
        },
      },
      {
        id: "inverter-type",
        label: "Тип інвертора",
        specLabels: ["Тип"],
        sort: "count",
      },
      {
        id: "nominal-power",
        label: "Номінальна потужність",
        specLabels: ["Номінальна потужність"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "battery-voltage",
        label: "Вихідна напруга АКБ",
        specLabels: ["Вихідна напруга АКБ"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "phase-count",
        label: "Кількість фаз",
        specLabels: ["Кількість фаз"],
        sort: "natural",
      },
      {
        id: "warranty",
        label: "Гарантія",
        specLabels: ["Гарантія"],
        sort: "natural",
      },
    ],
  },
  "solar-batteries": {
    category: "solar-batteries",
    title: "Характеристики акумулятора",
    description:
      "Звузьте вибір за технологією, запасом енергії, напругою та ресурсом.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
        valueAliases: {
          DEYE: "Deye",
        },
      },
      {
        id: "battery-technology",
        label: "Технологія",
        specLabels: ["Технологія"],
        sort: "count",
      },
      {
        id: "battery-capacity",
        label: "Ємність батареї",
        specLabels: ["Ємність батареї"],
        sort: "natural",
      },
      {
        id: "battery-energy",
        label: "Енергія батареї",
        specLabels: ["Енергія батареї"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "cycle-life",
        label: "Цикл життя",
        specLabels: ["Цикл життя"],
        sort: "natural",
      },
      {
        id: "nominal-voltage",
        label: "Номінальна напруга",
        specLabels: ["Номінальна напруга"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "max-charge-current",
        label: "Максимальний зарядний струм",
        specLabels: ["Зарядний струм (макс.)"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "warranty",
        label: "Гарантія",
        specLabels: ["Гарантія"],
        sort: "natural",
      },
    ],
  },
  "solar-panels": {
    category: "solar-panels",
    title: "Характеристики сонячної панелі",
    description:
      "Порівняйте панелі за виробником, потужністю, захистом і гарантією.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
        valueAliases: {
          Longi: "Longi Solar",
        },
      },
      {
        id: "panel-power",
        label: "Потужність",
        specLabels: ["Потужність"],
        sort: "natural",
        initialValueLimit: 8,
      },
      {
        id: "protection-rating",
        label: "Захист від вологи та пилу",
        specLabels: ["Ступінь захисту від вологи та пилу"],
        sort: "natural",
      },
      {
        id: "warranty",
        label: "Гарантія",
        specLabels: ["Гарантія"],
        sort: "natural",
      },
    ],
  },
  "solar-accessories": {
    category: "solar-accessories",
    title: "Характеристики аксесуара",
    description:
      "Оберіть аксесуар за виробником, призначенням і сумісністю.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
        valueAliases: {
          DEYE: "Deye",
        },
      },
      {
        id: "purpose",
        label: "Призначення",
        specLabels: ["Призначення"],
        sort: "count",
      },
      {
        id: "compatibility",
        label: "Сумісність",
        specLabels: ["Сумісність"],
        sort: "count",
      },
      {
        id: "warranty",
        label: "Гарантія",
        specLabels: ["Гарантія"],
        sort: "natural",
      },
    ],
  },
  "backup-power": {
    category: "backup-power",
    title: "Характеристики резервного живлення",
    description:
      "Оберіть потужність інвертора, запас енергії та кількість фаз.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
      },
      {
        id: "inverter-power",
        label: "Потужність інвертора",
        specLabels: ["Потужність інвертора"],
        sort: "natural",
      },
      {
        id: "stored-energy",
        label: "Запас енергії батарей",
        specLabels: ["Запас енергії батарей"],
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
  "ev-charging": {
    category: "ev-charging",
    title: "Характеристики зарядної станції",
    description:
      "Порівняйте зарядні станції за брендом, потужністю, фазністю та роз’ємом.",
    mobileFacetLimit: 4,
    facets: [
      {
        id: "brand",
        label: "Виробник (бренд)",
        specLabels: ["Бренд", "Виробник (бренд)"],
        sort: "count",
      },
      {
        id: "charging-power",
        label: "Потужність",
        specLabels: ["Потужність"],
        sort: "natural",
      },
      {
        id: "phase-count",
        label: "Кількість фаз",
        specLabels: ["Кількість фаз"],
        sort: "natural",
      },
      {
        id: "connector-type",
        label: "Тип роз’єму",
        specLabels: ["Тип роз’єму"],
        sort: "count",
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
  product: FacetableProduct,
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
  product: FacetableProduct,
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

export function filterProductsByFacets<T extends FacetableProduct>(
  products: readonly T[],
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
  products: readonly FacetableProduct[],
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
