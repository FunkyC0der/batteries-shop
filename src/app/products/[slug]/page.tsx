import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionButtons } from "@/components/action-buttons";
import { CtaPanel } from "@/components/cta-panel";
import { getProductBySlug, getStatusLabel } from "@/lib/catalog";
import { products } from "@/lib/data";
import { productToOrderable } from "@/lib/order-actions";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            alt={product.title}
            className="h-full min-h-80 w-full object-cover"
            height={1024}
            priority
            src={product.image}
            width={1024}
          />
        </div>

        <div>
          <Link className="text-sm font-semibold text-primary" href="/products">
            ← До товарів
          </Link>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {getStatusLabel(product.status)}
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
              {product.price}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {product.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
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
          <h2 className="text-xl font-semibold text-foreground">Сумісність</h2>
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
