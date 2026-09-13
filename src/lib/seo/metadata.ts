import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

const DEFAULT_OG_IMAGE = "/og/default.png";

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function withTrailingSlash(path: string) {
  if (path.includes("?") || path.includes("#") || path.endsWith("/")) {
    return path;
  }

  return `${path}/`;
}

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  images?: string[];
  noindex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  images,
  noindex,
}: BuildPageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(withTrailingSlash(path));
  const ogImages = (images && images.length > 0 ? images : [DEFAULT_OG_IMAGE]).map(
    (image) => absoluteUrl(image),
  );

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}
