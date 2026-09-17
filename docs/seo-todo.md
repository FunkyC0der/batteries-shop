# Google пошук, реклама, аналітика та SEO: чого не вистачає

Єдиний список відкритих задач. Технічна частина в коді вже є: canonical, OG,
JSON-LD, robots/sitemap/manifest, llms.txt, редіректи зі старих slug'ів,
категорійні сторінки, Google tag (GA4 + Ads), події заявок, `/privacy/`.
Як налаштувати кабінети Google — [google-ads-analytics.md](google-ads-analytics.md).

Нижче — те, що потребує реальних даних, дій у кабінетах або окремої роботи.

## 1. Блокери (без них рекламу не запускати)

- [ ] **Реальні контакти.** У `src/lib/site-config.ts` телефон і месенджери
      (Telegram, WhatsApp, Viber) вже реальні (`+380686002626`),
      `contactsPublished: true`, `city: "Дніпро"`. Залишилось: точна адреса,
      графік роботи — досі заглушки (`address`, `schedule`), замінити на
      реальні перед запуском реклами.
- [ ] **Фінальний домен.** Виставити `NEXT_PUBLIC_SITE_URL` у Vercel
      (Production). Рекламу й Search Console вести на нього, не на
      `*.vercel.app`.
- [x] **Продавець у футері й на `/privacy/`.** Показуємо лише назву ФОП
      (`siteConfig.seller.name` = «ФОП Красоченко Єгор Юрійович», за
      YouControl) і місто. РНОКПП/ІПН і точну домашню адресу свідомо не
      публікуємо — це чутливі персональні дані, а закон про захист прав
      споживачів вимагає ідентифікувати продавця (назва, місцезнаходження),
      не розкривати податковий номер.
- [ ] **Сторінка «Доставка, оплата, повернення»** з реальними умовами (не
      вигадувати). Потрібна для довіри Google Ads і для Merchant Center.

## 2. Google Analytics 4

- [ ] Створити GA4 property (часовий пояс Київ, валюта UAH) і Web data stream
      на продакшн-домен.
- [ ] Виставити `NEXT_PUBLIC_GA_MEASUREMENT_ID` у Vercel → Redeploy.
- [ ] Перевірити, що в Enhanced Measurement увімкнено «Page changes based on
      browser history events» (перегляди при клієнтських переходах).
- [ ] Після першого кліку на контакт позначити `generate_lead` як key event.
- [ ] (Опційно) custom dimensions `method`, `item_kind`, `placement`.
- [ ] Перевірити Tag Assistant / Realtime: клік на месенджер → `generate_lead`.

## 3. Google Ads (пошук)

- [ ] Привʼязати Google Ads до GA4 (Admin → Product links).
- [ ] Створити конверсію «Lead», виставити `NEXT_PUBLIC_GOOGLE_ADS_ID` і
      `NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO` → Redeploy. **Або** імпортувати
      `generate_lead` з GA4 — не обидва способи одночасно (подвійний підрахунок).
- [ ] Увімкнути auto-tagging (gclid).
- [ ] Цільові сторінки для оголошень: категорії
      (`/products/category/<category>/`) і сторінки послуг — перевірити, що в
      потрібних категоріях є товари з цінами й живим описом (див. розділ 5).

## 4. Google Search Console та інші пошуковики

- [ ] Підтвердити власність (DNS або `GOOGLE_SITE_VERIFICATION` в env →
      перевірити тег у `<head>`), надіслати `sitemap.xml`.
- [ ] Привʼязати Search Console до GA4 і Google Ads.
- [ ] Bing Webmaster Tools: імпорт із Search Console (на ньому працює пошук
      ChatGPT і Copilot).
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) на 2–3
      товарах (з `configurations` і без ціни) та одній послузі.
- [ ] `curl -I` по одному легасі-URL товару — очікується `308` на канонічний
      slug.
- [ ] Якщо ввімкнено Vercel Firewall / Bot Protection — перевірити, що
      Googlebot і AI-краулери (GPTBot, ClaudeBot, PerplexityBot) не
      заблоковані.
- [ ] Через 1–2 тижні після запуску — звіт «Сторінки» в Search Console:
      чи немає масового «Виявлено, але не проіндексовано» / дублів.

## 5. Контент (найбільший вплив на SEO і якість реклами)

- [ ] 174 товари з шаблонним описом (`shortDescription`/`description`)
      потребують живого, унікального тексту.
- [ ] Частина назв товарів — російською, потрібен переклад на українську.
- [ ] Частина slug'ів транслітерована з російської — звірити з українською
      транслітерацією (перейменування → `legacySlugs` +
      `npm run seo:redirects`).
- [ ] Після наповнення — перевірити meta description на товарах, де вона
      зараз генерується автоматично (`buildProductMetaDescription`).
- [ ] Тексти для категорійних сторінок під пошукові запити (що шукають:
      «акумулятор для інвертора», «теплолічильник купити» тощо) —
      `src/lib/catalog/category-content.ts`.

## 6. Технічне SEO — можливі покращення в коді

- [ ] Коли будуть реальні дані: Organization → `LocalBusiness` (адреса,
      графік, `geo`) і `sameAs` із соцмережами / Google Business Profile.
- [ ] Google Business Profile (Карти) — створити, коли буде адреса/зона
      обслуговування.
- [ ] Після появи умов доставки/повернення — додати в `Offer`
      `shippingDetails` і `hasMerchantReturnPolicy` (прибирає попередження
      «Merchant listings» у Search Console).
- [ ] `public/og/default.png` важить ~660 КБ — стиснути (соцмережі й
      месенджери повільніше тягнуть прев'ю).
- [ ] Кнопка «Швидке замовлення» нічого не робить на сторінках без блоку
      `#quick-order` (напр. `/privacy/`, 404) — додати `CtaPanel` або
      приховувати кнопку.
- Кастомні HTTP-заголовки на Vercel (якщо знадобляться) — у `vercel.json`
  (`headers`).

## 7. Поза поточним обсягом (за потреби)

- [ ] Банер згоди на cookie (CMP) — лише якщо таргетувати рекламу на
      ЄЕЗ/UK/CH (зараз для них Consent Mode за замовчуванням `denied`).
- [ ] Google Merchant Center / Shopping-реклама — фід товарів із цінами
      (частина товарів без ціни) + умови повернення.
- [ ] Дзвінки як конверсії з номерами переадресації Google.
- [ ] Ecommerce-події GA4 (`view_item`, `view_item_list`) для ремаркетингу.
