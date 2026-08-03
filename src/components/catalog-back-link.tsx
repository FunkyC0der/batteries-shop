"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { getSafeCatalogReturnHref } from "@/lib/catalog-navigation";

export function CatalogBackLink() {
  const searchParams = useSearchParams();
  const returnHref = getSafeCatalogReturnHref(
    searchParams.get("from") ?? undefined,
  );

  return (
    <Link
      className="text-sm font-semibold text-primary"
      href={returnHref}
      scroll={false}
    >
      ← До товарів
    </Link>
  );
}
