import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const isPreviewDeploy =
    Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";

  if (isPreviewDeploy) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${siteConfig.url}/sitemap.xml`,
      host: new URL(siteConfig.url).host,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: AI_AGENTS,
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: new URL(siteConfig.url).host,
  };
}
