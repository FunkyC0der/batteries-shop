import Script from "next/script";

import { AnalyticsClickTracker } from "@/components/analytics-click-tracker";
import {
  buildGtagBootstrapScript,
  getAnalyticsConfig,
  getPrimaryTagId,
} from "@/lib/analytics";

/**
 * Google tag for GA4 and Google Ads. Renders nothing unless tag IDs are set
 * in env and the build is a production (non-preview) build.
 */
export function GoogleTag() {
  const config = getAnalyticsConfig();

  if (!config) {
    return null;
  }

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {buildGtagBootstrapScript(config)}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(getPrimaryTagId(config))}`}
        strategy="afterInteractive"
      />
      <AnalyticsClickTracker adsLeadSendTo={config.adsLeadSendTo} />
    </>
  );
}
