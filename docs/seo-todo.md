# SEO: що залишилось зробити

Технічна частина (canonical, OG, JSON-LD, robots/sitemap/manifest, llms.txt,
редіректи зі старих slug'ів, категорійні сторінки) реалізована. Нижче — що
лишилося і не було зроблено навмисно (потрібні реальні дані або дії поза
кодовою базою).

## Після деплою на Vercel

- [ ] Визначитися з доменом і виставити `NEXT_PUBLIC_SITE_URL` у Vercel
      (Project Settings → Environment Variables). Без цього сайт працює на
      `VERCEL_PROJECT_PRODUCTION_URL` / `localhost`.
- [ ] Прогнати [Rich Results Test](https://search.google.com/test/rich-results)
      на 2–3 товарах (включно з товаром, що має `configurations`, і товаром
      без ціни) та на одній послузі.
- [ ] Google Search Console: підтвердити власність через DNS, надіслати
      `sitemap.xml`.
- [ ] Bing Webmaster Tools: імпортувати сайт із Google Search Console (на
      ньому працює пошук ChatGPT і Copilot).
- [ ] `curl -I` по одному старому (легасі) URL товару — очікується `308` на
      канонічний slug.
- [ ] Якщо увімкнено Vercel Firewall / Bot Protection — перевірити, що
      AI-краулери (GPTBot, ClaudeBot, PerplexityBot тощо) не заблоковані.
- [ ] Якщо буде додано `GOOGLE_SITE_VERIFICATION` в env — перевірити, що тег
      з'явився в `<head>` (`verification.google` у `layout.tsx` вже
      підключено).

## Контент (окрема робота, не блокує технічну частину)

- [ ] 174 товари з шаблонним описом (`shortDescription`/`description`)
      потребують живого, унікального тексту.
- [ ] Частина назв товарів — російською, потрібен переклад/адаптація на
      українську.
- [ ] Частина slug'ів — транслітерована з російської, варто звірити з
      українською транслітерацією (окремо від legacy-редіректів, які вже
      захищені тестом на синхронізацію з `legacySlugs`).
- [ ] Реальні контакти (телефон, адреса): зараз у `siteConfig` — плейсхолдери,
      а `contactsPublished: false` навмисно ховає `contactPoint` у JSON-LD і
      контакти в `llms.txt`. Коли з'являться реальні дані — виставити
      `contactsPublished: true` в `src/lib/site-config.ts`; це також відкриє
      шлях до пізнішого переходу Organization → `LocalBusiness`.

## Поза початковим планом (можливі наступні кроки)

- Кастомні HTTP-заголовки на Vercel (якщо колись знадобляться) — додавати в
      `vercel.json` (`headers`); `public/_headers` (Cloudflare-специфічний
      файл, ігнорується на Vercel) видалено.
- [ ] Після наповнення контенту — повторно прогнати Rich Results Test і
      перевірити unique meta description на товарах, де вона зараз
      згенерована автоматично (`buildProductMetaDescription`) через тонкий
      `shortDescription`.
