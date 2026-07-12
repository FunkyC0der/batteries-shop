import type { Metadata } from "next";

import { CatalogBrowser } from "@/components/catalog-browser";
import { CtaPanel } from "@/components/cta-panel";
import { SectionHeading } from "@/components/section-heading";
import { serviceCategories, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Заміна батарейок, повірка та встановлення лічильників тепла й води, монтаж бойлерів, радіаторів і сантехнічні роботи.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          description="Оберіть послугу, перегляньте що входить у роботу та зверніться зручним каналом зв'язку."
          eyebrow="Каталог"
          title="Послуги"
        />
        <div className="mt-8">
          <CatalogBrowser
            categories={serviceCategories}
            items={services}
            kind="services"
          />
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
