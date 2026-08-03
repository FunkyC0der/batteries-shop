"use client";

import {
  type FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { ServiceDirection } from "@/lib/types";
import type {
  ProductListItem,
  ServiceListItem,
} from "@/lib/catalog/list-projection";
import {
  PRODUCTS_CATALOG_URL,
  SERVICES_CATALOG_URL,
} from "@/lib/catalog/list-projection";

import { ProductCard } from "./product-card";
import { CatalogPagination } from "./catalog-pagination";
import { ProductFacetControls } from "./product-facet-controls";
import { ServiceCard } from "./service-card";
import {
  buildProductFacetModels,
  filterProductsByFacets,
  getProductFacetConfig,
  type ProductFacetSelection,
} from "@/lib/product-facets";
import {
  buildCatalogHref,
  buildProductDetailHref,
  clampCatalogPage,
  getCatalogPageForIndex,
  getProductAnchorId,
  parseCatalogPage,
  parseFacetSelection,
  parseReturnProductSlug,
  PRODUCTS_PER_PAGE,
} from "@/lib/catalog-navigation";

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
  items: ProductListItem[];
  catalogUrl?: string;
  categories: readonly CategoryOption[];
  directions: readonly DirectionOption[];
  initialDirection?: ServiceDirection | "all";
  initialQuery?: string;
};

type ServiceCatalogProps = {
  kind: "services";
  items: ServiceListItem[];
  catalogUrl?: string;
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
  const catalogUrl =
    props.catalogUrl ??
    (props.kind === "products" ? PRODUCTS_CATALOG_URL : SERVICES_CATALOG_URL);
  const [items, setItems] = useState(props.items);
  const [catalogLoaded, setCatalogLoaded] = useState(false);
  const catalogLoadPromise = useRef<Promise<void> | null>(null);
  const [category, setCategory] = useState("all");
  const [direction, setDirection] = useState<ServiceDirection | "all">(
    props.initialDirection ?? "all",
  );
  const [query, setQuery] = useState(props.initialQuery ?? "");
  const [facetSelection, setFacetSelection] =
    useState<ProductFacetSelection>({});
  const [page, setPage] = useState(1);
  const [returnProductSlug, setReturnProductSlug] = useState<string>();
  const resultSummaryRef = useRef<HTMLParagraphElement>(null);
  const directions = props.directions;
  const categories = props.categories;

  const ensureCatalogLoaded = useCallback(() => {
    if (catalogLoaded || catalogLoadPromise.current) {
      return catalogLoadPromise.current ?? Promise.resolve();
    }

    catalogLoadPromise.current = fetch(catalogUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load catalog: ${response.status}`);
        }
        return response.json();
      })
      .then((payload: ProductListItem[] | ServiceListItem[]) => {
        setItems(payload);
        setCatalogLoaded(true);
      })
      .catch((error) => {
        console.error(error);
        catalogLoadPromise.current = null;
      });

    return catalogLoadPromise.current;
  }, [catalogLoaded, catalogUrl]);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const run = () => {
      if (!cancelled) {
        void ensureCatalogLoaded();
      }
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(run);
    } else {
      timeoutId = setTimeout(run, 1_000);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [ensureCatalogLoaded]);

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

      const resolvedCategory = validCategory ? (nextCategory ?? "all") : "all";
      const nextFacetConfig =
        props.kind === "products"
          ? getProductFacetConfig(resolvedCategory)
          : undefined;

      setDirection(resolvedDirection);
      setQuery(searchParams.get("q") ?? "");
      setCategory(resolvedCategory);
      setFacetSelection(
        nextFacetConfig
          ? parseFacetSelection(
              searchParams,
              nextFacetConfig.facets.map((facet) => facet.id),
            )
          : {},
      );
      setPage(parseCatalogPage(searchParams.get("page")));
      setReturnProductSlug(
        props.kind === "products"
          ? parseReturnProductSlug(searchParams, window.location.hash)
          : undefined,
      );

      if (
        resolvedDirection !== "all" ||
        resolvedCategory !== "all" ||
        searchParams.get("q") ||
        searchParams.get("page") ||
        [...searchParams.keys()].some((key) => key.startsWith("facet."))
      ) {
        void ensureCatalogLoaded();
      }
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [categories, directions, ensureCatalogLoaded, props.kind]);

  function updateCatalogUrl(
    nextDirection: ServiceDirection | "all",
    nextQuery: string,
    mode: "push" | "replace",
    nextCategory = category,
    nextPage = page,
    nextFacetSelection = facetSelection,
    nextReturnProductSlug?: string,
  ) {
    const nextUrl = buildCatalogHref({
      direction: nextDirection,
      category: nextCategory,
      query: nextQuery,
      page: nextPage,
      facetSelection: nextFacetSelection,
      returnToSlug: nextReturnProductSlug,
    });
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
      return (items as ProductListItem[]).filter((item) => {
        const directionMatches =
          direction === "all" || item.direction === direction;
        const categoryMatches =
          category === "all" || item.category === category;

        return (
          directionMatches &&
          categoryMatches &&
          (!normalizedQuery || item.searchText.includes(normalizedQuery))
        );
      });
    }

    return (items as ServiceListItem[]).filter((item) => {
      const directionMatches =
        direction === "all" || item.direction === direction;
      const categoryMatches = category === "all" || item.category === category;

      return (
        directionMatches &&
        categoryMatches &&
        (!normalizedQuery || item.searchText.includes(normalizedQuery))
      );
    });
  }, [category, direction, items, props.kind, query]);

  const facetConfig =
    props.kind === "products" ? getProductFacetConfig(category) : undefined;
  const facetModels = useMemo(
    () =>
      props.kind === "products" && facetConfig
        ? buildProductFacetModels(
            baseFiltered as ProductListItem[],
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
            baseFiltered as ProductListItem[],
            facetConfig.facets,
            facetSelection,
          )
        : baseFiltered,
    [baseFiltered, facetConfig, facetSelection, props.kind],
  );
  const totalPages =
    props.kind === "products"
      ? Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE))
      : 1;
  const returnProductIndex =
    props.kind === "products" && returnProductSlug
      ? (filtered as ProductListItem[]).findIndex(
          (product) => product.slug === returnProductSlug,
        )
      : -1;
  const currentPage =
    returnProductIndex >= 0
      ? getCatalogPageForIndex(returnProductIndex)
      : clampCatalogPage(page, totalPages);
  const paginatedResults =
    props.kind === "products"
      ? filtered.slice(
          (currentPage - 1) * PRODUCTS_PER_PAGE,
          currentPage * PRODUCTS_PER_PAGE,
        )
      : filtered;

  useEffect(() => {
    if (
      props.kind !== "products" ||
      !returnProductSlug ||
      returnProductIndex >= 0
    ) {
      return;
    }

    const fallbackPage = clampCatalogPage(page, totalPages);
    window.history.replaceState(
      {},
      "",
      buildCatalogHref({
        direction,
        category,
        query,
        page: fallbackPage,
        facetSelection,
      }),
    );
    window.requestAnimationFrame(() => {
      setPage(fallbackPage);
      setReturnProductSlug(undefined);
      resultSummaryRef.current?.focus({ preventScroll: true });
      resultSummaryRef.current?.scrollIntoView({ block: "start" });
    });
  }, [
    category,
    direction,
    facetSelection,
    page,
    props.kind,
    query,
    returnProductIndex,
    returnProductSlug,
    totalPages,
  ]);
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
    void ensureCatalogLoaded();
    setPage(1);
    setReturnProductSlug(undefined);
    updateCatalogUrl(direction, query, "replace", category, 1);
    resultSummaryRef.current?.focus();
  }

  function selectDirection(nextDirection: ServiceDirection | "all") {
    void ensureCatalogLoaded();
    setDirection(nextDirection);
    setCategory("all");
    setFacetSelection({});
    setPage(1);
    setReturnProductSlug(undefined);
    updateCatalogUrl(nextDirection, query, "push", "all", 1, {});
  }

  function selectCategory(nextCategory: string) {
    void ensureCatalogLoaded();
    setCategory(nextCategory);
    setFacetSelection({});
    setPage(1);
    setReturnProductSlug(undefined);
    updateCatalogUrl(direction, query, "push", nextCategory, 1, {});
  }

  function toggleFacetValue(facetId: string, value: string) {
    void ensureCatalogLoaded();
    const selectedValues = facetSelection[facetId] ?? [];
    const nextValues = selectedValues.includes(value)
      ? selectedValues.filter((selectedValue) => selectedValue !== value)
      : [...selectedValues, value];
    const nextSelection = { ...facetSelection };

    if (nextValues.length === 0) {
      delete nextSelection[facetId];
    } else {
      nextSelection[facetId] = nextValues;
    }

    setFacetSelection(nextSelection);
    setPage(1);
    setReturnProductSlug(undefined);
    updateCatalogUrl(
      direction,
      query,
      "replace",
      category,
      1,
      nextSelection,
    );
  }

  function resetFacets() {
    setFacetSelection({});
    setPage(1);
    setReturnProductSlug(undefined);
    updateCatalogUrl(direction, query, "replace", category, 1, {});
  }

  function selectPage(nextPage: number) {
    void ensureCatalogLoaded();
    const resolvedPage = clampCatalogPage(nextPage, totalPages);
    setPage(resolvedPage);
    setReturnProductSlug(undefined);
    updateCatalogUrl(
      direction,
      query,
      "push",
      category,
      resolvedPage,
      facetSelection,
    );
    resultSummaryRef.current?.focus({ preventScroll: true });
    resultSummaryRef.current?.scrollIntoView({ block: "start" });
  }

  const handleReturnTargetMount = useCallback(
    (element: HTMLElement | null) => {
      if (!element || !returnProductSlug) {
        return;
      }

      window.requestAnimationFrame(() => {
        if (!element.isConnected) {
          return;
        }

        window.history.replaceState(
          {},
          "",
          buildCatalogHref({
            direction,
            category,
            query,
            page: currentPage,
            facetSelection,
            anchorSlug: returnProductSlug,
          }),
        );
        setPage(currentPage);
        setReturnProductSlug(undefined);

        window.requestAnimationFrame(() => {
          if (!element.isConnected) {
            return;
          }

          element.focus({ preventScroll: true });
          element.scrollIntoView({ block: "center" });
        });
      });
    },
    [
      category,
      currentPage,
      direction,
      facetSelection,
      query,
      returnProductSlug,
    ],
  );

  function searchAllItems() {
    selectDirection("all");
    resultSummaryRef.current?.focus();
  }

  function renderResults() {
    if (paginatedResults.length > 0) {
      return (
        <>
          <div
            className={
              facetConfig
                ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
                : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {props.kind === "products"
              ? paginatedResults.map((item) => {
                  const product = item as ProductListItem;
                  const returnHref = buildCatalogHref({
                    direction,
                    category,
                    query,
                    page: currentPage,
                    facetSelection,
                    returnToSlug: product.slug,
                  });

                  return (
                    <ProductCard
                      cardId={getProductAnchorId(product.slug)}
                      detailHref={buildProductDetailHref(
                        product.slug,
                        returnHref,
                      )}
                      isReturnTarget={returnProductSlug === product.slug}
                      key={product.id}
                      onReturnTargetMount={handleReturnTargetMount}
                      product={product}
                    />
                  );
                })
              : paginatedResults.map((item) => (
                  <ServiceCard
                    key={item.id}
                    service={item as ServiceListItem}
                  />
                ))}
          </div>
          {props.kind === "products" ? (
            <CatalogPagination
              currentPage={currentPage}
              getPageHref={(nextPage) =>
                buildCatalogHref({
                  direction,
                  category,
                  query,
                  page: nextPage,
                  facetSelection,
                })
              }
              onPageChange={selectPage}
              totalPages={totalPages}
            />
          ) : null}
        </>
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
            onClick={resetFacets}
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
            Шукати серед усіх {items.length}{" "}
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
                  ? items.length
                  : items.filter(
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
                  void ensureCatalogLoaded();
                  setQuery(nextQuery);
                  setPage(1);
                  setReturnProductSlug(undefined);
                  updateCatalogUrl(
                    direction,
                    nextQuery,
                    "replace",
                    category,
                    1,
                    facetSelection,
                  );
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
        {props.kind === "products" && totalPages > 1 ? (
          <span>
            Сторінка {currentPage} з {totalPages}
          </span>
        ) : null}
      </p>

      {props.kind === "products" && facetConfig ? (
        <div className="grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <ProductFacetControls
            config={facetConfig}
            models={facetModels}
            onReset={resetFacets}
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
