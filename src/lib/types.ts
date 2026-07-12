export type ProductCategory = "lithium" | "meter-modules" | "accessories";

export type ServiceCategory =
  | "battery-service"
  | "verification"
  | "installation"
  | "plumbing";

export type AvailabilityStatus = "in-stock" | "preorder" | "consult";

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: ProductCategory;
  price: string;
  status: AvailabilityStatus;
  shortDescription: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  compatibility: string[];
  image: string;
  featured: boolean;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  status: AvailabilityStatus;
  shortDescription: string;
  description: string;
  includes: string[];
  duration: string;
  image: string;
  featured: boolean;
};

export type CatalogSearch = {
  category?: ProductCategory | ServiceCategory | "all";
  query?: string;
};
