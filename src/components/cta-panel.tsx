import { ActionButtons } from "./action-buttons";

export function CtaPanel() {
  return (
    <section
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8"
      id="quick-order"
    >
      <div className="grid gap-6 rounded-3xl border border-border bg-primary p-6 text-primary-foreground sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
            Швидке замовлення
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Потрібна батарейка чи сервіс для лічильника?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 opacity-90">
            Надішліть модель приладу, фото батарейки або коротко опишіть
            завдання. Підберемо товар, проконсультуємо щодо повірки чи заміни
            лічильника та погодимо роботи у сервісі або з виїздом.
          </p>
        </div>
        <div className="[--card:var(--primary)] [--foreground:var(--primary-foreground)] [--muted-foreground:var(--primary-foreground)] [--border:color-mix(in_srgb,var(--primary-foreground)_35%,transparent)]">
          <ActionButtons
            item={{
              id: "general-consultation",
              slug: "general-consultation",
              title: "Консультація щодо батарейки або послуги",
              kind: "service",
            }}
            variant="inverse"
          />
        </div>
      </div>
    </section>
  );
}
