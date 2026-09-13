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
   * Contacts (phone, address) are placeholders until a real office/number is
   * confirmed. While false, they are withheld from JSON-LD and llms.txt so no
   * fake data is published; flip once real contacts are set.
   */
  contactsPublished: false,
  phone: "+380000000000",
  phoneLabel: "+38 (000) 000 00 00",
  telegram: "placeholder_batteries",
  whatsapp: "380000000000",
  viber: "+380000000000",
  schedule: "Пн-Пт 09:00-18:00",
  city: "Ваше місто",
  address: "Адреса буде додана пізніше",
};

export const navigation = [
  { href: "/", label: "Головна" },
  { href: "/products", label: "Товари" },
  { href: "/services", label: "Послуги" },
];
