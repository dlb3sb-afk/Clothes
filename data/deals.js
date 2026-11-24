// Deal search results. Claude Code rewrites this file when you run /find-deals.
// Prices are snapshots from the date in "found" - always confirm on the store page before buying.

window.DEALS = {
  lastUpdated: "2026-11-24",
  summary: "Black Friday is Fri Nov 27 and most brands run through Cyber Monday (Nov 30) / Dec 1. Buy now: Clarks insole and Killshots if Nike's extra code gets them to $65 or less. Make a Black Friday list for jeans, flannels, tees, underwear and sweats - those should get an extra 10-25% on top.",

  deals: [
    {
      item: "sneakers",
      title: "Nike Killshot 2 Leather + extra Black Friday code",
      store: "Nike.com",
      url: "https://nike.com/t/killshot-2-leather-shoes-72M7D1/HQ1657-100",
      price: null, was: 100.00,
      verdict: "buy",
      why: "Already $70-80 on several colorways. Nike's early Black Friday code (reported as EARLYBF, extra 25% off select styles) and its usual Black Friday-week code can take it to about $52-60. Buy in 10.5 if the cart price is $65 or less. Codes aren't confirmed on Nike's site, so check at checkout.",
      found: "2026-11-24"
    },
    {
      item: "boot-insole",
      title: "Thin leather insole for Clarks Desert Boots",
      store: "Amazon",
      url: "https://www.amazon.com/s?k=thin+leather+insole+arch+support+men",
      price: null, was: null,
      verdict: "buy",
      why: "Not a sale - cheap and needed now. Get a THIN leather insole with a slight arch (e.g. Pedag Viva or Nicks leather insole) in size 10.5-11 and trim to fit. Thick gel insoles won't fit desert boots.",
      found: "2026-11-24"
    },
    {
      item: "flannel",
      title: "L.L.Bean Scotch Plaid Flannel Shirt",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/shop/32?nav=gnro&page=sale",
      price: 29.99, was: 59.95,
      verdict: "ok",
      why: "Half off - a solid price for 100% Portuguese cotton flannel. L.L.Bean usually adds a ~15% Black Friday coupon that also works on sale items (last year's pattern), which would bring it to about $25. Buy now only if your color/size is running out. Wash cold, hang dry (some shrinkage reported).",
      found: "2026-11-24"
    },
    {
      item: "jeans",
      title: "Levi's 541 Athletic Taper - sale washes",
      store: "Levi.com",
      url: "https://www.levi.com/US/en_US/sale/mens/c/levi_clothing_men_sale/facets/feature-fit_name/541%e2%84%a2",
      price: 34.98, was: 69.50,
      verdict: "ok",
      why: "Half off your proven fit (some washes were $26.97 on Nov 21). The Red Tab 40% event ended Nov 22. Levi's Black Friday runs Nov 27-30 with up to 50% off plus an extra 10% for free Red Tab members. Many sale washes are FINAL SALE, so stick to 32x32.",
      found: "2026-11-24", ends: "2026-11-30"
    },
    {
      item: "jeans",
      title: "Levi's 541 Athletic Taper",
      store: "Target",
      url: "https://www.target.com/p/-/-/A-88232941",
      price: 41.99, was: 59.99,
      verdict: "ok",
      why: "A few dollars more than Levi.com, but with easy in-store returns if you want to try washes on.",
      found: "2026-11-21"
    },
    {
      item: "sweater",
      title: "L.L.Bean Heritage Fisherman Sweater",
      store: "L.L.Bean",
      url: "https://www.cnn.com/cnn-underscored/deals/ll-bean-early-black-friday-sale-2026-10-27",
      price: null, was: null, discountPct: 30,
      verdict: "buy",
      why: "Chunky fisherman knit - the 'love a great sweater' piece. 30% off in select colors, and the expected stackable Black Friday coupon could take more off. Size M.",
      found: "2026-11-21"
    },
    {
      item: "sweater",
      title: "Bonobos Washable Merino Wool V-Neck",
      store: "Bonobos",
      url: "https://dappered.com/2026/11/bonobos-30-40-off-most-black-friday-2026/",
      price: 59.40, was: 99.00,
      verdict: "ok",
      why: "40% off merino. It's a V-neck (your plan says crewneck), but a merino V layers cleanly over a dress shirt for work. Sale runs through Dec 1.",
      found: "2026-11-24", ends: "2026-12-01"
    },
    {
      item: "sweater",
      title: "L.L.Bean Wicked Soft Cotton/Cashmere Crewneck",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/shop/32?nav=gnro&page=sale",
      price: 54.99, was: 79.95,
      verdict: "ok",
      why: "Cotton/cashmere: softer and easier to wash than wool, a little less warm. Good everyday crewneck at about 31% off. Listing date wasn't shown - confirm price.",
      found: "2026-11-24"
    },
    {
      item: "sweater",
      title: "L.L.Bean Signature Camp Merino Crewneck",
      store: "L.L.Bean",
      url: "https://global.llbean.com/llb/shop/5800142.html",
      price: 109.00, was: 149.00,
      verdict: "wait",
      why: "100% merino hero crewneck. Wait for the Black Friday coupon (Nov 27) to stack on the sale price.",
      found: "2026-11-21"
    },
    {
      item: "sweater",
      title: "J.Crew cashmere (up to 50% off select)",
      store: "J.Crew",
      url: "https://www.jcrew.com/shop/black-friday-event/mens",
      price: null, was: null, discountPct: 40,
      verdict: "ok",
      why: "J.Crew's Black Friday event is 40% off select full-price items, plus an extra 40% off final-sale items with code FRIDAY (per Dappered). Their cashmere crews are a reliable mid-tier pick. Check which are final sale before buying.",
      found: "2026-11-24"
    },
    {
      item: "sweater",
      title: "Uniqlo 100% Cashmere Crewneck",
      store: "Uniqlo",
      url: "https://www.uniqlo.com/us/en/spl/black-friday-sale",
      price: 79.90, was: null,
      verdict: "ok",
      why: "Best-value real cashmere. Softer than wool but pills sooner at the elbows. Uniqlo's Thank You Event runs through Nov 26, then its Black Friday offers start Nov 27.",
      found: "2026-11-21"
    },
    {
      item: "tee-black",
      title: "Carhartt K87 Pocket Tee - 2 for $30",
      store: "Carhartt / Amazon",
      url: "https://www.carhartt.com/category/carhartt-black-friday-sale",
      price: 15.00, was: 20.00,
      verdict: "wait",
      why: "Rakuten lists a K87 '2 for $30' offer for Black Friday (unverified). It has been $13.68 on Amazon before, so aim for $14 or less per shirt. Solid black/white are 100% cotton; heathers are blends.",
      found: "2026-11-24"
    },
    {
      item: "tee-white-casual",
      title: "Carhartt K87 Pocket Tee - White",
      store: "Carhartt / Amazon",
      url: "https://www.amazon.com/s?k=carhartt+k87+pocket+t-shirt+white",
      price: 16.00, was: 20.00,
      verdict: "wait",
      why: "Same as the black tees - buy them together on Black Friday at $14 or less each. Heavyweight 6.75oz cotton, very durable.",
      found: "2026-11-21"
    },
    {
      item: "underwear",
      title: "Saxx boxer briefs - Black Friday sale",
      store: "Saxx",
      url: "https://www.saxxunderwear.com/",
      price: null, was: null, discountPct: 40,
      verdict: "wait",
      why: "Black Friday is Saxx's best sale of the year; past years were up to 40% off sitewide (2026 terms not confirmed yet). At ~$20/pair that's a good price for underwear that lasts. Check Nov 27.",
      found: "2026-11-24"
    },
    {
      item: "underwear",
      title: "ExOfficio Give-N-Go 2.0 Boxer Brief",
      store: "ExOfficio",
      url: "https://www.exofficio.com/sale/men/underwear/",
      price: 16.99, was: 32.50,
      verdict: "wait",
      why: "About half off and very durable, but sizes were out of stock on Nov 21. Check again on Black Friday.",
      found: "2026-11-21"
    },
    {
      item: "undershirt",
      title: "Tommy John Second Skin undershirts",
      store: "Tommy John",
      url: "https://tommyjohn.com/pages/black-friday-special-offers",
      price: null, was: null,
      verdict: "wait",
      why: "Black Friday is usually Tommy John's biggest sale (past years ~25-40% off). Get light grey or skin-tone deep V. If it isn't at least 30% off, Uniqlo AIRism V-necks are the value pick.",
      found: "2026-11-24"
    },
    {
      item: "sweatpants",
      title: "THE GYM PEOPLE Fleece Joggers (your pair)",
      store: "Amazon",
      url: "https://www.amazon.com/s?k=THE+GYM+PEOPLE+mens+fleece+joggers",
      price: 26.99, was: 32.99,
      verdict: "wait",
      why: "You know they fit. Amazon's Black Friday deals often add 20-30% - aim for $22 or less in grey and navy.",
      found: "2026-11-21"
    },
    {
      item: "sweatpants",
      title: "Champion Reverse Weave Classic Jogger",
      store: "END.",
      url: "https://endclothing.com/us/champion-reverse-weave-classic-jogger-210969-nbk.html",
      price: 35.00, was: 69.00,
      verdict: "ok",
      why: "Heavyweight cross-grain fleece that holds its shape. Listed at $35 in END.'s Black Friday promotion, but the year isn't shown on the page - confirm the price and that size M is in stock.",
      found: "2026-11-24"
    },
    {
      item: "boots-upgrade",
      title: "Astorflex Greenflex chukka",
      store: "END. / Care of Carl",
      url: "https://www.endclothing.com/us/brands/astorflex",
      price: null, was: 215.00, discountPct: 40,
      verdict: "wait",
      why: "The closest upgrade to your Clarks. Some colors were 40% off at END. (EU listing). Runs large - look for EU 44 / about US 10. Only buy at $150 or less; post-holiday sales are often better.",
      found: "2026-11-21"
    }
  ],

  upcomingSales: [
    { name: "Uniqlo Thank You Event", start: "2026-11-20", end: "2026-11-26", items: ["tee-white-casual", "tee-black", "undershirt", "underwear", "sweater"], note: "Then Uniqlo Black Friday offers start Nov 27." },
    { name: "J.Crew Black Friday: 40% off + extra 40% final sale (code FRIDAY)", start: "2026-11-20", end: "2026-11-30", items: ["sweater", "flannel"], note: "Per Dappered." },
    { name: "Bonobos 30-40% off most items", start: "2026-11-20", end: "2026-12-01", items: ["sweater", "jeans"], note: "Merino sweaters 40% off." },
    { name: "Nordstrom Black Friday", start: "2026-11-20", end: "2026-12-01", items: ["sneakers", "boots-upgrade", "sweater"], note: "Check for Astorflex, Red Wing, Nike." },
    { name: "Nike Black Friday code (extra ~25% off sale)", start: "2026-11-17", end: "2026-11-30", items: ["sneakers"], note: "Early code reported Nov 17; Black Friday week code usually lands Thanksgiving." },
    { name: "Black Friday", start: "2026-11-27", end: "2026-11-27", items: ["underwear", "undershirt", "tee-black", "tee-white-casual", "sweatpants"], note: "Saxx, Tommy John, Carhartt, Amazon peak." },
    { name: "Levi's Black Friday: up to 50% off + 10% extra for Red Tab members", start: "2026-11-27", end: "2026-11-30", items: ["jeans"], note: "Free membership." },
    { name: "L.L.Bean Black Friday coupon (expected ~15%, stacks on sale)", start: "2026-11-27", end: "2026-11-30", items: ["flannel", "sweater", "belt"], note: "Based on last year's pattern, not yet announced." },
    { name: "Cyber Monday", start: "2026-11-30", end: "2026-11-30", items: ["sneakers", "boots-upgrade", "jeans"], note: "Often the best extra codes (Nike, END., Huckberry)." },
    { name: "End-of-season / post-holiday sales", start: "2026-12-26", end: "2027-01-31", items: ["sweater", "flannel", "boots-upgrade"], note: "Winter knits and boots are cheapest after the holidays." }
  ]
};
