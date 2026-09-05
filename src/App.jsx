import { useState, useEffect } from 'react'
import './App.css'

const IMG = {
  sunscreen:
    'https://images.unsplash.com/photo-1708642448328-37631ca58d65?auto=format&fit=crop&w=800&q=80',
  petals:
    'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=800&q=80',
  pumpBottle:
    'https://images.unsplash.com/photo-1551446339-1e5c6f164ec2?auto=format&fit=crop&w=800&q=80',
  tubes:
    'https://images.unsplash.com/photo-1571782742478-0816a4773a10?auto=format&fit=crop&w=800&q=80',
  heroMask:
    'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80',
  heroBath:
    'https://images.unsplash.com/photo-1554167838-07aa5723df3a?auto=format&fit=crop&w=800&q=80',
  aboutBottles:
    'https://images.unsplash.com/photo-1646579360571-de5ecf3af648?auto=format&fit=crop&w=900&q=80',
  aboutStore:
    'https://images.unsplash.com/photo-1757800946096-b3f14edd6809?auto=format&fit=crop&w=900&q=80',
  aboutCosmetics:
    'https://images.unsplash.com/photo-1676570092589-a6c09ecbb373?auto=format&fit=crop&w=900&q=80',
  setGlow:
    'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=800&q=80',
  setGlam:
    'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=800&q=80',
  setLuxe:
    'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&fit=crop&w=800&q=80',
  setRitual:
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80',
  vitaminC:
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
  brushes:
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
  antiAge:
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  hydraSatin:
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
  niveaSoft:
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
  bodyButter:
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  bodyLotion:
    'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&w=800&q=80',
  sunscreenSpf:
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80',
  setMakeup:
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
  setVaseline:
    'https://i.pinimg.com/736x/45/f8/92/45f89229cc901472bbeefe4bafd9fd42.jpg',
  setBrand:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  setGlowBeauty:
    'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
  setVaselineBody:
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  setRich:
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
  setLemon:
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80',
  faceAnalyzer:
    'https://i.pinimg.com/736x/0d/70/9d/0d709d64bb6e88e1178ec49571061119.jpg',
  machineTreatment:
    'https://i.pinimg.com/736x/2a/67/33/2a6733575d96071ed762b0c6d3188eb0.jpg',
  pinkBathSet:
    'https://i.pinimg.com/736x/aa/1a/63/aa1a6352ad0c4133c2f008bb9152db82.jpg',
  bakina:
    'https://i.pinimg.com/736x/fc/90/cb/fc90cbd372b9f090d4aa178e68705ab2.jpg',
  glowDeluxe:
    'https://i.pinimg.com/736x/f1/50/5f/f1505fc847760320b0fa1e998a2eccd0.jpg',
  sageCover:
    'https://i.pinimg.com/736x/99/01/f6/9901f6e8b0c0edf5a9a0541bcc5ea667.jpg',
  vitaB5:
    'https://i.pinimg.com/736x/ef/17/df/ef17df163f131a0551d6422e617cf1bd.jpg',
  doveLotion:
    'https://i.pinimg.com/736x/3f/6f/e3/3f6fe3ef1385abf896e4ebe9dd4f9802.jpg',
  lixouva:
    'https://i.pinimg.com/736x/20/d4/26/20d42649dcbff59aaa68868ab88cd556.jpg',
  verdae:
    'https://i.pinimg.com/736x/01/fd/17/01fd1740de856e5065ddd4e9618cc8af.jpg',
  drRashel:
    'https://i.pinimg.com/736x/14/f0/33/14f033ca25e1e6e585b346c8851997a8.jpg',
  vaselineDaily:
    'https://i.pinimg.com/736x/38/94/83/389483edc4d8b383de8ad694d4d4d3ae.jpg',
  ozoneLotion:
    'https://i.pinimg.com/736x/47/6e/20/476e20d31aea89107290ddfe227a6176.jpg',
  zeoSerum:
    'https://i.pinimg.com/736x/53/a2/1d/53a21db0388cdcae297235f371fab475.jpg',
  coffeeScrub:
    'https://i.pinimg.com/736x/a9/b6/4c/a9b64c54565366523ae763964715e911.jpg',
  morningRoutine:
    'https://i.pinimg.com/736x/76/23/30/7623306e996969be8abafe93c06e7080.jpg',
  beautyTips:
    'https://i.pinimg.com/736x/cd/9e/db/cd9edbe1ee2eb6854597cb1bea303902.jpg',
  perfBoss:
    'https://i.pinimg.com/736x/ca/01/74/ca017483b8f5e65b3dbd866c69683dc4.jpg',
  perf9pm:
    'https://i.pinimg.com/736x/3b/6f/1c/3b6f1c5787aa1ff674cbb5e13f4bcb21.jpg',
  perfAzzaro:
    'https://i.pinimg.com/736x/fc/d9/10/fcd910684f8383d476b6aea638b44aaa.jpg',
  perfZara:
    'https://i.pinimg.com/736x/8f/d0/f7/8fd0f7aa4fef27c2fa0deb1104a42a42.jpg',
  perfSauvage:
    'https://i.pinimg.com/736x/27/7f/47/277f47b959573fa274f68ee2c763d916.jpg',
  perfMatelot:
    'https://i.pinimg.com/736x/71/73/8d/71738dd53c094ea14435af9704dc0c21.jpg',
  perfMousuf:
    'https://i.pinimg.com/736x/2b/e2/1a/2be21a45e95031e9653520f7785f7777.jpg',
  perfKhamrah:
    'https://i.pinimg.com/736x/17/eb/20/17eb20209ea43d2168bc4121291adcd2.jpg',
  perfOud:
    'https://i.pinimg.com/736x/92/9a/82/929a829e2c0d940645379b78f1e76087.jpg',
  perfClub:
    'https://i.pinimg.com/736x/76/f1/9e/76f19e19bead2bbc19099103d023642e.jpg',
  perfSuspenso:
    'https://i.pinimg.com/736x/2b/4c/71/2b4c71b4b6c4b94707fe105d55cc8926.jpg',
  perfVanilla:
    'https://i.pinimg.com/736x/66/8d/52/668d52b6583d967fe69e742d5daf2d38.jpg',
  psetKayali:
    'https://i.pinimg.com/736x/03/a4/fe/03a4fe08f88d10052487a6d2a4671bf1.jpg',
  psetBestWomen:
    'https://i.pinimg.com/736x/0c/1e/f0/0c1ef09b6c94f2b5d6864b09ef08b98a.jpg',
  psetFood:
    'https://i.pinimg.com/736x/1b/70/64/1b706412123dceea4ecbc69e5b34527e.jpg',
  psetDefine:
    'https://i.pinimg.com/736x/38/b9/54/38b954a7bc01a2222306b66498dd3813.jpg',
  psetRichMen:
    'https://i.pinimg.com/736x/be/b8/87/beb887cfe692c306660c5594c6de6aa0.jpg',
  psetChantelle:
    'https://i.pinimg.com/736x/ce/1f/71/ce1f71ff702b97f0b2f4ff0ae0f9cbee.jpg',
  psetLucifer:
    'https://i.pinimg.com/736x/6c/3e/f2/6c3ef26087762fbebf94f6611ce9a1e7.jpg',
  pset24k:
    'https://i.pinimg.com/736x/96/08/18/960818d23e000c4932733e0dcdaf0a1b.jpg',
  psetVS:
    'https://i.pinimg.com/736x/9c/69/8e/9c698e2738fe7ea79c9275488454d53c.jpg',
  psetGK:
    'https://i.pinimg.com/736x/23/a3/67/23a3676fd47bff20f060f00a615aae8c.jpg',
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Velvet Glow Serum',
    category: 'Skincare',
    price: 115000,
    desc: 'Vitamin C + hyaluronic acid serum for a radiant, even complexion.',
    longDesc:
      'Our signature serum combines 15% stabilised vitamin C with triple-weight hyaluronic acid to visibly brighten, plump and smooth the skin. Cold-pressed botanicals and niacinamide work together to fade dark spots and even out tone — without irritation. Suitable for all skin types, including sensitive.',
    image: IMG.petals,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Silk Matte Lipstick',
    category: 'Makeup',
    price: 62500,
    desc: 'Weightless matte color that lasts up to 12 hours without drying.',
    longDesc:
      'A next-generation matte that feels like silk, not sandpaper. Pigment-saturated cores glide on in one swipe and lock in place for up to 12 hours of transfer-proof wear, while squalane and vitamin E keep lips soft. Available in 18 curated shades.',
    image: IMG.tubes,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Rose Dew Face Mist',
    category: 'Skincare',
    price: 53000,
    desc: 'Damask rose water mist that hydrates and refreshes instantly.',
    longDesc:
      'Steam-distilled from freshly picked Damask roses, this ultra-fine mist instantly rehydrates skin, calms redness and sets makeup with a dewy finish. Keep one at your desk, in your gym bag and on your nightstand — your skin will thank you.',
    image: IMG.petals,
  },
  {
    id: 4,
    name: 'Luminous Foundation',
    category: 'Makeup',
    price: 100000,
    desc: 'Buildable medium coverage with a natural, skin-like finish. 30 shades.',
    longDesc:
      'Skin-mimicking flexi-pigments blend seamlessly for buildable medium coverage that never looks masky. Enriched with hyaluronic acid so skin looks lit-from-within all day. Dermatologist tested, non-comedogenic, and offered in 30 true-to-tone shades.',
    image: IMG.pumpBottle,
    badge: 'Bestseller',
  },
  {
    id: 5,
    name: 'Botanical Cleansing Balm',
    category: 'Skincare',
    price: 81500,
    desc: 'Melts away makeup and SPF while nourishing with camellia oil.',
    longDesc:
      'A sorbet-soft balm that melts on contact to dissolve stubborn makeup, SPF and daily grime. Japanese camellia oil and oat lipids leave the moisture barrier intact — no tightness, no residue. Rinses clean with water.',
    image: IMG.tubes,
  },
  {
    id: 6,
    name: 'Golden Hour Palette',
    category: 'Makeup',
    price: 91000,
    desc: '12 warm-toned eyeshadows — buttery soft, zero fallout.',
    longDesc:
      'Twelve universally flattering warm neutrals — from champagne shimmer to deep espresso matte — pressed with a buttery, fallout-free formula. Talc-free and crease-resistant for up to 14 hours of wear.',
    image: IMG.sunscreen,
  },
  {
    id: 7,
    name: 'Vitamin C Brightening Serum',
    category: 'Skincare',
    price: 89000,
    desc: '20% vitamin C concentrate for dark spots and dullness.',
    longDesc:
      'A potent yet gentle 20% ethylated vitamin C serum with ferulic acid and vitamin E to visibly fade dark spots, boost radiance and defend against pollution. Lightweight, fast-absorbing, layers well under moisturiser and SPF.',
    image: IMG.vitaminC,
    badge: 'Bestseller',
  },
  {
    id: 8,
    name: 'Pro Blend Brush Set — 12 pcs',
    category: 'Makeup',
    price: 75000,
    desc: 'Ultra-soft synthetic brushes for face, eyes and lips.',
    longDesc:
      'Twelve hand-crafted brushes with ultra-soft vegan bristles — foundation, powder, blush, contour and 8 precision eye brushes. Seamless blending, no shedding, includes a roll-up travel case.',
    image: IMG.brushes,
    badge: 'New',
  },
  {
    id: 9,
    name: 'Anti-Age Renewal Cream',
    category: 'Skincare',
    price: 128000,
    desc: 'Peptides + retinol alternative to smooth fine lines.',
    longDesc:
      'A firming night cream with peptides, bakuchiol (gentle retinol alternative) and ceramides. Visibly smooths fine lines, improves elasticity and restores bounce in 4 weeks. Fragrance-free, dermatologist tested.',
    image: IMG.antiAge,
  },
  {
    id: 10,
    name: 'Teint Hydra Satin Foundation',
    category: 'Makeup',
    price: 105000,
    desc: 'Hydrating satin foundation — second-skin glow, 24 shades.',
    longDesc:
      'A hydrating satin-finish foundation with hyaluronic acid for a fresh, second-skin glow. Medium buildable coverage that blurs pores without caking. 24 flexible shades, 12-hour wear.',
    image: IMG.hydraSatin,
    badge: 'New',
  },
  {
    id: 11,
    name: 'Nivea Soft Moisture Cream',
    category: 'Skincare',
    price: 28000,
    desc: 'Fast-absorbing all-purpose moisture for face, hands and body.',
    longDesc:
      'The iconic light, refreshing moisture cream with vitamin E and jojoba oil. Absorbs in seconds, leaves skin soft and smooth with no greasy feel. Perfect for the whole family, every day.',
    image: IMG.niveaSoft,
  },
  {
    id: 12,
    name: 'Whipped Shea Body Butter',
    category: 'Body',
    price: 48000,
    desc: 'Rich shea + cocoa butter for 48h deep nourishment.',
    longDesc:
      'Whipped shea, cocoa butter and almond oil melt into skin for 48 hours of deep nourishment. Calms dry, tight winter skin with a warm vanilla scent. No parabens, no mineral oil.',
    image: IMG.bodyButter,
    badge: 'Bestseller',
  },
  {
    id: 13,
    name: 'Nivea Deep Nourish Body Lotion',
    category: 'Body',
    price: 35000,
    desc: 'Shea butter body lotion for very dry skin.',
    longDesc:
      'Deep-moisture body lotion with shea butter and almond oil for very dry skin. Absorbs quickly, strengthens the moisture barrier and keeps skin smooth for 24 hours. Large 400ml family size.',
    image: IMG.bodyLotion,
  },
  {
    id: 14,
    name: 'Mineral Sunscreen SPF 50',
    category: 'Sun Care',
    price: 58000,
    desc: 'Invisible mineral SPF 50 — no white cast, reef-safe.',
    longDesc:
      'A sheer mineral SPF 50 with zinc and vitamin C that leaves no white cast on deep skin tones. Water-resistant 80 minutes, reef-safe, sits beautifully under makeup. No fragrance, no sting.',
    image: IMG.sunscreenSpf,
    badge: 'New',
  },
  {
    id: 15,
    name: 'Bakina Fresh Glow Cream',
    category: 'Skincare',
    price: 68000,
    desc: 'Organic vegan glow cream — soft, hydrated, pearly skin.',
    longDesc:
      'Bakina Cosmetics signature: modern, fresh and feminine organic formula. Cruelty-free and vegan, leaves skin soft, deeply hydrated with a pearly glow. Perfect daily moisturiser for all skin types.',
    image: IMG.bakina,
    badge: 'New',
  },
  {
    id: 16,
    name: 'Vitamin B5 Repair Serum',
    category: 'Skincare',
    price: 92000,
    desc: 'Vita B5 + collagen support for calm, plump, even skin.',
    longDesc:
      'Deep-moisture vitamin B5 serum that soothes sensitivity, supports the barrier and softens fine lines. Plumper, bouncier feel and healthier glow with regular use. Layers well morning and night.',
    image: IMG.vitaB5,
  },
  {
    id: 17,
    name: 'Dove Relaxing Body Lotion',
    category: 'Body',
    price: 42000,
    desc: 'Shea butter + vanilla soothing body lotion, 1L family size.',
    longDesc:
      'Dove Relaxing with shea butter and warm vanilla for soft, soothed skin. Creamy fast-absorbing texture, calming scent, ideal for daily full-body moisture. Gentle for the whole family.',
    image: IMG.doveLotion,
    badge: 'Bestseller',
  },
  {
    id: 18,
    name: 'Lixouva Body Soap Butter',
    category: 'Body',
    price: 38000,
    desc: 'Whipped body soap jars with gold-lid luxury nourishment.',
    longDesc:
      'Lixouva whipped body soap-butter in iconic gold-lid jars. Rich lather that cleanses without stripping, leaves skin soft and delicately scented. Loved for African skincare rituals.',
    image: IMG.lixouva,
  },
  {
    id: 19,
    name: 'Ozone Hydra Body Lotion',
    category: 'Body',
    price: 45000,
    desc: 'Big-hydration body lotion — dry skin doesn’t stand a chance.',
    longDesc:
      'Ozone new-launch body lotion with deep-hydration complex for very dry skin. Creamy, fast-absorbing, leaves skin bouncy and glowing all day. Perfect after shower, morning and night.',
    image: IMG.ozoneLotion,
    badge: 'New',
  },
  {
    id: 20,
    name: 'Zeo Repair Oil Serum',
    category: 'Skincare',
    price: 78000,
    desc: 'Repair oil-serum for glow, softness and barrier support.',
    longDesc:
      'A silky repair oil-serum that nourishes with botanical oils, softens texture and boosts glow. Use 2–3 drops alone or under cream. Ideal for dull, tired or uneven skin.',
    image: IMG.zeoSerum,
  },
]

const SETS = [
  {
    id: 101,
    name: 'Glow Starter Set',
    tagline: 'The perfect routine for radiant skin',
    price: 150000,
    saveNote: 'Save TShs 18,000 vs buying separately',
    image: IMG.setGlow,
    productIds: [1, 3],
  },
  {
    id: 102,
    name: 'Full Glam Set',
    tagline: 'Everything you need for a complete look',
    price: 220000,
    saveNote: 'Save TShs 33,500 vs buying separately',
    image: IMG.setGlam,
    productIds: [2, 4, 6],
  },
  {
    id: 103,
    name: 'Evening Luxe Set',
    tagline: 'For nights that deserve extra shine',
    price: 240000,
    saveNote: 'Save TShs 28,500 vs buying separately',
    image: IMG.setLuxe,
    productIds: [1, 2, 6],
  },
  {
    id: 104,
    name: 'Self-Care Ritual Set',
    tagline: 'Your at-home spa essentials',
    price: 195000,
    saveNote: 'Save TShs 21,500 vs buying separately',
    image: IMG.setRitual,
    productIds: [3, 5, 1],
  },
  {
    id: 105,
    name: 'Makeup Essentials Set',
    tagline: 'Brushes + face bestsellers for a full look',
    price: 235000,
    saveNote: 'Save TShs 31,500 vs buying separately',
    image: IMG.setMakeup,
    productIds: [8, 4, 2],
  },
  {
    id: 106,
    name: 'Vaseline Glow Set',
    tagline: 'Barrier repair + daily moisture heroes',
    price: 98000,
    saveNote: 'Save TShs 13,000 vs buying separately',
    image: IMG.setVaseline,
    productIds: [11, 12, 5],
  },
  {
    id: 107,
    name: 'Brand Cosmetics Discovery Set',
    tagline: 'Our most-loved icons in one box',
    price: 265000,
    saveNote: 'Save TShs 36,000 vs buying separately',
    image: IMG.setBrand,
    productIds: [1, 4, 6],
  },
  {
    id: 108,
    name: 'Glow Beauty Set',
    tagline: 'Vitamin C routine for lit-from-within skin',
    price: 210000,
    saveNote: 'Save TShs 27,000 vs buying separately',
    image: IMG.setGlowBeauty,
    productIds: [7, 1, 3],
  },
  {
    id: 109,
    name: 'Vaseline Body Care Set',
    tagline: 'Head-to-toe softness for dry skin',
    price: 115000,
    saveNote: 'Save TShs 16,000 vs buying separately',
    image: IMG.setVaselineBody,
    productIds: [12, 13, 11],
  },
  {
    id: 110,
    name: 'Rich Luxury Set',
    tagline: 'Premium night ritual — firm, renew, glow',
    price: 295000,
    saveNote: 'Save TShs 38,000 vs buying separately',
    image: IMG.setRich,
    productIds: [9, 1, 10],
  },
  {
    id: 111,
    name: 'Lemon Brightening Set',
    tagline: 'Vitamin C + SPF to fade spots and protect',
    price: 225000,
    saveNote: 'Save TShs 25,000 vs buying separately',
    image: IMG.setLemon,
    productIds: [7, 14, 3],
  },
  {
    id: 112,
    name: 'Pink Bath & Body Set',
    tagline: 'Pastel-pink bottles & jars for head-to-toe softness',
    price: 165000,
    saveNote: 'Save TShs 19,000 vs buying separately',
    image: IMG.pinkBathSet,
    productIds: [12, 13, 17],
  },
  {
    id: 113,
    name: 'Glow Beauty Deluxe Set',
    tagline: 'Pink-glow makeup & skincare icons in one box',
    price: 275000,
    saveNote: 'Save TShs 32,000 vs buying separately',
    image: IMG.glowDeluxe,
    productIds: [7, 16, 2],
  },
  {
    id: 114,
    name: 'Sage Cover Ritual Set',
    tagline: 'Minimal luxury greens — calm, firm, renew',
    price: 245000,
    saveNote: 'Save TShs 28,000 vs buying separately',
    image: IMG.sageCover,
    productIds: [9, 15, 5],
  },
  {
    id: 115,
    name: 'Verdae Herbal Glow Set',
    tagline: 'Botanical labels, herbal oils, everyday glow',
    price: 198000,
    saveNote: 'Save TShs 24,000 vs buying separately',
    image: IMG.verdae,
    productIds: [15, 16, 18],
  },
  {
    id: 116,
    name: 'Dr Rashel Glow Set',
    tagline: 'Facial glow ritual for smooth, soft, radiant skin',
    price: 185000,
    saveNote: 'Save TShs 22,000 vs buying separately',
    image: IMG.drRashel,
    productIds: [1, 16, 3],
  },
  {
    id: 117,
    name: 'Vaseline Daily Routine Set',
    tagline: 'Your partner for healthy skin, happy life',
    price: 135000,
    saveNote: 'Save TShs 17,000 vs buying separately',
    image: IMG.vaselineDaily,
    productIds: [11, 19, 12],
  },
]

/* ---------- Perfumes (audience: Men | Women | Both) ---------- */
const PERFUMES = [
  {
    id: 201,
    name: 'BOSS Bottled Night',
    brand: 'Hugo Boss',
    audience: 'Men',
    price: 165000,
    desc: 'Woody aromatic EDT 100ml — ambitious evening scent.',
    longDesc:
      'Boss Bottled Night by Hugo Boss (100ml EDT) is a woody aromatic for the ambitious man. Cardamom, birch and musk unfold into a confident evening trail. Long-lasting, perfect gift for him.',
    image: IMG.perfBoss,
    badge: 'Bestseller',
  },
  {
    id: 202,
    name: '9PM Rebel',
    brand: 'Afnan',
    audience: 'Men',
    price: 95000,
    desc: 'Bold red-bottle night scent — sweet, spicy, unstoppable.',
    longDesc:
      '9PM Rebel by Afnan is a bold evening fragrance in the iconic red bottle. Sweet apple, vanilla and warm woods project powerfully through the night. Beast-mode longevity, unbeatable value.',
    image: IMG.perf9pm,
    badge: 'Bestseller',
  },
  {
    id: 203,
    name: 'The Most Wanted Parfum',
    brand: 'Azzaro',
    audience: 'Men',
    price: 175000,
    desc: 'Intense spicy-sensual parfum, perfect for date night.',
    longDesc:
      'Azzaro The Most Wanted Parfum is an intense, spicy-sensual men’s cologne. Fiery red ginger, juniper and bourbon vanilla last all night. A must-have signature for his collection.',
    image: IMG.perfAzzaro,
  },
  {
    id: 204,
    name: 'Zara Man — Black Orchid',
    brand: 'Zara',
    audience: 'Men',
    price: 65000,
    desc: 'Luxurious dark orchid & spice — modern and timeless.',
    longDesc:
      'Zara Man with black orchid and warm spices is luxurious, sensual and modern. Wide aura, long-lasting on skin and clothes. The smart-budget gentleman’s daily signature.',
    image: IMG.perfZara,
  },
  {
    id: 205,
    name: 'Sauvage EDT',
    brand: 'Dior',
    audience: 'Men',
    price: 285000,
    desc: 'The legendary fresh-spicy icon — bergamot & ambroxan.',
    longDesc:
      'Dior Sauvage EDT is the world’s most-loved fresh-spicy masculine. Calabrian bergamot, pepper and ambroxan create a radically fresh trail. The art that makes memory speak.',
    image: IMG.perfSauvage,
    badge: 'Bestseller',
  },
  {
    id: 206,
    name: 'Matelot EDP',
    brand: 'Matelot',
    audience: 'Both',
    price: 88000,
    desc: 'Fresh marine anchor scent — blue cap, striped pouch.',
    longDesc:
      'Matelot Eau de Parfum is a fresh marine unisex scent in the iconic anchor bottle with striped pouch. Sea breeze, citrus and soft musk — for him and her, every day.',
    image: IMG.perfMatelot,
  },
  {
    id: 207,
    name: 'Mousuf',
    brand: 'Lattafa style',
    audience: 'Women',
    price: 55000,
    desc: 'Sweet-floral Arabian favourite — soft, radiant, feminine.',
    longDesc:
      'Mousuf is a sweet-floral Arabian-style favourite with a soft radiant trail. Perfect daily wear for her — elegant bottle, compliment magnet, excellent price.',
    image: IMG.perfMousuf,
  },
  {
    id: 208,
    name: 'Khamrah',
    brand: 'Lattafa style',
    audience: 'Both',
    price: 75000,
    desc: 'Warm gourmand — cinnamon, dates & praline cosiness.',
    longDesc:
      'Khamrah is a warm unisex gourmand of cinnamon, dates and praline over soft woods. Cosy, sweet and long-lasting — made for cool evenings and special occasions.',
    image: IMG.perfKhamrah,
    badge: 'New',
  },
  {
    id: 209,
    name: 'Oud Royal',
    brand: 'Oud Collection',
    audience: 'Both',
    price: 120000,
    desc: 'Deep smoky oud — rich, royal, unforgettable.',
    longDesc:
      'Oud Royal is a deep smoky unisex oud with resinous woods and amber. Rich, royal and unforgettable — a few sprays command the whole room. For true oud lovers.',
    image: IMG.perfOud,
  },
  {
    id: 210,
    name: 'Club de Nuit Intense',
    brand: 'Armaf',
    audience: 'Men',
    price: 135000,
    desc: 'Smoky-lemon powerhouse — the famous Aventus-style roar.',
    longDesc:
      'Armaf Club de Nuit Intense Man is the legendary smoky-lemon powerhouse. Birchtar, bergamot and musk roar for 10+ hours. Maximum compliments per spray.',
    image: IMG.perfClub,
    badge: 'Bestseller',
  },
  {
    id: 211,
    name: 'Suspenso',
    brand: 'Suspenso',
    audience: 'Women',
    price: 48000,
    desc: 'Mysterious floral-musk — soft suspense all day.',
    longDesc:
      'Suspenso is a mysterious feminine floral-musk that lingers softly from morning to night. Delicate, elegant and easy to wear — her everyday invisible accessory.',
    image: IMG.perfSuspenso,
  },
  {
    id: 212,
    name: 'Vanilla Musk',
    brand: 'Vanilla Collection',
    audience: 'Women',
    price: 52000,
    desc: 'Creamy vanilla comfort — warm, sweet, addictive.',
    longDesc:
      'Vanilla Musk wraps you in creamy vanilla, soft florals and warm musk. Sweet, comforting and addictive — the cosy scent everyone leans in for.',
    image: IMG.perfVanilla,
    badge: 'New',
  },
]

const PERFUME_SETS = [
  {
    id: 301,
    name: 'Kay Ali Discovery Set',
    tagline: 'Layerable Kay Ali icons — sweet, soft, stunning',
    price: 195000,
    saveNote: 'Save TShs 24,000 vs buying separately',
    image: IMG.psetKayali,
    audience: 'Women',
    productIds: [212, 211, 207],
  },
  {
    id: 302,
    name: 'Best Women Set',
    tagline: 'Our most-loved feminine trio in one box',
    price: 145000,
    saveNote: 'Save TShs 18,000 vs buying separately',
    image: IMG.psetBestWomen,
    audience: 'Women',
    productIds: [212, 207, 211],
  },
  {
    id: 303,
    name: 'Smell Like Food Set',
    tagline: 'Delicious gourmands — vanilla, praline & spice',
    price: 185000,
    saveNote: 'Save TShs 22,000 vs buying separately',
    image: IMG.psetFood,
    audience: 'Both',
    productIds: [208, 212, 209],
  },
  {
    id: 304,
    name: 'Define Collection Set',
    tagline: 'Define your aura — fresh, deep, defined',
    price: 225000,
    saveNote: 'Save TShs 27,000 vs buying separately',
    image: IMG.psetDefine,
    audience: 'Both',
    productIds: [206, 209, 208],
  },
  {
    id: 305,
    name: 'Rich Men Set',
    tagline: 'Boardroom power — Boss, Azzaro & Sauvage',
    price: 320000,
    saveNote: 'Save TShs 38,000 vs buying separately',
    image: IMG.psetRichMen,
    audience: 'Men',
    productIds: [201, 203, 205],
  },
  {
    id: 306,
    name: 'Chantelle Gift Set',
    tagline: 'Elegant feminine gift box — ready to give',
    price: 155000,
    saveNote: 'Save TShs 19,000 vs buying separately',
    image: IMG.psetChantelle,
    audience: 'Women',
    productIds: [207, 211, 212],
  },
  {
    id: 307,
    name: 'Lucifer Night Set',
    tagline: 'Dark, daring evening beasts — 9PM & Club',
    price: 215000,
    saveNote: 'Save TShs 26,000 vs buying separately',
    image: IMG.psetLucifer,
    audience: 'Men',
    productIds: [202, 210, 204],
  },
  {
    id: 308,
    name: '24K Gold Set',
    tagline: 'Golden-hour luxury — shine like 24 karats',
    price: 295000,
    saveNote: 'Save TShs 34,000 vs buying separately',
    image: IMG.pset24k,
    audience: 'Men',
    productIds: [205, 201, 210],
  },
  {
    id: 309,
    name: "Victoria's Secret Set",
    tagline: 'Bombshell glam — flirty, fresh, feminine',
    price: 175000,
    saveNote: 'Save TShs 21,000 vs buying separately',
    image: IMG.psetVS,
    audience: 'Women',
    productIds: [211, 212, 206],
  },
  {
    id: 310,
    name: 'GK Men Set',
    tagline: 'Everyday gentlemen trio — Zara, 9PM & Azzaro',
    price: 205000,
    saveNote: 'Save TShs 25,000 vs buying separately',
    image: IMG.psetGK,
    audience: 'Men',
    productIds: [204, 202, 203],
  },
]

const TESTIMONIALS = [
  {
    quote:
      'The Velvet Glow Serum changed my skin in two weeks. My customers keep coming back for it — it practically sells itself.',
    name: 'Amira K.',
    role: 'Boutique Owner',
  },
  {
    quote:
      'Finally a lipstick that lasts through an entire workday. The shade range is incredible and the formula feels like nothing.',
    name: 'Sofia M.',
    role: 'Verified Buyer',
  },
  {
    quote:
      'Clean ingredients, gorgeous packaging, fair prices. Asma Store is the brand my clients ask for by name.',
    name: 'Danielle R.',
    role: 'Makeup Artist',
  },
]

const FEATURES = [
  { icon: '🐰', title: 'Cruelty-Free', text: 'Never tested on animals. Certified Leaping Bunny approved.' },
  { icon: '🌿', title: 'Clean Formula', text: 'No parabens, sulfates, or synthetic fragrance. Ever.' },
  { icon: '✨', title: 'Dermatologist Tested', text: 'Gentle enough for sensitive skin, proven by science.' },
  { icon: '♻️', title: 'Eco Packaging', text: 'Recyclable glass and refillable compacts on every line.' },
]

const FREE_SHIPPING = 100000
const SHIPPING_FEE = 15000

const formatPrice = (n) => 'TShs ' + n.toLocaleString('en-US')

function loadStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || null
  } catch {
    return null
  }
}

/* ---------- Navbar ---------- */
function Navbar({ cartCount, user, onCart, onHome, onProducts, onPerfume, onSets, onOrders, onAuth, onLogout }) {
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', action: onHome },
    { label: 'Products', action: onProducts },
    { label: 'Perfume', action: onPerfume },
    { label: 'Sets', action: onSets },
    { label: 'Orders', action: onOrders },
  ]

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a
          href="#top"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            onHome()
            setOpen(false)
            setMenuOpen(false)
          }}
        >
          Asma Store<span>.</span>
        </a>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                l.action()
                setOpen(false)
                setMenuOpen(false)
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="btn btn-small"
            onClick={(e) => {
              e.preventDefault()
              onCart()
              setOpen(false)
            }}
          >
            Cart ({cartCount})
          </a>

          <div className="profile-wrap">
            <button
              className="profile-btn"
              aria-label="Account"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </button>
            {menuOpen && (
              <div className="profile-menu">
                {user ? (
                  <>
                    <div className="profile-info">
                      <strong>{user.name}</strong>
                      <span>{user.email}</span>
                    </div>
                    <button onClick={() => { onOrders(); setMenuOpen(false); setOpen(false) }}>My Orders</button>
                    <button onClick={() => { onLogout(); setMenuOpen(false); setOpen(false) }}>Log out</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { onAuth('login'); setMenuOpen(false); setOpen(false) }}>Log in</button>
                    <button onClick={() => { onAuth('register'); setMenuOpen(false); setOpen(false) }}>Register</button>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
        <button
          className={`hamburger ${open ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

/* ---------- Home sections ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Cruelty-Free · Clean Beauty</p>
          <h1>
            Beauty that <em>glows</em> from within
          </h1>
          <p className="lead">
            Premium skincare and makeup crafted with clean, botanical ingredients — designed to make
            every skin day its best day.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn">Shop Collection</a>
            <a href="#about" className="btn btn-outline">Our Story</a>
          </div>
          <div className="hero-stats">
            <div><strong>50K+</strong><span>Happy customers</span></div>
            <div><strong>4.9★</strong><span>Average rating</span></div>
            <div><strong>100%</strong><span>Vegan formulas</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card main-card">
            <img src={IMG.heroMask} alt="" />
            <p>Real results, real glow</p>
          </div>
          <div className="hero-card float-card-1">
            <img src={IMG.heroBath} alt="" />
            <p>Self-care Sundays</p>
          </div>
          <div className="hero-card float-card-2">
            <p className="stars">★★★★★</p>
            <small>"My holy grail serum!"</small>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-inner">
        <div className="about-visual">
          <div className="about-photo big">
            <img src={IMG.aboutStore} alt="Asma Store boutique interior" loading="lazy" />
          </div>
          <div className="about-photo">
            <img src={IMG.aboutBottles} alt="Asma Store formulas" loading="lazy" />
          </div>
          <div className="about-photo">
            <img src={IMG.aboutCosmetics} alt="Our product range" loading="lazy" />
          </div>
          <p className="about-caption">Inside our studio & boutique</p>
        </div>
        <div className="about-text">
          <p className="eyebrow">About Us</p>
          <h2>Luxury beauty, honestly made</h2>
          <p>
            Founded in 2019, Asma Store began with one belief: you shouldn't have to choose between
            clean ingredients and luxury results. Every formula is developed with dermatologists,
            blended from botanical actives, and finished in packaging you'll want on your shelf.
          </p>
          <ul className="about-list">
            <li>Sourced from certified sustainable suppliers</li>
            <li>Clinically tested on real skin, never animals</li>
            <li>Free returns within 30 days — no questions asked</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Product cards & detail ---------- */
function ProductCard({ product, onAdd, onSelect, inBag }) {
  const [wished, setWished] = useState(false)
  return (
    <article
      className="product-card"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(product)}
    >
      <div className="product-img">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="badge">{product.badge}</span>}
        <button
          type="button"
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wished}
          className={`wish-btn ${wished ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setWished(!wished)
          }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill={wished ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      <div className="product-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="product-foot">
          <span className="price">{formatPrice(product.price)}</span>
          <button
            className="btn btn-small add-btn"
            aria-label={inBag ? `${product.name} in bag` : `Add ${product.name} to bag`}
            onClick={(e) => {
              e.stopPropagation()
              onAdd(product)
            }}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1.5" />
              <circle cx="19" cy="21" r="1.5" />
              <path d="M2 3h3l2.6 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L22 7H6" />
            </svg>
            <span>{inBag ? 'In Bag ✓' : 'Add to Bag'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

const STEPS = [
  { n: '1', title: 'Place your order', text: 'Fill in your delivery details below — it takes under a minute.' },
  { n: '2', title: 'We confirm & pack', text: 'You get a confirmation email while we hand-wrap your items.' },
  { n: '3', title: 'Fast delivery', text: 'Ships within 24h. Free shipping on orders over TShs 100,000.' },
]

const PAYMENT_LABELS = {
  card: 'Credit / Debit card',
  mobile: 'Mobile money (M-Pesa, Tigo Pesa, Airtel Money)',
  cod: 'Cash on delivery',
}

function buildOrder(items, form, subtotal, shipping, total) {
  return {
    num: 'LM-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toISOString(),
    status: 'Processing',
    items,
    subtotal,
    shipping,
    total,
    customer: { ...form },
  }
}

function ProductDetail({ product, onBack, addOrder }) {
  const [qty, setQty] = useState(1)
  const [ordered, setOrdered] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', payment: 'card' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const total = product.price * qty
  const shipping = total >= FREE_SHIPPING ? 0 : SHIPPING_FEE
  const grandTotal = total + shipping

  const handleSubmit = (e) => {
    e.preventDefault()
    if (processing) return
    setProcessing(true)
    setTimeout(() => {
      const order = buildOrder(
        [{ ...product, qty }],
        form,
        total,
        shipping,
        grandTotal,
      )
      addOrder(order)
      setOrdered(order)
      setProcessing(false)
      window.scrollTo({ top: 0 })
    }, 2800)
  }

  if (ordered) {
    return (
      <section className="detail section">
        <div className="container">
          <div className="order-success">
            <span className="success-icon">✓</span>
            <h2>Order confirmed!</h2>
            <p className="order-num">Order <strong>#{ordered.num}</strong> · Total <strong>{formatPrice(ordered.total)}</strong></p>
            <p>
              Thank you, {form.name}! Your {qty} × {product.name} will be packed with care and shipped
              to {form.city || 'your address'} within 24 hours. Track it any time under "My Orders".
            </p>
            <button className="btn" onClick={onBack}>Continue Shopping</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onBack}>← Back to shop</button>
        <div className="detail-grid">
          <div className="detail-photo">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className="badge">{product.badge}</span>}
          </div>
          <div className="detail-info">
            <span className="category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="stars">★★★★★ <small>(312 reviews)</small></p>
            <p className="detail-price">{formatPrice(product.price)}</p>
            <p className="detail-desc">{product.longDesc}</p>

            <div className="qty-row">
              <label htmlFor="qty">Quantity</label>
              <div className="qty-control">
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span id="qty">{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <span className="detail-total">Total: {formatPrice(total)}</span>
            </div>

            <ul className="perks">
              <li>✓ Free shipping over TShs 100,000</li>
              <li>✓ 30-day free returns</li>
              <li>✓ Ships within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="order-section">
          <h2>Order now</h2>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required disabled={processing} />
              <input name="phone" type="tel" placeholder="Phone number" value={form.phone} onChange={handleChange} required disabled={processing} />
            </div>
            <input name="address" placeholder="Delivery address" value={form.address} onChange={handleChange} required disabled={processing} />
            <div className="form-row">
              <input name="city" placeholder="City / State" value={form.city} onChange={handleChange} required disabled={processing} />
              <select name="payment" value={form.payment} onChange={handleChange} disabled={processing}>
                <option value="card">Credit / Debit card</option>
                <option value="mobile">Mobile money (M-Pesa, Tigo Pesa, Airtel Money)</option>
                <option value="cod">Cash on delivery</option>
              </select>
            </div>
            <button
              type="submit"
              className={`btn btn-wide ${processing ? 'loading' : ''}`}
              disabled={processing}
            >
              {processing ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Processing payment…
                </>
              ) : (
                <>Place Order — {formatPrice(grandTotal)}</>
              )}
            </button>
            <p className="secure-note">🔒 Secure checkout · SSL encrypted</p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ---------- Products section / page ---------- */
function Products({ onAdd, onSelect, cartItems, onSeeAll }) {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))]
  const visible = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Shop</p>
          <h2>The collection</h2>
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={onAdd}
              onSelect={onSelect}
              inBag={cartItems.some((i) => i.id === p.id)}
            />
          ))}
        </div>
        {onSeeAll && (
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn btn-outline" onClick={onSeeAll}>View All Products</button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ---------- Products page (dedicated, same layout as Sets) ---------- */
/* ---------- Shared shop toolbar: search + grid/list view + filters ---------- */
function loadShopView() {
  try {
    return localStorage.getItem('asma_shop_view') || 'grid'
  } catch {
    return 'grid'
  }
}

function ShopToolbar({ query, onQuery, viewMode, onViewMode, filters, active, onFilter, searchLabel }) {
  return (
    <div className="shop-toolbar">
      <div className="shop-search">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={searchLabel || 'Search products…'}
          aria-label={searchLabel || 'Search products'}
        />
        {query && (
          <button type="button" className="search-clear" aria-label="Clear search" onClick={() => onQuery('')}>
            ×
          </button>
        )}
      </div>
      <div className="view-toggle" role="group" aria-label="Change layout">
        <button
          type="button"
          className={viewMode === 'grid' ? 'active' : ''}
          aria-pressed={viewMode === 'grid'}
          aria-label="Grid view"
          title="Grid view"
          onClick={() => onViewMode('grid')}
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </button>
        <button
          type="button"
          className={viewMode === 'list' ? 'active' : ''}
          aria-pressed={viewMode === 'list'}
          aria-label="List view"
          title="List view"
          onClick={() => onViewMode('list')}
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M8 6h13M8 12h13M8 18h13" />
            <circle cx="4" cy="6" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="4" cy="12" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="4" cy="18" r="1.3" fill="currentColor" stroke="none" />
          </svg>
        </button>
      </div>
      <div className="filters shop-filters">
        {filters.map((c) => (
          <button
            key={c}
            className={`chip ${active === c ? 'active' : ''}`}
            onClick={() => onFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProductsPage({ onAdd, onSelect, cartItems }) {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState(loadShopView)
  const changeView = (m) => {
    setViewMode(m)
    try {
      localStorage.setItem('asma_shop_view', m)
    } catch {
      /* ignore */
    }
  }
  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))]
  const q = query.trim().toLowerCase()
  const visible = PRODUCTS.filter(
    (p) =>
      (filter === 'All' || p.category === filter) &&
      (!q || `${p.name} ${p.desc} ${p.category}`.toLowerCase().includes(q)),
  )
  return (
    <section className="sets-page section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Shop All</p>
          <h2>Every product, one place</h2>
          <p style={{ color: 'var(--muted)' }}>
            Browse the full collection by category. Click a product to see details and order.
          </p>
          <ShopToolbar
            query={query}
            onQuery={setQuery}
            viewMode={viewMode}
            onViewMode={changeView}
            filters={categories}
            active={filter}
            onFilter={setFilter}
            searchLabel="Search by name or type…"
          />
          <p className="result-count">{visible.length} item{visible.length === 1 ? '' : 's'}</p>
        </div>
        {visible.length === 0 ? (
          <div className="cart-empty">
            <p>No products match “{query}”{filter !== 'All' ? ` in ${filter}` : ''}.</p>
            <button className="btn btn-outline" onClick={() => { setQuery(''); setFilter('All') }}>Clear search &amp; filters</button>
          </div>
        ) : (
          <div className={`product-grid view-${viewMode}`}>
            {visible.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={onAdd}
                onSelect={onSelect}
                inBag={cartItems.some((i) => i.id === p.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ---------- Perfume page (perfumes + perfume sets, Men/Women/Both) ---------- */
const PERFUME_FILTERS = ['All', 'Men', 'Women', 'Both']

function PerfumeCard({ product, onAdd, onSelect, inBag }) {
  const [wished, setWished] = useState(false)
  return (
    <article
      className="product-card"
      onClick={() => onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(product)}
    >
      <div className="product-img">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge ? (
          <span className="badge">{product.badge}</span>
        ) : (
          <span className="badge">{product.audience}</span>
        )}
        <button
          type="button"
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wished}
          className={`wish-btn ${wished ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setWished(!wished)
          }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill={wished ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      <div className="product-body">
        <span className="category">{product.brand} · {product.audience}</span>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="product-foot">
          <span className="price">{formatPrice(product.price)}</span>
          <button
            className="btn btn-small add-btn"
            aria-label={inBag ? `${product.name} in bag` : `Add ${product.name} to bag`}
            onClick={(e) => {
              e.stopPropagation()
              onAdd(product)
            }}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1.5" />
              <circle cx="19" cy="21" r="1.5" />
              <path d="M2 3h3l2.6 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L22 7H6" />
            </svg>
            <span>{inBag ? 'In Bag ✓' : 'Add to Bag'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

function PerfumePage({ onAdd, onSelect, onSelectSet, cartItems }) {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState(loadShopView)
  const changeView = (m) => {
    setViewMode(m)
    try {
      localStorage.setItem('asma_shop_view', m)
    } catch {
      /* ignore */
    }
  }
  const q = query.trim().toLowerCase()
  const visible = PERFUMES.filter(
    (p) =>
      (filter === 'All' || p.audience === filter) &&
      (!q || `${p.name} ${p.brand} ${p.desc} ${p.audience}`.toLowerCase().includes(q)),
  )
  const visibleSets = filter === 'All' ? PERFUME_SETS : PERFUME_SETS.filter((s) => s.audience === filter)
  return (
    <>
      <section className="sets-page section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Fragrance</p>
            <h2>The perfume collection</h2>
            <p style={{ color: 'var(--muted)' }}>
              Designer &amp; Arabian icons for him, her and both. Filter by Men, Women or Both — click a perfume to see details and order.
            </p>
            <ShopToolbar
              query={query}
              onQuery={setQuery}
              viewMode={viewMode}
              onViewMode={changeView}
              filters={PERFUME_FILTERS}
              active={filter}
              onFilter={setFilter}
              searchLabel="Search perfumes by name or brand…"
            />
            <p className="result-count">{visible.length} scent{visible.length === 1 ? '' : 's'}</p>
          </div>
          {visible.length === 0 ? (
            <div className="cart-empty">
              <p>No perfumes match “{query}”{filter !== 'All' ? ` for ${filter}` : ''}.</p>
              <button className="btn btn-outline" onClick={() => { setQuery(''); setFilter('All') }}>Clear search &amp; filters</button>
            </div>
          ) : (
            <div className={`product-grid view-${viewMode}`}>
              {visible.map((p) => (
                <PerfumeCard
                  key={p.id}
                  product={p}
                  onAdd={onAdd}
                  onSelect={onSelect}
                  inBag={cartItems.some((i) => i.id === p.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="products section" id="perfume-sets" style={{ background: 'var(--blush)' }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Perfume Sets</p>
            <h2>Gift sets &amp; layered collections</h2>
            <p style={{ color: 'var(--muted)' }}>
              Same {filter} filter, curated bundles at a better price. Click a set to see what’s inside.
            </p>
          </div>
          <div className="product-grid">
            {visibleSets.map((set) => (
              <article
                key={set.id}
                className="product-card set-card"
                onClick={() => onSelectSet(set)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectSet(set)}
              >
                <div className="product-img">
                  <img src={set.image} alt={set.name} loading="lazy" />
                  <span className="badge">{set.audience} · {set.productIds.length} pcs</span>
                </div>
                <div className="product-body">
                  <span className="category">Perfume Set · {set.audience}</span>
                  <h3>{set.name}</h3>
                  <p>{set.tagline}</p>
                  <div className="product-foot">
                    <span className="price">{formatPrice(set.price)}</span>
                    <span className="view-set">View set →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visibleSets.length === 0 && (
            <div className="cart-empty">
              <p>No {filter} sets — try another filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function PerfumeSetDetailPage({ set, onBack, onAddToBag }) {
  const products = set.productIds.map((id) => PERFUMES.find((p) => p.id === id)).filter(Boolean)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAddToBag({
      id: set.id,
      name: set.name,
      category: 'Perfume Set',
      price: set.price,
      image: set.image,
    })
    setAdded(true)
  }

  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onBack}>← Back to perfumes</button>
        <div className="detail-grid">
          <div className="detail-photo">
            <img src={set.image} alt={set.name} />
          </div>
          <div className="detail-info">
            <span className="category">Perfume Set · {set.audience}</span>
            <h1>{set.name}</h1>
            <p className="stars">★★★★★ <small>(96 reviews)</small></p>
            <p className="detail-price">{formatPrice(set.price)}</p>
            <p className="detail-desc">{set.tagline}. {set.saveNote}.</p>
            <ul className="perks">
              <li>✓ Original &amp; sealed bottles</li>
              <li>✓ Gift-wrapped on request</li>
              <li>✓ Ships within 24 hours</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <button className="btn" onClick={handleAdd}>
                {added ? 'Added to Bag ✓' : 'Add Set to Bag'}
              </button>
            </div>
          </div>
        </div>

        <div className="set-products">
          <h2>What’s inside this set</h2>
          <div className="set-product-list">
            {products.map((p) => (
              <div key={p.id} className="set-product-row">
                <img src={p.image} alt={p.name} />
                <div className="set-product-info">
                  <span className="category">{p.brand} · {p.audience}</span>
                  <strong>{p.name}</strong>
                  <p>{p.desc}</p>
                </div>
                <span className="set-product-price">{formatPrice(p.price)}</span>
              </div>
            ))}
          </div>
          <div className="set-total">
            <span>Individual total</span>
            <span>{formatPrice(products.reduce((s, p) => s + p.price, 0))}</span>
          </div>
          <div className="set-total grand">
            <span>Set price</span>
            <span>{formatPrice(set.price)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Sets ---------- */
function SetsPage({ onSelectSet }) {
  return (
    <section className="sets-page section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Curated Sets</p>
          <h2>Bundles made to glow together</h2>
          <p style={{ color: 'var(--muted)' }}>
            Thoughtfully paired products at a better price. Click a set to see what's inside.
          </p>
        </div>
        <div className="product-grid">
          {SETS.map((set) => (
            <article
              key={set.id}
              className="product-card set-card"
              onClick={() => onSelectSet(set)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectSet(set)}
            >
              <div className="product-img">
                <img src={set.image} alt={set.name} loading="lazy" />
                <span className="badge">{set.productIds.length} products</span>
              </div>
              <div className="product-body">
                <span className="category">Set</span>
                <h3>{set.name}</h3>
                <p>{set.tagline}</p>
                <div className="product-foot">
                  <span className="price">{formatPrice(set.price)}</span>
                  <span className="view-set">View set →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SetDetailPage({ set, onBack, onAddToBag }) {
  const products = set.productIds.map((id) => PRODUCTS.find((p) => p.id === id))
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAddToBag({
      id: set.id,
      name: set.name,
      category: 'Set',
      price: set.price,
      image: set.image,
    })
    setAdded(true)
  }

  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onBack}>← Back to sets</button>
        <div className="detail-grid">
          <div className="detail-photo">
            <img src={set.image} alt={set.name} />
          </div>
          <div className="detail-info">
            <span className="category">Curated Set</span>
            <h1>{set.name}</h1>
            <p className="stars">★★★★★ <small>(148 reviews)</small></p>
            <p className="detail-price">{formatPrice(set.price)}</p>
            <p className="detail-desc">{set.tagline}. {set.saveNote}.</p>
            <ul className="perks">
              <li>✓ Free shipping over TShs 100,000</li>
              <li>✓ Gift-wrapped in signature packaging</li>
              <li>✓ Ships within 24 hours</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <button className="btn" onClick={handleAdd}>
                {added ? 'Added to Bag ✓' : 'Add Set to Bag'}
              </button>
            </div>
          </div>
        </div>

        <div className="set-products">
          <h2>What's inside this set</h2>
          <div className="set-product-list">
            {products.map((p) => (
              <div key={p.id} className="set-product-row">
                <img src={p.image} alt={p.name} />
                <div className="set-product-info">
                  <span className="category">{p.category}</span>
                  <strong>{p.name}</strong>
                  <p>{p.desc}</p>
                </div>
                <span className="set-product-price">{formatPrice(p.price)}</span>
              </div>
            ))}
          </div>
          <div className="set-total">
            <span>Individual total</span>
            <span>{formatPrice(products.reduce((s, p) => s + p.price, 0))}</span>
          </div>
          <div className="set-total grand">
            <span>Set price</span>
            <span>{formatPrice(set.price)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Cart ---------- */
function CartPage({ items, changeQty, removeItem, onContinueShopping, onComplete }) {
  const [step, setStep] = useState('cart')
  const [processing, setProcessing] = useState(false)
  const [order, setOrder] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', payment: 'card' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal >= FREE_SHIPPING ? 0 : SHIPPING_FEE
  const total = subtotal + shipping

  const placeOrder = (e) => {
    e.preventDefault()
    if (processing) return
    setProcessing(true)
    setTimeout(() => {
      const newOrder = buildOrder(items, form, subtotal, shipping, total)
      onComplete(newOrder)
      setOrder(newOrder)
      setProcessing(false)
      window.scrollTo({ top: 0 })
    }, 2800)
  }

  if (step === 'checkout') {
    return (
      <section className="detail section">
        <div className="container">
          <button className="back-link" onClick={() => setStep('cart')}>
            ← Back to cart
          </button>
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">Checkout</p>
            <h2>Almost there</h2>
          </div>

          <div className="checkout-grid">
            <div className="order-summary">
              <h3>Order summary</h3>
              {items.map((i) => (
                <div key={i.id} className="summary-row">
                  <img src={i.image} alt="" />
                  <div className="summary-info">
                    <strong>{i.name}</strong>
                    <span>Qty {i.qty}</span>
                  </div>
                  <span className="summary-price">{formatPrice(i.price * i.qty)}</span>
                </div>
              ))}
              <div className="summary-totals">
                <p><span>Subtotal</span><span>{formatPrice(subtotal)}</span></p>
                <p><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></p>
                <p className="grand"><span>Total</span><span>{formatPrice(total)}</span></p>
              </div>
            </div>

            <form className="order-form" onSubmit={placeOrder}>
              <h3>Delivery details</h3>
              <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required disabled={processing} />
              <input name="phone" type="tel" placeholder="Phone number" value={form.phone} onChange={handleChange} required disabled={processing} />
              <input name="address" placeholder="Delivery address" value={form.address} onChange={handleChange} required disabled={processing} />
              <input name="city" placeholder="City / Region" value={form.city} onChange={handleChange} required disabled={processing} />
              <select name="payment" value={form.payment} onChange={handleChange} disabled={processing}>
                <option value="card">Credit / Debit card</option>
                <option value="mobile">Mobile money (M-Pesa, Tigo Pesa, Airtel Money)</option>
                <option value="cod">Cash on delivery</option>
              </select>
              <button type="submit" className={`btn btn-wide ${processing ? 'loading' : ''}`} disabled={processing}>
                {processing ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Processing payment…
                  </>
                ) : (
                  <>Pay Now — {formatPrice(total)}</>
                )}
              </button>
              <p className="secure-note">🔒 Secure checkout · SSL encrypted</p>
            </form>
          </div>
        </div>
      </section>
    )
  }

  if (order) {
    return (
      <section className="detail section">
        <div className="container">
          <div className="order-success">
            <span className="success-icon">✓</span>
            <h2>Payment successful!</h2>
            <p className="order-num">
              Order <strong>#{order.num}</strong> · Total <strong>{formatPrice(order.total)}</strong>
            </p>
            <p>
              Asante sana, {form.name || 'dear customer'}! Your {order.items.reduce((s, i) => s + i.qty, 0)} item(s) will be packed with care and shipped to{' '}
              {form.city || 'your address'} within 24 hours. A confirmation SMS and email are on their way.
            </p>
            <button className="btn" onClick={onContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onContinueShopping}>← Continue shopping</button>
        <div className="section-head" style={{ marginBottom: 40 }}>
          <p className="eyebrow">Your bag</p>
          <h2>Shopping cart</h2>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your bag is empty — time to treat yourself.</p>
            <button className="btn" onClick={onContinueShopping}>Browse Products</button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((i) => (
                <div key={i.id} className="cart-item">
                  <img src={i.image} alt={i.name} />
                  <div className="cart-item-info">
                    <span className="category">{i.category}</span>
                    <strong>{i.name}</strong>
                    <span className="cart-unit">{formatPrice(i.price)} each</span>
                  </div>
                  <div className="qty-control">
                    <button type="button" onClick={() => changeQty(i.id, -1)}>−</button>
                    <span>{i.qty}</span>
                    <button type="button" onClick={() => changeQty(i.id, 1)}>+</button>
                  </div>
                  <span className="cart-line">{formatPrice(i.price * i.qty)}</span>
                  <button className="cart-remove" aria-label={`Remove ${i.name}`} onClick={() => removeItem(i.id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h3>Summary</h3>
              <p><span>Subtotal</span><span>{formatPrice(subtotal)}</span></p>
              <p><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></p>
              {shipping > 0 && (
                <p className="ship-hint">Add {formatPrice(FREE_SHIPPING - subtotal)} more for free shipping.</p>
              )}
              <p className="grand"><span>Total</span><span>{formatPrice(total)}</span></p>
              <button className="btn btn-wide" onClick={() => { setStep('checkout'); window.scrollTo({ top: 0 }) }}>
                Proceed to Checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}

/* ---------- Orders ---------- */
function OrdersPage({ orders, onSelectOrder, onShop }) {
  const [filter, setFilter] = useState('All')
  const statuses = ['All', ...new Set(orders.map((o) => o.status))]
  const visible = filter === 'All' ? orders : orders.filter((o) => o.status === filter)
  return (
    <section className="orders-page section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Track &amp; history</p>
          <h2>Your orders {orders.length > 0 && <small className="muted">({orders.length})</small>}</h2>
          <p style={{ color: 'var(--muted)' }}>
            Every product order &amp; service booking, with live status. Click any order for full details.
          </p>
          {orders.length > 0 && (
            <div className="filters">
              {statuses.map((s) => (
                <button
                  key={s}
                  className={`chip ${filter === s ? 'active' : ''}`}
                  onClick={() => setFilter(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="cart-empty">
            <p>No orders yet — your future favourites are waiting.</p>
            <button className="btn" onClick={onShop}>Shop now</button>
          </div>
        ) : visible.length === 0 ? (
          <div className="cart-empty">
            <p>No {filter} orders.</p>
            <button className="btn btn-outline" onClick={() => setFilter('All')}>Show all</button>
          </div>
        ) : (
          <div className="orders-list">
            {visible.map((o) => {
              const isService = o.items.some((i) => i.category === 'Service')
              return (
                <article
                  key={o.num}
                  className="order-row"
                  onClick={() => onSelectOrder(o)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectOrder(o)}
                >
                  <div className="order-row-main">
                    <strong>#{o.num} <span className="order-kind">{isService ? '· Service' : '· Products'}</span></strong>
                    <span className="order-date">
                      {new Date(o.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="order-row-items">
                    {o.items.slice(0, 3).map((i) => (
                      <img key={i.id} src={i.image} alt={i.name} />
                    ))}
                    {o.items.length > 3 && <span>+{o.items.length - 3}</span>}
                  </div>
                  <span className={`order-status st-${o.status.toLowerCase()}`}>{o.status}</span>
                  <span className="order-total">{formatPrice(o.total)}</span>
                  <span className="view-set">Details →</span>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

function OrderDetailPage({ order, onBack }) {
  const shipping = order.shipping
  const isService = order.items.some((i) => i.category === 'Service')
  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onBack}>← Back to my orders</button>
        <div className="order-detail-card">
          <div className="order-detail-head">
            <div>
              <p className="eyebrow">{isService ? 'Booking details' : 'Order details'}</p>
              <h2>#{order.num}</h2>
              <p className="muted">
                Placed on {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <span className={`order-status big st-${order.status.toLowerCase()}`}>{order.status}</span>
          </div>

          <div className="order-steps">
            {['Processing', 'Confirmed', 'Completed'].map((s, i) => {
              const reached = ['Processing', 'Confirmed', 'Completed'].indexOf(order.status) >= 0
                ? (order.status === 'Processing' ? 0 : order.status === 'Confirmed' ? 1 : 2) >= i
                : i === 0
              return (
                <span key={s} className={`order-step ${reached ? 'done' : ''}`}>
                  <em>{i + 1}</em> {order.status === 'Processing' && i > 0 ? s.replace('Confirmed', 'Confirming').replace('Completed', 'Complete') : s}
                </span>
              )
            })}
          </div>

          <div className="order-detail-body">
            <div className="order-items-list">
              <h3 className="order-items-title">Items ({order.items.length})</h3>
              {order.items.map((i) => (
                <div key={i.id} className="summary-row">
                  <img src={i.image} alt={i.name} />
                  <div className="summary-info">
                    <strong>{i.name}</strong>
                    <span>Qty {i.qty} × {formatPrice(i.price)}</span>
                  </div>
                  <span className="summary-price">{formatPrice(i.price * i.qty)}</span>
                </div>
              ))}
            </div>

            <div className="order-side">
              <div className="order-totals">
                <p><span>Subtotal</span><span>{formatPrice(order.subtotal)}</span></p>
                <p><span>{isService ? 'Booking fee' : 'Shipping'}</span><span>{shipping === 0 ? (isService ? '—' : 'Free') : formatPrice(shipping)}</span></p>
                <p className="grand"><span>{isService ? 'Total' : 'Total paid'}</span><span>{formatPrice(order.total)}</span></p>
              </div>
              <div className="order-customer">
                <h4>{isService ? 'Booking details' : 'Delivery details'}</h4>
                <p>{order.customer.name}</p>
                <p>{order.customer.phone}</p>
                <p>{order.customer.address}, {order.customer.city}</p>
                <p className="muted">Paid via {PAYMENT_LABELS[order.customer.payment]}</p>
              </div>
            </div>
          </div>

          <div className="order-help">
            <div>
              <strong>Need help with this {isService ? 'booking' : 'order'}?</strong>
              <p className="muted">Mention #{order.num} — we reply within a few hours.</p>
            </div>
            <div className="order-help-actions">
              <a
                className="btn btn-small"
                href={`https://wa.me/255616509415?text=${encodeURIComponent(`Hi Asma Store! I need help with order #${order.num}`)}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn btn-small btn-outline" href="tel:+255616509415">Call us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Auth ---------- */
const AUTH_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_151818_65bb22c5-33ae-4e23-85ea-0a3dd89957c2.mp4'

function AuthPage({ mode, onSwitchMode, onSuccess, onBack }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(true)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const isRegister = mode === 'register'

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailName = (form.email || '').split('@')[0] || 'beautiful'
    onSuccess({ name: form.name || emailName, email: form.email })
  }

  return (
    <section className="auth-split-section">
      <div className="container">
        <div className="auth-split-card">
          {/* Left — form */}
          <div className="auth-left">
            <a
              href="#top"
              className="auth-logo"
              onClick={(e) => {
                e.preventDefault()
                onBack()
              }}
            >
              <span className="auth-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="30" height="30" fill="none">
                  <path d="M7 25V9.5C7 8 8 7 9.5 7H14v4H10.5v14H7Z" fill="#4a2440" />
                  <path d="M18 25V12.5C18 11 19 10 20.5 10H25v4h-3.5v11H18Z" fill="#4a2440" />
                  <circle cx="22.8" cy="7.4" r="2.2" fill="#4a2440" />
                </svg>
              </span>
              Asma Store<span>.</span>
            </a>

            <h1>{isRegister ? 'Create Account' : 'Wellcome Back'}</h1>
            <p className="auth-sub">
              {isRegister
                ? "Let's join to grab amazing deals"
                : "Let's login to grab amazing deal"}
            </p>

            <div className="social-stack">
              <button type="button" className="social-btn" onClick={(e) => { e.preventDefault(); onSuccess({ name: 'Google User', email: 'user@gmail.com' }) }}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81Z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.1A12 12 0 0 0 12 24Z" />
                  <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.29a12 12 0 0 0 0 10.76l3.98-3.1Z" />
                  <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.42-3.42A11.98 11.98 0 0 0 12 0 12 12 0 0 0 1.29 6.62l3.98 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
                </svg>
                Continue with Google
              </button>
              <button type="button" className="social-btn" onClick={(e) => { e.preventDefault(); onSuccess({ name: 'Apple User', email: 'user@icloud.com' }) }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 12.54c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.05-4.4 1.05-.91 0-2.31-1.03-3.8-.99-1.95.03-3.76 1.14-4.77 2.88-2.03 3.53-.52 8.76 1.46 11.63.96 1.4 2.11 2.97 3.62 2.91 1.45-.06 2-.94 3.75-.94s2.25.94 3.78.91c1.56-.03 2.55-1.41 3.5-2.82 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.06-4.6l1.07.86ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63Z" />
                </svg>
                Continue with Apple
              </button>
            </div>

            <div className="auth-divider"><span>Or</span></div>

            <form onSubmit={handleSubmit} className="auth-form">
              {isRegister && (
                <label className="field">
                  <span className="field-label">Full name</span>
                  <input name="name" placeholder="rowrok@gmailcom" value={form.name} onChange={handleChange} required />
                </label>
              )}
              <label className="field">
                <span className="field-label">Email</span>
                <input type="email" name="email" placeholder="rowrok@gmailcom" value={form.email} onChange={handleChange} required />
              </label>
              <label className="field">
                <span className="field-label">Password</span>
                <span className="pw-wrap">
                  <input
                    type={showPw ? 'text' : 'password'}
                    name="password"
                    placeholder="••••••••••"
                    minLength="6"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPw(!showPw)}
                  >
                    {showPw ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.6 10.6 0 0 1 12 19c-5 0-9-4.5-10-7 1.2-3 4.2-5.6 7.6-6.5M9.9 5.9A10.4 10.4 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.3 2.4-2.7 3.7M9.88 9.88a3 3 0 0 0 4.24 4.24" /><line x1="2" y1="2" x2="22" y2="22" /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    )}
                  </button>
                </span>
              </label>

              {!isRegister && (
                <div className="auth-row">
                  <label className="remember">
                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="link-btn" onClick={() => {}}>Forget Password?</button>
                </div>
              )}

              <button type="submit" className="btn auth-submit">
                {isRegister ? 'Sign Up' : 'Login'}
              </button>
            </form>

            <p className="auth-switch dark">
              {isRegister ? (
                <>Already have an account? <button onClick={() => onSwitchMode('login')}>Log in</button></>
              ) : (
                <>Don't have an account? <button onClick={() => onSwitchMode('register')}>Sign Up</button></>
              )}
            </p>
            <button className="back-link center" onClick={onBack}>← Back to shop</button>
          </div>

          {/* Right — video media */}
          <div className="auth-media">
            <video
              src={AUTH_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="auth-media-shade" aria-hidden="true" />
            <p className="auth-media-caption">
              Browse thousands of beauty essentials to glow, shop, and shine with trusted formulas.
            </p>
            <div className="auth-media-dots" aria-hidden="true">
              <span className="active" /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Home extras ---------- */
function Features() {
  return (
    <section className="features section-dark">
      <div className="container feature-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature">
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Services — advice + machine treatments ---------- */
const SERVICES = [
  {
    id: 'advice',
    tag: '1-on-1 Advice',
    title: 'Personal Beauty Advice',
    text: 'Tell us your skin goals — our beauticians build you a simple routine and tell you exactly what to buy (and what to skip).',
    points: ['Skin-type & concern check', 'Custom routine plan', 'Free with any purchase'],
    image: IMG.aboutCosmetics,
    cta: 'Get free advice',
  },
  {
    id: 'analyzer',
    tag: 'AI Face Analyzer',
    title: 'Face Analyzer Scan',
    text: 'High-precision AI scan reads hydration, spots, pores, wrinkles and sun damage in 30 seconds — then we match products to your real skin.',
    points: ['Hydration · spots · pores', 'Before / after tracking', 'TShs 15,000 — free over 100k'],
    image: IMG.faceAnalyzer,
    cta: 'Book a scan',
  },
  {
    id: 'machine',
    tag: 'Machine Treatment',
    title: 'Machine Face Treatment',
    text: 'Deep cleanse, hydra-glow and lifting with our pro facial machine. Instant glow before events — gentle for sensitive skin.',
    points: ['Deep cleanse + hydra', 'Lifting & brightening', 'From TShs 45,000 / session'],
    image: IMG.machineTreatment,
    cta: 'Book treatment',
  },
]

function Services({ onOpenAnalyzer, onOpenAdvice }) {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Services</p>
          <h2>Advice + machine treatments, in store</h2>
          <p style={{ color: 'var(--muted)' }}>
            Not sure what your skin needs? Get scanned, treated and advised — then shop only what works for you.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => {
            const handler = s.id === 'analyzer' ? onOpenAnalyzer : s.id === 'advice' ? onOpenAdvice : undefined
            const clickable = !!handler
            return (
              <article
                key={s.id}
                className={`service-card ${clickable ? 'clickable' : ''}`}
                onClick={handler || undefined}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
                onKeyDown={clickable ? (e) => e.key === 'Enter' && handler && handler() : undefined}
              >
                <div className="service-img">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <span className="badge">{s.tag}</span>
                </div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="service-points">
                    {s.points.map((pt) => (
                      <li key={pt}>✓ {pt}</li>
                    ))}
                  </ul>
                  {clickable ? (
                    <button
                      className="btn btn-small service-cta"
                      onClick={(e) => { e.stopPropagation(); handler() }}
                    >
                      {s.cta} →
                    </button>
                  ) : (
                    <a href="#contact" className="btn btn-small service-cta" onClick={(e) => e.stopPropagation()}>{s.cta}</a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Face Analyzer booking page ---------- */
const ANALYZER_VIDEO =
  'https://v1.pinimg.com/videos/iht/expMp4/24/44/4a/24444ae5d2160f4efb7ffbd44680735b_720w.mp4'
const ANALYZER_POSTER =
  'https://i.pinimg.com/736x/46/4a/bf/464abf1a242130e7deacea9c5d9b465d.jpg'

const ANALYZER_PACKAGES = [
  {
    id: 'essential',
    name: 'Essential Scan',
    price: 15000,
    mins: 20,
    desc: 'AI scan + digital skin report + exact product matches.',
    points: ['Hydration · pores · spots · wrinkles', 'UV damage & pigment map', 'Personal product list'],
  },
  {
    id: 'glow',
    name: 'Scan + Glow Facial',
    price: 45000,
    mins: 45,
    desc: 'Bestseller — scan plus machine mini-facial for instant glow.',
    points: ['Everything in Essential', 'Machine cleanse + hydra', 'Scrub exfoliation included'],
    badge: 'Most popular',
  },
  {
    id: 'clinical',
    name: 'Full Clinical Ritual',
    price: 85000,
    mins: 75,
    desc: 'Scan + full machine treatment + mask + before/after tracking.',
    points: ['Everything in Glow', 'Lifting + brightening pass', 'Mask + after-care plan'],
  },
]

const SCRUB_OPTIONS = [
  { id: 'none', name: 'No scrub', price: 0, desc: 'Scan / facial only' },
  { id: 'gentle', name: 'Gentle enzyme scrub', price: 12000, desc: 'Sensitive-safe glow polish' },
  { id: 'deep', name: 'Deep pore scrub', price: 18000, desc: 'Blackheads + texture reset' },
]

function nextDays(n) {
  const out = []
  const fmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
  for (let i = 0; i < n; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    out.push({ key: d.toISOString().slice(0, 10), label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : fmt.format(d), sub: fmt.format(d) })
  }
  return out
}
const SLOT_DAYS = nextDays(4)
const SLOT_TIMES = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30']

function AnalyzerBookingPage({ onBack, addOrder }) {
  const [pkgId, setPkgId] = useState('glow')
  const [scrubId, setScrubId] = useState('gentle')
  const [day, setDay] = useState(SLOT_DAYS[1].key)
  const [time, setTime] = useState('14:00')
  const [form, setForm] = useState({ name: '', phone: '', notes: '', payment: 'mobile' })
  const [processing, setProcessing] = useState(false)
  const [booking, setBooking] = useState(null)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const pkg = ANALYZER_PACKAGES.find((p) => p.id === pkgId)
  const scrub = SCRUB_OPTIONS.find((s) => s.id === scrubId)
  const total = pkg.price + scrub.price
  const dayLabel = (SLOT_DAYS.find((d) => d.key === day)?.label || day)

  const pay = (e) => {
    e.preventDefault()
    if (processing || !time || !day) return
    setProcessing(true)
    setTimeout(() => {
      const itemName = `${pkg.name}${scrub.id !== 'none' ? ' + ' + scrub.name : ''} — ${dayLabel} ${time}`
      const order = buildOrder(
        [{ id: 'svc-analyzer', name: itemName, category: 'Service', price: total, qty: 1, image: ANALYZER_POSTER }],
        { name: form.name, phone: form.phone, address: `Asma Store (in-store service)`, city: `${dayLabel} at ${time}${form.notes ? ' · ' + form.notes : ''}`, payment: form.payment },
        total,
        0,
        total,
      )
      addOrder(order)
      setBooking({ ...order, pkg: pkg.name, scrub: scrub.name, slot: `${dayLabel} at ${time}` })
      setProcessing(false)
      window.scrollTo({ top: 0 })
    }, 2800)
  }

  if (booking) {
    return (
      <section className="detail section">
        <div className="container">
          <div className="order-success">
            <span className="success-icon">✓</span>
            <h2>Booking confirmed!</h2>
            <p className="order-num">Booking <strong>#{booking.num}</strong> · Total <strong>{formatPrice(booking.total)}</strong></p>
            <div className="booking-lines">
              <p><span>Service</span><span>{booking.pkg}</span></p>
              <p><span>Scrub</span><span>{booking.scrub}</span></p>
              <p><span>When</span><span>{booking.slot}</span></p>
              <p><span>Guest</span><span>{form.name} · {form.phone}</span></p>
            </div>
            <p>Asante! Arrive 10 minutes early, no makeup needed. We’ll reconfirm by SMS. See it under “My Orders”.</p>
            <button className="btn" onClick={onBack}>Back to home</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="detail section analyzer-page">
      <div className="container">
        <button className="back-link" onClick={onBack}>← Back to home</button>

        <div className="analyzer-hero">
          <div className="analyzer-video">
            <video src={ANALYZER_VIDEO} poster={ANALYZER_POSTER} controls autoPlay muted loop playsInline preload="metadata" />
            <span className="badge">3D AI Skin Analyzer — live demo</span>
          </div>
          <div className="analyzer-intro">
            <p className="eyebrow">In-store service · ~20–75 min</p>
            <h1>Face Analyzer Scan &amp; Treatment</h1>
            <p className="stars">★★★★★ <small>4.9 · 212 reviews</small></p>
            <p className="detail-desc">
              Stop guessing what your skin needs. Our 3D AI analyzer maps hydration, wrinkles,
              UV damage, pores and pigment with clinical precision — then our beautician treats
              and prescribes only what your skin actually needs.
            </p>
            <ul className="perks">
              <li>✓ Hydration · pores · spots map</li>
              <li>✓ UV &amp; pigment analysis</li>
              <li>✓ Digital report + routine</li>
            </ul>
            <div className="analyzer-trust">
              <div><strong>10s</strong><span>scan time</span></div>
              <div><strong>5-in-1</strong><span>skin metrics</span></div>
              <div><strong>Free</strong><span>rescan in 30 days</span></div>
            </div>
          </div>
        </div>

        <div className="booking-grid">
          <div className="booking-main">
            <div className="booking-block">
              <h2><span className="step-n">1</span> Choose your package</h2>
              <div className="pkg-grid">
                {ANALYZER_PACKAGES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`pkg-card ${pkgId === p.id ? 'selected' : ''}`}
                    onClick={() => setPkgId(p.id)}
                  >
                    {p.badge && <span className="pkg-badge">{p.badge}</span>}
                    <strong>{p.name}</strong>
                    <span className="pkg-price">{formatPrice(p.price)} <small>· {p.mins} min</small></span>
                    <span className="pkg-desc">{p.desc}</span>
                    <span className="pkg-points">{p.points.map((x) => <em key={x}>✓ {x}</em>)}</span>
                    <span className="pkg-radio" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-block">
              <h2><span className="step-n">2</span> Add a scrub? <small className="muted">— yes, we do scrubs</small></h2>
              <div className="scrub-grid">
                {SCRUB_OPTIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`scrub-card ${scrubId === s.id ? 'selected' : ''}`}
                    onClick={() => setScrubId(s.id)}
                  >
                    <strong>{s.name}</strong>
                    <span>{s.desc}</span>
                    <span className="pkg-price">{s.price === 0 ? 'Included / none' : '+' + formatPrice(s.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-block">
              <h2><span className="step-n">3</span> Pick a time window</h2>
              <div className="slot-days">
                {SLOT_DAYS.map((d) => (
                  <button key={d.key} type="button" className={`chip ${day === d.key ? 'active' : ''}`} onClick={() => setDay(d.key)}>
                    {d.label}<small>{d.sub}</small>
                  </button>
                ))}
              </div>
              <div className="slot-times">
                {SLOT_TIMES.map((t) => (
                  <button key={t} type="button" className={`slot ${time === t ? 'active' : ''}`} onClick={() => setTime(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="booking-side">
            <form className="order-form" onSubmit={pay}>
              <h3>Book &amp; pay</h3>
              <div className="booking-lines small">
                <p><span>{pkg.name}</span><span>{formatPrice(pkg.price)}</span></p>
                <p><span>{scrub.name}</span><span>{scrub.price === 0 ? '—' : formatPrice(scrub.price)}</span></p>
                <p><span>Slot</span><span>{dayLabel} · {time}</span></p>
                <p className="grand"><span>Total</span><span>{formatPrice(total)}</span></p>
              </div>
              <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required disabled={processing} />
              <input name="phone" type="tel" placeholder="Phone number" value={form.phone} onChange={handleChange} required disabled={processing} />
              <input name="notes" placeholder="Notes (skin concern, allergies…)" value={form.notes} onChange={handleChange} disabled={processing} />
              <select name="payment" value={form.payment} onChange={handleChange} disabled={processing}>
                <option value="mobile">Mobile money (M-Pesa, Tigo Pesa, Airtel Money)</option>
                <option value="card">Credit / Debit card</option>
                <option value="cod">Pay at store</option>
              </select>
              <button type="submit" className={`btn btn-wide ${processing ? 'loading' : ''}`} disabled={processing || !day || !time}>
                {processing ? (<><span className="spinner" aria-hidden="true" />Processing payment…</>) : (<>Pay {formatPrice(total)} — Confirm booking</>)}
              </button>
              <p className="secure-note">🔒 Secure checkout · Free cancellation up to 12h before</p>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ---------- Beauty Advice guide page ---------- */
const ADVICE_VIDEO =
  'https://v1.pinimg.com/videos/mc/720p/8c/7d/7d/8c7d7d12fb875bd3d2090ed323f18d80.mp4'
const ADVICE_POSTER =
  'https://i.pinimg.com/736x/89/f7/95/89f7955d46a3aac5d7355c2a4827ac61.jpg'

const ADVICE_GUIDES = [
  {
    id: 'coffee',
    tag: 'Instant glow · 2× / week',
    title: 'Coffee Scrub for Instant Glow',
    text: 'Homemade exfoliation that wakes up dull skin in minutes — smoother, brighter, make-up-ready glow.',
    steps: [
      'Mix 2 tbsp fine coffee + 1 tbsp honey + 1 tbsp plain yogurt',
      'Massage gently on damp face for 2 minutes (skip eye area)',
      'Leave 3 more minutes, rinse with lukewarm water',
      'Mist + moisturise immediately — glow lasts 2–3 days',
    ],
    image: IMG.coffeeScrub,
  },
  {
    id: 'morning',
    tag: 'Every morning · 10 min',
    title: 'Everyday 10-Minute Morning Routine',
    text: 'A fresh natural look before work or class — few products, no stress.',
    steps: [
      '0–2 min: gentle cleanse + lukewarm rinse',
      '2–4 min: rose mist / toner to rehydrate',
      '4–6 min: vitamin C or B5 serum, thin layer',
      '6–8 min: light moisturiser (Nivea Soft / Bakina)',
      '8–10 min: SPF 50 — never skip, even indoors',
    ],
    image: IMG.morningRoutine,
  },
  {
    id: 'tips',
    tag: 'Beginner friendly',
    title: 'Five Simple Beauty Tips',
    text: 'Small habits that beat expensive products when you stay consistent.',
    steps: [
      'Double-cleanse at night if you wore SPF or makeup',
      'SPF every morning — #1 anti-age secret',
      'Sleep 7–8h + 2L water daily for real glow',
      'Scrub 2× a week, never daily — barrier first',
      'Track with a free analyzer scan every 30 days',
    ],
    image: IMG.beautyTips,
  },
]

function AdvicePage({ onBack, onOpenAnalyzer }) {
  return (
    <section className="detail section analyzer-page">
      <div className="container">
        <button className="back-link" onClick={onBack}>← Back to home</button>

        <div className="analyzer-hero">
          <div className="analyzer-video">
            <video src={ADVICE_VIDEO} poster={ADVICE_POSTER} controls autoPlay muted loop playsInline preload="metadata" />
            <span className="badge">Morning glow routine — watch</span>
          </div>
          <div className="analyzer-intro">
            <p className="eyebrow">Free advice · Asma Store, Sinza</p>
            <h1>Beauty Advice That Actually Works</h1>
            <p className="stars">★★★★★ <small>4.9 · loved by 3,000+ customers</small></p>
            <p className="detail-desc">
              No guesswork. Start with the coffee scrub for instant glow, keep it with the
              10-minute morning routine, and lock it in with five simple habits.
              Need 1-on-1 help? Visit us in Sinza — advice is free with any purchase.
            </p>
            <ul className="perks">
              <li>✓ Coffee scrub — instant glow</li>
              <li>✓ 10-min morning routine</li>
              <li>✓ 5 simple everyday tips</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 22 }}>
              <button className="btn" onClick={onOpenAnalyzer}>Get a free skin scan</button>
              <a className="btn btn-outline" href="https://wa.me/255616509415" target="_blank" rel="noreferrer">WhatsApp us</a>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {ADVICE_GUIDES.map((g, i) => (
            <article key={g.id} className="service-card">
              <div className="service-img">
                <img src={g.image} alt={g.title} loading="lazy" />
                <span className="badge">{g.tag}</span>
              </div>
              <div className="service-body">
                <span className="category">Guide {i + 1}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <ol className="advice-steps">
                  {g.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>

        <div className="booking-block store-block">
          <div className="store-grid">
            <div>
              <p className="eyebrow">Visit us</p>
              <h2>Asma Store — Sinza, Dar es Salaam</h2>
              <ul className="contact-details">
                <li>⌂ Sinza Mori Road, Near Sinza Bus Stand, Dar es Salaam, Tanzania</li>
                <li>☏ <a href="tel:+255616509415">+255 616 509 415</a> (call / WhatsApp) · Mon–Sat</li>
                <li>✉ <a href="mailto:hello@asmastore.com">hello@asmastore.com</a></li>
              </ul>
              <div className="hero-actions" style={{ marginTop: 18, marginBottom: 0 }}>
                <a className="btn btn-small" href="https://wa.me/255616509415?text=Hi%20Asma%20Store!%20I%20need%20beauty%20advice" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                <a className="btn btn-small btn-outline" href="https://www.google.com/maps/search/?api=1&query=Sinza+Mori+Road+Dar+es+Salaam" target="_blank" rel="noreferrer">Open in Maps</a>
              </div>
            </div>
            <div className="hours-card">
              <h3>Opening hours</h3>
              <p><span>Monday – Saturday</span><span>09:00 – 20:00</span></p>
              <p><span>Friday break</span><span>12:30 – 14:00</span></p>
              <p><span>Sunday</span><span>12:00 – 18:00</span></p>
              <p className="ship-hint">Walk-ins welcome · Scans: book ahead on busy Saturdays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Reviews</p>
          <h2>Loved by thousands</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="testimonial">
              <p className="stars">★★★★★</p>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section className="contact section" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2>Let's talk beauty</h2>
          <p>
            Questions about shades, orders, or wholesale partnerships? Our team replies within one
            business day.
          </p>
          <ul className="contact-details">
            <li>✉ hello@asmastore.com</li>
            <li>☏ +255 616 509 415 (call / WhatsApp)</li>
            <li>⌂ Sinza Mori Road, Near Sinza Bus Stand, Dar es Salaam, Tanzania</li>
            <li>🕘 Mon–Sat 09:00–20:00 · Sun 12:00–18:00</li>
          </ul>
        </div>
        {sent ? (
          <div className="form-success">
            <h3>Thank you, {form.name || 'beautiful'}! 💌</h3>
            <p>Your message is on its way. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
            <textarea name="message" rows="4" placeholder="How can we help?" value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn">Send Message</button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="logo">Asma Store<span>.</span></a>
        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>© {new Date().getFullYear()} Asma Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ---------- App ---------- */
export default function App() {
  const [view, setView] = useState('home') // home | products | perfume | perfumeSetDetail | detail | cart | sets | setDetail | orders | orderDetail | analyzer | advice | auth
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [detailReturn, setDetailReturn] = useState('home')
  const [selectedSet, setSelectedSet] = useState(null)
  const [selectedPerfumeSet, setSelectedPerfumeSet] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [authMode, setAuthMode] = useState('login')

  const [user, setUser] = useState(() => loadStore('lumiere_user'))
  const [orders, setOrders] = useState(() => loadStore('lumiere_orders') || [])
  const [cart, setCart] = useState([])

  useEffect(() => {
    localStorage.setItem('lumiere_user', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    localStorage.setItem('lumiere_orders', JSON.stringify(orders))
  }, [orders])

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const addToBag = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const changeQty = (id, delta) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    )

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const addOrder = (order) => {
    setOrders((prev) => [order, ...prev])
  }

  const goHome = () => {
    setView('home')
    window.scrollTo({ top: 0 })
  }

  const openProduct = (p, returnTo) => {
    setSelectedProduct(p)
    setDetailReturn(returnTo || view)
    setView('detail')
    window.scrollTo({ top: 0 })
  }

  const openProducts = () => {
    setView('products')
    window.scrollTo({ top: 0 })
  }

  const openPerfume = () => {
    setView('perfume')
    window.scrollTo({ top: 0 })
  }

  const openPerfumeSet = (s) => {
    setSelectedPerfumeSet(s)
    setView('perfumeSetDetail')
    window.scrollTo({ top: 0 })
  }

  const openSets = () => {
    setView('sets')
    window.scrollTo({ top: 0 })
  }

  const openSet = (s) => {
    setSelectedSet(s)
    setView('setDetail')
    window.scrollTo({ top: 0 })
  }

  const openAnalyzer = () => {
    setView('analyzer')
    window.scrollTo({ top: 0 })
  }

  const openAdvice = () => {
    setView('advice')
    window.scrollTo({ top: 0 })
  }

  const openCart = () => {
    setView('cart')
    window.scrollTo({ top: 0 })
  }

  const openOrders = () => {
    setView('orders')
    window.scrollTo({ top: 0 })
  }

  const openOrder = (o) => {
    setSelectedOrder(o)
    setView('orderDetail')
    window.scrollTo({ top: 0 })
  }

  const continueShopping = () => {
    setView(['products', 'perfume'].includes(detailReturn) ? detailReturn : 'home')
    window.scrollTo({ top: 0 })
  }

  const navbar = (
    <Navbar
      cartCount={cartCount}
      user={user}
      onCart={openCart}
      onHome={goHome}
      onProducts={openProducts}
      onPerfume={openPerfume}
      onSets={openSets}
      onOrders={openOrders}
      onAuth={(m) => { setAuthMode(m); setView('auth'); window.scrollTo({ top: 0 }) }}
      onLogout={() => setUser(null)}
    />
  )

  let content
  if (view === 'detail' && selectedProduct) {
    content = (
      <ProductDetail
        key={selectedProduct.id}
        product={selectedProduct}
        onBack={continueShopping}
        addOrder={addOrder}
      />
    )
  } else if (view === 'setDetail' && selectedSet) {
    content = (
      <SetDetailPage
        set={selectedSet}
        onBack={openSets}
        onAddToBag={addToBag}
      />
    )
  } else if (view === 'cart') {
    content = (
      <CartPage
        items={cart}
        changeQty={changeQty}
        removeItem={removeFromCart}
        onContinueShopping={continueShopping}
        onComplete={(order) => {
          addOrder(order)
          setCart([])
        }}
      />
    )
  } else if (view === 'orders') {
    content = <OrdersPage orders={orders} onSelectOrder={openOrder} onShop={openProducts} />
  } else if (view === 'orderDetail' && selectedOrder) {
    content = <OrderDetailPage order={selectedOrder} onBack={openOrders} />
  } else if (view === 'sets') {
    content = <SetsPage onSelectSet={openSet} />
  } else if (view === 'products') {
    content = (
      <ProductsPage
        onAdd={addToBag}
        onSelect={(p) => openProduct(p, 'products')}
        cartItems={cart}
      />
    )
  } else if (view === 'perfume') {
    content = (
      <PerfumePage
        onAdd={addToBag}
        onSelect={(p) => openProduct(p, 'perfume')}
        onSelectSet={openPerfumeSet}
        cartItems={cart}
      />
    )
  } else if (view === 'perfumeSetDetail' && selectedPerfumeSet) {
    content = (
      <PerfumeSetDetailPage
        set={selectedPerfumeSet}
        onBack={openPerfume}
        onAddToBag={addToBag}
      />
    )
  } else if (view === 'analyzer') {
    content = <AnalyzerBookingPage onBack={goHome} addOrder={addOrder} />
  } else if (view === 'advice') {
    content = <AdvicePage onBack={goHome} onOpenAnalyzer={openAnalyzer} />
  } else if (view === 'auth') {
    content = (
      <AuthPage
        mode={authMode}
        onSwitchMode={setAuthMode}
        onSuccess={(u) => { setUser(u); goHome() }}
        onBack={goHome}
      />
    )
  } else {
    content = (
      <>
        <Hero />
        <Features />
        <Services onOpenAnalyzer={openAnalyzer} onOpenAdvice={openAdvice} />
        <Products onAdd={addToBag} onSelect={(p) => openProduct(p, 'home')} cartItems={cart} onSeeAll={openProducts} />
        <SetsPreview onSeeAll={openSets} onSelectSet={openSet} />
        <About />
        <Testimonials />
        <Contact />
      </>
    )
  }

  return (
    <>
      {navbar}
      <main>{content}</main>
      <Footer />
      {cartCount > 0 && view !== 'cart' && (
        <button className="floating-cart" onClick={openCart} aria-label={`Open cart, ${cartCount} items`}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1.5" />
            <circle cx="19" cy="21" r="1.5" />
            <path d="M2 3h3l2.6 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L22 7H6" />
          </svg>
          <span className="floating-cart-count" key={cartCount}>{cartCount}</span>
        </button>
      )}
    </>
  )
}

function SetsPreview({ onSeeAll, onSelectSet }) {
  return (
    <section className="products section" id="sets-preview" style={{ background: 'var(--blush)' }}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Curated Sets</p>
          <h2>Glow together, save more</h2>
        </div>
        <div className="product-grid">
          {SETS.slice(0, 3).map((set) => (
            <article
              key={set.id}
              className="product-card set-card"
              onClick={() => onSelectSet(set)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectSet(set)}
            >
              <div className="product-img">
                <img src={set.image} alt={set.name} loading="lazy" />
                <span className="badge">{set.productIds.length} products</span>
              </div>
              <div className="product-body">
                <span className="category">Set</span>
                <h3>{set.name}</h3>
                <p>{set.tagline}</p>
                <div className="product-foot">
                  <span className="price">{formatPrice(set.price)}</span>
                  <span className="view-set">View set →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button className="btn btn-outline" onClick={onSeeAll}>View All Sets</button>
        </div>
      </div>
    </section>
  )
}
