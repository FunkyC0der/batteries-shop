import type { Metadata } from "next";

import { FloatingQuickOrder } from "@/components/floating-quick-order";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Інженерні та енергетичні рішення`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingQuickOrder />
        <Footer />
      </body>
    </html>
  );
}
