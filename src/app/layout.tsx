import type { Metadata, Viewport } from "next";

import { JsonLd } from "@/components/json-ld";
import { FloatingQuickOrder } from "@/components/floating-quick-order";
import { Footer } from "@/components/footer";
import { GoogleTag } from "@/components/google-tag";
import { Header } from "@/components/header";
import { buildSiteJsonLdGraph } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const defaultOgImage = absoluteUrl("/og/default.png");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Інженерні та енергетичні рішення`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={buildSiteJsonLdGraph()} />
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingQuickOrder />
        <Footer />
        <GoogleTag />
      </body>
    </html>
  );
}
