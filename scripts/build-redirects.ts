import fs from "node:fs";
import path from "node:path";

import { listProducts } from "../src/lib/catalog/loader";

const ROOT = path.resolve(import.meta.dirname, "..");
const VERCEL_JSON_PATH = path.join(ROOT, "vercel.json");

type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export function buildLegacySlugRedirects(): Redirect[] {
  const redirects: Redirect[] = [];

  for (const product of listProducts()) {
    for (const legacySlug of product.legacySlugs ?? []) {
      const encoded = encodeURIComponent(legacySlug);
      const destination = `/products/${product.slug}/`;

      redirects.push({
        source: `/products/${encoded}/`,
        destination,
        permanent: true,
      });
      redirects.push({
        source: `/products/${encoded}`,
        destination,
        permanent: true,
      });
    }
  }

  return redirects.sort((a, b) => a.source.localeCompare(b.source));
}

function main() {
  const existing = fs.existsSync(VERCEL_JSON_PATH)
    ? (JSON.parse(fs.readFileSync(VERCEL_JSON_PATH, "utf8")) as Record<
        string,
        unknown
      >)
    : {};

  const redirects = buildLegacySlugRedirects();
  const vercelConfig = {
    ...existing,
    redirects,
  };

  fs.writeFileSync(
    VERCEL_JSON_PATH,
    `${JSON.stringify(vercelConfig, null, 2)}\n`,
    "utf8",
  );

  console.log(`Wrote ${redirects.length} redirects to vercel.json.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
