// Generated from Solarverse equipment catalogs.
// Prices are reference values and must be confirmed before sale.
import type { Product, ProductCategory } from "./types";

type ImportedCatalogKey =
  | "inverters"
  | "solar-batteries"
  | "solar-panels"
  | "solar-accessories";

type ImportedEquipmentProduct = {
  catalog: ImportedCatalogKey;
  slug: string;
  title: string;
  price?: number;
  images?: string[];
  specs: Array<{ label: string; value: string }>;
};

const importedProducts: ImportedEquipmentProduct[] = [
  {
    "catalog": "inverters",
    "slug": "avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi",
    "title": "Автономний сонячний інвертор Growatt SPF5000ES Wi-Fi",
    "price": 25068,
    "specs": [
      {
        "label": "Бренд",
        "value": "GROWATT"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "5000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/4.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/5.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/6.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/7.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-sonyachniy-invertor-growatt-spf5000es-wi-fi/8.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4",
    "title": "Гібридний інвертор DEYE SUN-50K-SG01HP3-EU-BM4",
    "price": 232518,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "50000 W"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/5.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/6.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/7.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/8.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-50k-sg01hp3-eu-bm4/9.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "invertor-powmr-2000w-dc-12v-ac-220v-pow-hv2k-12v",
    "title": "Інвертор PowMr 2000W DC 12V AC 220V POW-HV2K-12V",
    "price": 6999,
    "specs": [
      {
        "label": "Бренд",
        "value": "PowMr"
      },
      {
        "label": "Виробник (бренд)",
        "value": "PowMr"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "2000 W"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-12v-ac-220v-pow-hv2k-12v/1.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-12v-ac-220v-pow-hv2k-12v/2.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-12v-ac-220v-pow-hv2k-12v/3.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-12v-ac-220v-pow-hv2k-12v/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "merezheviy-invertor-deye-sun-120k-g01p3-eu-120kw-trifazniy-380v50hz",
    "title": "Мережевий інвертор DEYE SUN-120K-G01P3-EU 120KW Трифазний 380V/50hz",
    "price": 171588,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Мережевий"
      },
      {
        "label": "Номінальна потужність",
        "value": "120000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-120k-g01p3-eu-120kw-trifazniy-380v50hz/1.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-120k-g01p3-eu-120kw-trifazniy-380v50hz/2.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-120k-g01p3-eu-120kw-trifazniy-380v50hz/3.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-120k-g01p3-eu-120kw-trifazniy-380v50hz/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-afore-af6k-slp-6kw-48v-2-mppt-wi-fi-220v-odnofazniy-af6k-slp",
    "title": "Гібридний інвертор Afore AF6K-SLP 6KW 48V 2 MPPT Wi-Fi 220V Однофазний (AF6K-SLP)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Afore"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Afore"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "51.2 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af6k-slp-6kw-48v-2-mppt-wi-fi-220v-odnofazniy-af6k-slp/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af6k-slp-6kw-48v-2-mppt-wi-fi-220v-odnofazniy-af6k-slp/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af6k-slp-6kw-48v-2-mppt-wi-fi-220v-odnofazniy-af6k-slp/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af6k-slp-6kw-48v-2-mppt-wi-fi-220v-odnofazniy-af6k-slp/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-20k-sg05lp3-eu-sm2-20kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-20K-SG05LP3-EU-SM2 20KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "price": 130500,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "20000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg05lp3-eu-sm2-20kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg05lp3-eu-sm2-20kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg05lp3-eu-sm2-20kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg05lp3-eu-sm2-20kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg05lp3-eu-sm2-20kw-48v-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-15k-sg05lp3-eu-sm2-15kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-15K-SG05LP3-EU-SM2 15KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "price": 100758,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "15000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg05lp3-eu-sm2-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg05lp3-eu-sm2-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg05lp3-eu-sm2-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg05lp3-eu-sm2-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg05lp3-eu-sm2-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh1p6k-l-plus-6kw-48v-2-mppt-wi-fi-220v-odnofazniy",
    "title": "Гібридний інвертор Solis S6-EH1P6K-L-PLUS 6KW 48V 2 MPPT Wi-Fi 220V Однофазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p6k-l-plus-6kw-48v-2-mppt-wi-fi-220v-odnofazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p6k-l-plus-6kw-48v-2-mppt-wi-fi-220v-odnofazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p6k-l-plus-6kw-48v-2-mppt-wi-fi-220v-odnofazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p6k-l-plus-6kw-48v-2-mppt-wi-fi-220v-odnofazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-afore-af15k-th-15kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Afore AF15K-TH 15KW HV-battery 2 MPPT Wi-Fi 220/380V Трифазний",
    "price": 84378,
    "specs": [
      {
        "label": "Бренд",
        "value": "Afore"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Afore"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "15000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "150 - 800 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af15k-th-15kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af15k-th-15kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af15k-th-15kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-afore-af15k-th-15kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh1p8k-l-plus-8kw-48v-2-mppt-wi-fi-220v-odnofazniy",
    "title": "Гібридний інвертор Solis S6-EH1P8K-L-PLUS 8KW 48V 2 MPPT Wi-Fi 220V Однофазний",
    "price": 56520,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "8000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p8k-l-plus-8kw-48v-2-mppt-wi-fi-220v-odnofazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p8k-l-plus-8kw-48v-2-mppt-wi-fi-220v-odnofazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p8k-l-plus-8kw-48v-2-mppt-wi-fi-220v-odnofazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh1p8k-l-plus-8kw-48v-2-mppt-wi-fi-220v-odnofazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh3p30k-h-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Solis S6-EH3P30K-H 30KW HV-battery 3 MPPT Wi-Fi 220/380V Трифазний",
    "price": 149088,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "30000 W"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p30k-h-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p30k-h-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p30k-h-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p30k-h-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh3p50k-h-50kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Solis S6-EH3P50K-H 50KW HV-battery 4 MPPT Wi-Fi 220/380V Трифазний",
    "price": 226530,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "50000 W"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p50k-h-50kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p50k-h-50kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p50k-h-50kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p50k-h-50kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-60k-sg02hp3-eu-em6-60kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-60K-SG02HP3-EU-EM6 60kW HV-battery 6 MPPT Wi-Fi 220/380V Трифазний",
    "price": 292008,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "60000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 1000 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-60k-sg02hp3-eu-em6-60kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-60k-sg02hp3-eu-em6-60kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-60k-sg02hp3-eu-em6-60kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-60k-sg02hp3-eu-em6-60kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-60k-sg02hp3-eu-em6-60kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-solarverse-ampere-3kw-24v-1-mppt-220v-odnofazniy-sv3024a",
    "title": "Автономний інвертор Solarverse Ampere 3kW 24V 1 MPPT 220V Однофазний (SV3024A)",
    "price": 17730,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "3000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "24 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-3kw-24v-1-mppt-220v-odnofazniy-sv3024a/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-3kw-24v-1-mppt-220v-odnofazniy-sv3024a/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-3kw-24v-1-mppt-220v-odnofazniy-sv3024a/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-3kw-24v-1-mppt-220v-odnofazniy-sv3024a/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-solarverse-ampere-5kw-48v-1-mppt-220v-odnofazniy-sv5048a",
    "title": "Автономний інвертор Solarverse Ampere 5kW 48V 1 MPPT 220V Однофазний (SV5048A)",
    "price": 20388,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "5000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-5kw-48v-1-mppt-220v-odnofazniy-sv5048a/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-5kw-48v-1-mppt-220v-odnofazniy-sv5048a/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-5kw-48v-1-mppt-220v-odnofazniy-sv5048a/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-5kw-48v-1-mppt-220v-odnofazniy-sv5048a/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-solarverse-ampere-double-8kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv8048ad",
    "title": "Автономний інвертор Solarverse Ampere Double 8kW 48V 1 MPPT Wi-Fi 220V Однофазний (SV8048AD)",
    "price": 53730,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "8000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-double-8kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv8048ad/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-double-8kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv8048ad/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-double-8kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv8048ad/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-double-8kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv8048ad/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-sungrow-sh60rs-v11-6kw-hv-2-mppt-220v-odnofazniy-ash00099",
    "title": "Гібридний інвертор SUNGROW SH6.0RS-V11 6kW HV 2 MPPT 220V Однофазний (ASH00099)",
    "price": 58548,
    "specs": [
      {
        "label": "Бренд",
        "value": "Sungrow"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Sungrow"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "80 - 460 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-sungrow-sh60rs-v11-6kw-hv-2-mppt-220v-odnofazniy-ash00099/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-sungrow-sh60rs-v11-6kw-hv-2-mppt-220v-odnofazniy-ash00099/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-sungrow-sh60rs-v11-6kw-hv-2-mppt-220v-odnofazniy-ash00099/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-sungrow-sh60rs-v11-6kw-hv-2-mppt-220v-odnofazniy-ash00099/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-sungrow-sh60rs-v11-6kw-hv-2-mppt-220v-odnofazniy-ash00099/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "merezheviy-invertor-sungrow-sg110cx-v112-110kw-12-mppt-220380v-trifazniy-asg02271",
    "title": "Мережевий інвертор SUNGROW SG110CX-V112 110kW 12 MPPT 220/380V Трифазний (ASG02271)",
    "price": 221940,
    "specs": [
      {
        "label": "Бренд",
        "value": "Sungrow"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Sungrow"
      },
      {
        "label": "Тип",
        "value": "Мережевий"
      },
      {
        "label": "Номінальна потужність",
        "value": "110000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg110cx-v112-110kw-12-mppt-220380v-trifazniy-asg02271/1.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg110cx-v112-110kw-12-mppt-220380v-trifazniy-asg02271/2.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg110cx-v112-110kw-12-mppt-220380v-trifazniy-asg02271/3.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg110cx-v112-110kw-12-mppt-220380v-trifazniy-asg02271/4.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg110cx-v112-110kw-12-mppt-220380v-trifazniy-asg02271/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-10k-sg05lp3-eu-sm2-10kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор DEYE SUN-10K-SG05LP3-EU-SM2 10KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "price": 79740,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "10000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 60 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg05lp3-eu-sm2-10kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg05lp3-eu-sm2-10kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg05lp3-eu-sm2-10kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg05lp3-eu-sm2-10kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg05lp3-eu-sm2-10kw-48v-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-30k-sg02hp3-eu-am3-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор DEYE SUN-30K-SG02HP3-EU-AM3 30KW HV-battery 3 MPPT Wi-Fi 220/380V Трифазний",
    "price": 140268,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "30000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 700 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg02hp3-eu-am3-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg02hp3-eu-am3-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg02hp3-eu-am3-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg02hp3-eu-am3-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg02hp3-eu-am3-30kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-6k-sg05lp1-eu-am2-p-6kw-lv-battery-2-mppt-wi-fi-220v-odnofazniy-sun-6k-sg05lp1-eu-am2-p",
    "title": "Гібридний інвертор DEYE SUN-6K-SG05LP1-EU-AM2-P 6KW LV-battery 2 MPPT Wi-Fi 220V Однофазний (SUN-6K-SG05LP1-EU-AM2-P)",
    "price": 40998,
    "specs": [
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 60 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg05lp1-eu-am2-p-6kw-lv-battery-2-mppt-wi-fi-220v-odnofazniy-sun-6k-sg05lp1-eu-am2-p/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg05lp1-eu-am2-p-6kw-lv-battery-2-mppt-wi-fi-220v-odnofazniy-sun-6k-sg05lp1-eu-am2-p/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg05lp1-eu-am2-p-6kw-lv-battery-2-mppt-wi-fi-220v-odnofazniy-sun-6k-sg05lp1-eu-am2-p/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg05lp1-eu-am2-p-6kw-lv-battery-2-mppt-wi-fi-220v-odnofazniy-sun-6k-sg05lp1-eu-am2-p/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg05lp1-eu-am2-p-6kw-lv-battery-2-mppt-wi-fi-220v-odnofazniy-sun-6k-sg05lp1-eu-am2-p/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "merezheviy-invertor-sungrow-sg30cx-p2-v1-30kw-3-mppt-220380v-trifazniy-asg01763",
    "title": "Мережевий інвертор SUNGROW SG30CX-P2_V1+ 30kW 3 MPPT 220/380V Трифазний (ASG01763)",
    "price": 100980,
    "specs": [
      {
        "label": "Бренд",
        "value": "Sungrow"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Sungrow"
      },
      {
        "label": "Тип",
        "value": "Мережевий"
      },
      {
        "label": "Номінальна потужність",
        "value": "30000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg30cx-p2-v1-30kw-3-mppt-220380v-trifazniy-asg01763/1.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg30cx-p2-v1-30kw-3-mppt-220380v-trifazniy-asg01763/2.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg30cx-p2-v1-30kw-3-mppt-220380v-trifazniy-asg01763/3.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg30cx-p2-v1-30kw-3-mppt-220380v-trifazniy-asg01763/4.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg30cx-p2-v1-30kw-3-mppt-220380v-trifazniy-asg01763/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "komutatsiyna-shafa-avr-deye-ms-ts500-2-500kw-10ms-dlya-ms-gs215-ms-ts500-2",
    "title": "Комутаційна шафа АВР DEYE MS-TS500-2 500KW 10ms для MS-GS215 (MS-TS500-2)",
    "price": 725268,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Номінальна потужність",
        "value": "500000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/komutatsiyna-shafa-avr-deye-ms-ts500-2-500kw-10ms-dlya-ms-gs215-ms-ts500-2/1.webp",
      "/images/products/solarverse/equipment/inverters/komutatsiyna-shafa-avr-deye-ms-ts500-2-500kw-10ms-dlya-ms-gs215-ms-ts500-2/2.webp",
      "/images/products/solarverse/equipment/inverters/komutatsiyna-shafa-avr-deye-ms-ts500-2-500kw-10ms-dlya-ms-gs215-ms-ts500-2/3.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-36k-sg05lp1-eu-am2-p-36kw-lv-battery-2-mppt-220v-odnofazniy-sun-36k-sg05lp1-eu-am2-p",
    "title": "Гібридний інвертор DEYE SUN-3.6K-SG05LP1-EU-AM2-P 3.6kW LV-battery 2 MPPT 220V Однофазний (SUN-3.6K-SG05LP1-EU-AM2-P)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "3600 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 60 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-36k-sg05lp1-eu-am2-p-36kw-lv-battery-2-mppt-220v-odnofazniy-sun-36k-sg05lp1-eu-am2-p/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-36k-sg05lp1-eu-am2-p-36kw-lv-battery-2-mppt-220v-odnofazniy-sun-36k-sg05lp1-eu-am2-p/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-36k-sg05lp1-eu-am2-p-36kw-lv-battery-2-mppt-220v-odnofazniy-sun-36k-sg05lp1-eu-am2-p/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-36k-sg05lp1-eu-am2-p-36kw-lv-battery-2-mppt-220v-odnofazniy-sun-36k-sg05lp1-eu-am2-p/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-36k-sg05lp1-eu-am2-p-36kw-lv-battery-2-mppt-220v-odnofazniy-sun-36k-sg05lp1-eu-am2-p/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-10k-sg02lp1-eu-am3",
    "title": "Гібридний інвертор DEYE SUN-10K-SG02LP1-EU-AM3",
    "price": 79248,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "10000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg02lp1-eu-am3/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg02lp1-eu-am3/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg02lp1-eu-am3/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg02lp1-eu-am3/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg02lp1-eu-am3/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "merezheviy-invertor-deye-sun-110k-g03-110kw-trifazniy-380v50hz",
    "title": "Мережевий інвертор DEYE SUN-110K-G03 110KW Трифазний 380V/50hz",
    "price": 148278,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Мережевий"
      },
      {
        "label": "Номінальна потужність",
        "value": "110000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-110k-g03-110kw-trifazniy-380v50hz/1.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-110k-g03-110kw-trifazniy-380v50hz/2.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-110k-g03-110kw-trifazniy-380v50hz/3.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-deye-sun-110k-g03-110kw-trifazniy-380v50hz/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh3p12k02-nv-yd-l-12kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Solis S6-EH3P12K02-NV-YD-L 12KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "price": 85500,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "12000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p12k02-nv-yd-l-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p12k02-nv-yd-l-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p12k02-nv-yd-l-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p12k02-nv-yd-l-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-sumry-sp-4200h-24-3800w-24v-1-mppt-220v-odnofazniy-sp-4200h-24",
    "title": "Автономний інвертор Sumry SP-4200H-24 3800W 24V 1 MPPT 220V Однофазний (SP-4200H-24)",
    "price": 15078,
    "specs": [
      {
        "label": "Бренд",
        "value": "SUMRY"
      },
      {
        "label": "Виробник (бренд)",
        "value": "SUMRY"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "3800 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "24 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sumry-sp-4200h-24-3800w-24v-1-mppt-220v-odnofazniy-sp-4200h-24/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sumry-sp-4200h-24-3800w-24v-1-mppt-220v-odnofazniy-sp-4200h-24/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sumry-sp-4200h-24-3800w-24v-1-mppt-220v-odnofazniy-sp-4200h-24/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sumry-sp-4200h-24-3800w-24v-1-mppt-220v-odnofazniy-sp-4200h-24/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-sako-sunon-v-62kw-48v-1-mppt-wi-fi-220v-odnofazniy-sunon-v-62kw",
    "title": "Автономний інвертор SAKO SUNON V 6.2kW 48V 1 MPPT Wi-Fi 220V Однофазний (SUNON V 6.2kW)",
    "specs": [
      {
        "label": "Бренд",
        "value": "SAKO"
      },
      {
        "label": "Виробник (бренд)",
        "value": "SAKO"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "5000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "24 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sako-sunon-v-62kw-48v-1-mppt-wi-fi-220v-odnofazniy-sunon-v-62kw/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sako-sunon-v-62kw-48v-1-mppt-wi-fi-220v-odnofazniy-sunon-v-62kw/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sako-sunon-v-62kw-48v-1-mppt-wi-fi-220v-odnofazniy-sunon-v-62kw/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-sako-sunon-v-62kw-48v-1-mppt-wi-fi-220v-odnofazniy-sunon-v-62kw/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-75k-sg02hp3-eu-em6-75kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-75K-SG02HP3-EU-EM6 75kW HV-battery 6 MPPT Wi-Fi 220/380V Трифазний",
    "price": 307260,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "75000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 1000 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-75k-sg02hp3-eu-em6-75kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-75k-sg02hp3-eu-em6-75kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-75k-sg02hp3-eu-em6-75kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-75k-sg02hp3-eu-em6-75kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-75k-sg02hp3-eu-em6-75kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-80k-sg02hp3-eu-em6-80kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-80K-SG02HP3-EU-EM6 80kW HV-battery 6 MPPT Wi-Fi 220/380V Трифазний",
    "price": 312750,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "80000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 1000 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-80k-sg02hp3-eu-em6-80kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-80k-sg02hp3-eu-em6-80kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-80k-sg02hp3-eu-em6-80kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-80k-sg02hp3-eu-em6-80kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-80k-sg02hp3-eu-em6-80kw-hv-battery-6-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-solarverse-ampere-duo-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048ad",
    "title": "Автономний інвертор Solarverse Ampere Duo 6kW 48V 1 MPPT Wi-Fi 220V Однофазний (SV6048AD)",
    "price": 25698,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-duo-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048ad/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-duo-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048ad/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-duo-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048ad/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-duo-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048ad/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-solarverse-ampere-rack-5kw-48v-1-mppt-220v-odnofazniy-sv5048upsr",
    "title": "Автономний інвертор Solarverse Ampere Rack 5kW 48V 1 MPPT 220V Однофазний (SV5048UPSR)",
    "price": 36810,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "5000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-rack-5kw-48v-1-mppt-220v-odnofazniy-sv5048upsr/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-rack-5kw-48v-1-mppt-220v-odnofazniy-sv5048upsr/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-rack-5kw-48v-1-mppt-220v-odnofazniy-sv5048upsr/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-rack-5kw-48v-1-mppt-220v-odnofazniy-sv5048upsr/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avtonomniy-invertor-solarverse-ampere-ups-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048upsw",
    "title": "Автономний інвертор Solarverse Ampere UPS 6kW 48V 1 MPPT Wi-Fi 220V Однофазний (SV6048UPSW)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 66 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-ups-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048upsw/1.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-ups-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048upsw/2.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-ups-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048upsw/3.webp",
      "/images/products/solarverse/equipment/inverters/avtonomniy-invertor-solarverse-ampere-ups-6kw-48v-1-mppt-wi-fi-220v-odnofazniy-sv6048upsw/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solarverse-flash-6kw-48v-1-mppt-220v-odnofazniy-sv6048fh",
    "title": "Гібридний інвертор Solarverse Flash 6kW 48V 1 MPPT 220V Однофазний (SV6048FH)",
    "price": 29658,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solarverse"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solarverse"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solarverse-flash-6kw-48v-1-mppt-220v-odnofazniy-sv6048fh/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solarverse-flash-6kw-48v-1-mppt-220v-odnofazniy-sv6048fh/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solarverse-flash-6kw-48v-1-mppt-220v-odnofazniy-sv6048fh/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solarverse-flash-6kw-48v-1-mppt-220v-odnofazniy-sv6048fh/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767",
    "title": "Мережевий інвертор SUNGROW SG50CX-P2_V12 50kW 4 MPPT 220/380V Трифазний (ASG01767)",
    "price": 133968,
    "specs": [
      {
        "label": "Бренд",
        "value": "Sungrow"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Sungrow"
      },
      {
        "label": "Тип",
        "value": "Мережевий"
      },
      {
        "label": "Номінальна потужність",
        "value": "50000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767/1.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767/2.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767/3.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767/4.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767/5.webp",
      "/images/products/solarverse/equipment/inverters/merezheviy-invertor-sungrow-sg50cx-p2-v12-50kw-4-mppt-220380v-trifazniy-asg01767/6.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-12k-sg05lp3-eu-sm2-12kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор DEYE SUN-12K-SG05LP3-EU-SM2 12KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "price": 86988,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "12000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 60 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg05lp3-eu-sm2-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg05lp3-eu-sm2-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg05lp3-eu-sm2-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg05lp3-eu-sm2-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg05lp3-eu-sm2-12kw-48v-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-25k-sg02hp3-eu-25kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор DEYE SUN-25K-SG02HP3-EU 25KW HV-battery 3 MPPT Wi-Fi 220/380V Трифазний",
    "price": 98508,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "25000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 700 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg02hp3-eu-25kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg02hp3-eu-25kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg02hp3-eu-25kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg02hp3-eu-25kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg02hp3-eu-25kw-hv-battery-3-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "invertor-deye-bos-b-125kw-hv-battery-220380v-trekhfaznyy-sun-125k-pcs01hp3sun-125k-pcsl01hp3",
    "title": "Інвертор DEYE BOS-B 125KW HV-battery 220/380V Трифазний (SUN-125K-PCS01HP3/SUN-125K-PCSL01HP3)",
    "price": 241734,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "PCS (AC/DC перетворювач)"
      },
      {
        "label": "Номінальна потужність",
        "value": "125000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "630 - 1000 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/invertor-deye-bos-b-125kw-hv-battery-220380v-trekhfaznyy-sun-125k-pcs01hp3sun-125k-pcsl01hp3/1.webp",
      "/images/products/solarverse/equipment/inverters/invertor-deye-bos-b-125kw-hv-battery-220380v-trekhfaznyy-sun-125k-pcs01hp3sun-125k-pcsl01hp3/2.webp",
      "/images/products/solarverse/equipment/inverters/invertor-deye-bos-b-125kw-hv-battery-220380v-trekhfaznyy-sun-125k-pcs01hp3sun-125k-pcsl01hp3/3.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "setevoy-invertor-solis-s5-gc30k-30kw-3-mppt-220380v-trekhfaznyy-s5-gc30k",
    "title": "Мережевий інвертор SOLIS S5-GC30K 30KW 3 MPPT 220/380V трифазний (S5-GC30K)",
    "price": 65208,
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Мережевий"
      },
      {
        "label": "Номінальна потужність",
        "value": "30000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/setevoy-invertor-solis-s5-gc30k-30kw-3-mppt-220380v-trekhfaznyy-s5-gc30k/1.webp",
      "/images/products/solarverse/equipment/inverters/setevoy-invertor-solis-s5-gc30k-30kw-3-mppt-220380v-trekhfaznyy-s5-gc30k/2.webp",
      "/images/products/solarverse/equipment/inverters/setevoy-invertor-solis-s5-gc30k-30kw-3-mppt-220380v-trekhfaznyy-s5-gc30k/3.webp",
      "/images/products/solarverse/equipment/inverters/setevoy-invertor-solis-s5-gc30k-30kw-3-mppt-220380v-trekhfaznyy-s5-gc30k/4.webp",
      "/images/products/solarverse/equipment/inverters/setevoy-invertor-solis-s5-gc30k-30kw-3-mppt-220380v-trekhfaznyy-s5-gc30k/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridnyy-invertor-solis-s6-eh3p100k10-nv-yd-h-100kw-hv-battery-10-mppt-wi-fi-220380v-trekhfaznyy-s6-eh3p100k10-nv-yd-h",
    "title": "Гібридний інвертор SOLIS S6-EH3P100K10-NV-YD-H 100KW HV-battery 10 MPPT Wi-Fi 220/380V Трифазний (S6-EH3P100K10-NV-YD-H)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "100000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "300 - 950 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-solis-s6-eh3p100k10-nv-yd-h-100kw-hv-battery-10-mppt-wi-fi-220380v-trekhfaznyy-s6-eh3p100k10-nv-yd-h/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-solis-s6-eh3p100k10-nv-yd-h-100kw-hv-battery-10-mppt-wi-fi-220380v-trekhfaznyy-s6-eh3p100k10-nv-yd-h/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-solis-s6-eh3p100k10-nv-yd-h-100kw-hv-battery-10-mppt-wi-fi-220380v-trekhfaznyy-s6-eh3p100k10-nv-yd-h/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-solis-s6-eh3p100k10-nv-yd-h-100kw-hv-battery-10-mppt-wi-fi-220380v-trekhfaznyy-s6-eh3p100k10-nv-yd-h/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-solis-s6-eh3p100k10-nv-yd-h-100kw-hv-battery-10-mppt-wi-fi-220380v-trekhfaznyy-s6-eh3p100k10-nv-yd-h/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridnyy-invertor-deye-sun-5k-sg05lp1-eu-am2-p-5kw-48v-2-mppt-220v-odnofaznyy-sun-5k-sg05lp1-eu-am2-p",
    "title": "Гібридний інвертор DEYE SUN-5K-SG05LP1-EU-AM2-P 5KW 48V 2 MPPT 220V Однофазний (SUN-5K-SG05LP1-EU-AM2-P)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "5000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 60 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-deye-sun-5k-sg05lp1-eu-am2-p-5kw-48v-2-mppt-220v-odnofaznyy-sun-5k-sg05lp1-eu-am2-p/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-deye-sun-5k-sg05lp1-eu-am2-p-5kw-48v-2-mppt-220v-odnofaznyy-sun-5k-sg05lp1-eu-am2-p/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-deye-sun-5k-sg05lp1-eu-am2-p-5kw-48v-2-mppt-220v-odnofaznyy-sun-5k-sg05lp1-eu-am2-p/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-deye-sun-5k-sg05lp1-eu-am2-p-5kw-48v-2-mppt-220v-odnofaznyy-sun-5k-sg05lp1-eu-am2-p/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridnyy-invertor-deye-sun-5k-sg05lp1-eu-am2-p-5kw-48v-2-mppt-220v-odnofaznyy-sun-5k-sg05lp1-eu-am2-p/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "invertor-kstar-5kw-1-phase-hybrid-inverter-with-wifi-plug-blue-s-5000d",
    "title": "Інвертор KSTAR 5kW 1-Phase Hybrid inverter, with WiFi plug (BluE-S 5000D)",
    "specs": [
      {
        "label": "Бренд",
        "value": "KSTAR"
      },
      {
        "label": "Виробник (бренд)",
        "value": "KSTAR"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "4600 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/invertor-kstar-5kw-1-phase-hybrid-inverter-with-wifi-plug-blue-s-5000d/1.webp",
      "/images/products/solarverse/equipment/inverters/invertor-kstar-5kw-1-phase-hybrid-inverter-with-wifi-plug-blue-s-5000d/2.webp",
      "/images/products/solarverse/equipment/inverters/invertor-kstar-5kw-1-phase-hybrid-inverter-with-wifi-plug-blue-s-5000d/3.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v",
    "title": "Інвертор PowMr 1200W DC 12V AC 220V POW-HV1.2K-12V",
    "specs": [
      {
        "label": "Бренд",
        "value": "PowMr"
      },
      {
        "label": "Виробник (бренд)",
        "value": "PowMr"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "1200 W"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/1.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/2.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/3.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/4.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/5.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/6.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/7.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/8.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/9.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/10.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-1200w-dc-12v-ac-220v-pow-hv12k-12v/11.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-10k-sg04lp3-eu",
    "title": "Гібридний інвертор DEYE SUN-10K-SG04LP3-EU",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "10000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg04lp3-eu/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg04lp3-eu/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg04lp3-eu/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg04lp3-eu/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-10k-sg04lp3-eu/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-6k-sg03lp1-eu",
    "title": "Гібридний інвертор DEYE SUN-6K-SG03LP1-EU",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "6000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg03lp1-eu/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg03lp1-eu/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg03lp1-eu/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg03lp1-eu/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-6k-sg03lp1-eu/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3",
    "title": "Гібридний інвертор DEYE SUN-30K-SG01HP3-EU-BM3",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "30000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 800 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3/5.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-30k-sg01hp3-eu-bm3/6.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-40k-sg01hp3-eu-bm4",
    "title": "Гібридний інвертор DEYE SUN-40K-SG01HP3-EU-BM4",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "40000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 800 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-40k-sg01hp3-eu-bm4/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-40k-sg01hp3-eu-bm4/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-40k-sg01hp3-eu-bm4/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-40k-sg01hp3-eu-bm4/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-40k-sg01hp3-eu-bm4/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-16k-sg01lp1-eu-16kw-48v-3-mppt-sun-16k-sg02lp1-eusun-16k-sg01lp1-eu",
    "title": "Гібридний інвертор DEYE SUN-16K-SG01LP1-EU 16KW 48V 3 MPPT (SUN-16K-SG02LP1-EU/SUN-16K-SG01LP1-EU)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "16000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg01lp1-eu-16kw-48v-3-mppt-sun-16k-sg02lp1-eusun-16k-sg01lp1-eu/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg01lp1-eu-16kw-48v-3-mppt-sun-16k-sg02lp1-eusun-16k-sg01lp1-eu/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg01lp1-eu-16kw-48v-3-mppt-sun-16k-sg02lp1-eusun-16k-sg01lp1-eu/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg01lp1-eu-16kw-48v-3-mppt-sun-16k-sg02lp1-eusun-16k-sg01lp1-eu/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg01lp1-eu-16kw-48v-3-mppt-sun-16k-sg02lp1-eusun-16k-sg01lp1-eu/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh3p20k-h-20kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Solis S6-EH3P20K-H 20KW HV-battery 4 MPPT Wi-Fi 220/380V Трифазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "20000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "120 - 800 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p20k-h-20kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p20k-h-20kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p20k-h-20kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p20k-h-20kw-hv-battery-4-mppt-wi-fi-220380v-trifazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw",
    "title": "Гібридний інвертор Rayssa MAX 8.2KW 48V 2 MPPT 220V Однофазний (MAX8.2kW)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Rayssa"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Rayssa"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "8200 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/5.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/6.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/7.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/8.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-rayssa-max-82kw-48v-2-mppt-220v-odnofazniy-max82kw/9.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "avr-peremikach-deye-bos-b-500kw-10ms-sun-sts500l",
    "title": "АВР перемикач Deye BOS-B 500KW 10ms (SUN-STS500L)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "500000 W"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/avr-peremikach-deye-bos-b-500kw-10ms-sun-sts500l/1.webp",
      "/images/products/solarverse/equipment/inverters/avr-peremikach-deye-bos-b-500kw-10ms-sun-sts500l/2.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-20k-sg01hp3-eu-am2",
    "title": "Гібридний інвертор DEYE SUN-20K-SG01HP3-EU-AM2",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "20000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 700 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg01hp3-eu-am2/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg01hp3-eu-am2/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg01hp3-eu-am2/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-20k-sg01hp3-eu-am2/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-12k-sg02lp1-eu-am3",
    "title": "Гібридний інвертор DEYE SUN-12K-SG02LP1-EU-AM3",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "12000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg02lp1-eu-am3/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg02lp1-eu-am3/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg02lp1-eu-am3/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg02lp1-eu-am3/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-12k-sg02lp1-eu-am3/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-8k-sg01lp1",
    "title": "Гібридний інвертор DEYE SUN-8K-SG01LP1",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "8000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg01lp1/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg01lp1/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg01lp1/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg01lp1/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg01lp1/5.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg01lp1/6.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw",
    "title": "Гібридний інвертор HWS MAX 8.2KW 48V 2 MPPT 220V Однофазний (VicMAX8.2kW)",
    "specs": [
      {
        "label": "Бренд",
        "value": "HWS"
      },
      {
        "label": "Виробник (бренд)",
        "value": "HWS"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "8200 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "36 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/5.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/6.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/7.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-hws-max-82kw-48v-2-mppt-220v-odnofazniy-vicmax82kw/8.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "invertor-powmr-2000w-dc-24v-ac-220v-pow-hv2k-24v",
    "title": "Інвертор PowMr 2000W DC 24V AC 220V POW-HV2K-24V",
    "specs": [
      {
        "label": "Бренд",
        "value": "PowMr"
      },
      {
        "label": "Виробник (бренд)",
        "value": "PowMr"
      },
      {
        "label": "Тип",
        "value": "Автономний"
      },
      {
        "label": "Номінальна потужність",
        "value": "2000 W"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-24v-ac-220v-pow-hv2k-24v/1.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-24v-ac-220v-pow-hv2k-24v/2.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-24v-ac-220v-pow-hv2k-24v/3.webp",
      "/images/products/solarverse/equipment/inverters/invertor-powmr-2000w-dc-24v-ac-220v-pow-hv2k-24v/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-15k-sg01hp3-eu-am2",
    "title": "Гібридний інвертор DEYE SUN-15K-SG01HP3-EU-AM2",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "15000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 700 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg01hp3-eu-am2/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg01hp3-eu-am2/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg01hp3-eu-am2/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg01hp3-eu-am2/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-15k-sg01hp3-eu-am2/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-18k-sg05lp3-eu-sm2-18kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-18K-SG05LP3-EU-SM2 18KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "18000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-18k-sg05lp3-eu-sm2-18kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-18k-sg05lp3-eu-sm2-18kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-18k-sg05lp3-eu-sm2-18kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-18k-sg05lp3-eu-sm2-18kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-18k-sg05lp3-eu-sm2-18kw-48v-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-16k-sg05lp3-eu-sm2-16kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-16K-SG05LP3-EU-SM2 16KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "16000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg05lp3-eu-sm2-16kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg05lp3-eu-sm2-16kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg05lp3-eu-sm2-16kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg05lp3-eu-sm2-16kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-16k-sg05lp3-eu-sm2-16kw-48v-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh3p125k10-nv-yd-h-125kw-hv-battery-10-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Solis S6-EH3P125K10-NV-YD-H 125KW HV-battery 10 MPPT Wi-Fi 220/380V Трифазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "125000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "300 - 950 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p125k10-nv-yd-h-125kw-hv-battery-10-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p125k10-nv-yd-h-125kw-hv-battery-10-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p125k10-nv-yd-h-125kw-hv-battery-10-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p125k10-nv-yd-h-125kw-hv-battery-10-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p125k10-nv-yd-h-125kw-hv-battery-10-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-8k-sg05lp1-eu-am2-p-8kw-48v-2-mppt-220v-odnofazniy",
    "title": "Гібридний інвертор DEYE SUN-8K-SG05LP1-EU-AM2-P 8KW 48V 2 MPPT 220V Однофазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "8000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "40 - 60 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg05lp1-eu-am2-p-8kw-48v-2-mppt-220v-odnofazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg05lp1-eu-am2-p-8kw-48v-2-mppt-220v-odnofazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg05lp1-eu-am2-p-8kw-48v-2-mppt-220v-odnofazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg05lp1-eu-am2-p-8kw-48v-2-mppt-220v-odnofazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-8k-sg05lp1-eu-am2-p-8kw-48v-2-mppt-220v-odnofazniy/5.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "mppt-modul-deye-bos-b-200kw-8-mppt-sun-mppt-l01-eu-am8",
    "title": "MPPT модуль Deye BOS-B 200KW 8 MPPT (SUN-MPPT-L01-EU-AM8)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/mppt-modul-deye-bos-b-200kw-8-mppt-sun-mppt-l01-eu-am8/1.webp",
      "/images/products/solarverse/equipment/inverters/mppt-modul-deye-bos-b-200kw-8-mppt-sun-mppt-l01-eu-am8/2.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-solis-s6-eh3p15k02-nv-yd-l-15kw-48v-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Solis S6-EH3P15K02-NV-YD-L 15KW 48V 2 MPPT Wi-Fi 220/380V Трифазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "15000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "48 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p15k02-nv-yd-l-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p15k02-nv-yd-l-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p15k02-nv-yd-l-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-solis-s6-eh3p15k02-nv-yd-l-15kw-48v-2-mppt-wi-fi-220380v-trifazniy/4.webp"
    ]
  },
  {
    "catalog": "inverters",
    "slug": "gibridniy-invertor-deye-sun-25k-sg01hp3-eu-25kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy",
    "title": "Гібридний інвертор Deye SUN-25K-SG01HP3-EU 25KW HV-battery 2 MPPT Wi-Fi 220/380V Трифазний",
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Тип",
        "value": "Гібридний"
      },
      {
        "label": "Номінальна потужність",
        "value": "25000 W"
      },
      {
        "label": "Вихідна напруга АКБ",
        "value": "160 - 700 V"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg01hp3-eu-25kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/1.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg01hp3-eu-25kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/2.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg01hp3-eu-25kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/3.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg01hp3-eu-25kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/4.webp",
      "/images/products/solarverse/equipment/inverters/gibridniy-invertor-deye-sun-25k-sg01hp3-eu-25kw-hv-battery-2-mppt-wi-fi-220380v-trifazniy/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-gsl-48v-100ah-48kwh-lifepo4-zn-p48100esa1",
    "title": "Акумуляторна батарея GSL 48v 100AH 4.8kwh lifepo4 (ZN-P48100ESA1)",
    "price": 36498,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "4.8 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6500 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "48 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-48v-100ah-48kwh-lifepo4-zn-p48100esa1/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-48v-100ah-48kwh-lifepo4-zn-p48100esa1/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-48v-100ah-48kwh-lifepo4-zn-p48100esa1/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-48v-100ah-48kwh-lifepo4-zn-p48100esa1/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-48v-100ah-48kwh-lifepo4-zn-p48100esa1/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-gsl-512v-200ah-1024kwh-lifepo4-gsl051200ab-gbp2",
    "title": "Акумуляторна батарея GSL 51.2v 200AH 10.24kwh lifepo4 (GSL051200AB-GBP2)",
    "price": 79698,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "200 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "10.24 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6500 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "48 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "150 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-512v-200ah-1024kwh-lifepo4-gsl051200ab-gbp2/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-512v-200ah-1024kwh-lifepo4-gsl051200ab-gbp2/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-512v-200ah-1024kwh-lifepo4-gsl051200ab-gbp2/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-512v-200ah-1024kwh-lifepo4-gsl051200ab-gbp2/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-gsl-512v-200ah-1024kwh-lifepo4-gsl051200ab-gbp2/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-gsl-512v-100ah-512kwh-lifepo4-gsl051100ab-gbp2",
    "title": "Акумуляторна батарея GSL 51.2v 100AH 5.12kwh lifepo4 (GSL051100AB-GBP2)",
    "price": 39960,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6500 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-512v-100ah-512kwh-lifepo4-gsl051100ab-gbp2/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-512v-100ah-512kwh-lifepo4-gsl051100ab-gbp2/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-512v-100ah-512kwh-lifepo4-gsl051100ab-gbp2/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-512v-100ah-512kwh-lifepo4-gsl051100ab-gbp2/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-512v-100ah-512kwh-lifepo4-gsl051100ab-gbp2/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4",
    "title": "Акумуляторна батарея DEYE SE-G5.1 Pro-B LV 51.2V 100AH 5.12kWh LiFePO4",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4/5.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-g51-pro-b-lv-512v-100ah-512kwh-lifepo4/6.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-dyness-dl50c-512v-100ah-lifepo4",
    "title": "Акумуляторна батарея Dyness DL5.0C 51.2V 100Ah LiFePO4",
    "price": 38520,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "75 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-512v-100ah-lifepo4/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-512v-100ah-lifepo4/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-512v-100ah-lifepo4/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-deye-bos-a-lifepo4-hv-384v-200ah-768kwh-no-bms-bos-a",
    "title": "Акумуляторна батарея Deye BOS-A LiFePO4 HV 38.4V 200Ah 7.68kWh no BMS (BOS-A)",
    "price": 63270,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "200 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "7.68 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "38.4 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-a-lifepo4-hv-384v-200ah-768kwh-no-bms-bos-a/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-a-lifepo4-hv-384v-200ah-768kwh-no-bms-bos-a/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-a-lifepo4-hv-384v-200ah-768kwh-no-bms-bos-a/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-a-lifepo4-hv-384v-200ah-768kwh-no-bms-bos-a/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "bms-dlya-batarey-deye-bos-a-1000v-160a-bos-a-pdu-2-1000v160a",
    "title": "BMS для батарей Deye BOS-A 1000V 160A (BOS-A-PDU-2 1000V/160A)",
    "price": 54990,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Номінальна напруга",
        "value": "235.2~919.8V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-deye-bos-a-1000v-160a-bos-a-pdu-2-1000v160a/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-deye-bos-a-1000v-160a-bos-a-pdu-2-1000v160a/2.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack100-8-8xs51100-4096kw-4096v-100ah-lifepo4-sbdu100-stack100-8-4096kw",
    "title": "Блок батарей Dyness STACK100-8 8xS51100 40.96kW 409.6V 100Ah LiFePO4 SBDU100 (STACK100-8-40.96kW)",
    "price": 380658,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "41 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "410 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-8-8xs51100-4096kw-4096v-100ah-lifepo4-sbdu100-stack100-8-4096kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-8-8xs51100-4096kw-4096v-100ah-lifepo4-sbdu100-stack100-8-4096kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-8-8xs51100-4096kw-4096v-100ah-lifepo4-sbdu100-stack100-8-4096kw/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "bms-dlya-batarey-gsl-hv-gsl51280-120-1000vdc-bess-bms",
    "title": "BMS для батарей GSL HV GSL51280 120-1000Vdc (BESS_BMS)",
    "price": 49998,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-іонна (Li-ion)"
      },
      {
        "label": "Номінальна напруга",
        "value": "80-900 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-gsl-hv-gsl51280-120-1000vdc-bess-bms/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-gsl-hv-gsl51280-120-1000vdc-bess-bms/2.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "bms-dlya-batarey-deye-bos-g-pro-200-1000vdc-120a-bos-g-pdu-2",
    "title": "BMS для батарей Deye BOS-G PRO 200-1000Vdc 120A (BOS-G-PDU-2)",
    "price": 39999,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "120 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-deye-bos-g-pro-200-1000vdc-120a-bos-g-pdu-2/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-deye-bos-g-pro-200-1000vdc-120a-bos-g-pdu-2/2.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "modul-upravleniya-dyness-bms-dlya-stack280stack314-sbdu200",
    "title": "Модуль керування Dyness BMS для STACK280/STACK314 (SBDU200)",
    "price": 67278,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Номінальна напруга",
        "value": "134-876 V"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/modul-upravleniya-dyness-bms-dlya-stack280stack314-sbdu200/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-upravleniya-dyness-bms-dlya-stack280stack314-sbdu200/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-upravleniya-dyness-bms-dlya-stack280stack314-sbdu200/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-upravleniya-dyness-bms-dlya-stack280stack314-sbdu200/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-deye-se-f5-pro-lifepo4-lv-512v-100ah-512kwh-se-f5-pro-c",
    "title": "Акумуляторна батарея DEYE SE-F5 Pro LiFePO4 LV 51.2v 100Ah 5.12kwh (SE-F5 Pro-C)",
    "price": 39060,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f5-pro-lifepo4-lv-512v-100ah-512kwh-se-f5-pro-c/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f5-pro-lifepo4-lv-512v-100ah-512kwh-se-f5-pro-c/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f5-pro-lifepo4-lv-512v-100ah-512kwh-se-f5-pro-c/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f5-pro-lifepo4-lv-512v-100ah-512kwh-se-f5-pro-c/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-b-pro-a3-8sht-lifepo4-hv-410v-314ah-128kwh-z-bms-bos-b-pro-128kwh",
    "title": "Блок батарей DEYE BOS-B Pro-A3 8шт LiFePO4 HV 410V 314Ah 128kWh з BMS (BOS-B-PRO-128kWh)",
    "price": 880338,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "128.74 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "410 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-8sht-lifepo4-hv-410v-314ah-128kwh-z-bms-bos-b-pro-128kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-8sht-lifepo4-hv-410v-314ah-128kwh-z-bms-bos-b-pro-128kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-8sht-lifepo4-hv-410v-314ah-128kwh-z-bms-bos-b-pro-128kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-8sht-lifepo4-hv-410v-314ah-128kwh-z-bms-bos-b-pro-128kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-b-pro-a3-12sht-lifepo4-hv-615v-314ah-192kwh-z-bms-bos-b-pro-192kwh",
    "title": "Блок батарей DEYE BOS-B Pro-A3 12шт LiFePO4 HV 615V 314Ah 192kWh з BMS (BOS-B-PRO-192kWh)",
    "price": 1268460,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "193.11 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "615 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-12sht-lifepo4-hv-615v-314ah-192kwh-z-bms-bos-b-pro-192kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-12sht-lifepo4-hv-615v-314ah-192kwh-z-bms-bos-b-pro-192kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-12sht-lifepo4-hv-615v-314ah-192kwh-z-bms-bos-b-pro-192kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-12sht-lifepo4-hv-615v-314ah-192kwh-z-bms-bos-b-pro-192kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-b-pro-a3-15sht-lifepo4-hv-768v-314ah-240kwh-z-bms-bos-b-pro-240kwh",
    "title": "Блок батарей DEYE BOS-B Pro-A3 15шт LiFePO4 HV 768V 314Ah 240kWh з BMS (BOS-B-PRO-240kWh)",
    "price": 1537428,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "241.15 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "768 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-15sht-lifepo4-hv-768v-314ah-240kwh-z-bms-bos-b-pro-240kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-15sht-lifepo4-hv-768v-314ah-240kwh-z-bms-bos-b-pro-240kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-15sht-lifepo4-hv-768v-314ah-240kwh-z-bms-bos-b-pro-240kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-15sht-lifepo4-hv-768v-314ah-240kwh-z-bms-bos-b-pro-240kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack280-10-10xs51280-143kwh-512v-280ah-lifepo4-sbdu280-stack280-10-143kwh",
    "title": "Блок батарей Dyness STACK280-10 10xS51280 143kWh 512V 280Ah LiFePO4 SBDU280 (STACK280-10-143kWh)",
    "price": 1007460,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "143.36 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "280 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-10-10xs51280-143kwh-512v-280ah-lifepo4-sbdu280-stack280-10-143kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-10-10xs51280-143kwh-512v-280ah-lifepo4-sbdu280-stack280-10-143kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-10-10xs51280-143kwh-512v-280ah-lifepo4-sbdu280-stack280-10-143kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-10-10xs51280-143kwh-512v-280ah-lifepo4-sbdu280-stack280-10-143kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack280-12-12xs51280-172kwh-6144v-280ah-lifepo4-sbdu280-stack280-12-172kwh",
    "title": "Блок батарей Dyness STACK280-12 12xS51280 172kWh 614.4V 280Ah LiFePO4 SBDU280 (STACK280-12-172kWh)",
    "price": 1207848,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "171.92 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "614 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "280 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-12-12xs51280-172kwh-6144v-280ah-lifepo4-sbdu280-stack280-12-172kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-12-12xs51280-172kwh-6144v-280ah-lifepo4-sbdu280-stack280-12-172kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-12-12xs51280-172kwh-6144v-280ah-lifepo4-sbdu280-stack280-12-172kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-12-12xs51280-172kwh-6144v-280ah-lifepo4-sbdu280-stack280-12-172kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack280-15-15xs51280-215kwh-768v-280ah-lifepo4-sbdu280-stack280-15-215kwh",
    "title": "Блок батарей Dyness STACK280-15 15xS51280 215kWh 768V 280Ah LiFePO4 SBDU280 (STACK280-15-215kWh)",
    "price": 1493190,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "215.04 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "768 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "280 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-15-15xs51280-215kwh-768v-280ah-lifepo4-sbdu280-stack280-15-215kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-15-15xs51280-215kwh-768v-280ah-lifepo4-sbdu280-stack280-15-215kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-15-15xs51280-215kwh-768v-280ah-lifepo4-sbdu280-stack280-15-215kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-15-15xs51280-215kwh-768v-280ah-lifepo4-sbdu280-stack280-15-215kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-409v-314ah-128kwh-lifepo4-gsl-r128k",
    "title": "Блок батарей GSL 409V 314AH 128kWh LiFePO4 (GSL-R128K)",
    "price": 891540,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "128.61 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "409.6 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-409v-314ah-128kwh-lifepo4-gsl-r128k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-409v-314ah-128kwh-lifepo4-gsl-r128k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-409v-314ah-128kwh-lifepo4-gsl-r128k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-460v-314ah-144kwh-lifepo4-gsl-r144k",
    "title": "Блок батарей GSL 460V 314AH 144kWh LiFePO4 (GSL-R144K)",
    "price": 988158,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "144.69 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "460.8 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-460v-314ah-144kwh-lifepo4-gsl-r144k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-460v-314ah-144kwh-lifepo4-gsl-r144k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-460v-314ah-144kwh-lifepo4-gsl-r144k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-512v-314ah-160kwh-lifepo4-gsl-r160k",
    "title": "Блок батарей GSL 512V 314AH 160kWh LiFePO4 (GSL-R160K)",
    "price": 1084770,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "160.77 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-512v-314ah-160kwh-lifepo4-gsl-r160k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-512v-314ah-160kwh-lifepo4-gsl-r160k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-512v-314ah-160kwh-lifepo4-gsl-r160k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-665v-314ah-209kwh-lifepo4-gsl-r209k",
    "title": "Блок батарей GSL 665V 314AH 209kWh LiFePO4 (GSL-R209K)",
    "price": 1399230,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "209 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "665.6 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-665v-314ah-209kwh-lifepo4-gsl-r209k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-665v-314ah-209kwh-lifepo4-gsl-r209k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-665v-314ah-209kwh-lifepo4-gsl-r209k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-bf100-100kwh-364v-280ah-lifepo4-ip55-fire-extinguisher-watercooled-bf100-c100",
    "title": "Блок батарей Dyness BF100 100kWh 364V 280AH LiFePO4 IP55 Fire Extinguisher, WaterCooled (BF100-C100)",
    "price": 900000,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "101.92 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "364 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-bf100-100kwh-364v-280ah-lifepo4-ip55-fire-extinguisher-watercooled-bf100-c100/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-bf100-100kwh-364v-280ah-lifepo4-ip55-fire-extinguisher-watercooled-bf100-c100/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-bf100-100kwh-364v-280ah-lifepo4-ip55-fire-extinguisher-watercooled-bf100-c100/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "sistema-khraneniya-energii-gsl-bess-209k-6656v-314ah-208kwh-lifepo4-ip65-fire-extinguisher-airconditioner-with-air-channel-gsl-bess-209k",
    "title": "Система збереження енергії GSL-BESS-209K 665.6V 314Ah 208kWh LiFePO4 IP65, Fire Extinguisher, AirConditioner with Air channel (GSL-BESS-209K)",
    "price": 1698348,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "209 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6500 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "665.6 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "157 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/sistema-khraneniya-energii-gsl-bess-209k-6656v-314ah-208kwh-lifepo4-ip65-fire-extinguisher-airconditioner-with-air-channel-gsl-bess-209k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/sistema-khraneniya-energii-gsl-bess-209k-6656v-314ah-208kwh-lifepo4-ip65-fire-extinguisher-airconditioner-with-air-channel-gsl-bess-209k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/sistema-khraneniya-energii-gsl-bess-209k-6656v-314ah-208kwh-lifepo4-ip65-fire-extinguisher-airconditioner-with-air-channel-gsl-bess-209k/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/sistema-khraneniya-energii-gsl-bess-209k-6656v-314ah-208kwh-lifepo4-ip65-fire-extinguisher-airconditioner-with-air-channel-gsl-bess-209k/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "modul-keruvannya-bms-dlya-batarey-deye-bos-g-120-750vdc-100a",
    "title": "Модуль керування (BMS) для батарей DEYE BOS-G 120-750Vdc 100A",
    "price": 40500,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Номінальна напруга",
        "value": "120-750 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "125 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/modul-keruvannya-bms-dlya-batarey-deye-bos-g-120-750vdc-100a/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-keruvannya-bms-dlya-batarey-deye-bos-g-120-750vdc-100a/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-keruvannya-bms-dlya-batarey-deye-bos-g-120-750vdc-100a/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-dyness-stack-lifepo4-s51100-512v-100ah-512kwh-bez-bms-s51100",
    "title": "Акумуляторна батарея Dyness STACK LiFePO4 S51100 51.2V 100Ah 5.12kWh без BMS (S51100)",
    "price": 42888,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-stack-lifepo4-s51100-512v-100ah-512kwh-bez-bms-s51100/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-stack-lifepo4-s51100-512v-100ah-512kwh-bez-bms-s51100/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-stack-lifepo4-s51100-512v-100ah-512kwh-bez-bms-s51100/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "modul-upravlinnya-bms-dlya-dyness-stack-sbdu100",
    "title": "Модуль управління (BMS) для Dyness STACK (SBDU100)",
    "price": 39690,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/modul-upravlinnya-bms-dlya-dyness-stack-sbdu100/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-upravlinnya-bms-dlya-dyness-stack-sbdu100/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-upravlinnya-bms-dlya-dyness-stack-sbdu100/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack100-10-10xs51100-512kw-512v-100ah-lifepo4-sbdu100-stack100-10-512kw",
    "title": "Блок батарей Dyness STACK100-10 10xS51100 51.2kW 512V 100Ah LiFePO4 SBDU100 (STACK100-10-51.2kW)",
    "price": 465888,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "51.20 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-10-10xs51100-512kw-512v-100ah-lifepo4-sbdu100-stack100-10-512kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-10-10xs51100-512kw-512v-100ah-lifepo4-sbdu100-stack100-10-512kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-10-10xs51100-512kw-512v-100ah-lifepo4-sbdu100-stack100-10-512kw/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack100-6-6xs51100-3072kw-3072v-100ah-lifepo4-sbdu100-stack100-6-3072kw",
    "title": "Блок батарей Dyness STACK100-6 6xS51100 30.72kW 307.2V 100Ah LiFePO4 SBDU100 (STACK100-6-30.72kW)",
    "price": 295428,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "30.7 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "307 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-6-6xs51100-3072kw-3072v-100ah-lifepo4-sbdu100-stack100-6-3072kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-6-6xs51100-3072kw-3072v-100ah-lifepo4-sbdu100-stack100-6-3072kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-6-6xs51100-3072kw-3072v-100ah-lifepo4-sbdu100-stack100-6-3072kw/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack100-7-7xs51100-3584kw-3584v-100ah-lifepo4-sbdu100-stack100-7-3584kw",
    "title": "Блок батарей Dyness STACK100-7 7xS51100 35.84kW 358.4V 100Ah LiFePO4 SBDU100 (STACK100-7-35.84kW)",
    "price": 338040,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "35.8 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "358 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-7-7xs51100-3584kw-3584v-100ah-lifepo4-sbdu100-stack100-7-3584kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-7-7xs51100-3584kw-3584v-100ah-lifepo4-sbdu100-stack100-7-3584kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-7-7xs51100-3584kw-3584v-100ah-lifepo4-sbdu100-stack100-7-3584kw/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack100-12-12xs51100-6144kw-6144v-100ahlifepo4-sbdu100-stack100-12-6144kw",
    "title": "Блок батарей Dyness STACK100-12 12xS51100 61.44kW 614.4V 100AhLiFePO4 SBDU100 (STACK100-12-61.44kW)",
    "price": 551388,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "61.4 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "614 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-12-12xs51100-6144kw-6144v-100ahlifepo4-sbdu100-stack100-12-6144kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-12-12xs51100-6144kw-6144v-100ahlifepo4-sbdu100-stack100-12-6144kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-12-12xs51100-6144kw-6144v-100ahlifepo4-sbdu100-stack100-12-6144kw/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack100-15-15xs51100-768kw-768v-100ahlifepo4-sbdu100-stack100-15-768kw",
    "title": "Блок батарей Dyness STACK100-15 15xS51100 76.8kW 768V 100AhLiFePO4 SBDU100 (STACK100-15-76.8kW)",
    "price": 679230,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "76.8 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "768 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-15-15xs51100-768kw-768v-100ahlifepo4-sbdu100-stack100-15-768kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-15-15xs51100-768kw-768v-100ahlifepo4-sbdu100-stack100-15-768kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack100-15-15xs51100-768kw-768v-100ahlifepo4-sbdu100-stack100-15-768kw/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-dyness-stack-lifepo4-s51100-heated-512v-100ah-512kwh-z-obigrivom-bez-bms-s51100-h",
    "title": "Акумуляторна батарея Dyness STACK LiFePO4 S51100 Heated 51.2V 100Ah 5.12kWh з обігрівом без BMS (S51100-H)",
    "price": 42888,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-stack-lifepo4-s51100-heated-512v-100ah-512kwh-z-obigrivom-bez-bms-s51100-h/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-stack-lifepo4-s51100-heated-512v-100ah-512kwh-z-obigrivom-bez-bms-s51100-h/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-stack-lifepo4-s51100-heated-512v-100ah-512kwh-z-obigrivom-bez-bms-s51100-h/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "modul-upravlinnya-bms-dlya-dyness-stack-heated-z-obigrivom-sbdu100-h",
    "title": "Модуль управління (BMS) для Dyness STACK Heated з обігрівом (SBDU100-H)",
    "price": 39690,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/modul-upravlinnya-bms-dlya-dyness-stack-heated-z-obigrivom-sbdu100-h/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/modul-upravlinnya-bms-dlya-dyness-stack-heated-z-obigrivom-sbdu100-h/2.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-deye-bos-b-pro-a3-lifepo4-hv-512v-314ah-1608kwh-bez-bms-bos-b-pack16-a3",
    "title": "Акумуляторна батарея DEYE BOS-B Pro-A3 LiFePO4 HV 51.2V 314Ah 16.08kWh без BMS (BOS-B-Pack16-A3)",
    "price": 98190,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "16.08 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-pro-a3-lifepo4-hv-512v-314ah-1608kwh-bez-bms-bos-b-pack16-a3/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-pro-a3-lifepo4-hv-512v-314ah-1608kwh-bez-bms-bos-b-pack16-a3/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-pro-a3-lifepo4-hv-512v-314ah-1608kwh-bez-bms-bos-b-pack16-a3/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-pro-a3-lifepo4-hv-512v-314ah-1608kwh-bez-bms-bos-b-pack16-a3/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-b-pro-a3-10sht-lifepo4-hv-512v-314ah-160kwh-z-bms-bos-b-pro-160kwh",
    "title": "Блок батарей DEYE BOS-B Pro-A3 10шт LiFePO4 HV 512V 314Ah 160kWh з BMS (BOS-B-PRO-160kWh)",
    "price": 1070550,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "160.77 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-10sht-lifepo4-hv-512v-314ah-160kwh-z-bms-bos-b-pro-160kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-10sht-lifepo4-hv-512v-314ah-160kwh-z-bms-bos-b-pro-160kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-10sht-lifepo4-hv-512v-314ah-160kwh-z-bms-bos-b-pro-160kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-10sht-lifepo4-hv-512v-314ah-160kwh-z-bms-bos-b-pro-160kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-ecosolex-rs-r51100a-512v-100ah-512kwh-lifepo4-rs-r51100a",
    "title": "Акумуляторна батарея Ecosolex RS-R51100A 51.2V 100Ah 5.12kWh LiFePo4 (RS-R51100A)",
    "price": 38520,
    "specs": [
      {
        "label": "Бренд",
        "value": "Ecosolex"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "70 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-ecosolex-rs-r51100a-512v-100ah-512kwh-lifepo4-rs-r51100a/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-ecosolex-rs-r51100a-512v-100ah-512kwh-lifepo4-rs-r51100a/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-ecosolex-rs-r51100a-512v-100ah-512kwh-lifepo4-rs-r51100a/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-ecosolex-rs-r51100a-512v-100ah-512kwh-lifepo4-rs-r51100a/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-ecosolex-rs-r51100a-512v-100ah-512kwh-lifepo4-rs-r51100a/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack280-6-6xs51280-85kwh-3072v-280ah-lifepo4-sbdu280-stack280-6-85kwh",
    "title": "Блок батарей Dyness STACK280-6 6xS51280 85kWh 307.2V 280Ah LiFePO4 SBDU280 (STACK280-6-85kWh)",
    "price": 627078,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "85.96 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "307 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "280 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-6-6xs51280-85kwh-3072v-280ah-lifepo4-sbdu280-stack280-6-85kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-6-6xs51280-85kwh-3072v-280ah-lifepo4-sbdu280-stack280-6-85kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-6-6xs51280-85kwh-3072v-280ah-lifepo4-sbdu280-stack280-6-85kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-6-6xs51280-85kwh-3072v-280ah-lifepo4-sbdu280-stack280-6-85kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-dyness-stack280-8-8xs51280-115kwh-4096v-280ah-lifepo4-sbdu280-stack280-8-115kwh",
    "title": "Блок батарей Dyness STACK280-8 8xS51280 115kWh 409.6V 280Ah LiFePO4 SBDU280 (STACK280-8-115kWh)",
    "price": 817158,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "114.8 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "410 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "280 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-8-8xs51280-115kwh-4096v-280ah-lifepo4-sbdu280-stack280-8-115kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-8-8xs51280-115kwh-4096v-280ah-lifepo4-sbdu280-stack280-8-115kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-8-8xs51280-115kwh-4096v-280ah-lifepo4-sbdu280-stack280-8-115kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-dyness-stack280-8-8xs51280-115kwh-4096v-280ah-lifepo4-sbdu280-stack280-8-115kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-563v-314ah-176kwh-lifepo4-gsl-r176k",
    "title": "Блок батарей GSL 563V 314AH 176kWh LiFePO4 (GSL-R176K)",
    "price": 1226118,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "176.84 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "563.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-563v-314ah-176kwh-lifepo4-gsl-r176k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-563v-314ah-176kwh-lifepo4-gsl-r176k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-563v-314ah-176kwh-lifepo4-gsl-r176k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-614v-314ah-192kwh-lifepo4-gsl-r192k",
    "title": "Блок батарей GSL 614V 314AH 192kWh LiFePO4 (GSL-R192K)",
    "price": 1278000,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "192.92 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "614.4 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-614v-314ah-192kwh-lifepo4-gsl-r192k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-614v-314ah-192kwh-lifepo4-gsl-r192k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-614v-314ah-192kwh-lifepo4-gsl-r192k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-768v-314ah-240kwh-lifepo4-gsl-r240k",
    "title": "Блок батарей GSL 768V 314AH 240kWh LiFePO4 (GSL-R240K)",
    "price": 1592190,
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "241.15 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "768 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-768v-314ah-240kwh-lifepo4-gsl-r240k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-768v-314ah-240kwh-lifepo4-gsl-r240k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-768v-314ah-240kwh-lifepo4-gsl-r240k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-deye-se-f16-s-lifepo4-lv-512v-314ah-16kwh-se-f16-s",
    "title": "Акумуляторна батарея DEYE SE-F16-С LiFePO4 LV 51.2v 314Ah 16kwh (SE-F16-С)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "16.08 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f16-s-lifepo4-lv-512v-314ah-16kwh-se-f16-s/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f16-s-lifepo4-lv-512v-314ah-16kwh-se-f16-s/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f16-s-lifepo4-lv-512v-314ah-16kwh-se-f16-s/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f16-s-lifepo4-lv-512v-314ah-16kwh-se-f16-s/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornyy-modul-dyness-powerbrick-plus-512v-314ah-1607kwh-powerbrickplus",
    "title": "Акумуляторний модуль Dyness PowerBrick Plus 51.2V 314Ah 16.07kWh (PowerBrickPlus)",
    "price": 109999,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "16.08 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornyy-modul-dyness-powerbrick-plus-512v-314ah-1607kwh-powerbrickplus/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornyy-modul-dyness-powerbrick-plus-512v-314ah-1607kwh-powerbrickplus/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornyy-modul-dyness-powerbrick-plus-512v-314ah-1607kwh-powerbrickplus/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornyy-modul-dyness-powerbrick-plus-512v-314ah-1607kwh-powerbrickplus/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-solis-flexcore-id-160kwh-512v-314ah-lifepo4-flexcore-id-160kwh",
    "title": "Блок батарей Solis FlexCore-ID 160kWh 512V 314Ah LiFePO4 (FlexCore-ID-160kWh)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "160.77 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "157 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-160kwh-512v-314ah-lifepo4-flexcore-id-160kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-160kwh-512v-314ah-lifepo4-flexcore-id-160kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-160kwh-512v-314ah-lifepo4-flexcore-id-160kwh/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-solis-flexcore-id-200kwh-640v-314ah-lifepo4-flexcore-id-200kwh",
    "title": "Блок батарей Solis FlexCore-ID 200kWh 640V 314Ah LiFePO4 (FlexCore-ID-200kWh)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "200.96 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "640 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "157 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-200kwh-640v-314ah-lifepo4-flexcore-id-200kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-200kwh-640v-314ah-lifepo4-flexcore-id-200kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-200kwh-640v-314ah-lifepo4-flexcore-id-200kwh/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-solis-flexcore-id-240kwh-768v-314ah-lifepo4-flexcore-id-240kwh",
    "title": "Блок батарей Solis FlexCore-ID 240kWh 768V 314Ah LiFePO4 (FlexCore-ID-240kWh)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "241.15 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "768 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "157 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-240kwh-768v-314ah-lifepo4-flexcore-id-240kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-240kwh-768v-314ah-lifepo4-flexcore-id-240kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-240kwh-768v-314ah-lifepo4-flexcore-id-240kwh/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-solis-flexcore-id-20kwh-64v-314ah-lifepo4-flexcore-id-bat20kwh",
    "title": "Акумуляторна батарея Solis FlexCore-ID 20kWh 64V 314Ah LiFePO4 (FlexCore-ID-BAT20kWh)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "20.1 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "64 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "157 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-solis-flexcore-id-20kwh-64v-314ah-lifepo4-flexcore-id-bat20kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-solis-flexcore-id-20kwh-64v-314ah-lifepo4-flexcore-id-bat20kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-solis-flexcore-id-20kwh-64v-314ah-lifepo4-flexcore-id-bat20kwh/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-solis-flexcore-id-261kwh-832v-314ah-lifepo4-flexcore-id-261kwh",
    "title": "Блок батарей Solis FlexCore-ID 261kWh 832V 314Ah LiFePO4 (FlexCore-ID-261kWh)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "261.25 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "832 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "157 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-261kwh-832v-314ah-lifepo4-flexcore-id-261kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-261kwh-832v-314ah-lifepo4-flexcore-id-261kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-solis-flexcore-id-261kwh-832v-314ah-lifepo4-flexcore-id-261kwh/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "bms-dlya-batarey-solis-flexcore-id-200-1000vdc-250a-flexcore-id-cb250a",
    "title": "BMS для батарей Solis FlexCore-ID 200-1000Vdc 250A (FlexCore-ID-CB250A)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "250 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-solis-flexcore-id-200-1000vdc-250a-flexcore-id-cb250a/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-solis-flexcore-id-200-1000vdc-250a-flexcore-id-cb250a/2.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-dyness-stack314-s51314-512v-314ah-16076kwh-bez-bms-s51314",
    "title": "Акумуляторна батарея Dyness STACK314 S51314 51.2V 314Ah 16.076kWh без BMS (S51314)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "16.08 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-dyness-stack314-s51314-512v-314ah-16076kwh-bez-bms-s51314/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-dyness-stack314-s51314-512v-314ah-16076kwh-bez-bms-s51314/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-dyness-stack314-s51314-512v-314ah-16076kwh-bez-bms-s51314/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-dyness-stack314-s51314-512v-314ah-16076kwh-bez-bms-s51314/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-b-pro-a3-16sht-lifepo4-hv-819v-314ah-257kwh-bms-bos-b-pdu-2-a-bos-b-pro-256kwh",
    "title": "Блок батарей DEYE BOS-B Pro-A3 16шт LiFePO4 HV 819V 314Ah 257kWh BMS BOS-B-PDU-2-A (BOS-B-PRO-256kWh)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "257.23 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "819.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-16sht-lifepo4-hv-819v-314ah-257kwh-bms-bos-b-pdu-2-a-bos-b-pro-256kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-16sht-lifepo4-hv-819v-314ah-257kwh-bms-bos-b-pdu-2-a-bos-b-pro-256kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-16sht-lifepo4-hv-819v-314ah-257kwh-bms-bos-b-pdu-2-a-bos-b-pro-256kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-b-pro-a3-16sht-lifepo4-hv-819v-314ah-257kwh-bms-bos-b-pdu-2-a-bos-b-pro-256kwh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-revention-powercube-eco-reveco59kwh-24v-230ah-59kwh-lifepo4",
    "title": "Акумуляторна батарея Revention PowerCube ECO REVECO5.9KWH 24V 230Ah 5.9kWh LiFePO4",
    "specs": [
      {
        "label": "Бренд",
        "value": "Revention"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "230 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.52 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "24 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "115 A"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-revention-powercube-eco-reveco59kwh-24v-230ah-59kwh-lifepo4/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-revention-powercube-eco-reveco59kwh-24v-230ah-59kwh-lifepo4/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-revention-powercube-eco-reveco59kwh-24v-230ah-59kwh-lifepo4/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorniy-modul-bluetti-b500-expansion-battery-4960wh",
    "title": "Акумуляторний модуль Bluetti B500 Expansion Battery 4960Wh",
    "specs": [
      {
        "label": "Бренд",
        "value": "Bluetti"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "50 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "4.96 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "3500 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "99.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "25 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-bluetti-b500-expansion-battery-4960wh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-bluetti-b500-expansion-battery-4960wh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-bluetti-b500-expansion-battery-4960wh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-bluetti-b500-expansion-battery-4960wh/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-deye-rw-f16-lifepo4-lv-512v-314ah-16kwh",
    "title": "Акумуляторна батарея DEYE RW-F16 LiFePO4 LV 51.2V 314Ah 16kWh",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "314 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "16.08 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "300 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-rw-f16-lifepo4-lv-512v-314ah-16kwh/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-rw-f16-lifepo4-lv-512v-314ah-16kwh/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-rw-f16-lifepo4-lv-512v-314ah-16kwh/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-rw-f16-lifepo4-lv-512v-314ah-16kwh/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-rw-f16-lifepo4-lv-512v-314ah-16kwh/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorniy-modul-dyness-powerbrick-512v-280ah-144kwh-lifepo4-powerbrick",
    "title": "Акумуляторний модуль Dyness Powerbrick 51.2V 280Ah 14.4kWh LiFePo4 (Powerbrick)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "14.34 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "200 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-dyness-powerbrick-512v-280ah-144kwh-lifepo4-powerbrick/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-dyness-powerbrick-512v-280ah-144kwh-lifepo4-powerbrick/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorniy-modul-dyness-powerbrick-512v-280ah-144kwh-lifepo4-powerbrick/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akkumulyatornaya-batareya-deye-se-f12-s-lifepo4-lv-512v-230ah-1178kwh-se-f12-c",
    "title": "Акумуляторна батарея DEYE SE-F12-С LiFePO4 LV 51.2v 230Ah 11.78kwh (SE-F12-C)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "230 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "11.78 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "230 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f12-s-lifepo4-lv-512v-230ah-1178kwh-se-f12-c/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f12-s-lifepo4-lv-512v-230ah-1178kwh-se-f12-c/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f12-s-lifepo4-lv-512v-230ah-1178kwh-se-f12-c/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akkumulyatornaya-batareya-deye-se-f12-s-lifepo4-lv-512v-230ah-1178kwh-se-f12-c/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-a7-5376kw-2688v-200ah-lifepo4-hvb1000v-rack",
    "title": "Блок батарей Deye BOS-A7 53.76kW 268.8V 200Ah LiFePO4 HVB1000V RACK",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "200 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "53.76 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "268.8 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a7-5376kw-2688v-200ah-lifepo4-hvb1000v-rack/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a7-5376kw-2688v-200ah-lifepo4-hvb1000v-rack/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a7-5376kw-2688v-200ah-lifepo4-hvb1000v-rack/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a7-5376kw-2688v-200ah-lifepo4-hvb1000v-rack/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-a10-768kw-384v-200ah-lifepo4-hvb1000v-rack",
    "title": "Блок батарей Deye BOS-A10 76.8kW 384V 200Ah LiFePO4 HVB1000V RACK",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "200 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "76.8 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "384 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a10-768kw-384v-200ah-lifepo4-hvb1000v-rack/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a10-768kw-384v-200ah-lifepo4-hvb1000v-rack/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a10-768kw-384v-200ah-lifepo4-hvb1000v-rack/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a10-768kw-384v-200ah-lifepo4-hvb1000v-rack/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-512v-280ah-143kwh-lifepo4-gsl-r143k",
    "title": "Блок батарей GSL 512V 280Ah 143kWh LiFePO4 (GSL-R143K)",
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "143.36 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "125 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-512v-280ah-143kwh-lifepo4-gsl-r143k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-512v-280ah-143kwh-lifepo4-gsl-r143k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-512v-280ah-143kwh-lifepo4-gsl-r143k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-gsl-r172k",
    "title": "Блок батарей GSL 614.4V 280Ah 172kWh LiFePO4 (GSL-R172K)",
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "172.03 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "614.4 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "125 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-gsl-r172k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-gsl-r172k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-gsl-r172k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-170",
    "title": "Блок батарей GSL 614.4V 280Ah 172kWh LiFePO4 IP67 Fire Extinguisher Air Conditioner (GSL-BESS-170)",
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-іонна (Li-ion)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "172.03 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "614.4 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-170/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-170/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-6144v-280ah-172kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-170/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-dyness-dl50c-pro-512v-100ah-512kwh-lifepo4-dl50c-pro",
    "title": "Акумуляторна батарея Dyness DL5.0C Pro 51.2V 100Ah 5.12kWh LiFePo4 (DL5.0C Pro)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "75 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-pro-512v-100ah-512kwh-lifepo4-dl50c-pro/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-pro-512v-100ah-512kwh-lifepo4-dl50c-pro/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-pro-512v-100ah-512kwh-lifepo4-dl50c-pro/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-pro-512v-100ah-512kwh-lifepo4-dl50c-pro/4.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-dyness-dl50c-pro-512v-100ah-512kwh-lifepo4-dl50c-pro/5.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-a13-9984kw-4992v-200ahlifepo4-hvb1000v-rack",
    "title": "Блок батарей Deye BOS-A13 99.84kW 499.2V 200AhLiFePO4 HVB1000V RACK",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "200 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "99.84 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "499.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a13-9984kw-4992v-200ahlifepo4-hvb1000v-rack/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a13-9984kw-4992v-200ahlifepo4-hvb1000v-rack/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a13-9984kw-4992v-200ahlifepo4-hvb1000v-rack/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a13-9984kw-4992v-200ahlifepo4-hvb1000v-rack/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-deye-bos-a21-16128kw-8064v-200ah-lifepo4-hvb1000v-rack",
    "title": "Блок батарей Deye BOS-A21 161.28kW 806.4V 200Ah LiFePO4 HVB1000V RACK",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "200 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "161.28 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "806.4 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "160 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a21-16128kw-8064v-200ah-lifepo4-hvb1000v-rack/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a21-16128kw-8064v-200ah-lifepo4-hvb1000v-rack/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a21-16128kw-8064v-200ah-lifepo4-hvb1000v-rack/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-deye-bos-a21-16128kw-8064v-200ah-lifepo4-hvb1000v-rack/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-deye-bos-b-lifepo4-hv-512v-280ah-143kwh-no-bms-bos-b-pack143",
    "title": "Акумуляторна батарея Deye BOS-B LiFePO4 HV 51.2V 280Ah 14.3kWh no BMS (BOS-B-Pack14.3)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "14.34 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "168 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-lifepo4-hv-512v-280ah-143kwh-no-bms-bos-b-pack143/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-lifepo4-hv-512v-280ah-143kwh-no-bms-bos-b-pack143/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-lifepo4-hv-512v-280ah-143kwh-no-bms-bos-b-pack143/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-bos-b-lifepo4-hv-512v-280ah-143kwh-no-bms-bos-b-pack143/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "sistema-zberigannya-energii-deye-bos-b-215kw-768v-280ah-lifepo4-bos-b-pdu-2-bos-b-215kw",
    "title": "Система зберігання енергії Deye BOS-B 215kW 768V 280Ah LiFePO4 BOS-B-PDU-2 (BOS-B-215kW)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "220.08 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "786 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "168 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/sistema-zberigannya-energii-deye-bos-b-215kw-768v-280ah-lifepo4-bos-b-pdu-2-bos-b-215kw/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/sistema-zberigannya-energii-deye-bos-b-215kw-768v-280ah-lifepo4-bos-b-pdu-2-bos-b-215kw/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/sistema-zberigannya-energii-deye-bos-b-215kw-768v-280ah-lifepo4-bos-b-pdu-2-bos-b-215kw/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/sistema-zberigannya-energii-deye-bos-b-215kw-768v-280ah-lifepo4-bos-b-pdu-2-bos-b-215kw/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-4096v-280ah-1147kwh-lifepo4-gsl-r115k",
    "title": "Блок батарей GSL 409.6V 280Ah 114.7kWh LiFePO4 (GSL-R115K)",
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "114.69 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "8000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "409.6 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "125 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-4096v-280ah-1147kwh-lifepo4-gsl-r115k/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-4096v-280ah-1147kwh-lifepo4-gsl-r115k/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-4096v-280ah-1147kwh-lifepo4-gsl-r115k/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "blok-batarey-gsl-bess-143-512v-280ah-143kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-143",
    "title": "Блок батарей GSL-BESS-143 512V 280Ah 143kWh LiFePO4 IP67 Fire Extinguisher Air Conditioner (GSL-BESS-143)",
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "280 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "143 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "10000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "512 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-bess-143-512v-280ah-143kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-143/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-bess-143-512v-280ah-143kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-143/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-bess-143-512v-280ah-143kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-143/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/blok-batarey-gsl-bess-143-512v-280ah-143kwh-lifepo4-ip67-fire-extinguisher-air-conditioner-gsl-bess-143/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-deye-se-f5-plus-lifepo4-lv-512v-100ah-512kwh-se-f5-plus-l",
    "title": "Акумуляторна батарея DEYE SE-F5 Plus LiFePO4 LV 51.2V 100Ah 5.12kWh (SE-F5 Plus-L)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-f5-plus-lifepo4-lv-512v-100ah-512kwh-se-f5-plus-l/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-f5-plus-lifepo4-lv-512v-100ah-512kwh-se-f5-plus-l/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-f5-plus-lifepo4-lv-512v-100ah-512kwh-se-f5-plus-l/3.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-deye-se-f5-plus-lifepo4-lv-512v-100ah-512kwh-se-f5-plus-l/4.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "akumulyatorna-batareya-gsl-gsl51100-35u-512v-100ah-512kwh-lifepo4",
    "title": "Акумуляторна батарея GSL GSL51100-3.5U 51.2V 100Ah 5.12kWh LiFePO4",
    "specs": [
      {
        "label": "Бренд",
        "value": "GSL ENERGY"
      },
      {
        "label": "Технологія",
        "value": "Літій-залізо-фосфатна (LiFePO4)"
      },
      {
        "label": "Ємність батареї",
        "value": "100 Ah"
      },
      {
        "label": "Енергія батареї",
        "value": "5.12 kW⋅h"
      },
      {
        "label": "Цикл життя",
        "value": "6500 циклів"
      },
      {
        "label": "Номінальна напруга",
        "value": "51.2 V"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "100 A"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-gsl51100-35u-512v-100ah-512kwh-lifepo4/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-gsl51100-35u-512v-100ah-512kwh-lifepo4/2.webp",
      "/images/products/solarverse/equipment/solar-batteries/akumulyatorna-batareya-gsl-gsl51100-35u-512v-100ah-512kwh-lifepo4/3.webp"
    ]
  },
  {
    "catalog": "solar-batteries",
    "slug": "bms-dlya-batarey-deye-bos-b-pro-200-1000v-180a-bos-b-pdu-2-a",
    "title": "BMS для батарей DEYE BOS-B PRO 200-1000V 180A (BOS-B-PDU-2-A)",
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Цикл життя",
        "value": "6000 циклів"
      },
      {
        "label": "Зарядний струм (макс.)",
        "value": "180 A"
      },
      {
        "label": "Гарантія",
        "value": "120 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-deye-bos-b-pro-200-1000v-180a-bos-b-pdu-2-a/1.webp",
      "/images/products/solarverse/equipment/solar-batteries/bms-dlya-batarey-deye-bos-b-pro-200-1000v-180a-bos-b-pdu-2-a/2.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-tongwei-solar-twmnd-72hs575w-575w",
    "title": "Сонячна панель Tongwei Solar TWMND-72HS575W 575W",
    "price": 5267,
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "575 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "30 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-solar-twmnd-72hs575w-575w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-solar-twmnd-72hs575w-575w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-solar-twmnd-72hs575w-575w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-tongwei-solar-tw410map-108-h-s-410w",
    "title": "Сонячна панель Tongwei Solar TW410MAP-108-H-S 410W",
    "price": 5015,
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "410 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-solar-tw410map-108-h-s-410w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-solar-tw410map-108-h-s-410w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-solar-tw410map-108-h-s-410w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-tongwei-twmnd-72hs585w-585w",
    "title": "Сонячна панель TONGWEI TWMND-72HS585W 585W",
    "price": 7377,
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "585 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hs585w-585w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hs585w-585w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hs585w-585w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-tongwei-twmnh-54hd500w-500w",
    "title": "Сонячна панель Tongwei TWMNH-54HD500W 500W",
    "price": 6486,
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "500 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnh-54hd500w-500w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnh-54hd500w-500w/2.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-jinko-solar-jkm465m-7rl3-v-465w",
    "title": "Сонячна панель Jinko Solar JKM465M-7RL3-V 465W",
    "price": 5688,
    "specs": [
      {
        "label": "Бренд",
        "value": "Jinko Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Jinko Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "465 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP67"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-jinko-solar-jkm465m-7rl3-v-465w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-tongwei-twmnd-72hd590w-590w",
    "title": "Сонячна панель Tongwei TWMND-72HD590W 590W",
    "price": 5669,
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "590 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnd-72hd590w-590w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "statsionarnaya-solnechnaya-panel-longi-solar-lr8-66hgd-610m-610w",
    "title": "Стаціонарна сонячна панель Longi Solar LR8-66HGD-610M 610W",
    "price": 5737,
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "610 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/statsionarnaya-solnechnaya-panel-longi-solar-lr8-66hgd-610m-610w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/statsionarnaya-solnechnaya-panel-longi-solar-lr8-66hgd-610m-610w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/statsionarnaya-solnechnaya-panel-longi-solar-lr8-66hgd-610m-610w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-longi-solar-lr7-60hvh-540m-540vt-lr7-60hvh-540m",
    "title": "Сонячна панель Longi Solar LR7-60HVH-540M 540Вт (LR7-60HVH-540M)",
    "price": 6200,
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "540 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "15 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr7-60hvh-540m-540vt-lr7-60hvh-540m/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr7-60hvh-540m-540vt-lr7-60hvh-540m/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr7-60hvh-540m-540vt-lr7-60hvh-540m/3.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr7-60hvh-540m-540vt-lr7-60hvh-540m/4.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-tongwei-twmnd-72hd575w-575vt-twmnd-72hd575w",
    "title": "Сонячна панель TONGWEI TWMND-72HD575W 575Вт (TWMND-72HD575W)",
    "price": 5267,
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "575 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hd575w-575vt-twmnd-72hd575w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hd575w-575vt-twmnd-72hd575w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hd575w-575vt-twmnd-72hd575w/3.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-72hd575w-575vt-twmnd-72hd575w/4.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-jinko-solar-jkm550m-72hl4-550w",
    "title": "Сонячна панель Jinko Solar JKM550M-72HL4 550W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Jinko Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Jinko Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "550 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-jinko-solar-jkm550m-72hl4-550w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-jinko-solar-jkm535m-72hl4-tv-535w",
    "title": "Сонячна панель Jinko Solar JKM535M-72HL4-TV 535W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Jinko Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Jinko Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "535 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-jinko-solar-jkm535m-72hl4-tv-535w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-ja-solar-jam76s11-400prb-400w",
    "title": "Сонячна панель JA Solar JAM76S11-400/PR(B) 400W",
    "specs": [
      {
        "label": "Бренд",
        "value": "JA Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "JA Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "400 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-ja-solar-jam76s11-400prb-400w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-longi-solar-lr7-72hvh-645w-lr7-72hvh-645m",
    "title": "Сонячна панель Longi Solar LR7-72HVH 645W (LR7-72HVH-645M)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "645 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "15 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr7-72hvh-645w-lr7-72hvh-645m/1.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr7-72hvh-645w-lr7-72hvh-645m/2.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr7-72hvh-645w-lr7-72hvh-645m/3.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr7-72hvh-645w-lr7-72hvh-645m/4.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-longi-solar-lr8-48hgd-450w-lr8-48hgd-450m",
    "title": "Сонячна панель Longi Solar LR8-48HGD 450W (LR8-48HGD-450M)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "450 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-48hgd-450w-lr8-48hgd-450m/1.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-48hgd-450w-lr8-48hgd-450m/2.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-longi-solar-lr5-54hth-435m-435w",
    "title": "Сонячна панель Longi Solar LR5-54HTH-435M 435W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "435 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-54hth-435m-435w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-54hth-435m-435w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-54hth-435m-435w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-longi-solar-lr5-72hph-550m-550w",
    "title": "Сонячна панель Longi Solar LR5-72HPH-550M 550W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "550 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-72hph-550m-550w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-longi-solar-lr4-60htb-375m-375w",
    "title": "Сонячна панель Longi Solar LR4-60HTB-375M 375W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "375 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr4-60htb-375m-375w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green",
    "title": "Сонячна панель Baseus Energy Stack Solar Panel 100W Cold Green",
    "specs": [
      {
        "label": "Бренд",
        "value": "Baseus"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Baseus"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "100 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP66"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/3.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/4.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/5.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/6.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-baseus-energy-stack-solar-panel-100w-cold-green/7.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-tongwei-twmnd-78hd635w-635w",
    "title": "Сонячна панель Tongwei TWMND-78HD635W 635W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "635 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnd-78hd635w-635w/1.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-tongwei-twmnh-66hd620w-620w",
    "title": "Сонячна панель Tongwei TWMNH-66HD620W 620W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "620 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnh-66hd620w-620w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnh-66hd620w-620w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-tongwei-twmnh-66hd620w-620w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-longi-solar-lr8-48hgd-440w-lr8-48hgd-440m",
    "title": "Сонячна панель Longi Solar LR8-48HGD 440W (LR8-48HGD-440M)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "440 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-48hgd-440w-lr8-48hgd-440m/1.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-48hgd-440w-lr8-48hgd-440m/2.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-tongwei-twmnd-54hb430w-430w",
    "title": "Сонячна панель TONGWEI TWMND-54HB430W 430W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Tongwei Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Tongwei Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "430 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "15 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-54hb430w-430w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-54hb430w-430w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-tongwei-twmnd-54hb430w-430w/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "sonyachna-panel-longi-solar-lr8-66hgd-615w-lr8-66hgd-615m",
    "title": "Сонячна панель Longi Solar LR8-66HGD 615W (LR8-66HGD-615M)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "615 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-66hgd-615w-lr8-66hgd-615m/1.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-66hgd-615w-lr8-66hgd-615m/2.webp",
      "/images/products/solarverse/equipment/solar-panels/sonyachna-panel-longi-solar-lr8-66hgd-615w-lr8-66hgd-615m/3.webp"
    ]
  },
  {
    "catalog": "solar-panels",
    "slug": "solnechnaya-panel-longi-solar-lr5-72hth-585m-585w",
    "title": "Сонячна панель Longi Solar LR5-72HTH-585M 585W",
    "specs": [
      {
        "label": "Бренд",
        "value": "Longi Solar"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Longi Solar"
      },
      {
        "label": "Тип напівпровідника",
        "value": "Монокристал"
      },
      {
        "label": "Потужність",
        "value": "585 W"
      },
      {
        "label": "Конектори",
        "value": "MC4"
      },
      {
        "label": "Ступінь захисту від вологи та пилу",
        "value": "IP68"
      },
      {
        "label": "Гарантія",
        "value": "12 років"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-72hth-585m-585w/1.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-72hth-585m-585w/2.webp",
      "/images/products/solarverse/equipment/solar-panels/solnechnaya-panel-longi-solar-lr5-72hth-585m-585w/3.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "kabel-dlya-pidklyuchennya-do-invertora-dyness-b4850-b4850-p-c",
    "title": "Кабель для підключення до інвертора DYNESS B4850 (B4850-P-C)",
    "price": 1499,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Dyness"
      },
      {
        "label": "Сумісність",
        "value": "Dyness B4850"
      },
      {
        "label": "Призначення",
        "value": "Для підключення до інвертора"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/kabel-dlya-pidklyuchennya-do-invertora-dyness-b4850-b4850-p-c/1.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "komplekt-dlya-rasshireniya-dyness-stack280-s51280-s51280-expand",
    "title": "Комплект для расширения Dyness STACK280 S51280 (S51280 Expand)",
    "price": 10308,
    "specs": [
      {
        "label": "Бренд",
        "value": "Dyness"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Dyness"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      },
      {
        "label": "Призначення",
        "value": "Для встановлення акумуляторних батарей"
      },
      {
        "label": "Сумісність",
        "value": "Dyness STACK280"
      },
      {
        "label": "Матеріал",
        "value": "Метал"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/komplekt-dlya-rasshireniya-dyness-stack280-s51280-s51280-expand/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/komplekt-dlya-rasshireniya-dyness-stack280-s51280-s51280-expand/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "bezdrotoviy-lichilnik-strumu-ct-meter-deye-sun-smart-ct01-50ma-ct-3-ph-lorars485",
    "title": "Бездротовий лічильник струму (CT-Meter) DEYE SUN-SMART-CT01 50мА CT, 3-Ph, LoRa/RS485",
    "price": 3960,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Гарантія",
        "value": "24 міс."
      },
      {
        "label": "Призначення",
        "value": "Для вимірювання електроенергії у трифазних мережах"
      },
      {
        "label": "Сумісність",
        "value": "Інвертори DEYE"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/bezdrotoviy-lichilnik-strumu-ct-meter-deye-sun-smart-ct01-50ma-ct-3-ph-lorars485/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/bezdrotoviy-lichilnik-strumu-ct-meter-deye-sun-smart-ct01-50ma-ct-3-ph-lorars485/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "rozumna-rozetka-deye-sun-smart-plug01-f-16a-lora",
    "title": "Розумна розетка DEYE SUN-SMART-PLUG01-F 16A, LoRa",
    "price": 1980,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Гарантія",
        "value": "24 міс."
      },
      {
        "label": "Сумісність",
        "value": "Інвертори DEYE"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/rozumna-rozetka-deye-sun-smart-plug01-f-16a-lora/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/rozumna-rozetka-deye-sun-smart-plug01-f-16a-lora/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder",
    "title": "Універсальна стійка ARTLINE з тримачем для автомобільного зарядного пристрою Bulk Black (ARTLINE_CAR_CHR_HOLDER)",
    "price": 5999,
    "specs": [
      {
        "label": "Бренд",
        "value": "Artline"
      },
      {
        "label": "Гарантія",
        "value": "1 міс."
      },
      {
        "label": "Призначення",
        "value": "Для заряджання електромобілів"
      },
      {
        "label": "Матеріал",
        "value": "Метал"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/2.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/3.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/4.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/5.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/6.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/7.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/8.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/9.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/10.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/11.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/12.webp",
      "/images/products/solarverse/equipment/solar-accessories/universalna-stiyka-artline-z-trimachem-dlya-avtomobilnogo-zaryadnogo-pristroyu-bulk-black-artline-car-chr-holder/13.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "stoyka-dlya-15-batarey-deye-bos-b-rack-bos-b-rackbos-b-pdu-2",
    "title": "Стійка для 15 батарей DEYE BOS-B RACK-BOS-B (RACK/BOS-B-PDU-2)",
    "price": 31458,
    "specs": [
      {
        "label": "Бренд",
        "value": "DEYE"
      },
      {
        "label": "Гарантія",
        "value": "6 міс."
      },
      {
        "label": "Призначення",
        "value": "Для встановлення акумуляторних батарей"
      },
      {
        "label": "Матеріал",
        "value": "Метал"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/stoyka-dlya-15-batarey-deye-bos-b-rack-bos-b-rackbos-b-pdu-2/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/stoyka-dlya-15-batarey-deye-bos-b-rack-bos-b-rackbos-b-pdu-2/2.webp",
      "/images/products/solarverse/equipment/solar-accessories/stoyka-dlya-15-batarey-deye-bos-b-rack-bos-b-rackbos-b-pdu-2/3.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "stiyka-dlya-batarey-deye-bos-a-14-rivniv-bos-a-rack14",
    "title": "Стійка для батарей Deye BOS-A 14-рівнів (BOS-A-Rack14)",
    "price": 20250,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Матеріал",
        "value": "Метал"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Призначення",
        "value": "Для встановлення акумуляторних батарей"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/stiyka-dlya-batarey-deye-bos-a-14-rivniv-bos-a-rack14/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/stiyka-dlya-batarey-deye-bos-a-14-rivniv-bos-a-rack14/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "stiyka-dlya-batarey-deye-bos-a-11-rivniv-bos-a-rack11",
    "title": "Стійка для батарей Deye BOS-A 11-рівнів (BOS-A-Rack11)",
    "price": 17508,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Матеріал",
        "value": "Метал"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Призначення",
        "value": "Для встановлення акумуляторних батарей"
      },
      {
        "label": "Гарантія",
        "value": "60 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/stiyka-dlya-batarey-deye-bos-a-11-rivniv-bos-a-rack11/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/stiyka-dlya-batarey-deye-bos-a-11-rivniv-bos-a-rack11/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "modul-wi-fi-dlya-invertoriv-sungrow-winet-s2-wi-filan-asm00874",
    "title": "Модуль Wi-Fi для інверторів Sungrow WiNet-S2 Wi-Fi/LAN (ASM00874)",
    "price": 4368,
    "specs": [
      {
        "label": "Бренд",
        "value": "Sungrow"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Sungrow"
      },
      {
        "label": "Призначення",
        "value": "Для підключення до інвертора"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/modul-wi-fi-dlya-invertoriv-sungrow-winet-s2-wi-filan-asm00874/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/modul-wi-fi-dlya-invertoriv-sungrow-winet-s2-wi-filan-asm00874/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "zaryadniy-pristriy-dlya-elektromobiliv-deye-sun-evse22k01-eu-type2-22kvt-32a-3-ph-wi-filorable",
    "title": "Зарядний пристрій для електромобілів DEYE SUN-EVSE22K01-EU Type2, 22кВт, 32A, 3-Ph, Wi-Fi/LoRa/BLE",
    "price": 15528,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Гарантія",
        "value": "24 міс."
      },
      {
        "label": "Призначення",
        "value": "Для заряджання електромобілів"
      },
      {
        "label": "Сумісність",
        "value": "Інвертори DEYE"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/zaryadniy-pristriy-dlya-elektromobiliv-deye-sun-evse22k01-eu-type2-22kvt-32a-3-ph-wi-filorable/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/zaryadniy-pristriy-dlya-elektromobiliv-deye-sun-evse22k01-eu-type2-22kvt-32a-3-ph-wi-filorable/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "bezdrotoviy-vimikach-deye-sun-smart-switch01p3-25a-3-ph-lora",
    "title": "Бездротовий вимикач DEYE SUN-SMART-SWITCH01P3 25A, 3-Ph, LoRa",
    "price": 3960,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Гарантія",
        "value": "24 міс."
      },
      {
        "label": "Сумісність",
        "value": "Інвертори DEYE"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/bezdrotoviy-vimikach-deye-sun-smart-switch01p3-25a-3-ph-lora/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/bezdrotoviy-vimikach-deye-sun-smart-switch01p3-25a-3-ph-lora/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "bezdrotoviy-peredavach-deye-sun-smart-tx01-dc-5v-lora",
    "title": "Бездротовий передавач DEYE SUN-SMART-TX01 DC 5V, LoRa",
    "price": 2478,
    "specs": [
      {
        "label": "Бренд",
        "value": "Deye"
      },
      {
        "label": "Виробник (бренд)",
        "value": "Deye"
      },
      {
        "label": "Гарантія",
        "value": "24 міс."
      },
      {
        "label": "Сумісність",
        "value": "Інвертори DEYE"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/bezdrotoviy-peredavach-deye-sun-smart-tx01-dc-5v-lora/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/bezdrotoviy-peredavach-deye-sun-smart-tx01-dc-5v-lora/2.webp"
    ]
  },
  {
    "catalog": "solar-accessories",
    "slug": "wifi-stick-dlya-solis-s5-4pin-soliscloud-s5-wifi-st-4pin",
    "title": "WIFI Stick для Solis S5, 4PIN, SolisCloud (S5-WiFi-ST-4Pin)",
    "specs": [
      {
        "label": "Бренд",
        "value": "Solis"
      },
      {
        "label": "Гарантія",
        "value": "12 міс."
      },
      {
        "label": "Призначення",
        "value": "Для підключення до інвертора"
      },
      {
        "label": "Сумісність",
        "value": "Інвертор Solis"
      }
    ],
    "images": [
      "/images/products/solarverse/equipment/solar-accessories/wifi-stick-dlya-solis-s5-4pin-soliscloud-s5-wifi-st-4pin/1.webp",
      "/images/products/solarverse/equipment/solar-accessories/wifi-stick-dlya-solis-s5-4pin-soliscloud-s5-wifi-st-4pin/2.webp"
    ]
  }
];

const catalogDefinitions: Record<
  ImportedCatalogKey,
  {
    category: ProductCategory;
    itemName: string;
    fallbackImage: string;
    compatibility: string[];
  }
> = {
  inverters: {
    category: "inverters",
    itemName: "інвертор",
    fallbackImage: "/images/products/hybrid-solar-station.png",
    compatibility: [
      "сонячних електростанцій і систем резервного живлення",
      "приватних та комерційних об’єктів після розрахунку навантаження",
      "сумісних акумуляторних систем відповідної напруги",
    ],
  },
  "solar-batteries": {
    category: "solar-batteries",
    itemName: "акумуляторна батарея",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: [
      "систем резервного й автономного живлення",
      "сонячних електростанцій із накопиченням енергії",
      "сумісних інверторів після перевірки протоколу зв’язку та напруги",
    ],
  },
  "solar-panels": {
    category: "solar-panels",
    itemName: "сонячна панель",
    fallbackImage: "/images/products/grid-tied-solar-station.png",
    compatibility: [
      "дахових і наземних сонячних електростанцій",
      "мережевих, гібридних та автономних систем",
      "приватних і комерційних об’єктів після проєктного розрахунку",
    ],
  },
  "solar-accessories": {
    category: "solar-accessories",
    itemName: "аксесуар",
    fallbackImage: "/images/products/energy-storage-system.png",
    compatibility: [
      "монтажу та підключення енергетичного обладнання",
      "сумісних інверторів, батарей і систем моніторингу",
      "сервісного дооснащення після перевірки моделі обладнання",
    ],
  },
};

function getSpec(
  product: ImportedEquipmentProduct,
  labels: string[],
  fallback: string,
) {
  return (
    product.specs.find((spec) => labels.includes(spec.label))?.value ?? fallback
  );
}

export const solarverseEquipmentProducts: Product[] = importedProducts.map(
  (product, index) => {
    const definition = catalogDefinitions[product.catalog];
    const brand = getSpec(
      product,
      ["Бренд", "Виробник (бренд)"],
      "Solarverse",
    );
    const mainParameter = getSpec(
      product,
      [
        "Номінальна потужність",
        "Потужність",
        "Енергія батареї",
        "Призначення",
        "Сумісність",
      ],
      "характеристики за запитом",
    );

    return {
      id: `solarverse-equipment-${index + 1}`,
      slug: product.slug,
      title: product.title,
      sourceUrl: `https://solarverse.ua/product/${product.slug}`,
      direction: "energy-solutions",
      category: definition.category,
      price: product.price
        ? `${product.price.toLocaleString("uk-UA")} грн · Ціну уточнюйте`
        : "Ціну уточнюйте",
      showPrice: true,
      status: "consult",
      shortDescription: `${definition.itemName} ${brand}: ${mainParameter}.`,
      description:
        `${product.title}. Характеристики наведені за даними джерела. ` +
        "Перед замовленням уточнюємо актуальну ціну, наявність, комплектацію, гарантію та сумісність з іншими компонентами системи.",
      specs: product.specs,
      compatibilityTitle: "Підходить для",
      compatibility: definition.compatibility,
      notice:
        "Ціна наведена довідково за даними джерела. Актуальну ціну, наявність і сумісність потрібно уточнити перед замовленням.",
      image: product.images?.[0] ?? definition.fallbackImage,
      images: product.images,
      featured: false,
    };
  },
);
