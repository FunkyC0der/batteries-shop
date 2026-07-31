export type ProductCategory =
  | "lithium"
  | "meter-modules"
  | "accessories"
  | "solar-stations"
  | "backup-power"
  | "energy-storage"
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

export type Product = {
  id: string;
  slug: string;
  title: string;
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
  }>;
  notice?: string;
  image: string;
  featured: boolean;
};

export type Service = {
  id: string;
  slug: string;
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
