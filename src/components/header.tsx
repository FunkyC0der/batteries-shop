"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { BrandName } from "@/components/brand-name";
import { navigation, siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-border bg-[#f7faf9]"
      data-analytics-placement="header"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="flex items-center gap-3 font-semibold text-foreground"
          href="/"
          onClick={() => setOpen(false)}
        >
          <BrandMark className="size-10 shrink-0" />
          <span className="leading-tight">
            <BrandName className="block text-lg" />
            <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#5b6c68]">
              Інженерні та енергетичні рішення
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  className={
                    active
                      ? "rounded-full bg-muted px-4 py-2 text-sm font-semibold text-primary"
                      : "rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  }
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            href={`tel:${siteConfig.phone}`}
            aria-label={`Зателефонувати: ${siteConfig.phoneLabel}`}
          >
            <span
              aria-hidden="true"
              className="block size-5 bg-current"
              style={{
                maskImage: "url(/images/cta-phone.svg)",
                maskPosition: "center",
                maskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskImage: "url(/images/cta-phone.svg)",
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
              }}
            />
            <span>{siteConfig.phoneLabel}</span>
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label="Відкрити меню"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                className="rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-muted"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mt-1 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-base font-semibold text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
              href={`tel:${siteConfig.phone}`}
              aria-label={`Зателефонувати: ${siteConfig.phoneLabel}`}
              onClick={() => setOpen(false)}
            >
              <span
                aria-hidden="true"
                className="block size-6 bg-current"
                style={{
                  maskImage: "url(/images/cta-phone.svg)",
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskImage: "url(/images/cta-phone.svg)",
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                }}
              />
              <span>{siteConfig.phoneLabel}</span>
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
