import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import {
  filterProducts,
  filterServices,
  productCategories,
} from "@/lib/catalog";
import { toProductListItem } from "@/lib/catalog/list-projection";
import {
  getProductCategoryDirection,
  PRODUCT_CATEGORY_VALUES,
} from "@/lib/catalog/taxonomy";
import { productCategoryIntros } from "@/lib/catalog/category-content";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbJsonLd, buildCategoryJsonLd } from "@/lib/seo/json-ld";
import type { ProductCategory } from "@/lib/types";

const MIN_INDEXABLE_PRODUCTS = 3;

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_CATEGORY_VALUES.filter(
    (category) => filterProducts({ category }).length > 0,
  ).map((category) => ({ category }));
}

function getCategoryLabel(category: ProductCategory) {
  return productCategories.find((item) => item.value === category)?.label ?? category;
}

function firstSentences(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  const cut = text.slice(0, maxLength);
  const lastPeriod = cut.lastIndexOf(". ");
  return lastPeriod > 40 ? `${cut.slice(0, lastPeriod + 1)}` : `${cut}…`;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const products = filterProducts({ category: category as ProductCategory });

  if (products.length === 0) {
    return { title: "Категорію не знайдено" };
  }

  const label = getCategoryLabel(category as ProductCategory);
  const intro = productCategoryIntros[category as ProductCategory];

  return buildPageMetadata({
    title: label,
    description: firstSentences(intro, 160),
    path: `/products/category/${category}/`,
    noindex: products.length < MIN_INDEXABLE_PRODUCTS,
  });
}

export default async function ProductCategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;
  const typedCategory = category as ProductCategory;
  const products = filterProducts({ category: typedCategory });

  if (products.length === 0) {
    notFound();
  }

  const label = getCategoryLabel(typedCategory);
  const intro = productCategoryIntros[typedCategory];
  const direction = getProductCategoryDirection(typedCategory);
  const relatedServices = direction
    ? filterServices({ direction }).slice(0, 6)
    : [];
  const items = products.map(toProductListItem);

  const breadcrumbs = [
    { label: "Головна", href: "/" },
    { label: "Товари", href: "/products" },
    { label },
  ];

  return (
    <>
      <JsonLd
        data={buildCategoryJsonLd({ category, label, products })}
      />
      <JsonLd
        data={buildBreadcrumbJsonLd(
          breadcrumbs.map((item) => ({
            name: item.label,
            url: absoluteUrl(item.href ?? `/products/category/${category}/`),
          })),
        )}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {label}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          {intro}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {relatedServices.length > 0 ? (
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-xl font-semibold text-foreground">
              Супутні послуги
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <li key={service.id}>
                  <Link
                    className="block rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                    href={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </section>

      <CtaPanel />
    </>
  );
}
