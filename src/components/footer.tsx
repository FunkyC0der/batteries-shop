import Link from "next/link";

import type { MessengerChannel } from "@/lib/order-actions";
import { BrandName } from "@/components/brand-name";
import { filterProducts, productCategories } from "@/lib/catalog";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/catalog/taxonomy";
import {
  getOrderActions,
  isMessengerAction,
  serviceToOrderable,
} from "@/lib/order-actions";
import { siteConfig } from "@/lib/site-config";

const MIN_INDEXABLE_PRODUCTS = 3;

const messengerLabels: Record<MessengerChannel, string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  viber: "Viber",
};

const iconPaths = {
  phone: "/images/cta-phone.svg",
  telegram: "/images/cta-telegram.svg",
  whatsapp: "/images/cta-whatsapp.svg",
  viber: "/images/cta-viber.svg",
} as const;

function FooterIcon({ icon }: { icon: keyof typeof iconPaths }) {
  const iconPath = iconPaths[icon];

  return (
    <span
      aria-hidden="true"
      className="block size-5 bg-current"
      style={{
        maskImage: `url(${iconPath})`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: `url(${iconPath})`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

export function Footer() {
  const contactItem = serviceToOrderable({
    id: "footer-contact",
    slug: "footer-contact",
    title: "Консультація щодо товару, сервісу або енергетичного рішення",
  });
  const actions = getOrderActions(contactItem);
  const phoneAction = actions.find((action) => action.channel === "phone");
  const messengerActions = actions.filter(isMessengerAction);
  const indexableCategories = PRODUCT_CATEGORY_VALUES.filter(
    (category) => filterProducts({ category }).length >= MIN_INDEXABLE_PRODUCTS,
  ).map((category) => ({
    category,
    label:
      productCategories.find((item) => item.value === category)?.label ??
      category,
  }));

  return (
    <footer
      className="border-t border-border bg-muted/40"
      data-analytics-placement="footer"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_0.8fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <p>
            <BrandName className="text-xl" />
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <div className="grid content-start gap-3 text-sm text-muted-foreground">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Каталог
          </p>
          {indexableCategories.map((entry) => (
            <Link
              className="text-base text-muted-foreground transition hover:text-primary"
              href={`/products/category/${entry.category}`}
              key={entry.category}
            >
              {entry.label}
            </Link>
          ))}
        </div>

        <div className="grid content-start gap-3 text-sm text-muted-foreground">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Контакти
          </p>
          {phoneAction ? (
            <a
              className="inline-flex items-center gap-3 text-base text-muted-foreground transition hover:text-primary"
              href={phoneAction.href}
              aria-label={`${phoneAction.label}: ${siteConfig.phoneLabel}`}
            >
              <FooterIcon icon="phone" />
              <span>{siteConfig.phoneLabel}</span>
            </a>
          ) : null}
          <p>{siteConfig.schedule}</p>
          <p>{siteConfig.city}</p>
        </div>

        <div className="grid content-start gap-3 text-sm text-muted-foreground">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Месенджери
          </p>
          {messengerActions.map((action) => (
            <a
              className="inline-flex items-center gap-3 text-base text-muted-foreground transition hover:text-primary"
              href={action.href}
              aria-label={action.label}
              key={action.channel}
            >
              <FooterIcon icon={action.channel} />
              <span>{messengerLabels[action.channel]}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} <BrandName /> · {siteConfig.seller.name}
          </p>
          <Link
            className="underline-offset-4 transition hover:text-primary hover:underline"
            href="/privacy"
          >
            Політика конфіденційності
          </Link>
        </div>
      </div>
    </footer>
  );
}
