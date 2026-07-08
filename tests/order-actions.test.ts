import { describe, expect, it } from "vitest";

import {
  createOrderMessage,
  getOrderActions,
  type OrderableItem,
} from "../src/lib/order-actions";

const item: OrderableItem = {
  id: "battery-ls14250",
  slug: "saft-ls14250",
  title: "Saft LS14250 для лічильників",
  kind: "product",
  priceLabel: "від 390 грн",
};

describe("order actions", () => {
  it("creates a readable Ukrainian order message with item identity", () => {
    expect(createOrderMessage(item)).toBe(
      "Вітаю! Хочу уточнити або замовити товар: Saft LS14250 для лічильників (від 390 грн). Код: battery-ls14250.",
    );
  });

  it("builds phone and messenger links from one action layer", () => {
    const actions = getOrderActions(item);

    expect(actions.map((action) => action.channel)).toEqual([
      "phone",
      "telegram",
      "whatsapp",
      "viber",
    ]);
    expect(actions[0].href).toBe("tel:+380000000000");
    expect(actions[1].href).toContain("https://t.me/placeholder_batteries");
    expect(actions[2].href).toContain("https://wa.me/380000000000");
    expect(actions[3].href).toContain("viber://chat?number=%2B380000000000");
    expect(actions[1].href).toContain(
      encodeURIComponent("Saft LS14250 для лічильників"),
    );
  });
});
