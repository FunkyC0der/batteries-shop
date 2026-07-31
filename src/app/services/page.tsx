import type { Metadata } from "next";

import { CatalogBrowser } from "@/components/catalog-browser";
import { CtaPanel } from "@/components/cta-panel";
import { SectionHeading } from "@/components/section-heading";
import {
  serviceCategories,
  serviceDirections,
  services,
} from "@/lib/data";
import type { ServiceDirection } from "@/lib/types";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Сервіс лічильників і сантехніки, енергоаудит, проєктування, сонячні електростанції, накопичення енергії, автоматизація та сервіс енергетичного обладнання.",
};

type ServicesPageProps = {
  searchParams: Promise<{
    direction?: string | string[];
    q?: string | string[];
  }>;
};

export default async function ServicesPage({
  searchParams,
}: ServicesPageProps) {
  const params = await searchParams;
  const requestedDirection = Array.isArray(params.direction)
    ? params.direction[0]
    : params.direction;
  const requestedQuery = Array.isArray(params.q) ? params.q[0] : params.q;
  const initialDirection = serviceDirections.some(
    (option) => option.value === requestedDirection,
  )
    ? (requestedDirection as ServiceDirection | "all")
    : "all";

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          description="Спочатку оберіть напрям, а далі звузьте список за категорією або пошуком. Кожна картка веде до опису складу робіт."
          eyebrow="Каталог"
          title="Послуги"
        />
        <div className="mt-8">
          <CatalogBrowser
            categories={serviceCategories}
            directions={serviceDirections}
            initialDirection={initialDirection}
            initialQuery={requestedQuery}
            items={services}
            kind="services"
          />
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
