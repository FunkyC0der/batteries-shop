import type { Metadata } from "next";

import { CatalogBrowser } from "@/components/catalog-browser";
import { CtaPanel } from "@/components/cta-panel";
import { SectionHeading } from "@/components/section-heading";
import {
  productCategories,
  productDirections,
  products,
} from "@/lib/data";

const catalogProducts = [...products].sort(
  (first, second) =>
    Number(Boolean(second.configurations)) -
    Number(Boolean(first.configurations)),
);

export const metadata: Metadata = {
  title: "Товари",
  description:
    "Каталог батарейок, сонячних електростанцій, систем резервного живлення, накопичення енергії та заряджання електромобілів.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          description="Оберіть готове енергетичне рішення або комплектуючі, порівняйте доступні конфігурації та перегляньте склад системи. Замовлення й уточнення — телефоном або через месенджер."
          eyebrow="Каталог"
          title="Товари"
        />
        <div className="mt-8">
          <CatalogBrowser
            categories={productCategories}
            directions={productDirections}
            items={catalogProducts}
            kind="products"
          />
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
