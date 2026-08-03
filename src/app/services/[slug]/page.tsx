import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionButtons } from "@/components/action-buttons";
import { CtaPanel } from "@/components/cta-panel";
import { getServiceBySlug } from "@/lib/catalog";
import { services } from "@/lib/data";
import { serviceToOrderable } from "@/lib/order-actions";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Послугу не знайдено",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link className="text-sm font-semibold text-primary" href="/services">
          ← До послуг
        </Link>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {service.title}
        </h1>

        <div className="relative mt-8 aspect-square overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            alt={service.title}
            className="object-cover"
            fill
            priority
            src={service.image}
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>

        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          {service.description}
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-5">
          {service.showPrice && service.price ? (
            <div className="mb-5">
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {service.price}
              </span>
            </div>
          ) : null}
          <h2 className="text-lg font-semibold text-foreground">
            Замовити або уточнити
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Оберіть канал звʼязку. Текст звернення буде підготовлений
            автоматично.
          </p>
          <div className="mt-5">
            <ActionButtons item={serviceToOrderable(service)} />
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold text-foreground">
            Що входить у послугу
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
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
