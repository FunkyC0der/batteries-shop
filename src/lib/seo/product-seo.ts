import { getStatusLabel } from "@/lib/catalog-labels";
import type { Product } from "@/lib/types";

export type ParsedPrice = {
  amount?: number;
  isFrom: boolean;
  vatIncluded?: boolean;
};

const BRAND_SPEC_LABELS = ["Бренд", "Виробник (бренд)", "Виробник"];

const SHORT_DESCRIPTION_THRESHOLD = 70;
const MAX_META_DESCRIPTION_LENGTH = 160;

/**
 * Handles every price format seen in the catalog data, e.g.:
 * "100 758 грн · Ціну уточнюйте", "від 122 грн", "214,50 грн",
 * "122 грн (без ПДВ)", "Ціну уточнюйте".
 */
export function parsePrice(price?: string): ParsedPrice {
  if (!price || /^ціну уточнюйте$/i.test(price.trim())) {
    return { isFrom: false };
  }

  const trimmed = price.trim();
  const isFrom = /^від\s/i.test(trimmed);
  const vatExcluded = /без\s*пдв/i.test(trimmed);
  const match = trimmed.match(/([\d\s]+(?:[.,]\d+)?)\s*грн/i);

  if (!match) {
    return { isFrom, vatIncluded: vatExcluded ? false : undefined };
  }

  const numeric = Number(match[1].replace(/\s+/g, "").replace(",", "."));

  return {
    amount: Number.isFinite(numeric) ? numeric : undefined,
    isFrom,
    vatIncluded: vatExcluded ? false : undefined,
  };
}

export function getProductBrand(product: Product): string | undefined {
  for (const label of BRAND_SPEC_LABELS) {
    const spec = product.specs.find((item) => item.label === label);
    if (spec?.value) {
      return spec.value;
    }
  }

  return undefined;
}

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  const cut = text.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const safeCut = lastSpace > 40 ? cut.slice(0, lastSpace) : cut;
  return `${safeCut}…`;
}

export function buildProductMetaDescription(product: Product): string {
  if (product.shortDescription.length >= SHORT_DESCRIPTION_THRESHOLD) {
    return truncate(product.shortDescription, MAX_META_DESCRIPTION_LENGTH);
  }

  const keySpecs = product.specs
    .filter((spec) => !BRAND_SPEC_LABELS.includes(spec.label))
    .slice(0, 2)
    .map((spec) => `${spec.label.toLowerCase()}: ${spec.value}`);

  const priceOrStatus =
    product.showPrice && product.price
      ? product.price
      : getStatusLabel(product.status);

  const parts = [product.title, ...keySpecs, priceOrStatus, "підбір і консультація"];

  return truncate(parts.join(". "), MAX_META_DESCRIPTION_LENGTH);
}
