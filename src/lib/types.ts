export type ProductCategory =
  | "lithium"
  | "heat-meters"
  | "water-meters"
  | "meter-modules"
  | "accessories"
  | "solar-stations"
  | "solar-panels"
  | "inverters"
  | "solar-batteries"
  | "solar-accessories"
  | "backup-power"
  | "energy-storage"
  | "energy-storage-systems"
  | "ev-charging";

export type ServiceDirection = "metering-and-comfort" | "energy-solutions";

export type ServiceCategory =
  | "battery-service"
  | "verification"
  | "installation"
  | "plumbing"
  | "energy-analysis-design"
  | "energy-supply-construction"
  | "energy-storage-integration"
  | "energy-control-service";

export type AvailabilityStatus = "in-stock" | "preorder" | "consult";

export type CatalogSourceId = "manual" | "solarverse" | "namato";

export type Product = {
  id: string;
  slug: string;
  source: CatalogSourceId;
  locked?: boolean;
  title: string;
  sourceUrl?: string;
  sourceUrls?: string[];
  legacySlugs?: string[];
  direction: ServiceDirection;
  category: ProductCategory;
  price?: string;
  showPrice: boolean;
  status: AvailabilityStatus;
  shortDescription: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  compatibility: string[];
  compatibilityTitle?: string;
  configurations?: Array<{
    label: string;
    equipment: string[];
    price?: string;
  }>;
  notice?: string;
  image: string;
  images?: string[];
  featured: boolean;
};

export type Service = {
  id: string;
  slug: string;
  source: CatalogSourceId;
  locked?: boolean;
  title: string;
  direction: ServiceDirection;
  category: ServiceCategory;
  price?: string;
  showPrice: boolean;
  status: AvailabilityStatus;
  shortDescription: string;
  description: string;
  includes: string[];
  duration: string;
  image: string;
  featured: boolean;
};

export type CatalogSearch = {
  direction?: ServiceDirection | "all";
  category?: ProductCategory | ServiceCategory | "all";
  query?: string;
};

/** Shape stored in data/products/{category}/{slug}.json */
export type ProductFile = Omit<Product, "id" | "category">;

/** Shape stored in data/services/{category}/{slug}.json */
export type ServiceFile = Omit<Service, "id" | "category">;
