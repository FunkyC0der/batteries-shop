import type { Metadata } from "next";

import { CatalogBrowser } from "@/components/catalog-browser";
import { CtaPanel } from "@/components/cta-panel";
import { SectionHeading } from "@/components/section-heading";
import { productCategories, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Товари",
  description: "Каталог батарейок для лічильників з пошуком і категоріями.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          description="Оберіть батарейку, перевірте характеристики та відкрийте деталі. Замовлення відбувається телефоном або через месенджер."
          eyebrow="Каталог"
          title="Товари"
        />
        <div className="mt-8">
          <CatalogBrowser
            categories={productCategories}
            items={products}
            kind="products"
          />
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
