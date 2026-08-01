"use client";

import { useEffect, useRef, useState } from "react";

import type {
  ProductFacetConfig,
  ProductFacetModel,
  ProductFacetSelection,
} from "@/lib/product-facets";

type ProductFacetControlsProps = {
  config: ProductFacetConfig;
  models: ProductFacetModel[];
  onReset: () => void;
  onToggle: (facetId: string, value: string) => void;
  resultCount: number;
  selection: ProductFacetSelection;
};

type FacetFieldsProps = Pick<
  ProductFacetControlsProps,
  "models" | "onToggle"
> & {
  idPrefix: string;
};

function FacetField({
  idPrefix,
  model,
  onToggle,
}: {
  idPrefix: string;
  model: ProductFacetModel;
  onToggle: ProductFacetControlsProps["onToggle"];
}) {
  const [expanded, setExpanded] = useState(false);
  const limit = model.definition.initialValueLimit ?? model.options.length;
  const selectedOutsideLimit = model.options.filter(
    (option, index) => option.selected && index >= limit,
  );
  const visibleOptions = expanded
    ? model.options
    : [
        ...model.options.slice(0, limit),
        ...selectedOutsideLimit.filter(
          (option) => !model.options.slice(0, limit).includes(option),
        ),
      ];
  const hasMore = model.options.length > visibleOptions.length;

  return (
    <fieldset className="border-b border-border pb-5 last:border-b-0 last:pb-0">
      <legend className="text-sm font-semibold text-foreground">
        {model.definition.label}
      </legend>
      <div className="mt-3 grid gap-2.5">
        {visibleOptions.map((option) => {
          const disabled = option.count === 0 && !option.selected;

          return (
            <label
              className={
                disabled
                  ? "flex cursor-not-allowed items-center gap-3 text-sm text-muted-foreground/50"
                  : "flex cursor-pointer items-center gap-3 text-sm text-foreground"
              }
              key={option.value}
            >
              <input
                checked={option.selected}
                className="size-4 shrink-0 accent-primary"
                disabled={disabled}
                name={`${idPrefix}-${model.definition.id}`}
                onChange={() =>
                  onToggle(model.definition.id, option.value)
                }
                type="checkbox"
                value={option.value}
              />
              <span className="min-w-0 flex-1">{option.value}</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                {option.count}
              </span>
            </label>
          );
        })}
      </div>
      {hasMore || expanded ? (
        <button
          className="mt-3 text-sm font-semibold text-primary"
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          {expanded
            ? "Показати менше"
            : `Ще ${model.options.length - visibleOptions.length}`}
        </button>
      ) : null}
    </fieldset>
  );
}

function FacetFields({ idPrefix, models, onToggle }: FacetFieldsProps) {
  return (
    <div className="grid gap-5">
      {models.map((model) => (
        <FacetField
          idPrefix={idPrefix}
          key={model.definition.id}
          model={model}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

function getActiveValues(
  models: ProductFacetModel[],
  selection: ProductFacetSelection,
) {
  return models.flatMap((model) =>
    (selection[model.definition.id] ?? []).map((value) => ({
      facetId: model.definition.id,
      facetLabel: model.definition.label,
      value,
    })),
  );
}

function ActiveFacetChips({
  activeValues,
  onReset,
  onToggle,
}: {
  activeValues: ReturnType<typeof getActiveValues>;
  onReset: () => void;
  onToggle: ProductFacetControlsProps["onToggle"];
}) {
  if (activeValues.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {activeValues.map((item) => (
        <button
          aria-label={`Прибрати фільтр ${item.facetLabel}: ${item.value}`}
          className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
          key={`${item.facetId}-${item.value}`}
          onClick={() => onToggle(item.facetId, item.value)}
          type="button"
        >
          {item.value} ×
        </button>
      ))}
      <button
        className="px-2 py-1.5 text-xs font-semibold text-muted-foreground underline underline-offset-4"
        onClick={onReset}
        type="button"
      >
        Очистити
      </button>
    </div>
  );
}

export function ProductFacetControls({
  config,
  models,
  onReset,
  onToggle,
  resultCount,
  selection,
}: ProductFacetControlsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAllMobileFacets, setShowAllMobileFacets] = useState(false);
  const mobileHeadingRef = useRef<HTMLHeadingElement>(null);
  const activeValues = getActiveValues(models, selection);
  const activeCount = activeValues.length;
  const mobileFacetLimit = config.mobileFacetLimit ?? models.length;
  const selectedFacetIds = new Set(activeValues.map((item) => item.facetId));
  const initialMobileModels = models.slice(0, mobileFacetLimit);
  const mobileModels = showAllMobileFacets
    ? models
    : [
        ...initialMobileModels,
        ...models.slice(mobileFacetLimit).filter(
          (model) => selectedFacetIds.has(model.definition.id),
        ),
      ];

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileHeadingRef.current?.focus();

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-border bg-card p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-foreground">{config.title}</h2>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {config.description}
              </p>
            </div>
            {activeCount ? (
              <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                {activeCount}
              </span>
            ) : null}
          </div>
          <div className="mt-4">
            <ActiveFacetChips
              activeValues={activeValues}
              onReset={onReset}
              onToggle={onToggle}
            />
          </div>
          <div className="mt-5">
            <FacetFields
              idPrefix="desktop-facet"
              models={models}
              onToggle={onToggle}
            />
          </div>
        </div>
      </aside>

      <div className="lg:hidden">
        <button
          aria-expanded={mobileOpen}
          className="flex min-h-12 w-full items-center justify-between rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground"
          onClick={() => setMobileOpen(true)}
          type="button"
        >
          <span>Фільтри за характеристиками</span>
          <span className="flex items-center gap-2">
            {activeCount ? (
              <span className="rounded-full bg-primary px-2.5 py-1 text-xs text-primary-foreground">
                {activeCount}
              </span>
            ) : null}
            <span aria-hidden="true">☰</span>
          </span>
        </button>
        <div className="mt-3">
          <ActiveFacetChips
            activeValues={activeValues}
            onReset={onReset}
            onToggle={onToggle}
          />
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-[60] flex items-end lg:hidden">
            <button
              aria-label="Закрити фільтри"
              className="absolute inset-0 bg-foreground/45 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              type="button"
            />
            <section
              aria-labelledby="mobile-filters-title"
              aria-modal="true"
              className="relative z-10 flex max-h-[88dvh] w-full flex-col rounded-t-3xl bg-background shadow-2xl"
              role="dialog"
            >
              <header className="flex items-start justify-between gap-4 border-b border-border p-5">
                <div>
                  <h2
                    className="font-semibold text-foreground outline-none"
                    id="mobile-filters-title"
                    ref={mobileHeadingRef}
                    tabIndex={-1}
                  >
                    {config.title}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {config.description}
                  </p>
                </div>
                <button
                  aria-label="Закрити"
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card text-xl"
                  onClick={() => setMobileOpen(false)}
                  type="button"
                >
                  ×
                </button>
              </header>

              <div className="overflow-y-auto p-5">
                <ActiveFacetChips
                  activeValues={activeValues}
                  onReset={onReset}
                  onToggle={onToggle}
                />
                <div className={activeCount ? "mt-5" : undefined}>
                  <FacetFields
                    idPrefix="mobile-facet"
                    models={mobileModels}
                    onToggle={onToggle}
                  />
                </div>
                {models.length > mobileModels.length ? (
                  <button
                    className="mt-5 min-h-11 w-full rounded-full border border-primary px-4 text-sm font-semibold text-primary"
                    onClick={() => setShowAllMobileFacets(true)}
                    type="button"
                  >
                    Показати ще {models.length - mobileModels.length} параметри
                  </button>
                ) : null}
              </div>

              <footer className="grid grid-cols-[auto_1fr] gap-3 border-t border-border bg-card p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button
                  className="min-h-12 rounded-full border border-border px-4 text-sm font-semibold text-muted-foreground disabled:opacity-40"
                  disabled={activeCount === 0}
                  onClick={onReset}
                  type="button"
                >
                  Очистити
                </button>
                <button
                  className="min-h-12 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                  type="button"
                >
                  Показати {resultCount} товарів
                </button>
              </footer>
            </section>
          </div>
        ) : null}
      </div>
    </>
  );
}
