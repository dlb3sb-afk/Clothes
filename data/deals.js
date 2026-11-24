// Deal search results. Claude Code rewrites this file when you run /find-deals.
// Every url is a specific product page. "checked": true = page was opened and price/size read on the "found" date;
// false = the store blocks automated checks, so the price comes from search results - confirm before buying.

window.DEALS = {
  lastUpdated: "2026-11-24",
  summary: "Only product pages now, and dead links are removed. Buy the Pedag insole and ExOfficio underwear now. Everything else (Killshots in the classic colorway, Levi's, L.L.Bean, Saxx, Carhartt) should drop further on Black Friday, Nov 27.",

  deals: [
    {
      item: "boot-insole",
      title: "Pedag Viva leather arch-support insole",
      store: "Pedag USA",
      url: "https://pedagusa.com/products/viva",
      price: 40.00, was: null, checked: true,
      verdict: "buy",
      why: "Thin, vegetable-tanned leather insole handmade in Germany, with an arch and a metatarsal pad - made for dress shoes and boots, so it fits a desert boot. Comes in Low/Medium/High arch; pick Low or Medium and men's 10.5-11. In stock.",
      found: "2026-11-24"
    },
    {
      item: "underwear",
      title: "ExOfficio Give-N-Go 2.0 Boxer Brief",
      store: "ExOfficio",
      url: "https://www.exofficio.com/men/underwear/boxer-briefs/mens-give-n-go-2.0-boxer-brief/SP_225644.html",
      price: 22.75, was: 32.50, checked: true,
      verdict: "buy",
      why: "30% off, back in stock. Nylon travel underwear that lasts for years and dries overnight. Check that M is available in your color.",
      found: "2026-11-24"
    },
    {
      item: "sneakers",
      title: "Nike Killshot 2 Leather - Sail/Gum Yellow/Midnight Navy (classic)",
      store: "Nike.com",
      url: "https://www.nike.com/t/killshot-2-leather-mens-shoes-72M7D1/432997-107",
      price: 100.00, was: null, checked: true,
      verdict: "wait",
      why: "The classic colorway. Full price right now, and 10.5 and 11 are listed. Nike's Black Friday code usually takes ~25% off sitewide - buy at $75 or less.",
      found: "2026-11-24"
    },
    {
      item: "sneakers",
      title: "Nike Killshot 2 Leather - Baroque Brown/Light British Tan/Sesame",
      store: "Nike.com",
      url: "https://www.nike.com/t/killshot-2-leather-mens-shoes-72M7D1/IB4504-237",
      price: 75.97, was: 100.00, checked: true,
      verdict: "ok",
      why: "The only Killshot colorway on sale now (24% off). Earth-tone brown instead of white - works with your boots/jeans palette. 10.5 and 11 listed. A Black Friday code may stack on top.",
      found: "2026-11-24"
    },
    {
      item: "jeans",
      title: "Naked & Famous Weird Guy - Stretch Selvedge (raw indigo)",
      store: "Naked & Famous",
      url: "https://nakedandfamousdenim.com/products/naked-famous-weird-guy-stretch-selvedge",
      price: 176.00, was: null, checked: true,
      verdict: "ok",
      why: "The hero jeans. Raw Japanese selvedge with a little stretch, so it feels closest to your 541 while still fading uniquely. Made in Canada. Size 32 in stock. Not on sale - fair full price. (Replaces the Blue Wave pair, which has been removed.)",
      found: "2026-11-24"
    },
    {
      item: "jeans",
      title: "Levi's 541 Athletic Taper - Dark Wash",
      store: "Levi.com",
      url: "https://www.levi.com/US/en_US/clothing/men/jeans/taper/541TM-athletic-taper-fit-mens-jeans/p/181810637",
      price: 49.98, was: 89.50, checked: false,
      verdict: "wait",
      why: "Your proven fit in a dark wash. Price comes from search results - Levi's blocks automated checks. Levi's Black Friday (Nov 27-30) is up to 50% off plus 10% for free Red Tab members.",
      found: "2026-11-24", ends: "2026-11-30"
    },
    {
      item: "boots-upgrade",
      title: "Red Wing Heritage Weekender Chukka - Copper Rough & Tough",
      store: "Red Wing",
      url: "https://www.redwingshoes.com/mens/heritage/weekender/weekender-chukka-03622.html",
      price: 269.99, was: null, checked: true,
      verdict: "wait",
      why: "The top-tier version of your Clarks (US-made leather, lightweight wedge sole). Full price at Red Wing right now. Retailers sometimes discount it to $150-180 - wait for that. Red Wing runs about a half size big: try 10.",
      found: "2026-11-24"
    },
    {
      item: "flannel",
      title: "L.L.Bean Scotch Plaid Flannel Shirt, Traditional Fit",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/shop/42272",
      price: 44.99, was: 59.95, checked: false,
      verdict: "wait",
      why: "100% Portuguese cotton flannel, an FMF staple. $44.99 is from search results (L.L.Bean blocks automated checks; some colors were as low as $29.99). Last year's Black Friday added a ~15% coupon that works on sale items.",
      found: "2026-11-24"
    },
    {
      item: "sweater",
      title: "L.L.Bean Heritage Soft Cotton Fisherman Sweater, Crewneck",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/shop/126183",
      price: 69.99, was: 99.95, checked: false,
      verdict: "ok",
      why: "Chunky cable-knit fisherman crew, 4.6 stars from ~1,700 reviews. Note it's 100% COTTON, not wool: machine washable and not itchy, but less warm than wool. Price from search results.",
      found: "2026-11-24"
    },
    {
      item: "sweater",
      title: "L.L.Bean Signature Camp Merino Wool Crewneck",
      store: "L.L.Bean",
      url: "https://www.llbean.com/llb/shop/129984",
      price: 119.00, was: 139.00, checked: false,
      verdict: "wait",
      why: "100% merino hero crewneck. Price from search results (L.L.Bean blocks automated checks). Wait for the Black Friday coupon.",
      found: "2026-11-24"
    },
    {
      item: "sweater",
      title: "J.Crew Cashmere Crewneck Sweater",
      store: "J.Crew",
      url: "https://www.jcrew.com/p/mens/categories/clothing/sweaters/crewneck/cashmere-crewneck-sweater/BE895",
      price: 158.00, was: null, checked: false,
      verdict: "wait",
      why: "J.Crew's best-selling 100% cashmere crew (4.8 stars, 1,100+ reviews). $158-178 list. J.Crew's Black Friday event is 40% off select full-price items, which would make it about $95. J.Crew blocks automated checks.",
      found: "2026-11-24"
    },
    {
      item: "sweater",
      title: "Uniqlo Cashmere Crew Neck Sweater",
      store: "Uniqlo",
      url: "https://www.uniqlo.com/us/en/products/E438791-000/00",
      price: null, was: null, checked: false,
      verdict: "ok",
      why: "100% cashmere, hand-washable, treated against pilling. Page loads, but the price couldn't be read automatically (Dappered listed it at $79.90). Uniqlo's Black Friday offers start Nov 27.",
      found: "2026-11-24"
    },
    {
      item: "undershirt",
      title: "Uniqlo AIRism Crew Neck T-Shirt",
      store: "Uniqlo",
      url: "https://www.uniqlo.com/us/en/products/E434164-000/00",
      price: 14.90, was: null, checked: false,
      verdict: "ok",
      why: "Thin, cool, quick-dry crew with a collar that holds its shape through washes. The value undershirt pick - get beige or light grey, not white. Page checked; $14.90 is from Uniqlo's listing in search. The AIRism Cotton Crew (E447683) is the softer, more cotton-feel option at the same price.",
      found: "2026-11-24"
    },
    {
      item: "undershirt",
      title: "Tommy John Second Skin Crew Neck Stay-Tucked Undershirt",
      store: "Tommy John",
      url: "https://www.tommyjohn.com/products/second-skin-crew-neck-stay-tucked-undershirt-1",
      price: null, was: null, checked: false,
      verdict: "wait",
      why: "The hero undershirt: modal, stays tucked, collar lies flat. About $45 each at full price (the V-neck version's listed price; crew should be the same). Black Friday is usually their biggest sale. Tommy John blocks automated checks.",
      found: "2026-11-24"
    },
    {
      item: "tee-white-casual",
      title: "Carhartt K87 Loose Fit Heavyweight Pocket Tee - White",
      store: "Carhartt",
      url: "https://www.carhartt.com/product/K87-WHTSREG/loose-fit-heavyweight-short-sleeve-pocket-t-shirt",
      price: 19.99, was: null, checked: false,
      verdict: "wait",
      why: "6.75oz 100% cotton (solid colors), minimal shrink. Loose fit - Carhartt suggests sizing down if you don't want it baggy, so consider S. Aim for $14 or less per shirt on Black Friday. Carhartt blocks automated checks.",
      found: "2026-11-24"
    },
    {
      item: "underwear",
      title: "Saxx Vibe Xtra Soft Comfort Boxer Brief - Black",
      store: "Saxx",
      url: "https://www.saxxunderwear.com/products/sxvx24f_blk",
      price: 36.00, was: null, checked: true,
      verdict: "wait",
      why: "Full price, size M in stock. Black Friday is Saxx's biggest sale (past years up to 40% off). The 7-pack is sold out in M.",
      found: "2026-11-24"
    },
    {
      item: "sweatpants",
      title: "THE GYM PEOPLE Men's Fleece Joggers (your pair)",
      store: "Amazon",
      url: "https://www.amazon.com/GYM-PEOPLE-Athletic-Loose-fit-Sweatpants/dp/B07YHGLKTB",
      price: 26.99, was: 32.99, checked: false,
      verdict: "wait",
      why: "The exact listing from your screenshot. $26.99 is from your screenshot; Amazon blocks automated checks. Aim for $22 or less in grey and navy on Black Friday.",
      found: "2026-11-24"
    }
  ],

  upcomingSales: [
    { name: "Uniqlo Thank You Event", start: "2026-11-20", end: "2026-11-26", items: ["tee-white-casual", "tee-black", "undershirt", "underwear", "sweater"], note: "Then Uniqlo Black Friday offers start Nov 27." },
    { name: "J.Crew Black Friday: 40% off select + extra 40% final sale (code FRIDAY)", start: "2026-11-20", end: "2026-11-30", items: ["sweater", "flannel"], note: "Per Dappered." },
    { name: "Nordstrom Black Friday", start: "2026-11-20", end: "2026-12-01", items: ["sneakers", "boots-upgrade", "sweater"], note: "Check for Red Wing and Nike." },
    { name: "Nike Black Friday code (extra ~25% off)", start: "2026-11-26", end: "2026-11-30", items: ["sneakers"], note: "An early code was reported Nov 17; the main code usually lands on Thanksgiving." },
    { name: "Black Friday", start: "2026-11-27", end: "2026-11-27", items: ["underwear", "undershirt", "tee-black", "tee-white-casual", "sweatpants"], note: "Saxx, Tommy John, Carhartt, Amazon peak." },
    { name: "Levi's Black Friday: up to 50% off + 10% for Red Tab members", start: "2026-11-27", end: "2026-11-30", items: ["jeans"], note: "Free membership." },
    { name: "L.L.Bean Black Friday coupon (expected ~15%, stacks on sale)", start: "2026-11-27", end: "2026-11-30", items: ["flannel", "sweater", "belt"], note: "Based on last year's pattern; not announced yet." },
    { name: "Cyber Monday", start: "2026-11-30", end: "2026-11-30", items: ["sneakers", "boots-upgrade", "jeans"], note: "Often the best extra codes." },
    { name: "End-of-season / post-holiday sales", start: "2026-12-26", end: "2027-01-31", items: ["sweater", "flannel", "boots-upgrade"], note: "Winter knits and boots are cheapest after the holidays." }
  ]
};
