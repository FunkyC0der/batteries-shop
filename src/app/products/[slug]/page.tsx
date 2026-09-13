import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { ActionButtons } from "@/components/action-buttons";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatalogBackLink } from "@/components/catalog-back-link";
import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { ProductGallery } from "@/components/product-gallery";
import { getProductBySlug, getStatusLabel, productCategories } from "@/lib/catalog";
import { products } from "@/lib/data";
import { productToOrderable } from "@/lib/order-actions";
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "@/lib/seo/json-ld";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo/metadata";
import { buildProductMetaDescription } from "@/lib/seo/product-seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.flatMap((product) => [
    { slug: product.slug },
    ...(product.legacySlugs ?? []).map((slug) => ({ slug })),
  ]);
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Товар не знайдено",
    };
  }

  let decodedSlug = slug;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    // Keep the original value when a malformed URL segment reaches the route.
  }
  const isLegacySlug = decodedSlug !== product.slug;

  return buildPageMetadata({
    title: product.title,
    description: buildProductMetaDescription(product),
    path: `/products/${product.slug}/`,
    images: [product.image],
    noindex: isLegacySlug,
  });
}

function CatalogBackLinkFallback() {
  return (
    <Link className="text-sm font-semibold text-primary" href="/products">
      ← До товарів
    </Link>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryLabel =
    productCategories.find((item) => item.value === product.category)
      ?.label ?? product.category;
  const breadcrumbs = [
    { label: "Головна", href: "/" },
    { label: "Товари", href: "/products" },
    {
      label: categoryLabel,
      href: `/products/category/${product.category}`,
    },
    { label: product.title },
  ];

  return (
    <>
      <JsonLd data={buildProductJsonLd(product)} />
      <JsonLd
        data={buildBreadcrumbJsonLd(
          breadcrumbs.map((item) => ({
            name: item.label,
            url: absoluteUrl(item.href ?? `/products/${product.slug}/`),
          })),
        )}
      />

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Suspense fallback={<CatalogBackLinkFallback />}>
          <CatalogBackLink />
        </Suspense>

        <div className="mt-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {product.title}
        </h1>

        <ProductGallery
          images={product.images?.length ? product.images : [product.image]}
          title={product.title}
        />

        <p className="mt-8 whitespace-pre-line text-lg leading-8 text-muted-foreground">
          {product.description}
        </p>

        {product.notice && !product.configurations?.length ? (
          <p className="mt-4 rounded-2xl bg-muted px-5 py-4 text-sm leading-6 text-muted-foreground">
            {product.notice}
          </p>
        ) : null}

        {product.configurations?.length ? (
          <section className="mt-8" aria-labelledby="configurations-title">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Один тип — кілька потужностей
                </p>
                <h2
                  className="mt-2 text-2xl font-semibold text-foreground"
                  id="configurations-title"
                >
                  Доступні конфігурації
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Комплектація показана окремо для кожної потужності, щоб не
                приховувати різницю між моделями обладнання.
              </p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.configurations.map((configuration) => (
                <article
                  className="rounded-2xl border border-border bg-card p-5"
                  key={configuration.label}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {configuration.label}
                  </h3>
                  {configuration.price ? (
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {configuration.price}
                    </p>
                  ) : null}
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                    {configuration.equipment.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span aria-hidden="true" className="text-primary">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            {product.notice ? (
              <p className="mt-4 rounded-2xl bg-muted px-5 py-4 text-sm leading-6 text-muted-foreground">
                {product.notice}
              </p>
            ) : null}
          </section>
        ) : null}

        <div className="mt-8 rounded-2xl border border-border bg-card p-5">
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {getStatusLabel(product.status)}
            </span>
            {product.showPrice && product.price ? (
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {product.price}
              </span>
            ) : null}
          </div>
          <h2 className="text-lg font-semibold text-foreground">
            Замовити або уточнити
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Оберіть канал звʼязку. Текст звернення буде підготовлений
            автоматично.
          </p>
          <div className="mt-5">
            <ActionButtons item={productToOrderable(product)} />
          </div>
        </div>
      </article>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Характеристики
          </h2>
          <dl className="mt-5 grid gap-3">
            {product.specs.map((spec) => (
              <div
                className="grid gap-1 border-b border-border pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[0.8fr_1.2fr]"
                key={spec.label}
              >
                <dt className="text-sm font-semibold text-muted-foreground">
                  {spec.label}
                </dt>
                <dd className="text-sm text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-foreground">
            {product.compatibilityTitle ?? "Сумісність"}
          </h2>
          <ul className="mt-5 grid gap-3">
            {product.compatibility.map((item) => (
              <li className="rounded-xl bg-muted px-4 py-3 text-sm" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
