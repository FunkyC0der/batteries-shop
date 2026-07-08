import Image from "next/image";
import Link from "next/link";

import { getStatusLabel } from "@/lib/catalog";
import { serviceToOrderable } from "@/lib/order-actions";
import type { Service } from "@/lib/types";

import { ActionButtons } from "./action-buttons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <Link className="group block" href={`/services/${service.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            alt={service.title}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            src={service.image}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              {getStatusLabel(service.status)}
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
              {service.priceFrom}
            </span>
          </div>
          <Link href={`/services/${service.slug}`}>
            <h3 className="text-lg font-semibold text-foreground hover:text-primary">
              {service.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {service.shortDescription}
          </p>
        </div>
        <div className="mt-auto">
          <ActionButtons compact item={serviceToOrderable(service)} />
        </div>
      </div>
    </article>
  );
}
