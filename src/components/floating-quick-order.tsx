"use client";

import type { MouseEvent } from "react";

export function FloatingQuickOrder() {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("quick-order");

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#quick-order");
  }

  return (
    <a
      className="quick-order-pulse fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:scale-105 hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary/25 sm:bottom-6 sm:right-6 sm:text-base"
      href="#quick-order"
      onClick={handleClick}
    >
      Швидке замовлення
    </a>
  );
}
