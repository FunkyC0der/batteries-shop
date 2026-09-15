"use client";

import { useEffect } from "react";

import { buildContactEvents, detectContactChannel } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * One delegated listener tracks every phone/messenger link on the site, so
 * server components (header, footer, cards) need no client wrappers. Item
 * context comes from `data-analytics-*` attributes on the link or ancestors.
 */
export function AnalyticsClickTracker({
  adsLeadSendTo,
}: {
  adsLeadSendTo?: string;
}) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");
      const channel = link && detectContactChannel(link.getAttribute("href") ?? "");

      if (!link || !channel || typeof window.gtag !== "function") {
        return;
      }

      const events = buildContactEvents(
        {
          channel,
          itemId: link.closest<HTMLElement>("[data-analytics-item-id]")?.dataset
            .analyticsItemId,
          itemKind: link.closest<HTMLElement>("[data-analytics-item-kind]")
            ?.dataset.analyticsItemKind,
          placement: link.closest<HTMLElement>("[data-analytics-placement]")
            ?.dataset.analyticsPlacement,
          pagePath: window.location.pathname,
        },
        { adsLeadSendTo },
      );

      for (const args of events) {
        window.gtag(...args);
      }
    }

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [adsLeadSendTo]);

  return null;
}
