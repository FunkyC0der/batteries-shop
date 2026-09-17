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
  contactsPublished: true,
  phone: "+380686002626",
  phoneLabel: "+38 (068) 600 26 26",
  telegram: "+380686002626",
  whatsapp: "380686002626",
  viber: "+380686002626",
  schedule: "Пн-Пт 09:00-18:00",
  city: "Дніпро",
  /**
   * Only the ФОП name is published. РНОКПП/ІПН and the exact street address
   * are sensitive personal data (home address, tax ID) and are deliberately
   * not shown on the site — consumer-protection law requires identifying
   * the seller by name and location, not disclosing the tax number.
   */
  seller: {
    name: "ФОП Красоченко Єгор Юрійович",
  },
};

export const navigation = [
  { href: "/", label: "Головна" },
  { href: "/products", label: "Товари" },
  { href: "/services", label: "Послуги" },
];
