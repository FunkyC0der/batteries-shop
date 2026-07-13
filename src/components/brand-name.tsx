import { siteConfig } from "@/lib/site-config";

export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-extrabold tracking-normal text-foreground ${className}`}
    >
      {siteConfig.nameParts.base}
      <span className="text-primary">{siteConfig.nameParts.accent}</span>
    </span>
  );
}
