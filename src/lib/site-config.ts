function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "СИСТЕМІКА",
  tagline: "Інженерні та енергетичні рішення",
  description:
    "Товари, прилади обліку, інженерний сервіс та енергетичні рішення для дому й бізнесу: від підбору й аудиту до монтажу, запуску та обслуговування.",
  url: resolveSiteUrl(),
  locale: "uk_UA",
  logo: "/brand/systemika-symbol-original.png",
  /**
   * Phone is real; city/address/seller details are still placeholders until
   * the ФОП registration extract is on hand. contactsPublished gates only
   * phone/schedule into JSON-LD contactPoint and llms.txt — address and
   * seller fields never feed structured data, so they stay safe to leave
   * as placeholders while true.
   */
  contactsPublished: true,
  phone: "+380686002626",
  phoneLabel: "+38 (068) 600 26 26",
  telegram: "+380686002626",
  whatsapp: "380686002626",
  viber: "+380686002626",
  schedule: "Пн-Пт 09:00-18:00",
  city: "Дніпро",
  address: "Адреса буде додана пізніше",
  /**
   * taxId (РНОКПП/ІПН) and the exact street address are not public — they
   * stay placeholders until provided directly. Replace before launching ads.
   */
  seller: {
    name: "ФОП Красоченко Єгор Юрійович",
    taxId: "0000000000",
    address: "Адреса буде додана пізніше",
  },
};

export const navigation = [
  { href: "/", label: "Головна" },
  { href: "/products", label: "Товари" },
  { href: "/services", label: "Послуги" },
];
