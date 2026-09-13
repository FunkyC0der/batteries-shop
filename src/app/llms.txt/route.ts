import {
  filterServices,
  getFeaturedProducts,
  getStatusLabel,
  listProducts,
  productCategories,
} from "@/lib/catalog";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/catalog/taxonomy";
import { absoluteUrl } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

const MIN_INDEXABLE_PRODUCTS = 3;

export const dynamic = "force-static";

function buildContent() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(`> ${siteConfig.description}`);
  lines.push("");

  lines.push("## Напрями");
  lines.push("");
  lines.push(
    `- [Опалення, тепло та облік](${absoluteUrl("/products/?direction=metering-and-comfort")}) — батарейки, теплолічильники, лічильники води та комплектуючі.`,
  );
  lines.push(
    `- [Енергетичні рішення](${absoluteUrl("/products/?direction=energy-solutions")}) — сонячні станції, резервне живлення, накопичення енергії, заряджання EV.`,
  );
  lines.push("");

  lines.push("## Категорії товарів");
  lines.push("");
  const products = listProducts();
  const indexableCategories = PRODUCT_CATEGORY_VALUES.filter(
    (category) =>
      products.filter((product) => product.category === category).length >=
      MIN_INDEXABLE_PRODUCTS,
  );
  for (const category of indexableCategories) {
    const label =
      productCategories.find((item) => item.value === category)?.label ??
      category;
    const count = products.filter(
      (product) => product.category === category,
    ).length;
    lines.push(
      `- [${label}](${absoluteUrl(`/products/category/${category}/`)}) — ${count} товарів`,
    );
  }
  lines.push("");

  lines.push("## Послуги");
  lines.push("");
  for (const service of filterServices({})) {
    lines.push(
      `- [${service.title}](${absoluteUrl(`/services/${service.slug}/`)}) — ${service.shortDescription}`,
    );
  }
  lines.push("");

  lines.push("## Ключові товари");
  lines.push("");
  for (const product of getFeaturedProducts()) {
    const priceOrStatus =
      product.showPrice && product.price
        ? product.price
        : getStatusLabel(product.status);
    lines.push(
      `- [${product.title}](${absoluteUrl(`/products/${product.slug}/`)}) — ${priceOrStatus}`,
    );
  }
  lines.push("");

  lines.push("## Як замовити");
  lines.push("");
  if (siteConfig.contactsPublished) {
    lines.push(
      `Телефон: ${siteConfig.phoneLabel}. Графік роботи: ${siteConfig.schedule}. Також доступні Telegram, WhatsApp і Viber — контакти на сторінках товарів і послуг.`,
    );
  } else {
    lines.push(
      `Оформити замовлення або отримати консультацію можна через канали зв’язку, вказані на сторінці кожного товару чи послуги: ${absoluteUrl("/")}`,
    );
  }
  lines.push("");

  lines.push("## Повний каталог");
  lines.push("");
  lines.push(
    `Машинозчитуваний перелік усіх товарів і послуг: ${absoluteUrl("/llms-full.txt")}`,
  );
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildContent(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
