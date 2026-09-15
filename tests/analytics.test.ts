import { describe, expect, it } from "vitest";

import {
  buildContactEvents,
  buildGtagBootstrapScript,
  detectContactChannel,
  getPrimaryTagId,
  resolveAnalyticsConfig,
} from "../src/lib/analytics";
import { getOrderActions } from "../src/lib/order-actions";

const production = { nodeEnv: "production" };

describe("resolveAnalyticsConfig", () => {
  it("stays off without tag IDs", () => {
    expect(resolveAnalyticsConfig(production)).toBeNull();
  });

  it("stays off in development and on Vercel preview deploys", () => {
    const ids = { measurementId: "G-ABC123" };

    expect(resolveAnalyticsConfig({ ...ids, nodeEnv: "development" })).toBeNull();
    expect(
      resolveAnalyticsConfig({ ...ids, ...production, vercelEnv: "preview" }),
    ).toBeNull();
    expect(
      resolveAnalyticsConfig({ ...ids, ...production, vercelEnv: "production" }),
    ).toEqual({ measurementId: "G-ABC123" });
  });

  it("ignores malformed IDs", () => {
    expect(
      resolveAnalyticsConfig({
        ...production,
        measurementId: "UA-12345-1",
        adsId: "123456789",
        adsLeadSendTo: "AW-123/<script>",
      }),
    ).toBeNull();
  });

  it("derives the Ads tag ID from the conversion send_to", () => {
    expect(
      resolveAnalyticsConfig({ ...production, adsLeadSendTo: " AW-987/AbC_1 " }),
    ).toEqual({ adsId: "AW-987", adsLeadSendTo: "AW-987/AbC_1" });
  });
});

describe("buildGtagBootstrapScript", () => {
  it("sets consent defaults before configuring every tag", () => {
    const config = { measurementId: "G-ABC123", adsId: "AW-987" };
    const script = buildGtagBootstrapScript(config);

    expect(getPrimaryTagId(config)).toBe("G-ABC123");
    expect(script.indexOf("'consent', 'default'")).toBeLessThan(
      script.indexOf("'config'"),
    );
    expect(script).toContain(`"region":[`);
    expect(script).toContain(`gtag('config', "G-ABC123");`);
    expect(script).toContain(`gtag('config', "AW-987");`);
  });
});

describe("detectContactChannel", () => {
  it("recognises every order action link", () => {
    const actions = getOrderActions({
      id: "x",
      slug: "x",
      title: "Тест",
      kind: "product",
    });

    for (const action of actions) {
      expect(detectContactChannel(action.href)).toBe(action.channel);
    }
  });

  it("ignores ordinary links", () => {
    expect(detectContactChannel("/products/")).toBeNull();
    expect(detectContactChannel("https://example.com/t.me/x")).toBeNull();
  });
});

describe("buildContactEvents", () => {
  const click = {
    channel: "telegram" as const,
    itemId: "saft-ls14250",
    itemKind: "product",
    placement: "card",
  };

  it("sends a GA4 generate_lead event with item context", () => {
    expect(buildContactEvents(click, {})).toEqual([
      [
        "event",
        "generate_lead",
        {
          method: "telegram",
          item_id: "saft-ls14250",
          item_kind: "product",
          placement: "card",
        },
      ],
    ]);
  });

  it("adds a Google Ads conversion when a send_to label is configured", () => {
    const events = buildContactEvents(click, { adsLeadSendTo: "AW-987/AbC" });

    expect(events[1]).toEqual(["event", "conversion", { send_to: "AW-987/AbC" }]);
  });
});
