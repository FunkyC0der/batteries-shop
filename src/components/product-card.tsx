import Image from "next/image";
import Link from "next/link";

import { getStatusLabel } from "@/lib/catalog";
import { productToOrderable } from "@/lib/order-actions";
import type { Product } from "@/lib/types";

import { ActionButtons } from "./action-buttons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <Link className="group block" href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            alt={product.title}
            className="object-cover transition duration-500 group-hover:scale-105"
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
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                {product.price}
              </span>
            ) : null}
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-lg font-semibold text-foreground hover:text-primary">
              {product.title}
            </h3>
          </Link>
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
