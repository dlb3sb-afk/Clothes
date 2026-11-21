# Wardrobe deal finder

A personal, frugalmalefashion-style deal tracker. There's no build step and no server: `index.html` loads `data/wardrobe.js` and `data/deals.js` via `<script>` tags, so it opens by double-clicking on Windows.

- `data/wardrobe.js` holds the style profile, sizes, and the wardrobe plan (items, targets, budgets, quality criteria, recommended picks). Edit it when the user changes preferences or says they bought something (bump `have`).
- `data/deals.js` holds the search results. Always rewrite it via the `/find-deals` skill (`.claude/skills/find-deals/SKILL.md`).
- When the user asks to "find deals", "check sales", or asks about a specific item's price, follow the find-deals skill.
- Keep both data files valid JS that assigns to `window.WARDROBE` / `window.DEALS`. Don't switch to JSON+fetch, because `fetch` fails on `file://`.
- Prioritize durable materials and proven brands over the lowest price. Never fabricate prices or URLs.
