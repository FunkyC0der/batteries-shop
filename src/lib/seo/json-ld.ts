import { productCategories, serviceCategories } from "@/lib/catalog/taxonomy";
import { siteConfig } from "@/lib/site-config";
import type { Product, Service } from "@/lib/types";

import { absoluteUrl } from "./metadata";
import { getProductBrand, parsePrice } from "./product-seo";

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const AVAILABILITY_URL = {
  "in-stock": "https://schema.org/InStock",
  preorder: "https://schema.org/PreOrder",
} as const;

type Offer = Record<string, unknown>;

function getProductCategoryLabel(category: string) {
  return (
    productCategories.find((item) => item.value === category)?.label ??
    category
  );
}

function getServiceCategoryLabel(category: string) {
  return (
    serviceCategories.find((item) => item.value === category)?.label ??
    category
  );
}

function buildOffer(price: string | undefined): Offer | undefined {
  const parsed = parsePrice(price);
  if (parsed.amount === undefined) {
    return undefined;
  }

  const offer: Offer = {
    "@type": "Offer",
    priceCurrency: "UAH",
    price: parsed.amount,
  };

  if (parsed.isFrom) {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      priceCurrency: "UAH",
      minPrice: parsed.amount,
    };
  }

  if (parsed.vatIncluded === false) {
    offer.valueAddedTaxIncluded = false;
  }

  return offer;
}

function applyAvailability(offer: Offer, status: Product["status"]) {
  if (status === "in-stock" || status === "preorder") {
    offer.availability = AVAILABILITY_URL[status];
  }

  return offer;
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    ...(siteConfig.contactsPublished
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            areaServed: "UA",
            availableLanguage: ["uk"],
          },
        }
      : {}),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "uk-UA",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildSiteJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationJsonLd(), buildWebsiteJsonLd()],
  };
}

export type BreadcrumbEntry = { name: string; url: string };

export function buildBreadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProductJsonLd(product: Product) {
  const url = absoluteUrl(`/products/${product.slug}/`);
  const images = (
    product.images?.length ? product.images : [product.image]
  ).map(absoluteUrl);
  const brand = getProductBrand(product);

  const configPrices = (product.configurations ?? [])
    .map((configuration) => parsePrice(configuration.price))
    .filter(
      (parsed): parsed is ParsedPriceWithAmount => parsed.amount !== undefined,
    );

  let offers: Offer | undefined;

  if (configPrices.length > 0) {
    const amounts = configPrices.map((parsed) => parsed.amount);
    offers = {
      "@type": "AggregateOffer",
      priceCurrency: "UAH",
      lowPrice: Math.min(...amounts),
      highPrice: Math.max(...amounts),
      offerCount: configPrices.length,
    };
  } else {
    offers = buildOffer(product.price);
  }

  if (offers) {
    applyAvailability(offers, product.status);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.title,
    description: product.description,
    image: images,
    url,
    sku: product.slug,
    category: getProductCategoryLabel(product.category),
    ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    ...(offers ? { offers } : {}),
  };
}

type ParsedPriceWithAmount = ReturnType<typeof parsePrice> & {
  amount: number;
};

export function buildServiceJsonLd(service: Service) {
  const url = absoluteUrl(`/services/${service.slug}/`);
  const offer = buildOffer(service.price);

  if (offer) {
    applyAvailability(offer, service.status);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.description,
    serviceType: getServiceCategoryLabel(service.category),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "Україна",
    image: absoluteUrl(service.image),
    url,
    ...(offer ? { offers: offer } : {}),
  };
}

export function buildCategoryJsonLd({
  category,
  label,
  products,
}: {
  category: string;
  label: string;
  products: Product[];
}) {
  const url = absoluteUrl(`/products/category/${category}/`);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: label,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/products/${product.slug}/`),
      })),
    },
  };
}
