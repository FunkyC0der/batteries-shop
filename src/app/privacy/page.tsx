import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Політика конфіденційності",
  description: `Які дані збирає сайт ${siteConfig.name}, як використовуються файли cookie, Google Analytics і Google Ads та як відмовитися від відстеження.`,
  path: "/privacy/",
});

const sections: { title: string; paragraphs: React.ReactNode[] }[] = [
  {
    title: "Які дані ми отримуємо",
    paragraphs: [
      "Сайт не має форм реєстрації, особистого кабінету чи онлайн-оплати і не просить вводити персональні дані.",
      "Коли ви телефонуєте нам або пишете в Telegram, WhatsApp чи Viber, ми отримуємо номер телефону, імʼя профілю та зміст повідомлення. Ці дані використовуються лише для відповіді на звернення, консультації та виконання замовлення.",
    ],
  },
  {
    title: "Аналітика та реклама",
    paragraphs: [
      "Для оцінки відвідуваності й ефективності реклами сайт використовує Google Analytics 4 та Google Ads (компанія Google). Ці сервіси встановлюють файли cookie та збирають знеособлені технічні дані: переглянуті сторінки, джерело переходу, тип пристрою й браузера, приблизне місцезнаходження, а також факт натискання кнопок звʼязку.",
      "Ми не передаємо Google імена, номери телефонів чи зміст ваших повідомлень.",
      <>
        Детальніше про обробку даних Google:{" "}
        <a
          className="text-primary underline underline-offset-4"
          href="https://policies.google.com/technologies/partner-sites?hl=uk"
          rel="noopener noreferrer"
          target="_blank"
        >
          як Google використовує дані з сайтів партнерів
        </a>
        .
      </>,
    ],
  },
  {
    title: "Як відмовитися від відстеження",
    paragraphs: [
      "Ви можете заблокувати або видалити файли cookie в налаштуваннях браузера — сайт працюватиме й без них.",
      <>
        Відключити Google Analytics можна за допомогою{" "}
        <a
          className="text-primary underline underline-offset-4"
          href="https://tools.google.com/dlpage/gaoptout?hl=uk"
          rel="noopener noreferrer"
          target="_blank"
        >
          офіційного розширення браузера
        </a>
        , а персоналізовану рекламу — в{" "}
        <a
          className="text-primary underline underline-offset-4"
          href="https://myadcenter.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Центрі реклами Google
        </a>
        .
      </>,
    ],
  },
  {
    title: "Ваші права",
    paragraphs: [
      "Відповідно до Закону України «Про захист персональних даних» ви маєте право дізнатися, які дані про вас ми зберігаємо, вимагати їх виправлення або видалення. Для цього напишіть нам у будь-який месенджер, вказаний на сайті.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { href: "/", label: "Головна" },
          { label: "Політика конфіденційності" },
        ]}
      />
      <div className="mt-6">
        <SectionHeading
          as="h1"
          description="Коротко й без юридичних хитрощів: які дані отримує сайт і як ними користуються."
          eyebrow={siteConfig.name}
          title="Політика конфіденційності"
        />
      </div>
      <div className="mt-8 grid gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-foreground">
              {section.title}
            </h2>
            <div className="mt-3 grid gap-3 text-base leading-7 text-muted-foreground">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
