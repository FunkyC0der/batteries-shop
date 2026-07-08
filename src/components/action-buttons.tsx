import type {
  MessengerChannel,
  OrderableItem,
  OrderChannel,
} from "@/lib/order-actions";
import { getOrderActions, isMessengerAction } from "@/lib/order-actions";
import { siteConfig } from "@/lib/site-config";

type ActionButtonsProps = {
  item: OrderableItem;
  compact?: boolean;
  messengerStyle?: "icon" | "labeled";
  variant?: "default" | "inverse";
};

const actionIconPaths: Record<OrderChannel, string> = {
  phone: "/images/cta-phone.svg",
  telegram: "/images/cta-telegram.svg",
  whatsapp: "/images/cta-whatsapp.svg",
  viber: "/images/cta-viber.svg",
};

const messengerLabels: Record<MessengerChannel, string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  viber: "Viber",
};

function ActionIcon({ channel }: { channel: OrderChannel }) {
  const iconPath = actionIconPaths[channel];

  return (
    <span
      aria-hidden="true"
      className="block size-7 bg-current"
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

export function ActionButtons({
  item,
  compact = false,
  messengerStyle = "icon",
  variant = "default",
}: ActionButtonsProps) {
  const actions = getOrderActions(item);
  const toneClass =
    variant === "inverse"
      ? "border-primary-foreground/45 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
      : "border-border bg-card text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground";

  const phoneAction = actions.find((action) => action.channel === "phone");
  const messengerActions = actions.filter(isMessengerAction);

  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      {phoneAction ? (
        <a
          className={
            compact
              ? `inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-3 transition ${toneClass}`
              : `inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-4 transition ${toneClass}`
          }
          href={phoneAction.href}
          aria-label={`${phoneAction.label}: ${siteConfig.phoneLabel}`}
        >
          <ActionIcon channel={phoneAction.channel} />
          <span className="text-sm font-semibold sm:text-base">
            {siteConfig.phoneLabel}
          </span>
        </a>
      ) : null}

      <div className={compact ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3"}>
        {messengerActions.map((action) => (
          <a
            className={
              messengerStyle === "labeled"
                ? compact
                  ? `inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-3 text-sm font-semibold transition ${toneClass}`
                  : `inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-4 font-semibold transition ${toneClass}`
                : compact
                ? `inline-flex size-11 items-center justify-center rounded-full border transition ${toneClass}`
                : `inline-flex size-14 items-center justify-center rounded-full border transition ${toneClass}`
            }
            href={action.href}
            aria-label={action.label}
            key={action.channel}
          >
            <ActionIcon channel={action.channel} />
            {messengerStyle === "labeled" ? (
              <span>{messengerLabels[action.channel]}</span>
            ) : (
              <span className="sr-only">{action.label}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
