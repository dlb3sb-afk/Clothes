// Your style profile + wardrobe plan.
// Edit freely (it's plain JavaScript/JSON). Claude Code reads this before every deal search.
// "have" = how many you already own. The dashboard shows what's still needed.

window.WARDROBE = {
  profile: {
    sizes: {
      tops: "M",
      pants: "32x32",
      shoes: "US 10.5 / 11 (between sizes)",
      underwear: "M"
    },
    style: "Frugal-male-fashion minimalist: solid basics, white/black/grey/navy/earth tones, classic not trendy.",
    fits: "Athletic taper on pants (Levi's 541 is the benchmark). Tees: heavier/structured for casual, thin & close-fitting for undershirts.",
    philosophy: "Pay a bit more for longevity. Spend on 'hero' items (boots, jeans, sweaters) where quality clearly lasts; buy proven value picks for consumables (underwear, undershirts).",
    avoid: [
      "V-necks of any kind (tees, undershirts, sweaters) - crew necks only",
      "Acrylic or polyester-heavy sweaters (pills fast)",
      "Cemented-sole 'fashion boots' that can't be resoled (unless it's a cheap sneaker)",
      "Thin <5oz tees for casual wear",
      "Fast-fashion brands (Shein, Temu, H&M basics)",
      "Unknown Amazon brands with no track record"
    ],
    region: "US"
  },

  items: [
    {
      id: "tee-white-casual",
      category: "Tops",
      name: "White tees (casual / home)",
      target: 3, have: 0,
      budget: [12, 35],
      hero: false,
      quality: "100% cotton, 6oz+ heavyweight, tight ribbed collar that won't bacon. Pre-shrunk or garment dyed.",
      picks: [
        { name: "Carhartt K87 Pocket Tee (solid colors = 100% cotton)", typical: "$20-25, often $13-16" },
        { name: "Dickies Heavyweight Tee (WS450)", typical: "$12-17" },
        { name: "Comfort Colors 1717 (garment dyed, soft, heavy)", typical: "$12-20" },
        { name: "Uniqlo U Crew Neck T-Shirt", typical: "$19.90, sale $14.90" }
      ]
    },
    {
      id: "undershirt",
      category: "Tops",
      name: "Work undershirts (under white dress shirt)",
      target: 3, have: 0,
      budget: [10, 40],
      hero: false,
      quality: "Crew neck only (no V-necks). Thin, breathable, close fit with a low-profile collar. TIP: get light grey or skin-tone, NOT white - white undershirts show through white dress shirts; a near-skin tone is invisible.",
      picks: [
        { name: "Uniqlo AIRism Crew Neck / AIRism Cotton Crew Neck", typical: "$14.90, sales $9.90" },
        { name: "Mack Weldon 18-Hour Jersey Crew", typical: "$36, sales 20-30% off" },
        { name: "Tommy John Second Skin Crew Neck (hero)", typical: "$45, sales ~$32" }
      ]
    },
    {
      id: "tee-black",
      category: "Tops",
      name: "Black tees",
      target: 4, have: 0,
      budget: [12, 35],
      hero: false,
      quality: "Same as white tees. Black fades - wash cold inside-out. Solid black (not heather) is usually 100% cotton.",
      picks: [
        { name: "Carhartt K87 Pocket Tee - Black", typical: "$20-25, often $13-16" },
        { name: "Uniqlo U Crew Neck - Black", typical: "$19.90" },
        { name: "Dickies Heavyweight Tee - Black", typical: "$12-17" }
      ]
    },
    {
      id: "sweater",
      category: "Warm layers",
      name: "Wool sweaters (crewneck only)",
      target: 2, have: 0,
      budget: [50, 180],
      hero: true,
      quality: "100% wool: Shetland, lambswool or merino. Or a heavy 100% cotton fisherman knit. Avoid >20% acrylic/poly. Colors: grey, navy, oatmeal, forest green.",
      picks: [
        { name: "L.L.Bean Heritage Fisherman / Signature Matinicus Rock (Shetland)", typical: "$80-150, ~30% off in sales" },
        { name: "L.L.Bean Essential Merino Crew", typical: "$89, sales ~$65" },
        { name: "Uniqlo Extra Fine Merino / Premium Lambswool Crew", typical: "$39.90-49.90" },
        { name: "Harley of Scotland / Jamieson's Shetland crew (hero, lasts decades)", typical: "$150-250" }
      ]
    },
    {
      id: "flannel",
      category: "Warm layers",
      name: "Flannel shirts",
      target: 2, have: 0,
      budget: [30, 90],
      hero: false,
      quality: "Heavy brushed 100% cotton (or wool) flannel, chain-stitched or felled seams. Size by chest - some (L.L.Bean) shrink a bit; wash cold, hang dry.",
      picks: [
        { name: "L.L.Bean Scotch Plaid Flannel (Portuguese cotton)", typical: "$60, sales $30-45" },
        { name: "Uniqlo Flannel Long-Sleeve Shirt", typical: "$29.90-39.90" },
        { name: "Pendleton wool shirt (hero)", typical: "$130-180, sales ~40% off" }
      ]
    },
    {
      id: "jeans",
      category: "Bottoms",
      name: "Jeans (athletic taper)",
      target: 3, have: 1,
      budget: [35, 160],
      hero: true,
      quality: "Levi's 541 already fits you - buy more in different washes (dark rinse + black). Optional hero: one pair of raw selvedge denim that fades to you and lasts years.",
      picks: [
        { name: "Levi's 541 Athletic Taper (dark rinse / black)", typical: "$69.50 list, sales $27-45" },
        { name: "Uniqlo Selvedge Regular-Fit Tapered", typical: "$49.90" },
        { name: "Naked & Famous Weird Guy (raw selvedge, roomy thigh + taper; hero)", typical: "$150-200" }
      ]
    },
    {
      id: "sweatpants",
      category: "Bottoms",
      name: "Sweatpants / joggers",
      target: 3, have: 1,
      budget: [20, 70],
      hero: false,
      quality: "Heavy brushed fleece, cotton-majority, real drawstring, deep pockets. Benchmark: THE GYM PEOPLE Fleece Joggers (you own + love; ~$27 on Amazon).",
      picks: [
        { name: "THE GYM PEOPLE Men's Fleece Joggers (re-buy in grey/navy)", typical: "$22-33" },
        { name: "Champion Reverse Weave Jogger", typical: "$60, sales $30-40" },
        { name: "Uniqlo Sweatpants", typical: "$39.90" }
      ]
    },
    {
      id: "underwear",
      category: "Bottoms",
      name: "Underwear (boxer briefs)",
      target: 10, have: 0,
      budget: [8, 30],
      hero: false,
      quality: "Budget per pair. Waistband that keeps elastic, flat seams. Buy all one model so they wear evenly and you can just re-buy.",
      picks: [
        { name: "Uniqlo AIRism Boxer Briefs", typical: "$12.90-14.90/pair" },
        { name: "ExOfficio Give-N-Go 2.0 (durable, quick dry)", typical: "$32 list, sales ~$17" },
        { name: "Saxx Vibe / Quest (hero comfort)", typical: "$30-38, best deals at Black Friday" }
      ]
    },
    {
      id: "sneakers",
      category: "Shoes",
      name: "Nike Killshot 2 Leather",
      target: 1, have: 0,
      budget: [55, 100],
      hero: false,
      quality: "Size: try 10.5 first (Killshots are generally true to size; 11 if you want room for thick socks). Leather upper + gum sole. Classic = Sail/Gum or white/navy. Fair deal under $75; great deal $65 or less.",
      picks: [
        { name: "Nike Killshot 2 Leather", typical: "$100 list, sales $65-80" }
      ]
    },
    {
      id: "boot-insole",
      category: "Shoes",
      name: "Insoles for your Clarks Desert Boots",
      target: 1, have: 0,
      budget: [10, 40],
      hero: false,
      quality: "Clarks desert boots have almost no footbed. Use a THIN leather insole (bulky gel ones make the boot too tight). Trim to fit.",
      picks: [
        { name: "Thin leather insole w/ slight arch (e.g. Pedag Viva, Nicks leather insole)", typical: "$15-35" },
        { name: "Bama leather comfort insole (thin, minimal arch)", typical: "$10-15" }
      ]
    },
    {
      id: "boots-upgrade",
      category: "Shoes",
      name: "Boot upgrade (future hero - optional)",
      target: 1, have: 0,
      budget: [130, 300],
      hero: true,
      optional: true,
      quality: "Same desert-boot look, better build. Recommendation: keep the Clarks + insole now; buy one of these only at 25%+ off. Astorflex = closest to Clarks but better (Italian, natural crepe-style sole). Thursday Scout = resoleable leather sole chukka.",
      picks: [
        { name: "Astorflex Greenflex / Bitflex chukka (runs large - for you that is EU 44 / about US 10)", typical: "$200-215, sales $130-150" },
        { name: "Thursday Scout Chukka (Thursday never discounts; watch warehouse/factory seconds)", typical: "$199" },
        { name: "Red Wing Weekender Chukka (hero)", typical: "$280+" }
      ]
    },
    {
      id: "belt",
      category: "Accessories",
      name: "Full-grain leather belt (suggested add)",
      target: 1, have: 0,
      budget: [30, 90],
      hero: true,
      optional: true,
      quality: "Single piece of full-grain leather (not 'genuine leather' / bonded), solid brass or steel buckle. Brown works with jeans AND work pants. Lasts 10+ years.",
      picks: [
        { name: "Orion Leather / Tanner Goods / Hanks belt", typical: "$45-120" },
        { name: "L.L.Bean Bean's Leather Belt (budget full-grain)", typical: "$40-50" }
      ]
    }
  ]
};
