import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionButtons } from "@/components/action-buttons";
import { CtaPanel } from "@/components/cta-panel";
import { getServiceBySlug, getStatusLabel } from "@/lib/catalog";
import { services } from "@/lib/data";
import { serviceToOrderable } from "@/lib/order-actions";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

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
      <article className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            alt={service.title}
            className="h-full min-h-80 w-full object-cover"
            height={1024}
            priority
            src={service.image}
            width={1024}
          />
        </div>

        <div>
          <Link className="text-sm font-semibold text-primary" href="/services">
            ← До послуг
          </Link>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {getStatusLabel(service.status)}
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
              {service.duration}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {service.description}
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
              <ActionButtons item={serviceToOrderable(service)} />
            </div>
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
