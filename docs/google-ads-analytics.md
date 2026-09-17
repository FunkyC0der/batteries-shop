# Google Analytics 4 та Google Ads (пошук)

Технічна частина в коді готова; нижче — що налаштувати в кабінетах Google і
що блокує запуск реклами.

## Що вже є в коді

- **Google tag (gtag.js)** — `src/components/google-tag.tsx`, логіка в
  `src/lib/analytics.ts`. Один тег для GA4 і Google Ads, вмикається лише коли
  задані env-змінні, і тільки в production-збірці (не в `next dev`, не на
  Vercel preview-деплоях — щоб тестовий трафік не потрапляв у звіти).
- **Consent Mode v2** — для ЄЕЗ/UK/CH за замовчуванням `denied` (банера згоди
  немає), для решти країн, включно з Україною, — `granted`.
- **Перегляди сторінок** — автоматично (GA4 Enhanced Measurement відстежує
  клієнтські переходи Next.js через History API; перевірте, що опція
  «Page changes based on browser history events» увімкнена).
- **Ліди** — будь-який клік на телефон, Telegram, WhatsApp або Viber
  (`src/components/analytics-click-tracker.tsx`, один делегований слухач):
  - GA4-подія `generate_lead` з параметрами `method` (канал), `item_id`,
    `item_kind` (product/service), `placement` (header, footer, card,
    item-page, quick-order), `page_path`;
  - якщо задано `NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO` — ще й конверсія
    Google Ads.
- **Політика конфіденційності** — `/privacy/` (посилання у футері, є в
  sitemap). Потрібна за правилами GA та Google Ads.
- **Search Console** — мета-тег через `GOOGLE_SITE_VERIFICATION` (вже був).

## Env-змінні (Vercel → Project Settings → Environment Variables, Production)

| Змінна | Приклад | Звідки |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-ABC123XYZ` | GA4 → Admin → Data streams → Web |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-123456789` | Google Ads → Goals → Conversions → Tag setup |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO` | `AW-123456789/AbCdEf` | та сама конверсія, поле `send_to` |

Сайт — статичний експорт: значення вшиваються під час збірки, тож після зміни
змінних потрібен **Redeploy**. Шаблон — `.env.example`. Невалідні ID (не той
формат) ігноруються.

## Налаштування в кабінетах

1. **GA4**: створити property (часовий пояс Київ, валюта UAH) і Web data
   stream на продакшн-домен → `NEXT_PUBLIC_GA_MEASUREMENT_ID` → redeploy.
2. У GA4 → Admin → Events позначити `generate_lead` як **key event**
   (зʼявиться після першого кліку). Зареєструвати custom dimensions
   `method`, `item_kind`, `placement` (event scope), якщо потрібні у звітах.
3. **Google Ads**: привʼязати акаунт до GA4 (GA4 → Admin → Product links).
4. Конверсії — **обрати один варіант**, щоб не рахувати ліди двічі:
   - *(рекомендовано)* створити в Ads конверсію «Contact / Lead» через
     «Website → manual setup», взяти `send_to` →
     `NEXT_PUBLIC_GOOGLE_ADS_ID` + `NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO`;
   - або імпортувати key event `generate_lead` з GA4 і не задавати
     `NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO`.
5. Увімкнути **auto-tagging** (gclid) у Google Ads — UTM-мітки не потрібні.
6. Перевірити: Tag Assistant (tagassistant.google.com) на продакшн-URL →
   клік на кнопку месенджера → подія `generate_lead`; GA4 → Realtime.

## Що ще не зроблено

Блокери запуску реклами (реальні контакти, реквізити, умови доставки й
повернення, домен) і наступні кроки — у [seo-todo.md](seo-todo.md).
