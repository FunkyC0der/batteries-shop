import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { ActionButtons } from "@/components/action-buttons";
import { CtaPanel } from "@/components/cta-panel";
import { ProductGallery } from "@/components/product-gallery";
import { getProductBySlug, getStatusLabel } from "@/lib/catalog";
import { products } from "@/lib/data";
import { productToOrderable } from "@/lib/order-actions";
import { getSafeCatalogReturnHref } from "@/lib/catalog-navigation";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string | string[] }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
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

  return {
    title: product.title,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: ProductPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const requestedReturnHref = Array.isArray(resolvedSearchParams.from)
    ? resolvedSearchParams.from[0]
    : resolvedSearchParams.from;
  const returnHref = getSafeCatalogReturnHref(requestedReturnHref);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  if (slug !== product.slug) {
    const canonicalSearchParams = new URLSearchParams();

    if (requestedReturnHref) {
      canonicalSearchParams.set("from", requestedReturnHref);
    }

    const canonicalQuery = canonicalSearchParams.toString();
    redirect(
      `/products/${product.slug}${canonicalQuery ? `?${canonicalQuery}` : ""}`,
    );
  }

  return (
    <>
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          className="text-sm font-semibold text-primary"
          href={returnHref}
          scroll={false}
        >
          ← До товарів
        </Link>

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
