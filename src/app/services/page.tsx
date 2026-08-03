import type { Metadata } from "next";

import { CatalogBrowser } from "@/components/catalog-browser";
import { CtaPanel } from "@/components/cta-panel";
import { SectionHeading } from "@/components/section-heading";
import { buildServiceCatalogProjection } from "@/lib/catalog/list-projection";
import {
  serviceCategories,
  serviceDirections,
} from "@/lib/catalog";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Сервіс лічильників і сантехніки, енергоаудит, проєктування, сонячні електростанції, накопичення енергії, автоматизація та сервіс енергетичного обладнання.",
};

export default function ServicesPage() {
  const initialItems = buildServiceCatalogProjection(services);

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
            items={initialItems}
            kind="services"
          />
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
