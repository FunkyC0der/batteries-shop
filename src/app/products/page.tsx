import type { Metadata } from "next";
import Link from "next/link";

import { CatalogBrowser } from "@/components/catalog-browser";
import { CtaPanel } from "@/components/cta-panel";
import { SectionHeading } from "@/components/section-heading";
import {
  getInitialCatalogProducts,
} from "@/lib/catalog/list-projection";
import {
  filterProducts,
  productCategories,
  productDirections,
} from "@/lib/catalog";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/catalog/taxonomy";
import { products } from "@/lib/data";
import { buildPageMetadata } from "@/lib/seo/metadata";

const MIN_INDEXABLE_PRODUCTS = 3;

export const metadata: Metadata = buildPageMetadata({
  title: "Товари",
  description:
    "Каталог батарейок, сонячних електростанцій, систем резервного живлення, накопичення енергії та заряджання електромобілів.",
  path: "/products/",
});

export default function ProductsPage() {
  const initialItems = getInitialCatalogProducts(products);
  const indexableCategories = PRODUCT_CATEGORY_VALUES.map((category) => ({
    category,
    label:
      productCategories.find((item) => item.value === category)?.label ??
      category,
    count: filterProducts({ category }).length,
  })).filter((entry) => entry.count >= MIN_INDEXABLE_PRODUCTS);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          description="Оберіть готове енергетичне рішення або комплектуючі, порівняйте доступні конфігурації та перегляньте склад системи. Замовлення й уточнення — телефоном або через месенджер."
          eyebrow="Каталог"
          title="Товари"
        />
        <div className="mt-8">
          <CatalogBrowser
            categories={productCategories}
            directions={productDirections}
            items={initialItems}
            kind="products"
          />
        </div>

        <nav
          aria-labelledby="product-categories-title"
          className="mt-14 border-t border-border pt-10"
        >
          <h2
            className="text-lg font-semibold text-foreground"
            id="product-categories-title"
          >
            Категорії товарів
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {indexableCategories.map((entry) => (
              <li key={entry.category}>
                <Link
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                  href={`/products/category/${entry.category}`}
                >
                  <span>{entry.label}</span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {entry.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <CtaPanel />
    </>
  );
}
