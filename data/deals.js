// Deal search results. Claude Code rewrites this file when you run /find-deals.
// Prices are snapshots from the date in "found" - always confirm on the store page before buying.

window.DEALS = {
  lastUpdated: "2026-11-21",
  summary: "Black Friday is Fri Nov 27. Levi's and L.L.Bean early sales are live now; most others (Uniqlo, Saxx, Carhartt, Nike) should peak Nov 26 - Dec 1. Buy jeans + flannels now, wait on the rest.",

  deals: [
    {
      item: "jeans",
      title: "Levi's 541 Athletic Taper - sale washes",
      store: "Levi.com",
      url: "https://www.levi.com/US/en_US/sale/mens/c/levi_clothing_men_sale/facets/feature-fit_name/541%e2%84%a2",
      price: 34.98, was: 69.50,
      verdict: "buy",
      why: "Your proven fit at half price. Some washes listed as low as $26.97. Red Tab members reported 40% off sitewide through Nov 22. Some sale washes are FINAL SALE - stick to your known size.",
      found: "2026-11-21", ends: "2026-11-22"
    },
    {
      item: "jeans",
      title: "Levi's 541 Athletic Taper",
      store: "Target",
      url: "https://www.target.com/p/-/-/A-88232941",
      price: 41.99, was: 59.99,
      verdict: "ok",
      why: "Easy returns in-store if Levi.com sale sizes are final-sale.",
      found: "2026-11-21"
    },
    {
      item: "flannel",
      title: "L.L.Bean Scotch Plaid Flannel Shirt (Traditional Fit)",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/search/?freeText=scotch+plaid+flannel+shirt+men",
      price: 30.00, was: 60.00,
      verdict: "buy",
      why: "100% Portuguese cotton flannel, a long-time FMF staple. CNN reports it from $30 in L.L.Bean's early Black Friday sale (up to 67% off). Some reviewers note slight shrinkage - wash cold, hang dry.",
      found: "2026-11-21"
    },
    {
      item: "sweater",
      title: "L.L.Bean Heritage Fisherman Sweater",
      store: "L.L.Bean",
      url: "https://www.cnn.com/cnn-underscored/deals/ll-bean-early-black-friday-sale-2026-10-27",
      price: null, was: null, discountPct: 30,
      verdict: "buy",
      why: "Chunky fisherman knit - the warm-sweater piece. 30% off in select colors right now.",
      found: "2026-11-21"
    },
    {
      item: "sweater",
      title: "L.L.Bean Signature Camp Merino Crewneck",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/search/?freeText=merino+crewneck+sweater+men",
      price: 109.00, was: 149.00,
      verdict: "ok",
      why: "100% merino, a good hero crewneck. Might drop further on Black Friday.",
      found: "2026-11-21"
    },
    {
      item: "sweater",
      title: "Uniqlo 100% Cashmere Crewneck",
      store: "Uniqlo",
      url: "https://www.uniqlo.com/us/en/men/sweaters-and-cardigans",
      price: 79.90, was: null,
      verdict: "ok",
      why: "Best-value real cashmere. Softer than wool but less durable (pills at elbows). Listed by Dappered for Black Friday.",
      found: "2026-11-21"
    },
    {
      item: "sneakers",
      title: "Nike Killshot 2 Leather (select colorways)",
      store: "Nike.com",
      url: "https://www.nike.com/w/killshot-shoes",
      price: 69.97, was: 100.00,
      verdict: "wait",
      why: "30% off on some colorways. Foot Locker has $75, Walmart one colorway at $65. Nike usually adds an extra code on Black Friday - wait for that unless your size is selling out.",
      found: "2026-11-21"
    },
    {
      item: "tee-white-casual",
      title: "Carhartt K87 Pocket Tee",
      store: "Carhartt / Amazon",
      url: "https://www.carhartt.com/c/black-friday",
      price: 16.00, was: 20.00,
      verdict: "wait",
      why: "Some colors at $16 now. Has been $13.68 on Amazon and reported '2 for $30' for Black Friday. Buy solid white/black (100% cotton), not heathers (poly blend).",
      found: "2026-11-21"
    },
    {
      item: "underwear",
      title: "ExOfficio Give-N-Go 2.0 Boxer Brief",
      store: "ExOfficio",
      url: "https://www.exofficio.com/sale/men/underwear/",
      price: 16.99, was: 32.50,
      verdict: "wait",
      why: "Very durable travel-style underwear at about half off, but sizes were out of stock. Check again on Black Friday.",
      found: "2026-11-21"
    },
    {
      item: "boots-upgrade",
      title: "Astorflex Greenflex chukka",
      store: "END. / Care of Carl",
      url: "https://www.endclothing.com/us/brands/astorflex",
      price: null, was: 215.00, discountPct: 40,
      verdict: "wait",
      why: "The closest upgrade to your Clarks. Some colors are 40% off at END. (EU listing, about $130 for US shipping). Runs large - size down to about US 10 / EU 44. Only buy at $150 or less.",
      found: "2026-11-21"
    },
    {
      item: "boot-insole",
      title: "Thin leather insole for Clarks Desert Boots",
      store: "Amazon",
      url: "https://www.amazon.com/s?k=thin+leather+insole+arch+support+men",
      price: null, was: null,
      verdict: "buy",
      why: "Not a sale, just cheap and needed now. Get a THIN leather insole with a slight arch (e.g. Pedag Viva or Nicks leather insole). Thick gel insoles won't fit desert boots.",
      found: "2026-11-21"
    },
    {
      item: "sweatpants",
      title: "THE GYM PEOPLE Fleece Joggers (your pair)",
      store: "Amazon",
      url: "https://www.amazon.com/s?k=THE+GYM+PEOPLE+mens+fleece+joggers",
      price: 26.99, was: 32.99,
      verdict: "wait",
      why: "You know it fits. Amazon Black Friday often adds 20-30% on top - aim for $22 or less, grey + navy.",
      found: "2026-11-21"
    }
  ],

  upcomingSales: [
    { name: "Levi's Red Tab members: 40% off sitewide", start: "2026-11-19", end: "2026-11-22", items: ["jeans"], note: "Free membership. Also up to 65% off sale styles." },
    { name: "L.L.Bean early Black Friday (up to 67% off)", start: "2026-10-27", end: "2026-11-30", items: ["flannel", "sweater", "belt"], note: "Already live." },
    { name: "Uniqlo Thank You Event / Black Friday", start: "2026-11-20", end: "2026-11-26", items: ["tee-white-casual", "tee-black", "undershirt", "underwear", "sweater"], note: "20-50% off selected items; check the 'Limited Offers' page." },
    { name: "Black Friday", start: "2026-11-27", end: "2026-11-27", items: ["sneakers", "underwear", "tee-black", "sweatpants"], note: "Nike, Saxx, Carhartt, Amazon peak." },
    { name: "Cyber Monday", start: "2026-11-30", end: "2026-11-30", items: ["sneakers", "boots-upgrade", "jeans"], note: "Often the best extra codes (Nike, END., Huckberry)." },
    { name: "End-of-season / post-holiday sales", start: "2026-12-26", end: "2027-01-31", items: ["sweater", "flannel", "boots-upgrade"], note: "Winter knits and boots are cheapest after the holidays." }
  ]
};
