import type { MetadataRoute } from "next";

import { listProducts, listServices } from "@/lib/catalog/loader";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/catalog/taxonomy";
import { absoluteUrl } from "@/lib/seo/metadata";

export const dynamic = "force-static";

const MIN_INDEXABLE_PRODUCTS = 3;

export default function sitemap(): MetadataRoute.Sitemap {
  const products = listProducts();
  const services = listServices();

  const indexableCategories = PRODUCT_CATEGORY_VALUES.filter(
    (category) =>
      products.filter((product) => product.category === category).length >=
      MIN_INDEXABLE_PRODUCTS,
  );

  return [
    { url: absoluteUrl("/") },
    { url: absoluteUrl("/products/") },
    { url: absoluteUrl("/services/") },
    { url: absoluteUrl("/privacy/") },
    ...indexableCategories.map((category) => ({
      url: absoluteUrl(`/products/category/${category}/`),
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.slug}/`),
      images: (product.images?.length ? product.images : [product.image]).map(
        absoluteUrl,
      ),
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}/`),
      images: [absoluteUrl(service.image)],
    })),
  ];
}
