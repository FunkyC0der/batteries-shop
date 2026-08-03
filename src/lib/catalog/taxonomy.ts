import type {
  ProductCategory,
  ServiceCategory,
  ServiceDirection,
} from "../types";

export const productCategories = [
  { value: "all", label: "Усі товари" },
  {
    value: "solar-stations",
    label: "Сонячні електростанції",
    direction: "energy-solutions",
  },
  {
    value: "solar-panels",
    label: "Сонячні панелі",
    direction: "energy-solutions",
  },
  {
    value: "inverters",
    label: "Інвертори",
    direction: "energy-solutions",
  },
  {
    value: "solar-batteries",
    label: "Акумуляторні батареї",
    direction: "energy-solutions",
  },
  {
    value: "solar-accessories",
    label: "Аксесуари для енергосистем",
    direction: "energy-solutions",
  },
  {
    value: "backup-power",
    label: "Резервне живлення",
    direction: "energy-solutions",
  },
  {
    value: "energy-storage",
    label: "Накопичення енергії",
    direction: "energy-solutions",
  },
  {
    value: "energy-storage-systems",
    label: "Готові системи зберігання енергії",
    direction: "energy-solutions",
  },
  {
    value: "ev-charging",
    label: "Заряджання EV",
    direction: "energy-solutions",
  },
  {
    value: "lithium",
    label: "Літієві батарейки",
    direction: "metering-and-comfort",
  },
  {
    value: "meter-modules",
    label: "Для модулів лічильників",
    direction: "metering-and-comfort",
  },
  {
    value: "accessories",
    label: "Аксесуари",
    direction: "metering-and-comfort",
  },
] as const;

export const productDirections = [
  {
    value: "all",
    label: "Усі товари",
    description: "Повний каталог обладнання та енергетичних систем",
  },
  {
    value: "metering-and-comfort",
    label: "Опалення, тепло та облік",
    description: "Батарейки й комплектуючі для приладів обліку",
  },
  {
    value: "energy-solutions",
    label: "Енергетичні рішення",
    description: "Сонячні станції, резерв, накопичення та заряджання EV",
  },
] as const;

export const serviceCategories = [
  { value: "all", label: "Усі категорії" },
  {
    value: "battery-service",
    label: "Батарейки",
    direction: "metering-and-comfort",
  },
  {
    value: "verification",
    label: "Повірка",
    direction: "metering-and-comfort",
  },
  {
    value: "installation",
    label: "Встановлення",
    direction: "metering-and-comfort",
  },
  {
    value: "plumbing",
    label: "Сантехнічні роботи",
    direction: "metering-and-comfort",
  },
  {
    value: "energy-analysis-design",
    label: "Аудит і проєктування",
    direction: "energy-solutions",
  },
  {
    value: "energy-supply-construction",
    label: "Комплектація та будівництво",
    direction: "energy-solutions",
  },
  {
    value: "energy-storage-integration",
    label: "Накопичення та інтеграція",
    direction: "energy-solutions",
  },
  {
    value: "energy-control-service",
    label: "Автоматизація та сервіс",
    direction: "energy-solutions",
  },
] as const;

export const serviceDirections = [
  {
    value: "all",
    label: "Усі послуги",
    description: "Повний перелік робіт і рішень",
  },
  {
    value: "metering-and-comfort",
    label: "Облік, тепло та сантехніка",
    description: "Лічильники, батарейки, опалення й вода",
  },
  {
    value: "energy-solutions",
    label: "Енергетичні рішення",
    description: "Від аудиту й проєкту до запуску та сервісу",
  },
] as const;

export const PRODUCT_CATEGORY_VALUES = productCategories
  .map((category) => category.value)
  .filter((value): value is ProductCategory => value !== "all");

export const SERVICE_CATEGORY_VALUES = serviceCategories
  .map((category) => category.value)
  .filter((value): value is ServiceCategory => value !== "all");

export function getProductCategoryDirection(
  category: ProductCategory,
): ServiceDirection | undefined {
  const entry = productCategories.find((item) => item.value === category);
  return entry && "direction" in entry ? entry.direction : undefined;
}

export function getServiceCategoryDirection(
  category: ServiceCategory,
): ServiceDirection | undefined {
  const entry = serviceCategories.find((item) => item.value === category);
  return entry && "direction" in entry ? entry.direction : undefined;
}
