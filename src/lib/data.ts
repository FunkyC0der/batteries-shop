import {
  listProducts,
  listServices,
  productCategories,
  productDirections,
  serviceCategories,
  serviceDirections,
} from "./catalog";

export {
  productCategories,
  productDirections,
  serviceCategories,
  serviceDirections,
};

export const products = listProducts();
export const services = listServices();
