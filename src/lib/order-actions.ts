import { siteConfig } from "./site-config";

export type OrderableKind = "product" | "service";

export type OrderableItem = {
  id: string;
  slug: string;
  title: string;
  kind: OrderableKind;
  priceLabel: string;
};

export type OrderChannel = "phone" | "telegram" | "whatsapp" | "viber";

export type OrderAction = {
  channel: OrderChannel;
  label: string;
  href: string;
};

const kindLabels: Record<OrderableKind, string> = {
  product: "товар",
  service: "послугу",
};

export function createOrderMessage(item: OrderableItem) {
  return `Вітаю! Хочу уточнити або замовити ${kindLabels[item.kind]}: ${item.title} (${item.priceLabel}). Код: ${item.id}.`;
}

export function getOrderActions(item: OrderableItem): OrderAction[] {
  const message = createOrderMessage(item);
  const encodedMessage = encodeURIComponent(message);

  return [
    {
      channel: "phone",
      label: "Зателефонувати",
      href: `tel:${siteConfig.phone}`,
    },
    {
      channel: "telegram",
      label: "Написати в Telegram",
      href: `https://t.me/${siteConfig.telegram}?text=${encodedMessage}`,
    },
    {
      channel: "whatsapp",
      label: "Написати в WhatsApp",
      href: `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`,
    },
    {
      channel: "viber",
      label: "Написати у Viber",
      href: `viber://chat?number=${encodeURIComponent(siteConfig.viber)}&text=${encodedMessage}`,
    },
  ];
}

export function productToOrderable(item: {
  id: string;
  slug: string;
  title: string;
  price: string;
}): OrderableItem {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    kind: "product",
    priceLabel: item.price,
  };
}

export function serviceToOrderable(item: {
  id: string;
  slug: string;
  title: string;
  priceFrom: string;
}): OrderableItem {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    kind: "service",
    priceLabel: item.priceFrom,
  };
}

export type FutureCartItem = {
  itemId: string;
  slug: string;
  kind: OrderableKind;
  quantity: number;
};

export type FutureCheckoutProvider = "manual" | "online-payment";
