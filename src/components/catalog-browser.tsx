"use client";

import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";

import type {
  Product,
  Service,
  ServiceDirection,
} from "@/lib/types";

import { ProductCard } from "./product-card";
import { ProductFacetControls } from "./product-facet-controls";
import { ServiceCard } from "./service-card";
import {
  buildProductFacetModels,
  filterProductsByFacets,
  getProductFacetConfig,
  type ProductFacetSelection,
} from "@/lib/product-facets";

type CategoryOption = {
  value: string;
  label: string;
  direction?: ServiceDirection;
};

type DirectionOption = {
  value: ServiceDirection | "all";
  label: string;
  description: string;
};

type ProductCatalogProps = {
  kind: "products";
  items: Product[];
  categories: readonly CategoryOption[];
  directions: readonly DirectionOption[];
  initialDirection?: ServiceDirection | "all";
  initialQuery?: string;
};

type ServiceCatalogProps = {
  kind: "services";
  items: Service[];
  categories: readonly CategoryOption[];
  directions: readonly DirectionOption[];
  initialDirection?: ServiceDirection | "all";
  initialQuery?: string;
};

type CatalogBrowserProps = ProductCatalogProps | ServiceCatalogProps;

function normalize(value: string) {
  return value.trim().toLocaleLowerCase("uk-UA");
}

export function CatalogBrowser(props: CatalogBrowserProps) {
  const [category, setCategory] = useState("all");
  const [direction, setDirection] = useState<ServiceDirection | "all">(
    props.initialDirection ?? "all",
  );
  const [query, setQuery] = useState(props.initialQuery ?? "");
  const [facetSelection, setFacetSelection] =
    useState<ProductFacetSelection>({});
  const resultSummaryRef = useRef<HTMLParagraphElement>(null);
  const directions = props.directions;
  const categories = props.categories;

  useEffect(() => {
    const syncFromUrl = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const nextDirection = searchParams.get("direction");
      const validDirection = directions.some(
        (option) => option.value === nextDirection,
      );
      const resolvedDirection = validDirection
        ? (nextDirection as ServiceDirection | "all")
        : "all";
      const nextCategory = searchParams.get("category");
      const validCategory = categories.some(
        (option) =>
          option.value === nextCategory &&
          option.value !== "all" &&
          option.direction === resolvedDirection,
      );

      setDirection(resolvedDirection);
      setQuery(searchParams.get("q") ?? "");
      setCategory(validCategory ? (nextCategory ?? "all") : "all");
      setFacetSelection({});
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [categories, directions]);

  function updateCatalogUrl(
    nextDirection: ServiceDirection | "all",
    nextQuery: string,
    mode: "push" | "replace",
    nextCategory = category,
  ) {
    const url = new URL(window.location.href);
    const normalizedQuery = nextQuery.trim();

    if (nextDirection === "all") {
      url.searchParams.delete("direction");
    } else {
      url.searchParams.set("direction", nextDirection);
    }

    if (normalizedQuery) {
      url.searchParams.set("q", normalizedQuery);
    } else {
      url.searchParams.delete("q");
    }

    if (nextDirection !== "all" && nextCategory !== "all") {
      url.searchParams.set("category", nextCategory);
    } else {
      url.searchParams.delete("category");
    }

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    if (mode === "push") {
      window.history.pushState({}, "", nextUrl);
    } else {
      window.history.replaceState({}, "", nextUrl);
    }
  }

  const visibleCategories = useMemo(() => {
    if (direction === "all") {
      return props.categories;
    }

    return props.categories.filter(
      (option) =>
        option.value === "all" || option.direction === direction,
    );
  }, [direction, props.categories]);

  const baseFiltered = useMemo(() => {
    const normalizedQuery = normalize(query);

    if (props.kind === "products") {
      return props.items.filter((item) => {
        const directionMatches =
          direction === "all" || item.direction === direction;
        const categoryMatches =
          category === "all" || item.category === category;
        const text = [
          item.title,
          item.shortDescription,
          item.description,
          ...item.compatibility,
          ...(item.configurations?.flatMap((configuration) => [
            configuration.label,
            ...configuration.equipment,
          ]) ?? []),
          ...item.specs.map((spec) => `${spec.label} ${spec.value}`),
        ].join(" ");

        return (
          directionMatches &&
          categoryMatches &&
          (!normalizedQuery || normalize(text).includes(normalizedQuery))
        );
      });
    }

    return props.items.filter((item) => {
      const directionMatches =
        direction === "all" || item.direction === direction;
      const categoryMatches = category === "all" || item.category === category;
      const text = [
        item.title,
        item.shortDescription,
        item.description,
        item.duration,
        ...item.includes,
      ].join(" ");

      return (
        directionMatches &&
        categoryMatches &&
        (!normalizedQuery || normalize(text).includes(normalizedQuery))
      );
    });
  }, [category, direction, props.items, props.kind, query]);

  const facetConfig =
    props.kind === "products" ? getProductFacetConfig(category) : undefined;
  const facetModels = useMemo(
    () =>
      props.kind === "products" && facetConfig
        ? buildProductFacetModels(
            baseFiltered as Product[],
            facetConfig.facets,
            facetSelection,
          )
        : [],
    [baseFiltered, facetConfig, facetSelection, props.kind],
  );
  const filtered = useMemo(
    () =>
      props.kind === "products" && facetConfig
        ? filterProductsByFacets(
            baseFiltered as Product[],
            facetConfig.facets,
            facetSelection,
          )
        : baseFiltered,
    [baseFiltered, facetConfig, facetSelection, props.kind],
  );
  const activeFacetCount = Object.values(facetSelection).reduce(
    (count, values) => count + values.length,
    0,
  );

  const activeDirection = directions.find(
    (option) => option.value === direction,
  );
  const activeCategory = visibleCategories.find(
    (option) => option.value === category,
  );
  const directionLabel =
    activeDirection?.label ??
    (props.kind === "products" ? "Усі товари" : "Усі послуги");
  const categoryPath =
    category !== "all" && activeCategory
      ? `${directionLabel} — ${activeCategory.label}`
      : directionLabel;

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateCatalogUrl(direction, query, "replace");
    resultSummaryRef.current?.focus();
  }

  function selectDirection(nextDirection: ServiceDirection | "all") {
    setDirection(nextDirection);
    setCategory("all");
    setFacetSelection({});
    updateCatalogUrl(nextDirection, query, "push", "all");
  }

  function selectCategory(nextCategory: string) {
    setCategory(nextCategory);
    setFacetSelection({});
    updateCatalogUrl(direction, query, "push", nextCategory);
  }

  function toggleFacetValue(facetId: string, value: string) {
    setFacetSelection((current) => {
      const selectedValues = current[facetId] ?? [];
      const nextValues = selectedValues.includes(value)
        ? selectedValues.filter((selectedValue) => selectedValue !== value)
        : [...selectedValues, value];

      if (nextValues.length === 0) {
        const nextSelection = { ...current };
        delete nextSelection[facetId];
        return nextSelection;
      }

      return { ...current, [facetId]: nextValues };
    });
  }

  function searchAllItems() {
    selectDirection("all");
    resultSummaryRef.current?.focus();
  }

  function renderResults() {
    if (filtered.length > 0) {
      return (
        <div
          className={
            facetConfig
              ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {props.kind === "products"
            ? filtered.map((item) => (
                <ProductCard key={item.id} product={item as Product} />
              ))
            : filtered.map((item) => (
                <ServiceCard key={item.id} service={item as Service} />
              ))}
        </div>
      );
    }

    return (
      <div className="rounded-2xl border border-border bg-muted p-8 text-center">
        <p className="text-lg font-semibold text-foreground">
          Нічого не знайдено
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Спробуйте змінити категорію, характеристики або пошуковий запит.
        </p>
        {activeFacetCount ? (
          <button
            className="mt-5 min-h-12 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            onClick={() => setFacetSelection({})}
            type="button"
          >
            Очистити фільтри характеристик
          </button>
        ) : direction !== "all" && query ? (
          <button
            className="mt-5 min-h-12 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            onClick={searchAllItems}
            type="button"
          >
            Шукати серед усіх {props.items.length}{" "}
            {props.kind === "products" ? "товарів" : "послуг"}
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="text-sm font-semibold text-foreground">
          {props.kind === "products" ? "Напрям товарів" : "Напрям послуг"}
        </legend>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {directions.map((option) => {
              const count =
                option.value === "all"
                  ? props.items.length
                  : props.items.filter(
                      (item) => item.direction === option.value,
                    ).length;
              const selected = direction === option.value;

              return (
                <label className="cursor-pointer" key={option.value}>
                  <input
                    checked={selected}
                    className="peer sr-only"
                    name={`${props.kind}-direction`}
                    onChange={() => selectDirection(option.value)}
                    type="radio"
                    value={option.value}
                  />
                  <span
                    className={
                      selected
                        ? "block min-h-full rounded-2xl border border-primary bg-primary p-5 text-primary-foreground shadow-sm peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2"
                        : "block min-h-full rounded-2xl border border-border bg-card p-5 text-foreground transition hover:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2"
                    }
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="text-base font-semibold">
                        {option.label}
                      </span>
                      <span
                        className={
                          selected
                            ? "rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold"
                            : "rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground"
                        }
                      >
                        {count}
                      </span>
                    </span>
                    <span
                      className={
                        selected
                          ? "mt-2 block text-sm leading-6 text-primary-foreground/85"
                          : "mt-2 block text-sm leading-6 text-muted-foreground"
                      }
                    >
                      {option.description}
                    </span>
                  </span>
                </label>
              );
          })}
        </div>
      </fieldset>

      <form
        className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5"
        onSubmit={handleSearchSubmit}
      >
        <div className="grid min-w-0 gap-4">
          <label className="grid min-w-0 gap-2">
            <span className="sr-only">
              {props.kind === "products"
                ? "Пошук товарів"
                : "Пошук послуг"}
            </span>
            <span className="flex min-w-0 gap-2">
              <input
                className="min-h-12 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-base outline-none transition placeholder:text-muted-foreground focus:border-primary"
                onChange={(event) => {
                  const nextQuery = event.target.value;
                  setQuery(nextQuery);
                  updateCatalogUrl(direction, nextQuery, "replace");
                }}
                placeholder={
                  props.kind === "products"
                    ? "Наприклад: 10 кВт, Deye, сонячна станція"
                    : "Наприклад: енергоаудит, СЕС, повірка"
                }
                type="search"
                value={query}
              />
              <button
                className="min-h-12 shrink-0 rounded-full bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-primary sm:px-5"
                type="submit"
              >
                Знайти
              </button>
            </span>
          </label>

          {direction !== "all" ? (
            <div className="min-w-0 max-w-full overflow-hidden rounded-2xl border border-border bg-background p-3 sm:p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Підкатегорія
              </span>

              <div
                aria-label="Підкатегорія"
                className="mt-3 flex w-full min-w-0 max-w-full gap-2 overflow-x-auto pb-1"
              >
                {visibleCategories.map((option) => (
                  <button
                    aria-pressed={category === option.value}
                    className={
                      category === option.value
                        ? "min-h-12 shrink-0 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
                        : "min-h-12 shrink-0 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
                    }
                    key={option.value}
                    onClick={() => selectCategory(option.value)}
                    type="button"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </form>

      <p
        aria-live="polite"
        className="grid gap-1 text-sm font-semibold text-muted-foreground outline-none"
        ref={resultSummaryRef}
        tabIndex={-1}
      >
        <span>
          {props.kind === "products"
            ? `Знайдено товарів: ${filtered.length}`
            : `Знайдено послуг: ${filtered.length}`}
        </span>
        <span>{categoryPath}</span>
      </p>

      {props.kind === "products" && facetConfig ? (
        <div className="grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <ProductFacetControls
            config={facetConfig}
            models={facetModels}
            onReset={() => setFacetSelection({})}
            onToggle={toggleFacetValue}
            resultCount={filtered.length}
            selection={facetSelection}
          />
          <div className="min-w-0">{renderResults()}</div>
        </div>
      ) : (
        renderResults()
      )}
    </div>
  );
}
