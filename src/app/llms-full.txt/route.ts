import {
  getStatusLabel,
  listProducts,
  listServices,
  productCategories,
} from "@/lib/catalog";
import { getProductBrand } from "@/lib/seo/product-seo";
import { absoluteUrl } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function getCategoryLabel(category: string) {
  return (
    productCategories.find((item) => item.value === category)?.label ??
    category
  );
}

function buildContent() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name} — повний каталог`);
  lines.push("");

  lines.push("## Товари");
  lines.push("");
  for (const product of listProducts()) {
    const brand = getProductBrand(product);
    const priceOrStatus =
      product.showPrice && product.price
        ? product.price
        : getStatusLabel(product.status);

    lines.push(`### ${product.title}`);
    lines.push(`URL: ${absoluteUrl(`/products/${product.slug}/`)}`);
    lines.push(`Категорія: ${getCategoryLabel(product.category)}`);
    if (brand) {
      lines.push(`Бренд: ${brand}`);
    }
    lines.push(`Ціна/статус: ${priceOrStatus}`);
    if (product.specs.length > 0) {
      lines.push("Характеристики:");
      for (const spec of product.specs) {
        lines.push(`- ${spec.label}: ${spec.value}`);
      }
    }
    lines.push("");
  }

  lines.push("## Послуги");
  lines.push("");
  for (const service of listServices()) {
    lines.push(`### ${service.title}`);
    lines.push(`URL: ${absoluteUrl(`/services/${service.slug}/`)}`);
    lines.push(`Опис: ${service.description}`);
    lines.push(`Тривалість: ${service.duration}`);
    if (service.includes.length > 0) {
      lines.push("Що входить:");
      for (const item of service.includes) {
        lines.push(`- ${item}`);
      }
    }
    lines.push("");
  }

  return lines.join("\n");
}

export function GET() {
  return new Response(buildContent(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
