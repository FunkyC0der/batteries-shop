import Image from "next/image";
import Link from "next/link";

import { CtaPanel } from "@/components/cta-panel";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getFeaturedProducts, getFeaturedServices } from "@/lib/catalog";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const featuredServices = getFeaturedServices();

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1fr_0.9fr] md:items-center lg:px-8 lg:py-16">
        <div>
          <p className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Батарейки для лічильників і сервіс без зайвих кроків
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Каталог плейсхолдерних товарів і послуг для майбутнього магазину:
            оберіть позицію, відкрийте деталі й замовте телефоном або через
            месенджер.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:border-primary hover:text-primary"
              href="/products"
            >
              Перейти до товарів
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:border-primary hover:text-primary"
              href="/services"
            >
              Подивитися послуги
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            alt="Заміна батарейки у теплолічильнику на сервісному столі"
            className="h-full min-h-80 w-full object-cover"
            height={900}
            priority
            src="/images/hero-heat-meter-battery-service.png"
            width={1600}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            description="Стартові позиції для каталогу. Усі дані лежать у файлах і легко замінюються на реальні."
            eyebrow="Товари"
            title="Популярні батарейки"
          />
          <Link className="font-semibold text-primary" href="/products">
            Усі товари
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-muted/45">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              description="Заміна батарейок, повірка та встановлення лічильників, монтаж бойлерів, радіаторів і сантехнічні роботи."
              eyebrow="Сервіс"
              title="Послуги для лічильників"
            />
            <Link className="font-semibold text-primary" href="/services">
              Усі послуги
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
