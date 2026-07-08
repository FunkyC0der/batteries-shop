"use client";

import { useMemo, useState } from "react";

import type { Product, Service } from "@/lib/types";

import { ProductCard } from "./product-card";
import { ServiceCard } from "./service-card";

type CategoryOption = {
  value: string;
  label: string;
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
};

type CatalogBrowserProps = ProductCatalogProps | ServiceCatalogProps;

function normalize(value: string) {
  return value.trim().toLocaleLowerCase("uk-UA");
}

export function CatalogBrowser(props: CatalogBrowserProps) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

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
      const categoryMatches = category === "all" || item.category === category;
      const text = [
        item.title,
        item.shortDescription,
        item.description,
        item.duration,
        ...item.includes,
      ].join(" ");

      return (
        categoryMatches &&
        (!normalizedQuery || normalize(text).includes(normalizedQuery))
      );
    });
  }, [category, props, query]);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-foreground">
              Пошук
            </span>
            <input
              className="min-h-12 rounded-full border border-border bg-background px-4 text-base outline-none transition placeholder:text-muted-foreground focus:border-primary"
              onChange={(event) => setQuery(event.target.value)}
              placeholder={
                props.kind === "products"
                  ? "Наприклад: теплолічильник, 3.6 V, конектор"
                  : "Наприклад: пайка, діагностика, підбір"
              }
              value={query}
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {props.categories.map((option) => (
              <button
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
        </div>
      </div>

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
        </div>
      )}
    </div>
  );
}
