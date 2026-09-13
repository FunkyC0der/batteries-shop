import Link from "next/link";

import { filterProducts, filterServices, productCategories } from "@/lib/catalog";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/catalog/taxonomy";

const MIN_INDEXABLE_PRODUCTS = 3;

export default function NotFound() {
  const indexableCategories = PRODUCT_CATEGORY_VALUES.filter(
    (category) => filterProducts({ category }).length >= MIN_INDEXABLE_PRODUCTS,
  );
  const services = filterServices({}).slice(0, 8);

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Помилка 404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Сторінку не знайдено
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        Можливо, посилання застаріло або сторінку було переміщено. Скористайтесь
        каталогом товарів, переліком послуг або перейдіть на головну.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
          href="/"
        >
          На головну
        </Link>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 font-semibold text-foreground"
          href="/products"
        >
          Усі товари
        </Link>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 font-semibold text-foreground"
          href="/services"
        >
          Усі послуги
        </Link>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Категорії товарів</h2>
          <ul className="mt-4 grid gap-2">
            {indexableCategories.map((category) => {
              const label =
                productCategories.find((item) => item.value === category)
                  ?.label ?? category;

              return (
                <li key={category}>
                  <Link
                    className="text-sm font-semibold text-primary hover:underline"
                    href={`/products/category/${category}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground">Послуги</h2>
          <ul className="mt-4 grid gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  className="text-sm font-semibold text-primary hover:underline"
                  href={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
