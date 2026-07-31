"use client";

import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";

import type {
  Product,
  Service,
  ServiceDirection,
} from "@/lib/types";

import { ProductCard } from "./product-card";
import { ServiceCard } from "./service-card";

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
    props.kind === "services" ? (props.initialDirection ?? "all") : "all",
  );
  const [query, setQuery] = useState(
    props.kind === "services" ? (props.initialQuery ?? "") : "",
  );
  const resultSummaryRef = useRef<HTMLParagraphElement>(null);
  const directions = props.kind === "services" ? props.directions : [];
  const serviceDirections =
    props.kind === "services" ? props.directions : undefined;

  useEffect(() => {
    if (props.kind !== "services") {
      return;
    }

    const syncFromUrl = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const nextDirection = searchParams.get("direction");
      const validDirection = serviceDirections?.some(
        (option) => option.value === nextDirection,
      );

      setDirection(
        validDirection
          ? (nextDirection as ServiceDirection | "all")
          : "all",
      );
      setQuery(searchParams.get("q") ?? "");
      setCategory("all");
    };

    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [props.kind, serviceDirections]);

  function updateServiceUrl(
    nextDirection: ServiceDirection | "all",
    nextQuery: string,
    mode: "push" | "replace",
  ) {
    if (props.kind !== "services") {
      return;
    }

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

    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    if (mode === "push") {
      window.history.pushState({}, "", nextUrl);
    } else {
      window.history.replaceState({}, "", nextUrl);
    }
  }

  const visibleCategories = useMemo(() => {
    if (props.kind !== "services" || direction === "all") {
      return props.categories;
    }

    return props.categories.filter(
      (option) =>
        option.value === "all" || option.direction === direction,
    );
  }, [direction, props.categories, props.kind]);

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query);

    if (props.kind === "products") {
      return props.items.filter((item) => {
        const categoryMatches =
          category === "all" || item.category === category;
        const text = [
          item.title,
          item.shortDescription,
          item.description,
          ...item.compatibility,
          ...item.specs.map((spec) => `${spec.label} ${spec.value}`),
        ].join(" ");

        return (
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

  const activeDirection = directions.find(
    (option) => option.value === direction,
  );
  const directionLabel = activeDirection?.label ?? "Усі послуги";

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateServiceUrl(direction, query, "replace");
    resultSummaryRef.current?.focus();
  }

  function selectDirection(nextDirection: ServiceDirection | "all") {
    setDirection(nextDirection);
    setCategory("all");
    updateServiceUrl(nextDirection, query, "push");
  }

  function searchAllServices() {
    selectDirection("all");
    resultSummaryRef.current?.focus();
  }

  return (
    <div className="space-y-8">
      {props.kind === "services" ? (
        <fieldset>
          <legend className="text-sm font-semibold text-foreground">
            Напрям послуг
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
                    name="service-direction"
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
      ) : null}

      <form
        className="rounded-2xl border border-border bg-card p-4 sm:p-5"
        onSubmit={handleSearchSubmit}
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-foreground">
              {props.kind === "services"
                ? `Пошук у: ${directionLabel}`
                : "Пошук"}
            </span>
            <span className="flex gap-2">
              <input
                className="min-h-12 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-base outline-none transition placeholder:text-muted-foreground focus:border-primary"
                onChange={(event) => {
                  const nextQuery = event.target.value;
                  setQuery(nextQuery);
                  updateServiceUrl(direction, nextQuery, "replace");
                }}
                placeholder={
                  props.kind === "products"
                    ? "Наприклад: теплолічильник, 3.6 V, конектор"
                    : "Наприклад: енергоаудит, СЕС, повірка"
                }
                type="search"
                value={query}
              />
              <button
                className="min-h-12 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:bg-primary"
                type="submit"
              >
                Знайти
              </button>
            </span>
          </label>

          {props.kind === "products" || direction !== "all" ? (
            <div aria-label="Категорія" className="flex flex-wrap gap-2">
              {visibleCategories.map((option) => (
                <button
                  aria-pressed={category === option.value}
                  className={
                    category === option.value
                      ? "min-h-12 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                      : "min-h-12 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
                  }
                  key={option.value}
                  onClick={() => setCategory(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </form>

      <p
        aria-live="polite"
        className="text-sm font-semibold text-muted-foreground outline-none"
        ref={resultSummaryRef}
        tabIndex={-1}
      >
        {props.kind === "products"
          ? `Знайдено товарів: ${filtered.length}`
          : `Знайдено послуг: ${filtered.length}. Напрям — «${directionLabel}»`}
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {props.kind === "products"
            ? filtered.map((item) => (
                <ProductCard key={item.id} product={item as Product} />
              ))
            : filtered.map((item) => (
                <ServiceCard key={item.id} service={item as Service} />
              ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-muted p-8 text-center">
          <p className="text-lg font-semibold text-foreground">
            Нічого не знайдено
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Спробуйте змінити категорію або пошуковий запит.
          </p>
          {props.kind === "services" && direction !== "all" && query ? (
            <button
              className="mt-5 min-h-12 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
              onClick={searchAllServices}
              type="button"
            >
              Шукати серед усіх {props.items.length} послуг
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
