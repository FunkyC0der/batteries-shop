import Image from "next/image";
import Link from "next/link";

import { getStatusLabel } from "@/lib/catalog";
import { productToOrderable } from "@/lib/order-actions";
import type { Product } from "@/lib/types";

import { ActionButtons } from "./action-buttons";

type ProductCardProps = {
  product: Product;
  detailHref?: string;
  cardId?: string;
  isReturnTarget?: boolean;
  onReturnTargetMount?: (element: HTMLElement | null) => void;
};

export function ProductCard({
  product,
  detailHref,
  cardId,
  isReturnTarget = false,
  onReturnTargetMount,
}: ProductCardProps) {
  const href = detailHref ?? `/products/${product.slug}`;
  const visibleConfigurations = product.configurations?.slice(0, 5) ?? [];
  const hiddenConfigurationCount =
    (product.configurations?.length ?? 0) - visibleConfigurations.length;

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
      id={cardId}
      ref={isReturnTarget ? onReturnTargetMount : undefined}
      tabIndex={cardId ? -1 : undefined}
    >
      <Link className="group block" href={href}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            alt={product.title}
            className={
              product.images?.length
                ? "object-contain p-4 transition duration-500 group-hover:scale-105"
                : "object-cover transition duration-500 group-hover:scale-105"
            }
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            src={product.image}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {getStatusLabel(product.status)}
            </span>
            {product.showPrice && product.price ? (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {product.price}
              </span>
            ) : null}
          </div>
          <Link href={href}>
            <h3 className="text-lg font-semibold text-foreground hover:text-primary">
              {product.title}
            </h3>
          </Link>
          {product.configurations?.length ? (
            <div
              aria-label="Доступні конфігурації"
              className="mt-3 flex flex-wrap gap-2"
            >
              {visibleConfigurations.map((configuration) => (
                <span
                  className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary"
                  key={configuration.label}
                >
                  {configuration.label}
                </span>
              ))}
              {hiddenConfigurationCount > 0 ? (
                <span className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  +{hiddenConfigurationCount} варіантів
                </span>
              ) : null}
            </div>
          ) : null}
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {product.shortDescription}
          </p>
        </div>
        <div className="mt-auto">
          <ActionButtons compact item={productToOrderable(product)} />
        </div>
      </div>
    </article>
  );
}
