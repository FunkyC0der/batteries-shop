import type { Product, Service } from "./types";

export const productCategories = [
  { value: "all", label: "Усі товари" },
  { value: "lithium", label: "Літієві батарейки" },
  { value: "meter-modules", label: "Для модулів лічильників" },
  { value: "accessories", label: "Аксесуари" },
] as const;

export const serviceCategories = [
  { value: "all", label: "Усі послуги" },
  { value: "replacement", label: "Заміна батарейок" },
  { value: "diagnostics", label: "Діагностика" },
  { value: "consulting", label: "Консультації" },
] as const;

export const products: Product[] = [
  {
    id: "battery-ls14250",
    slug: "saft-ls14250",
    title: "Saft LS14250 для теплолічильників",
    category: "lithium",
    price: "від 390 грн",
    status: "in-stock",
    shortDescription:
      "Компактна літієва батарейка 1/2 AA для теплолічильників, модулів пам'яті та промислової автоматики.",
    description:
      "Плейсхолдерний опис товару для майбутньої реальної позиції. Підійде як приклад сторінки з характеристиками, сумісністю та швидким замовленням без онлайн-оплати.",
    specs: [
      { label: "Тип", value: "Li-SOCl2, 1/2 AA" },
      { label: "Напруга", value: "3.6 V" },
      { label: "Ємність", value: "орієнтовно 1200 мАг" },
      { label: "Виводи", value: "без виводів / під пайку за запитом" },
    ],
    compatibility: [
      "теплолічильники",
      "модулі обліку",
      "системи з низьким споживанням",
    ],
    image: "/images/product-lithium-batteries.png",
    featured: true,
  },
  {
    id: "battery-aa-meter",
    slug: "lithium-aa-meter",
    title: "Літієва AA батарейка для лічильників",
    category: "lithium",
    price: "від 450 грн",
    status: "in-stock",
    shortDescription:
      "Універсальна літієва батарейка формату AA для приладів обліку з довгим циклом роботи.",
    description:
      "Плейсхолдер для товару з детальним описом. Тут можна буде додати бренд, точну модель, datasheet та умови поставки.",
    specs: [
      { label: "Тип", value: "Li-SOCl2, AA" },
      { label: "Напруга", value: "3.6 V" },
      { label: "Температура", value: "широкий робочий діапазон" },
      { label: "Призначення", value: "лічильники води, тепла, газу" },
    ],
    compatibility: ["лічильники води", "теплолічильники", "газові модулі"],
    image: "/images/product-lithium-batteries.png",
    featured: true,
  },
  {
    id: "battery-pack-connector",
    slug: "battery-pack-connector",
    title: "Батарейний блок з конектором",
    category: "meter-modules",
    price: "від 620 грн",
    status: "preorder",
    shortDescription:
      "Готовий батарейний блок для заміни у модулі лічильника з підготовленим конектором.",
    description:
      "Плейсхолдерний товар для позицій, де важлива не лише батарейка, а й правильний конектор, довжина проводу та полярність.",
    specs: [
      { label: "Комплектація", value: "батарейка, провід, конектор" },
      { label: "Підготовка", value: "під модель лічильника" },
      { label: "Статус", value: "під замовлення" },
      { label: "Перевірка", value: "контроль напруги перед відправкою" },
    ],
    compatibility: ["модулі лічильників", "прилади з конекторним живленням"],
    image: "/images/product-lithium-batteries.png",
    featured: true,
  },
  {
    id: "battery-tabs",
    slug: "lithium-battery-tabs",
    title: "Батарейка з пелюстками під пайку",
    category: "accessories",
    price: "від 520 грн",
    status: "consult",
    shortDescription:
      "Позиція для випадків, коли потрібна батарейка з виводами для акуратного монтажу.",
    description:
      "Опис-плейсхолдер для товару, де перед продажем варто уточнити розташування виводів, габарити та сумісність.",
    specs: [
      { label: "Виводи", value: "пелюстки під пайку" },
      { label: "Формат", value: "залежить від моделі" },
      { label: "Підбір", value: "за фото або маркуванням старої батарейки" },
      { label: "Замовлення", value: "після консультації" },
    ],
    compatibility: ["плати живлення", "модулі пам'яті", "контролери обліку"],
    image: "/images/product-lithium-batteries.png",
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: "service-battery-replacement",
    slug: "battery-replacement",
    title: "Заміна батарейки в лічильнику",
    category: "replacement",
    priceFrom: "від 700 грн",
    status: "in-stock",
    shortDescription:
      "Акуратна заміна батарейки з перевіркою напруги, контактів і базовою діагностикою модуля.",
    description:
      "Плейсхолдерна сторінка послуги. У реальній версії тут можна описати умови виїзду, гарантію, список підтримуваних моделей і порядок узгодження.",
    includes: [
      "підбір сумісної батарейки",
      "пайка або підключення конектора",
      "перевірка напруги",
      "базова перевірка запуску модуля",
    ],
    duration: "30-60 хв",
    image: "/images/service-meter-workbench.png",
    featured: true,
  },
  {
    id: "service-meter-diagnostics",
    slug: "meter-diagnostics",
    title: "Діагностика живлення лічильника",
    category: "diagnostics",
    priceFrom: "від 400 грн",
    status: "consult",
    shortDescription:
      "Перевірка батарейки, контактів, конектора та типових причин, чому модуль не запускається.",
    description:
      "Плейсхолдер для послуги діагностики. Деталі можна буде замінити на реальні умови сервісу та перелік моделей.",
    includes: [
      "вимірювання напруги",
      "огляд контактів",
      "перевірка конектора",
      "рекомендація щодо заміни",
    ],
    duration: "20-40 хв",
    image: "/images/service-meter-workbench.png",
    featured: true,
  },
  {
    id: "service-selection-consulting",
    slug: "battery-selection-consulting",
    title: "Підбір батарейки за моделлю",
    category: "consulting",
    priceFrom: "безкоштовно",
    status: "in-stock",
    shortDescription:
      "Допоможемо підібрати батарейку за фото, маркуванням або моделлю лічильника.",
    description:
      "Плейсхолдерна консультаційна послуга для клієнтів, які не впевнені у форматі, напрузі або типі виводів.",
    includes: [
      "перевірка маркування",
      "уточнення формату батарейки",
      "порада щодо виводів або конектора",
      "посилання на відповідний товар",
    ],
    duration: "до 15 хв",
    image: "/images/service-meter-workbench.png",
    featured: true,
  },
  {
    id: "service-pack-preparation",
    slug: "battery-pack-preparation",
    title: "Підготовка батарейного блоку",
    category: "replacement",
    priceFrom: "від 300 грн",
    status: "preorder",
    shortDescription:
      "Підготовка батарейки з проводом, конектором або пелюстками під конкретний модуль.",
    description:
      "Плейсхолдер для сервісу підготовки комплекту перед монтажем або відправкою клієнту.",
    includes: [
      "підготовка проводу",
      "монтаж конектора",
      "контроль полярності",
      "перевірка перед передачею",
    ],
    duration: "1-2 дні",
    image: "/images/service-meter-workbench.png",
    featured: false,
  },
];
