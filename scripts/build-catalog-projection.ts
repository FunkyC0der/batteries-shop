import fs from "node:fs";
import path from "node:path";

import {
  buildProductCatalogProjection,
  buildServiceCatalogProjection,
} from "../src/lib/catalog/list-projection";
import { listProducts, listServices } from "../src/lib/catalog/loader";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "catalog");

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const products = buildProductCatalogProjection(listProducts());
  const services = buildServiceCatalogProjection(listServices());

  fs.writeFileSync(
    path.join(OUT_DIR, "products.json"),
    `${JSON.stringify(products)}\n`,
    "utf8",
  );
  fs.writeFileSync(
    path.join(OUT_DIR, "services.json"),
    `${JSON.stringify(services)}\n`,
    "utf8",
  );

  console.log(
    `Wrote ${products.length} products and ${services.length} services to public/catalog/.`,
  );
}

main();
