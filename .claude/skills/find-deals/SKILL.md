---
name: find-deals
description: Search the web for current deals and upcoming sales on the user's wardrobe plan (data/wardrobe.js) and rewrite data/deals.js for the dashboard. Use when the user says "find deals", "check for sales", "any deals on X", or runs /find-deals. Optional argument narrows to an item id or category (e.g. "/find-deals jeans").
---

# Find wardrobe deals

The user wants a frugalmalefashion-style deal hunter: quality, long-lasting basics in their size and budget. Not trendy stuff, and not cheap junk.

## 1. Load context
- Read `data/wardrobe.js` for sizes, style, things to avoid, and the items (id, target, have, budget, quality, picks).
- Read `data/deals.js` for the previous results, so you can drop expired deals and keep valid ones.
- Skip items where `have >= target`, unless the user asked about them.
- If an argument was given, search only for those items or that category.

## 2. Search
Use WebSearch, batching several queries in one turn. For each item that still needs buying:
- Search the specific `picks` models plus "sale" and the current month/year. Example: `"Levi's 541 sale November 2026"`.
- Check the big sources: the brand site's sale page, Uniqlo "Limited Offers", L.L.Bean, J.Crew/J.Crew Factory, Huckberry, END., Nordstrom Rack, Amazon, Target, Nike, Foot Locker.
- Check deal aggregators: dappered.com, frugalmalefashion (reddit r/frugalmalefashion), slickdeals, CNN Underscored, Forbes Vetted.
- Look for upcoming events (Black Friday, Cyber Monday, Memorial Day, Labor Day, Nordstrom Anniversary, Uniqlo Thank You, end-of-season, brand friends & family) within the next ~60 days.
- Use the web-fetch agent on a promising page when the snippet doesn't confirm price, size availability or the end date.

## 2b. Verify every link (required)
Every deal must link to a **specific product page**, never a sale, category, search, brand or article page.
- Find product URLs with WebSearch restricted to the store's domain (`allowed_domains`), e.g. `"L.L.Bean Scotch Plaid Flannel"` on llbean.com.
- Fetch each URL with curl (browser User-Agent, `-L`, `-w "%{http_code} %{url_effective}"`):
  - **404**, or a **redirect to the home/collection page**: the product is gone. Drop it or find a replacement.
  - **200** on the product page: read the real price from the page's JSON-LD (`"price"`). Set `checked: true`.
  - **403/202/captcha** (Levi's, L.L.Bean, J.Crew, Carhartt, Tommy John, Amazon block bots): keep only if the URL came straight from search results. Set `checked: false` and say so in `why`.
- For Shopify stores (Bonobos, Saxx, Naked & Famous, Pedag), get `<product-url>.js` to check that the user's size (M / 32 / 10.5-11) is `available`. Drop deals that are sold out in their size.
- For Nike, the product page's `__NEXT_DATA__` lists every colorway's `currentPrice` and size status.
- The `clothes` cloud environment allows the main store hosts. If a store's host is refused by the proxy, mention it to the user rather than guessing.

## 3. Filter hard
Keep a deal only if:
- It's a quality material from the `quality` notes. No acrylic-heavy knits, and no thin fashion tees for casual wear.
- It isn't in the `avoid` list. Treat `avoid` as hard rules (e.g. no V-necks means no V-neck tees, undershirts or sweaters, even on a great sale).
- It plausibly comes in the user's size. Note it in `why` if size stock is unknown.
- It's within `budget` or a clearly worth-it hero piece. Say why in `why`.

New brands are fine if they have a solid reputation (FMF/Dappered/r/BuyItForLife staples). Suggest them as new `picks` to the user rather than editing picks silently.

## 4. Verdicts
- `buy`: a real discount (≥25% typically, or a historic low) on a proven pick, or a time-limited sale ending soon.
- `ok`: fair price, nothing better expected soon.
- `wait`: a better sale is known to be coming (say which one and when) or the price is above the typical sale price.

## 5. Write `data/deals.js`
Keep the exact shape: `window.DEALS = { lastUpdated, summary, deals: [...], upcomingSales: [...] }`.
- `lastUpdated`: today, as YYYY-MM-DD.
- `summary`: 1–2 sentences of what to do this week.
- deal: `{ item, title, store, url, price, was, discountPct?, checked, verdict, why, found, ends? }`.
  - `item` must match an id in wardrobe.js.
  - `price` and `was` are numbers or null. Use `discountPct` when only a % is known.
  - `url` must be a product page that passed step 2b. Never invent or hand-assemble URLs.
- upcomingSales: `{ name, start, end, items: [ids], note }`. Drop sales that have ended.
- Never make up prices. If a number is from a snippet of uncertain date, say so in `why`.

Then sanity-check the syntax with `node -e "global.window={};require('./data/deals.js');console.log(window.DEALS.deals.length)"`.

## 6. Report
In chat, give a short table of the top deals (item, price, store, verdict), then upcoming sales worth waiting for. End with sources as markdown links. Remind the user to reload `index.html`.
If this is a cloud session, commit and push so the user can `git pull` on their PC.
