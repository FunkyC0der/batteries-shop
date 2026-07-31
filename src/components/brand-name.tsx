import { siteConfig } from "@/lib/site-config";

export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-extrabold tracking-[0.04em] text-foreground ${className}`}
    >
      {siteConfig.name}
    </span>
  );
}
