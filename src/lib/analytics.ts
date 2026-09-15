import type { OrderChannel } from "./order-actions";

/**
 * Google tag (GA4 + Google Ads) configuration. Values are read at build time
 * (static export), so changing them in Vercel requires a redeploy.
 */
export type AnalyticsConfig = {
  /** GA4 measurement ID, e.g. `G-ABC123XYZ`. */
  measurementId?: string;
  /** Google Ads account tag ID, e.g. `AW-123456789`. */
  adsId?: string;
  /** Google Ads lead conversion `send_to`, e.g. `AW-123456789/AbCdEf`. */
  adsLeadSendTo?: string;
};

type AnalyticsEnv = {
  measurementId?: string;
  adsId?: string;
  adsLeadSendTo?: string;
  nodeEnv?: string;
  vercelEnv?: string;
};

const MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;
const ADS_ID_PATTERN = /^AW-\d+$/;
const ADS_SEND_TO_PATTERN = /^AW-\d+\/[A-Za-z0-9_-]+$/;

/**
 * EEA + UK + Switzerland: Consent Mode v2 defaults to "denied" there because
 * the site has no consent banner. Elsewhere (incl. Ukraine) storage is granted.
 */
export const CONSENT_DENIED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

function pick(value: string | undefined, pattern: RegExp) {
  const trimmed = value?.trim();
  return trimmed && pattern.test(trimmed) ? trimmed : undefined;
}

/**
 * Returns null when tracking must stay off: local dev, Vercel preview
 * deploys (keeps test traffic out of reports), or no valid tag ID.
 */
export function resolveAnalyticsConfig(env: AnalyticsEnv): AnalyticsConfig | null {
  if (env.nodeEnv !== "production") {
    return null;
  }

  if (env.vercelEnv && env.vercelEnv !== "production") {
    return null;
  }

  const measurementId = pick(env.measurementId, MEASUREMENT_ID_PATTERN);
  const adsLeadSendTo = pick(env.adsLeadSendTo, ADS_SEND_TO_PATTERN);
  const adsId =
    pick(env.adsId, ADS_ID_PATTERN) ?? adsLeadSendTo?.split("/")[0];

  if (!measurementId && !adsId) {
    return null;
  }

  return { measurementId, adsId, adsLeadSendTo };
}

export function getAnalyticsConfig() {
  return resolveAnalyticsConfig({
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    adsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
    adsLeadSendTo: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  });
}

/** The first tag ID loads gtag.js; further IDs are added via `config`. */
export function getPrimaryTagId(config: AnalyticsConfig) {
  return (config.measurementId ?? config.adsId) as string;
}

export function buildGtagBootstrapScript(config: AnalyticsConfig) {
  const denied = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    region: CONSENT_DENIED_REGIONS,
  };
  const granted = {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  };
  const tagIds = [config.measurementId, config.adsId].filter(Boolean);

  return [
    "window.dataLayer = window.dataLayer || [];",
    "window.gtag = function gtag(){window.dataLayer.push(arguments);};",
    `gtag('consent', 'default', ${JSON.stringify(denied)});`,
    `gtag('consent', 'default', ${JSON.stringify(granted)});`,
    "gtag('js', new Date());",
    ...tagIds.map((id) => `gtag('config', ${JSON.stringify(id)});`),
  ].join("\n");
}

export function detectContactChannel(href: string): OrderChannel | null {
  const value = href.trim().toLowerCase();

  if (value.startsWith("tel:")) return "phone";
  if (/^https?:\/\/(www\.)?t\.me\//.test(value)) return "telegram";
  if (/^https?:\/\/(www\.)?(wa\.me|api\.whatsapp\.com)\//.test(value)) {
    return "whatsapp";
  }
  if (value.startsWith("viber://")) return "viber";

  return null;
}

export type ContactClick = {
  channel: OrderChannel;
  itemId?: string;
  itemKind?: string;
  placement?: string;
  pagePath?: string;
};

export type GtagEventCall = ["event", string, Record<string, string>];

/**
 * A click on phone/messenger is the site's lead: GA4 `generate_lead`
 * (mark it as a key event) plus a direct Google Ads conversion when a
 * `send_to` label is configured.
 */
export function buildContactEvents(
  click: ContactClick,
  config: Pick<AnalyticsConfig, "adsLeadSendTo">,
): GtagEventCall[] {
  const params: Record<string, string> = { method: click.channel };

  if (click.itemId) params.item_id = click.itemId;
  if (click.itemKind) params.item_kind = click.itemKind;
  if (click.placement) params.placement = click.placement;
  if (click.pagePath) params.page_path = click.pagePath;

  const events: GtagEventCall[] = [["event", "generate_lead", params]];

  if (config.adsLeadSendTo) {
    events.push(["event", "conversion", { send_to: config.adsLeadSendTo }]);
  }

  return events;
}
