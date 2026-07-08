import type { MessengerChannel } from "@/lib/order-actions";
import {
  getOrderActions,
  isMessengerAction,
  serviceToOrderable,
} from "@/lib/order-actions";
import { siteConfig } from "@/lib/site-config";

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
    title: "Консультація щодо батарейки або послуги",
    priceFrom: "уточнити",
  });
  const actions = getOrderActions(contactItem);
  const phoneAction = actions.find((action) => action.channel === "phone");
  const messengerActions = actions.filter(isMessengerAction);

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            {siteConfig.description}
          </p>
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
          <p>
            {siteConfig.city}, {siteConfig.address}
          </p>
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
    </footer>
  );
}
