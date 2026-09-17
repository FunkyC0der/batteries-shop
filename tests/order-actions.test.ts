import { describe, expect, it } from "vitest";

import {
  createOrderMessage,
  getOrderActions,
  type OrderableItem,
} from "../src/lib/order-actions";
import { siteConfig } from "../src/lib/site-config";

const item: OrderableItem = {
  id: "battery-ls14250",
  slug: "saft-ls14250",
  title: "Saft LS14250 для лічильників",
  kind: "product",
};

describe("order actions", () => {
  it("creates a readable Ukrainian order message with item identity", () => {
    expect(createOrderMessage(item)).toBe(
      "Вітаю! Хочу уточнити або замовити товар: Saft LS14250 для лічильників. Код: battery-ls14250.",
    );
  });

  it("adds a price to the message only when it is supplied", () => {
    expect(
      createOrderMessage({ ...item, priceLabel: "390 грн" }),
    ).toContain("(390 грн)");
  });

  it("builds phone and messenger links from one action layer", () => {
    const actions = getOrderActions(item);

    expect(actions.map((action) => action.channel)).toEqual([
      "phone",
      "telegram",
      "whatsapp",
      "viber",
    ]);
    expect(actions[0].href).toBe(`tel:${siteConfig.phone}`);
    expect(actions[1].href).toContain(`https://t.me/${siteConfig.telegram}`);
    expect(actions[2].href).toContain(`https://wa.me/${siteConfig.whatsapp}`);
    expect(actions[3].href).toContain(
      `viber://chat?number=${encodeURIComponent(siteConfig.viber)}`,
    );
    expect(actions[1].href).toContain(
      encodeURIComponent("Saft LS14250 для лічильників"),
    );
  });
});
