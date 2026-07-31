import Image from "next/image";
import Link from "next/link";

import { CtaPanel } from "@/components/cta-panel";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getFeaturedProducts, getFeaturedServices } from "@/lib/catalog";

const deliverySteps = [
  {
    number: "01",
    title: "Розбираємося в задачі",
    description:
      "Уточнюємо потребу, параметри об’єкта, навантаження та обмеження.",
  },
  {
    number: "02",
    title: "Готуємо рішення",
    description:
      "Підбираємо обладнання, визначаємо склад робіт і погоджуємо наступні кроки.",
  },
  {
    number: "03",
    title: "Монтуємо й запускаємо",
    description:
      "Виконуємо роботи, перевіряємо підключення та налаштовуємо систему.",
  },
  {
    number: "04",
    title: "Залишаємося на зв’язку",
    description:
      "Допомагаємо з експлуатацією, діагностикою та подальшим сервісом.",
  },
] as const;

export default function Home() {
  const featuredMeteringProducts = getFeaturedProducts(
    "metering-and-comfort",
  );
  const featuredEnergyProducts = getFeaturedProducts("energy-solutions");
  const featuredMeteringServices = getFeaturedServices(
    "metering-and-comfort",
  );
  const featuredEnergyServices = getFeaturedServices("energy-solutions");
  const directionGroups = [
    {
      id: "product-directions",
      eyebrow: "Товари",
      title: "Обрати обладнання",
      description:
        "Готові позиції й системні рішення з окремим складом для кожної конфігурації.",
      items: [
        {
          eyebrow: "4 товари",
          title: "Опалення, тепло та облік",
          description:
            "Батарейки, батарейні блоки та комплектуючі для лічильників і автоматики.",
          href: "/products?direction=metering-and-comfort",
          linkLabel: "Товари для тепла й обліку",
          image:
            featuredMeteringProducts[0]?.image ??
            "/images/product-lithium-batteries.png",
          imageAlt: "Батарейки й комплектуючі для приладів обліку",
        },
        {
          eyebrow: "7 товарів",
          title: "Енергетичні рішення",
          description:
            "Сонячні станції, резервне живлення, накопичення енергії та заряджання EV.",
          href: "/products?direction=energy-solutions",
          linkLabel: "Енергетичні товари",
          image:
            featuredEnergyProducts[0]?.image ??
            "/images/products/autonomous-solar-station.png",
          imageAlt:
            "Сонячні панелі, інвертор і акумулятор енергетичної системи",
        },
      ],
    },
    {
      id: "service-directions",
      eyebrow: "Послуги",
      title: "Замовити роботу",
      description:
        "Від окремої сервісної роботи до проєктування, монтажу й запуску системи.",
      items: [
        {
          eyebrow: "Інженерний сервіс",
          title: "Облік, тепло та вода",
          description:
            "Повірка й встановлення лічильників, заміна живлення, опалення та сантехнічні роботи.",
          href: "/services?direction=metering-and-comfort",
          linkLabel: "Послуги для тепла й обліку",
          image:
            featuredMeteringServices[0]?.image ??
            "/images/services/battery-replacement-workshop-v2.png",
          imageAlt: "Сервіс інженерного обладнання та приладів обліку",
        },
        {
          eyebrow: "Енергетика",
          title: "Енергетичні послуги",
          description:
            "Аудит, проєктування, монтаж СЕС, інтеграція накопичення, автоматизація та сервіс.",
          href: "/services?direction=energy-solutions",
          linkLabel: "Енергетичні послуги",
          image:
            featuredEnergyServices[1]?.image ??
            "/images/services/turnkey-solar-power-plant.jpg",
          imageAlt: "Сонячна електростанція та енергетичне обладнання",
        },
      ],
    },
  ] as const;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-[2rem] bg-foreground text-background shadow-sm">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fd5ce]">
                Інженерні та енергетичні рішення
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Системи, що працюють стабільно — від обліку до власної енергії
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-background/75 sm:text-lg sm:leading-8">
                Підбираємо обладнання для тепла й обліку, сонячні станції,
                резервне живлення та системи накопичення. Проєктуємо,
                монтуємо й обслуговуємо рішення для дому та бізнесу.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-[#139188]"
                  href="#directions"
                >
                  Обрати напрям
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-background/30 px-6 py-3 font-semibold text-background transition hover:border-background hover:bg-background hover:text-foreground"
                  href="#quick-order"
                >
                  Обговорити задачу
                </Link>
              </div>
            </div>

            <div className="relative min-h-[22rem] lg:min-h-[38rem]">
              <Image
                alt="Інженер налаштовує систему енергоменеджменту, накопичення й обліку"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/images/home-energy-engineering-hero.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-foreground/20 lg:via-transparent lg:to-transparent" />
            </div>
          </div>

          <div className="grid border-t border-background/15 sm:grid-cols-2 lg:grid-cols-4">
            {["Обстеження", "Проєктування", "Монтаж і запуск", "Подальший сервіс"].map(
              (item) => (
                <p
                  className="border-background/15 px-6 py-4 text-sm font-semibold text-background/85 sm:border-r last:border-r-0"
                  key={item}
                >
                  {item}
                </p>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8"
        id="directions"
      >
        <SectionHeading
          description="Товари й послуги розділені за призначенням, тому можна одразу перейти до потрібного каталогу або виду робіт."
          eyebrow="Наші напрями"
          title="Оберіть обладнання або потрібну роботу"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {directionGroups.map((group) => (
            <section
              aria-labelledby={group.id}
              className="rounded-3xl border border-border bg-muted/45 p-4 sm:p-5"
              key={group.id}
            >
              <div className="px-2 pb-5 pt-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {group.eyebrow}
                </p>
                <h3
                  className="mt-2 text-2xl font-semibold tracking-tight text-foreground"
                  id={group.id}
                >
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {group.items.map((direction) => (
                  <li className="h-full" key={direction.href}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                      <Link href={direction.href}>
                        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                          <Image
                            alt={direction.imageAlt}
                            className="object-cover transition duration-500 group-hover:scale-105"
                            fill
                            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                            src={direction.image}
                          />
                        </div>
                      </Link>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                          {direction.eyebrow}
                        </p>
                        <h4 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                          {direction.title}
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {direction.description}
                        </p>
                        <Link
                          className="mt-auto inline-flex min-h-11 items-end pt-5 font-semibold text-primary"
                          href={direction.href}
                        >
                          {direction.linkLabel}
                        </Link>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-muted/55">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            description="Поєднуємо технічну експертизу, обладнання та виконання робіт, щоб рішення не розсипалося між різними підрядниками."
            eyebrow="Як працюємо"
            title="Від першого запиту до стабільної роботи системи"
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <li
                className="rounded-2xl border border-border bg-card p-6"
                key={step.number}
              >
                <span className="text-sm font-bold tracking-[0.14em] text-primary">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            description="Комплексні роботи для об’єктів, яким потрібні менші витрати, резерв живлення, власна генерація або кращий контроль енергії."
            eyebrow="Енергетика"
            title="Рішення для енергонезалежності й ефективності"
          />
          <Link
            className="font-semibold text-primary"
            href="/services?direction=energy-solutions"
          >
            Усі енергетичні послуги
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredEnergyServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-muted/45">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              description="Підтримуємо прилади обліку, системи опалення та водопостачання — у сервісі або з виїздом на об’єкт."
              eyebrow="Облік та інженерія"
              title="Сервіс для щоденної роботи об’єкта"
            />
            <Link
              className="font-semibold text-primary"
              href="/services?direction=metering-and-comfort"
            >
              Усі сервісні послуги
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMeteringServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            description="Окремо показуємо готові енергетичні системи та комплектуючі для приладів обліку — з переходом одразу до потрібного напряму каталогу."
            eyebrow="Товари"
            title="Обладнання для тепла та власної енергії"
          />
          <Link className="font-semibold text-primary" href="/products">
            Усі товари
          </Link>
        </div>

        <section aria-labelledby="energy-products-title" className="mt-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Енергетичні рішення
              </p>
              <h3
                className="mt-2 text-2xl font-semibold text-foreground"
                id="energy-products-title"
              >
                Генерація, резерв і заряджання
              </h3>
            </div>
            <Link
              className="font-semibold text-primary"
              href="/products?direction=energy-solutions"
            >
              Усі енергетичні товари
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEnergyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="metering-products-title"
          className="mt-12 border-t border-border pt-10"
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Опалення, тепло та облік
              </p>
              <h3
                className="mt-2 text-2xl font-semibold text-foreground"
                id="metering-products-title"
              >
                Живлення для лічильників і автоматики
              </h3>
            </div>
            <Link
              className="font-semibold text-primary"
              href="/products?direction=metering-and-comfort"
            >
              Усі товари для обліку
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMeteringProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </section>

      <CtaPanel />
    </>
  );
}
