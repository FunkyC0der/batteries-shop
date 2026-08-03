import type { AvailabilityStatus } from "./types";

export function formatProductCount(count: number) {
  const remainder100 = count % 100;
  const remainder10 = count % 10;
  const noun =
    remainder100 >= 11 && remainder100 <= 14
      ? "товарів"
      : remainder10 === 1
        ? "товар"
        : remainder10 >= 2 && remainder10 <= 4
          ? "товари"
          : "товарів";

  return `${count.toLocaleString("uk-UA")} ${noun}`;
}

export function getStatusLabel(status: AvailabilityStatus) {
  const labels = {
    "in-stock": "Є в наявності",
    preorder: "Під замовлення",
    consult: "Уточнити",
  } satisfies Record<AvailabilityStatus, string>;

  return labels[status];
}
