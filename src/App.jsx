import { useState, useEffect, createContext, useContext, useId } from 'react'
import './App.css'

/* ---------- Languages: English / Kiswahili ---------- */
const STR = {
  en: {
    'nav.home': 'Home', 'nav.products': 'Products', 'nav.perfume': 'Perfume', 'nav.sets': 'Sets',
    'nav.orders': 'Orders', 'nav.cart': 'Cart', 'nav.login': 'Log in', 'nav.register': 'Register',
    'nav.myOrders': 'My Orders', 'nav.logout': 'Log out', 'nav.account': 'Account', 'nav.menu': 'Toggle menu',
    'hero.eyebrow': 'Cruelty-Free · Clean Beauty', 'hero.a': 'Beauty that', 'hero.glow': 'glows', 'hero.b': 'from within',
    'hero.lead': 'Premium skincare and makeup crafted with clean, botanical ingredients — designed to make every skin day its best day.',
    'hero.shop': 'Shop Collection', 'hero.story': 'Our Story',
    'hero.customers': 'Happy customers', 'hero.rating': 'Average rating', 'hero.vegan': 'Vegan formulas',
    'home.collectionEyebrow': 'Shop', 'home.collectionTitle': 'The collection', 'home.viewAll': 'View All Products',
    'home.setsEyebrow': 'Curated Sets', 'home.setsTitle': 'Glow together, save more', 'home.viewAllSets': 'View All Sets',
    'search.products': 'Search by name or type…', 'search.perfumes': 'Search perfumes by name or brand…',
    'view.grid': 'Grid view', 'view.list': 'List view', 'common.items': 'items', 'common.item': 'item',
    'common.scents': 'scents', 'common.scent': 'scent', 'common.clearAll': 'Clear search & filters',
    'card.add': 'Add to Bag', 'card.inbag': 'In Bag ✓', 'card.wishAdd': 'Add to wishlist', 'card.wishRemove': 'Remove from wishlist',
    'shopAll.eyebrow': 'Shop All', 'shopAll.title': 'Every product, one place',
    'shopAll.sub': 'Browse the full collection by category. Click a product to see details and order.',
    'sets.eyebrow': 'Curated Sets', 'sets.title': 'Bundles made to glow together',
    'sets.sub': "Thoughtfully paired products at a better price. Click a set to see what's inside.",
    'sets.view': 'View set →', 'set.products': 'products',
    'perfume.eyebrow': 'Fragrance', 'perfume.title': 'The perfume collection',
    'perfume.sub': 'Designer & Arabian icons for him, her and both. Filter, then click a perfume to see details and order.',
    'perfume.setsEyebrow': 'Perfume Sets', 'perfume.setsTitle': 'Gift sets & layered collections',
    'cart.title': 'Shopping cart', 'cart.eyebrow': 'Your bag', 'cart.empty': 'Your bag is empty — time to treat yourself.',
    'cart.browse': 'Browse Products', 'cart.summary': 'Summary', 'cart.subtotal': 'Subtotal', 'cart.shipping': 'Shipping',
    'cart.free': 'Free', 'cart.total': 'Total', 'cart.checkout': 'Proceed to Checkout', 'cart.continue': '← Continue shopping',
    'cart.moreForFree': 'more for free shipping.', 'cart.add': 'Add',
    'co.eyebrow': 'Checkout', 'co.title': 'Almost there', 'co.summary': 'Order summary', 'co.delivery': 'Delivery details',
    'co.name': 'Full name', 'co.phone': 'Phone number', 'co.address': 'Delivery address', 'co.city': 'City / Region',
    'co.pay': 'Pay Now', 'co.secure': '🔒 Secure checkout · SSL encrypted', 'co.back': '← Back to cart',
    'co.qty': 'Qty', 'co.success': 'Payment successful!', 'co.thanks': 'Continue Shopping',
    'orders.eyebrow': 'Track & history', 'orders.title': 'Your orders',
    'orders.sub': 'Every product order & service booking, with live status. Click any order for full details.',
    'orders.empty': 'No orders yet — your future favourites are waiting.', 'orders.shop': 'Shop now',
    'orders.details': 'Details →', 'orders.back': '← Back to my orders',
    'od.title': 'Order details', 'od.items': 'Items', 'od.subtotal': 'Subtotal', 'od.totalPaid': 'Total paid', 'od.total': 'Total',
    'od.delivery': 'Delivery details', 'od.booking': 'Booking details', 'od.shipping': 'Shipping', 'od.fee': 'Booking fee',
    'od.free': 'Free', 'od.paidVia': 'Paid via', 'od.help': 'Need help with this', 'od.order': 'order', 'od.bookingWord': 'booking',
    'od.helpSub': '— we reply within a few hours.', 'od.mention': 'Mention',
    'svc.eyebrow': 'Our Services', 'svc.title': 'Advice + machine treatments, in store',
    'svc.sub': 'Not sure what your skin needs? Get scanned, treated and advised — then shop only what works for you.',
    'foot.about': 'About', 'foot.products': 'Products', 'foot.reviews': 'Reviews', 'foot.contact': 'Contact',
    'foot.rights': 'All rights reserved.',
    'contact.eyebrow': 'Contact', 'contact.title': "Let's talk beauty",
    'contact.sub': 'Questions about shades, orders, or wholesale partnerships? Our team replies within one business day.',
    'contact.send': 'Send Message', 'contact.name': 'Your name', 'contact.email': 'Email address', 'contact.msg': 'How can we help?',
    'auth.back': '← Back to shop', 'auth.welcome': 'Wellcome Back', 'auth.loginSub': "Let's login to grab amazing deal",
    'auth.create': 'Create Account', 'auth.joinSub': "Let's join to grab amazing deals",
    'auth.google': 'Continue with Google', 'auth.apple': 'Continue with Apple', 'auth.or': 'Or',
    'auth.email': 'Email', 'auth.password': 'Password', 'auth.fullname': 'Full name',
    'auth.remember': 'Remember me', 'auth.forgot': 'Forget Password?', 'auth.loginBtn': 'Login', 'auth.signupBtn': 'Sign Up',
    'auth.have': "Don't have an account?", 'auth.have2': 'Already have an account?',
    'about.eyebrow': 'About Us', 'about.title': 'Luxury beauty, honestly made',
    'rev.eyebrow': 'Reviews', 'rev.title': 'Loved by thousands',
    'lang.label': 'Language', 'lang.en': 'English', 'lang.sw': 'Kiswahili',
    'share.share': 'Share', 'share.copied': 'Link copied!',
    'corner.cart': 'Open cart', 'corner.items': 'items',
    'detail.backShop': '← Back to shop', 'detail.backSets': '← Back to sets', 'detail.backPerfume': '← Back to perfumes',
    'detail.qty': 'Quantity', 'detail.total': 'Total', 'detail.place': 'Place Order',
    'detail.processing': 'Processing payment…', 'detail.confirmed': 'Order confirmed!',
    'detail.continue': 'Continue Shopping', 'detail.secure': '🔒 Secure checkout · SSL encrypted',
    'detail.inside': "What's inside this set", 'detail.indiv': 'Individual total', 'detail.setPrice': 'Set price',
    'detail.added': 'Added to Bag ✓', 'detail.addSet': 'Add Set to Bag',
    'common.backHome': '← Back to home', 'svc.scan': 'Get a free skin scan',
    'common.all': 'All', 'common.reviews': 'reviews', 'common.showAll': 'Show all', 'common.close': 'Close',
    'aud.men': 'Men', 'aud.women': 'Women', 'aud.both': 'Both',
    'cat.skincare': 'Skincare', 'cat.makeup': 'Makeup', 'cat.body': 'Body', 'cat.suncare': 'Sun Care',
    'st.processing': 'Processing', 'st.confirmed': 'Confirmed', 'st.completed': 'Completed', 'st.shipped': 'Shipped', 'st.delivered': 'Delivered',
    'set.word': 'Set', 'set.curated': 'Curated Set',
    'steps.1t': 'Place your order', 'steps.1d': 'Fill in your delivery details below — it takes under a minute.',
    'steps.2t': 'We confirm & pack', 'steps.2d': 'You get a confirmation email while we hand-wrap your items.',
    'steps.3t': 'Fast delivery', 'steps.3d': 'Ships within 24h. Free shipping on orders over TShs 100,000.',
    'feat.1t': 'Cruelty-Free', 'feat.1d': 'Never tested on animals. Certified Leaping Bunny approved.',
    'feat.2t': 'Clean Formula', 'feat.2d': 'No parabens, sulfates, or synthetic fragrance. Ever.',
    'feat.3t': 'Dermatologist Tested', 'feat.3d': 'Gentle enough for sensitive skin, proven by science.',
    'feat.4t': 'Eco Packaging', 'feat.4d': 'Recyclable glass and refillable compacts on every line.',
    'pay.card': 'Credit / Debit card', 'pay.mobile': 'Mobile money (M-Pesa, Tigo Pesa, Airtel Money)', 'pay.cod': 'Cash on delivery', 'pay.store': 'Pay at store',
    'perk.ship': 'Free shipping over TShs 100,000', 'perk.returns': '30-day free returns', 'perk.24h': 'Ships within 24 hours',
    'perk.gift': 'Gift-wrapped in signature packaging', 'perk.sealed': 'Original & sealed bottles', 'perk.giftreq': 'Gift-wrapped on request',
    'co.thanksLong': 'Asante sana, {name}! Your {count} item(s) will be packed with care and shipped to {city} within 24 hours. A confirmation SMS and email are on their way.',
    'auth.caption': 'Browse thousands of beauty essentials to glow, shop, and shine with trusted formulas.',
    'hero.c1': 'Real results, real glow', 'hero.c2': 'Self-care Sundays', 'hero.c3': '"My holy grail serum!"',
    'svc.advice.tag': '1-on-1 Advice', 'svc.advice.title': 'Personal Beauty Advice',
    'svc.advice.text': 'Tell us your skin goals — our beauticians build you a simple routine and tell you exactly what to buy (and what to skip).',
    'svc.advice.points': ['Skin-type & concern check', 'Custom routine plan', 'Free with any purchase'],
    'svc.advice.cta': 'Get free advice',
    'svc.analyzer.tag': 'AI Face Analyzer', 'svc.analyzer.title': 'Face Analyzer Scan',
    'svc.analyzer.text': 'High-precision AI scan reads hydration, spots, pores, wrinkles and sun damage in 30 seconds — then we match products to your real skin.',
    'svc.analyzer.points': ['Hydration · spots · pores', 'Before / after tracking', 'TShs 15,000 — free over 100k'],
    'svc.analyzer.cta': 'Book a scan',
    'svc.machine.tag': 'Machine Treatment', 'svc.machine.title': 'Machine Face Treatment',
    'svc.machine.text': 'Deep cleanse, hydra-glow and lifting with our pro facial machine. Instant glow before events — gentle for sensitive skin.',
    'svc.machine.points': ['Deep cleanse + hydra', 'Lifting & brightening', 'From TShs 45,000 / session'],
    'svc.machine.cta': 'Book treatment',
    'an.popular': 'Most popular',
    'an.s1': 'Choose your package', 'an.s2': 'Add a scrub?', 'an.s2note': '— yes, we do scrubs', 'an.s3': 'Pick a time window',
    'an.book': 'Book & pay', 'an.cancel': 'Free cancellation up to 12h before', 'an.included': 'Included / none',
    'an.pay': 'Pay {total} — Confirm booking',
    'an.okTitle': 'Booking confirmed!', 'an.okService': 'Service', 'an.okScrub': 'Scrub', 'an.okWhen': 'When', 'an.okGuest': 'Guest',
    'an.okThanks': 'Asante! Arrive 10 minutes early, no makeup needed. We’ll reconfirm by SMS. See it under “My Orders”.',
    'pkg.essential.name': 'Essential Scan', 'pkg.essential.desc': 'AI scan + digital skin report + exact product matches.',
    'pkg.essential.points': ['Hydration · pores · spots · wrinkles', 'UV damage & pigment map', 'Personal product list'],
    'pkg.glow.name': 'Scan + Glow Facial', 'pkg.glow.desc': 'Bestseller — scan plus machine mini-facial for instant glow.',
    'pkg.glow.points': ['Everything in Essential', 'Machine cleanse + hydra', 'Scrub exfoliation included'],
    'pkg.clinical.name': 'Full Clinical Ritual', 'pkg.clinical.desc': 'Scan + full machine treatment + mask + before/after tracking.',
    'pkg.clinical.points': ['Everything in Glow', 'Lifting + brightening pass', 'Mask + after-care plan'],
    'scrub.none.name': 'No scrub', 'scrub.none.desc': 'Scan / facial only',
    'scrub.gentle.name': 'Gentle enzyme scrub', 'scrub.gentle.desc': 'Sensitive-safe glow polish',
    'scrub.deep.name': 'Deep pore scrub', 'scrub.deep.desc': 'Blackheads + texture reset',
    'ad.guide': 'Guide', 'ad.visit': 'Visit us', 'ad.hours': 'Opening hours',
    'ad.mon': 'Monday – Saturday', 'ad.fri': 'Friday break', 'ad.sun': 'Sunday',
    'ad.walk': 'Walk-ins welcome · Scans: book ahead on busy Saturdays',
    'ad.chat': 'Chat on WhatsApp', 'ad.maps': 'Open in Maps',
    'ad.eyebrow': 'Free advice · Asma Store, Sinza', 'ad.title': 'Beauty Advice That Actually Works',
    'ad.rating': '4.9 · loved by 3,000+ customers',
    'ad.desc': 'No guesswork. Start with the coffee scrub for instant glow, keep it with the 10-minute morning routine, and lock it in with five simple habits. Need 1-on-1 help? Visit us in Sinza — advice is free with any purchase.',
    'ad.p1': 'Coffee scrub — instant glow', 'ad.p2': '10-min morning routine', 'ad.p3': '5 simple everyday tips',
    'ad.coffee.tag': 'Instant glow · 2× / week', 'ad.coffee.title': 'Coffee Scrub for Instant Glow',
    'ad.coffee.text': 'Homemade exfoliation that wakes up dull skin in minutes — smoother, brighter, make-up-ready glow.',
    'ad.coffee.steps': ['Mix 2 tbsp fine coffee + 1 tbsp honey + 1 tbsp plain yogurt', 'Massage gently on damp face for 2 minutes (skip eye area)', 'Leave 3 more minutes, rinse with lukewarm water', 'Mist + moisturise immediately — glow lasts 2–3 days'],
    'ad.morning.tag': 'Every morning · 10 min', 'ad.morning.title': 'Everyday 10-Minute Morning Routine',
    'ad.morning.text': 'A fresh natural look before work or class — few products, no stress.',
    'ad.morning.steps': ['0–2 min: gentle cleanse + lukewarm rinse', '2–4 min: rose mist / toner to rehydrate', '4–6 min: vitamin C or B5 serum, thin layer', '6–8 min: light moisturiser (Nivea Soft / Bakina)', '8–10 min: SPF 50 — never skip, even indoors'],
    'ad.tips.tag': 'Beginner friendly', 'ad.tips.title': 'Five Simple Beauty Tips',
    'ad.tips.text': 'Small habits that beat expensive products when you stay consistent.',
    'ad.tips.steps': ['Double-cleanse at night if you wore SPF or makeup', 'SPF every morning — #1 anti-age secret', 'Sleep 7–8h + 2L water daily for real glow', 'Scrub 2× a week, never daily — barrier first', 'Track with a free analyzer scan every 30 days'],
    'ab.l1': 'Sourced from certified sustainable suppliers', 'ab.l2': 'Clinically tested on real skin, never animals', 'ab.l3': 'Free returns within 30 days — no questions asked',
    'ab.caption': 'Inside our studio & boutique',
    'ct.ok': 'Thank you, {name}! 💌', 'ct.oksub': "Your message is on its way. We'll get back to you shortly.",
    'or.showAll': 'Show all', 'or.none': 'No {f} orders.', 'ord.svc': '· Service', 'ord.prod': '· Products',
    'glow.bright': 'Luminous beauty designed to elevate your natural glow',
    'glow.nourish': 'Bold nourishment made to honor your natural glow',
    'glow.for': 'Suggested for you', 'glow.use': 'Products to use', 'glow.set': 'Set to pair with',
    'an.eyebrow': 'In-store service · ~20–75 min', 'an.title': 'Face Analyzer Scan & Treatment',
    'an.desc': 'Stop guessing what your skin needs. Our 3D AI analyzer maps hydration, wrinkles, UV damage, pores and pigment with clinical precision — then our beautician treats and prescribes only what your skin actually needs.',
    'an.p1': 'Hydration · pores · spots map', 'an.p2': 'UV & pigment analysis', 'an.p3': 'Digital report + routine',
    'an.t1v': '10s', 'an.t1l': 'scan time', 'an.t2v': '5-in-1', 'an.t2l': 'skin metrics', 'an.t3v': 'Free', 'an.t3l': 'rescan in 30 days',
    'an.video': '3D AI Skin Analyzer — live demo', 'an.mins': 'min',
    'an.notes': 'Notes (skin concern, allergies…)',
  },
  sw: {
    'nav.home': 'Nyumbani', 'nav.products': 'Bidhaa', 'nav.perfume': 'Manukato', 'nav.sets': 'Seti',
    'nav.orders': 'Oda', 'nav.cart': 'Kikapu', 'nav.login': 'Ingia', 'nav.register': 'Jisajili',
    'nav.myOrders': 'Oda Zangu', 'nav.logout': 'Toka', 'nav.account': 'Akaunti', 'nav.menu': 'Fungua menyu',
    'hero.eyebrow': 'Bila Ukatili · Urembo Safi', 'hero.a': 'Urembo unao', 'hero.glow': "ng'aa", 'hero.b': 'kutoka ndani',
    'hero.lead': 'Vipodozi bora vya ngozi na urembo vilivyotengenezwa kwa viungo safi vya asili — ili kila siku ngozi yako ing’ae.',
    'hero.shop': 'Angalia Bidhaa', 'hero.story': 'Hadithi Yetu',
    'hero.customers': 'Wateja wenye furaha', 'hero.rating': 'Ukadiriaji', 'hero.vegan': 'Asilia 100%',
    'home.collectionEyebrow': 'Duka', 'home.collectionTitle': 'Bidhaa zetu', 'home.viewAll': 'Angalia Bidhaa Zote',
    'home.setsEyebrow': 'Seti Maalum', 'home.setsTitle': 'Ng’aa pamoja, okoa zaidi', 'home.viewAllSets': 'Angalia Seti Zote',
    'search.products': 'Tafuta kwa jina au aina…', 'search.perfumes': 'Tafuta manukato kwa jina…',
    'view.grid': 'Mwonekano wa gridi', 'view.list': 'Mwonekano wa orodha', 'common.items': 'bidhaa', 'common.item': 'bidhaa',
    'common.scents': 'manukato', 'common.scent': 'manukato', 'common.clearAll': 'Futa utafutaji',
    'card.add': 'Weka Kikapuni', 'card.inbag': 'Kikapuni ✓', 'card.wishAdd': 'Weka kwenye orodha', 'card.wishRemove': 'Ondoa kwenye orodha',
    'shopAll.eyebrow': 'Duka Zima', 'shopAll.title': 'Bidhaa zote mahali pamoja',
    'shopAll.sub': 'Angalia bidhaa zote kwa kategoria. Bonyeza bidhaa kuona maelezo na kuagiza.',
    'sets.eyebrow': 'Seti Maalum', 'sets.title': 'Vifurushi vilivyopangwa kung’aa pamoja',
    'sets.sub': 'Bidhaa zilizochaguliwa kwa bei nafuu. Bonyeza seti kuona kilichomo.',
    'sets.view': 'Angalia seti →', 'set.products': 'bidhaa',
    'perfume.eyebrow': 'Manukato', 'perfume.title': 'Manukato yetu',
    'perfume.sub': 'Manukato maarufu kwa wanaume, wanawake na wote. Chuja, kisha bonyeza kuona maelezo.',
    'perfume.setsEyebrow': 'Seti za Manukato', 'perfume.setsTitle': 'Seti za zawadi',
    'cart.title': 'Kikapu', 'cart.eyebrow': 'Kikapu chako', 'cart.empty': 'Kikapu chako kiko wazi — jipatie kitu kizuri.',
    'cart.browse': 'Angalia Bidhaa', 'cart.summary': 'Muhtasari', 'cart.subtotal': 'Jumla ndogo', 'cart.shipping': 'Usafiri',
    'cart.free': 'Bure', 'cart.total': 'Jumla', 'cart.checkout': 'Endelea Kulipa', 'cart.continue': '← Endelea kununua',
    'cart.moreForFree': 'ili upate usafiri bure.', 'cart.add': 'Ongeza',
    'co.eyebrow': 'Malipo', 'co.title': 'Karibu kumaliza', 'co.summary': 'Muhtasari wa oda', 'co.delivery': 'Maelezo ya utoaji',
    'co.name': 'Jina kamili', 'co.phone': 'Namba ya simu', 'co.address': 'Anwani ya utoaji', 'co.city': 'Mji / Mkoa',
    'co.pay': 'Lipa Sasa', 'co.secure': '🔒 Malipo salama · SSL', 'co.back': '← Rudi kikapuni',
    'co.qty': 'Idadi', 'co.success': 'Malipo yamefanikiwa!', 'co.thanks': 'Endelea Kununua',
    'orders.eyebrow': 'Fuatilia & historia', 'orders.title': 'Oda zako',
    'orders.sub': 'Kila oda na huduma ulizoweka, pamoja na hali yake. Bonyeza oda kuona maelezo.',
    'orders.empty': 'Huna oda bado — vipendwa vyako vinakusubiri.', 'orders.shop': 'Nunua Sasa',
    'orders.details': 'Maelezo →', 'orders.back': '← Rudi kwenye oda',
    'od.title': 'Maelezo ya oda', 'od.items': 'Vitu', 'od.subtotal': 'Jumla ndogo', 'od.totalPaid': 'Jumla iliyolipwa', 'od.total': 'Jumla',
    'od.delivery': 'Maelezo ya utoaji', 'od.booking': 'Maelezo ya huduma', 'od.shipping': 'Usafiri', 'od.fee': 'Ada ya huduma',
    'od.free': 'Bure', 'od.paidVia': 'Imelipwa kwa', 'od.help': 'Unahitaji msaada na', 'od.order': 'oda hii', 'od.bookingWord': 'huduma hii',
    'od.helpSub': '— tunajibu ndani ya masaa machache.', 'od.mention': 'Taja',
    'svc.eyebrow': 'Huduma Zetu', 'svc.title': 'Ushauri + matibabu ya mashine, dukani',
    'svc.sub': 'Hujui ngozi yako inahitaji nini? Pimwa, tibiwa na shauriwa — kisha nunua kinachokufaa.',
    'foot.about': 'Kuhusu', 'foot.products': 'Bidhaa', 'foot.reviews': 'Maoni', 'foot.contact': 'Mawasiliano',
    'foot.rights': 'Haki zote zimehifadhiwa.',
    'contact.eyebrow': 'Mawasiliano', 'contact.title': 'Tuongee kuhusu urembo',
    'contact.sub': 'Maswali kuhusu rangi, oda, au ubia? Timu yetu itajibu ndani ya siku moja ya kazi.',
    'contact.send': 'Tuma Ujumbe', 'contact.name': 'Jina lako', 'contact.email': 'Barua pepe', 'contact.msg': 'Tunawezaje kukusaidia?',
    'auth.back': '← Rudi dukani', 'auth.welcome': 'Karibu Tena', 'auth.loginSub': 'Ingia kupata ofa nzuri',
    'auth.create': 'Fungua Akaunti', 'auth.joinSub': 'Jiunge kupata ofa nzuri',
    'auth.google': 'Endelea na Google', 'auth.apple': 'Endelea na Apple', 'auth.or': 'Au',
    'auth.email': 'Barua pepe', 'auth.password': 'Nenosiri', 'auth.fullname': 'Jina kamili',
    'auth.remember': 'Nikumbuke', 'auth.forgot': 'Umesahau Nenosiri?', 'auth.loginBtn': 'Ingia', 'auth.signupBtn': 'Jisajili',
    'auth.have': 'Huna akaunti?', 'auth.have2': 'Una akaunti tayari?',
    'about.eyebrow': 'Kuhusu Sisi', 'about.title': 'Urembo wa kifahari, wa kweli',
    'rev.eyebrow': 'Maoni', 'rev.title': 'Wanapendwa na maelfu',
    'lang.label': 'Lugha', 'lang.en': 'English', 'lang.sw': 'Kiswahili',
    'share.share': 'Shiriki', 'share.copied': 'Link imenakiliwa!',
    'corner.cart': 'Fungua kikapu', 'corner.items': 'vitu',
    'detail.backShop': '← Rudi dukani', 'detail.backSets': '← Rudi kwenye seti', 'detail.backPerfume': '← Rudi kwenye manukato',
    'detail.qty': 'Idadi', 'detail.total': 'Jumla', 'detail.place': 'Weka Oda',
    'detail.processing': 'Inashughulikia malipo…', 'detail.confirmed': 'Oda imethibitishwa!',
    'detail.continue': 'Endelea Kununua', 'detail.secure': '🔒 Malipo salama · SSL',
    'detail.inside': 'Kilichomo', 'detail.indiv': 'Jumla ya vitu', 'detail.setPrice': 'Bei ya seti',
    'detail.added': 'Kikapuni ✓', 'detail.addSet': 'Weka Seti Kikapuni',
    'common.backHome': '← Rudi nyumbani', 'svc.scan': 'Pata scan bure ya ngozi',
    'common.all': 'Zote', 'common.reviews': 'maoni', 'common.showAll': 'Onyesha zote', 'common.close': 'Funga',
    'aud.men': 'Wanaume', 'aud.women': 'Wanawake', 'aud.both': 'Wote',
    'cat.skincare': 'Ngozi', 'cat.makeup': 'Vipodozi', 'cat.body': 'Mwili', 'cat.suncare': 'Jua',
    'st.processing': 'Inashughulikiwa', 'st.confirmed': 'Imethibitishwa', 'st.completed': 'Imekamilika', 'st.shipped': 'Imetumwa', 'st.delivered': 'Imewasilishwa',
    'set.word': 'Seti', 'set.curated': 'Seti Maalum',
    'steps.1t': 'Weka oda yako', 'steps.1d': 'Jaza maelezo ya utoaji hapa chini — inachukua chini ya dakika.',
    'steps.2t': 'Tunathibitisha na kufunga', 'steps.2d': 'Unapata barua pepe huku tukifunga bidhaa zako kwa uangalifu.',
    'steps.3t': 'Uwasilishaji wa haraka', 'steps.3d': 'Tunasafirisha ndani ya saa 24. Usafiri bure kwa oda zaidi ya TShs 100,000.',
    'feat.1t': 'Bila Ukatili', 'feat.1d': 'Haijawahi kujaribiwa kwa wanyama. Imethibitishwa.',
    'feat.2t': 'Viungo Safi', 'feat.2d': 'Hakuna parabens, sulfates, wala manukato ya kutengeneza.',
    'feat.3t': 'Imepitishwa na Madaktari', 'feat.3d': 'Laini hata kwa ngozi nyeti, imethibitishwa kisayansi.',
    'feat.4t': 'Vifungashio Rafiki', 'feat.4d': 'Chupa zinazoweza kurejeshwa kwenye kila laini.',
    'pay.card': 'Kadi ya benki', 'pay.mobile': 'Pesa kwa simu (M-Pesa, Tigo Pesa, Airtel Money)', 'pay.cod': 'Lipa ukipokea', 'pay.store': 'Lipa dukani',
    'perk.ship': 'Usafiri bure kwa oda zaidi ya TShs 100,000', 'perk.returns': 'Kurudisha bure ndani ya siku 30', 'perk.24h': 'Tunasafirisha ndani ya saa 24',
    'perk.gift': 'Imefungwa kama zawadi', 'perk.sealed': 'Chupa asilia zilizofungwa', 'perk.giftreq': 'Kufungwa kama zawadi ukiomba',
    'co.thanksLong': 'Asante sana, {name}! Vitu vyako {count} vitafungwa kwa uangalifu na kutumwa {city} ndani ya saa 24. Ujumbe wa SMS na barua pepe njiani.',
    'auth.caption': 'Angalia maelfu ya vipodozi kung’aa, kununua na kumeremeta na viungo vinavyoaminika.',
    'hero.c1': 'Matokeo halisi, mng’ao halisi', 'hero.c2': 'Jumapili za kujitunza', 'hero.c3': '"Serum yangu pendwa!"',
    'svc.advice.tag': 'Ushauri Binafsi', 'svc.advice.title': 'Ushauri wa Urembo',
    'svc.advice.text': 'Tuambie malengo ya ngozi yako — warembo wetu wanakujengea ratiba rahisi na kukuambia ununue nini (na uache nini).',
    'svc.advice.points': ['Uchunguzi wa aina ya ngozi', 'Mpango binafsi wa ratiba', 'Bure na ununuzi wowote'],
    'svc.advice.cta': 'Pata ushauri bure',
    'svc.analyzer.tag': 'Kipima Ngozi', 'svc.analyzer.title': 'Upimaji wa Ngozi',
    'svc.analyzer.text': 'Mashine inasoma unyevu, madoa, vitundu, mikunjo na jua ndani ya sekunde 30 — kisha tunakuchagulia bidhaa zinazofaa.',
    'svc.analyzer.points': ['Unyevu · madoa · vitundu', 'Ufuatiliaji wa kabla / baada', 'TShs 15,000 — bure zaidi ya 100k'],
    'svc.analyzer.cta': 'Weka miadi ya upimaji',
    'svc.machine.tag': 'Matibabu ya Mashine', 'svc.machine.title': 'Matibabu ya Uso',
    'svc.machine.text': 'Usafishaji wa ndani, unyevu na kukaza ngozi kwa mashine yetu. Mng’ao wa haraka kabla ya sherehe — laini hata ngozi nyeti.',
    'svc.machine.points': ['Usafishaji + unyevu', 'Kukaza na kung’arisha', 'Kuanzia TShs 45,000 / kipindi'],
    'svc.machine.cta': 'Weka miadi ya matibabu',
    'an.popular': 'Inayopendwa zaidi',
    'an.s1': 'Chagua kifurushi', 'an.s2': 'Ongeza scrub?', 'an.s2note': '— ndiyo, tunafanya scrub', 'an.s3': 'Chagua muda',
    'an.book': 'Weka miadi na ulipe', 'an.cancel': 'Kughairi bure hadi saa 12 kabla', 'an.included': 'Hakuna / imejumuishwa',
    'an.pay': 'Lipa {total} — Thibitisha miadi',
    'an.okTitle': 'Miadi imethibitishwa!', 'an.okService': 'Huduma', 'an.okScrub': 'Scrub', 'an.okWhen': 'Lini', 'an.okGuest': 'Mgeni',
    'an.okThanks': 'Asante! Fika dakika 10 mapema, bila makeup. Tutakutumia SMS. Angalia chini ya “Oda Zangu”.',
    'pkg.essential.name': 'Upimaji Msingi', 'pkg.essential.desc': 'Upimaji + ripoti ya ngozi + orodha ya bidhaa.',
    'pkg.essential.points': ['Unyevu · vitundu · madoa · mikunjo', 'Ramani ya jua na rangi', 'Orodha binafsi ya bidhaa'],
    'pkg.glow.name': 'Upimaji + Kung’aa', 'pkg.glow.desc': 'Inayouzwa zaidi — upimaji pamoja na matibabu mafupi.',
    'pkg.glow.points': ['Vyote vya Msingi', 'Usafishaji + unyevu wa mashine', 'Scrub imejumuishwa'],
    'pkg.clinical.name': 'Matibabu Kamili', 'pkg.clinical.desc': 'Upimaji + matibabu kamili + mask + ufuatiliaji.',
    'pkg.clinical.points': ['Vyote vya Kung’aa', 'Kukaza na kung’arisha', 'Mask + mpango wa nyumbani'],
    'scrub.none.name': 'Bila scrub', 'scrub.none.desc': 'Upimaji / uso tu',
    'scrub.gentle.name': 'Scrub laini', 'scrub.gentle.desc': 'Kung’arisha salama kwa ngozi nyeti',
    'scrub.deep.name': 'Scrub ya ndani', 'scrub.deep.desc': 'Inasafisha vitundu na ngozi ngumu',
    'ad.guide': 'Mwongozo', 'ad.visit': 'Tutembelee', 'ad.hours': 'Muda wa kufungua',
    'ad.mon': 'Jumatatu – Jumamosi', 'ad.fri': 'Mapumziko ya Ijumaa', 'ad.sun': 'Jumapili',
    'ad.walk': 'Karibu bila miadi · Upimaji: weka miadi Jumamosi',
    'ad.chat': 'Ongea WhatsApp', 'ad.maps': 'Fungua Ramani',
    'ad.eyebrow': 'Ushauri bure · Asma Store, Sinza', 'ad.title': 'Ushauri wa Urembo Unaofanya Kazi',
    'ad.rating': '4.9 · wanapendwa na wateja 3,000+',
    'ad.desc': 'Bila kubahatisha. Anza na scrub ya kahawa, endelea na ratiba ya dakika 10, na vidokezo vitano. Unahitaji msaada binafsi? Tembelea Sinza — ushauri ni bure na ununuzi.',
    'ad.p1': 'Scrub ya kahawa — mng’ao wa haraka', 'ad.p2': 'Ratiba ya asubuhi ya dakika 10', 'ad.p3': 'Vidokezo vitano vya kila siku',
    'ad.coffee.tag': 'Mng’ao wa haraka · mara 2 / wiki', 'ad.coffee.title': 'Scrub ya Kahawa kwa Mng’ao',
    'ad.coffee.text': 'Kusugua nyumbani kunaamsha ngozi iliyofifia ndani ya dakika — laini na yenye mng’ao.',
    'ad.coffee.steps': ['Changanya vijiko 2 vya kahawa + 1 asali + 1 mtindi', 'Sugua kwa upole usoni kwa dakika 2 (epuka macho)', 'Acha dakika 3, suuza na maji ya uvuguvugu', 'Paka mist + cream mara moja — mng’ao siku 2–3'],
    'ad.morning.tag': 'Kila asubuhi · dakika 10', 'ad.morning.title': 'Ratiba ya Asubuhi ya Dakika 10',
    'ad.morning.text': 'Muonekano safi kabla ya kazi au shule — bidhaa chache, bila presha.',
    'ad.morning.steps': ['Dak 0–2: osha uso + suuza', 'Dak 2–4: mist ya waridi', 'Dak 4–6: serum ya vitamin C au B5', 'Dak 6–8: cream nyepesi (Nivea / Bakina)', 'Dak 8–10: SPF 50 — usiruke hata ndani'],
    'ad.tips.tag': 'Rahisi kwa wanaoanza', 'ad.tips.title': 'Vidokezo Vitano Rahisi',
    'ad.tips.text': 'Tabia ndogo zinashinda bidhaa ghali ukiwa na nidhamu.',
    'ad.tips.steps': ['Osha uso mara mbili usiku ukiwa na SPF', 'SPF kila asubuhi — siri ya ujana', 'Lala saa 7–8 + maji lita 2 kila siku', 'Scrub mara 2 kwa wiki, si kila siku', 'Pimwa bure kila siku 30'],
    'ab.l1': 'Viungo kutoka kwa wauzaji endelevu', 'ab.l2': 'Imejaribiwa kwa ngozi halisi, si wanyama', 'ab.l3': 'Kurudisha bure siku 30 — bila maswali',
    'ab.caption': 'Ndani ya studio na duka letu',
    'ct.ok': 'Asante, {name}! 💌', 'ct.oksub': 'Ujumbe wako njiani. Tutakujibu hivi karibuni.',
    'or.showAll': 'Onyesha zote', 'or.none': 'Hakuna oda {f}.', 'ord.svc': '· Huduma', 'ord.prod': '· Bidhaa',
    'glow.bright': 'Urembo unaong’aa ulioundwa kuinua mng’ao wako wa asili',
    'glow.nourish': 'Lishe thabiti iliyotengenezwa kuheshimu mng’ao wako wa asili',
    'glow.for': 'Tumekuchagulia', 'glow.use': 'Bidhaa za kutumia', 'glow.set': 'Seti ya kuambatanisha',
    'an.eyebrow': 'Huduma dukani · ~dakika 20–75', 'an.title': 'Upimaji wa Ngozi na Matibabu',
    'an.desc': 'Acha kubahatisha ngozi yako inahitaji nini. Mashine yetu inapima unyevu, mikunjo, jua, vitundu na rangi kwa usahihi — kisha tunakutibu na kukupatia bidhaa sahihi.',
    'an.p1': 'Ramani ya unyevu · vitundu · madoa', 'an.p2': 'Uchambuzi wa jua na rangi', 'an.p3': 'Ripoti + ratiba',
    'an.t1v': 'sek 10', 'an.t1l': 'muda wa upimaji', 'an.t2v': '5-kwa-1', 'an.t2l': 'vipimo vya ngozi', 'an.t3v': 'Bure', 'an.t3l': 'upimaji tena siku 30',
    'an.video': 'Mashine ya upimaji — tazama', 'an.mins': 'dak',
    'an.notes': 'Maelezo (shida ya ngozi…)',
  },
}

const LangCtx = createContext({ lang: 'en', setLang: () => {}, t: (k) => k })
const useLang = () => useContext(LangCtx)
function loadLang() {
  try {
    return localStorage.getItem('asma_lang') === 'sw' ? 'sw' : 'en'
  } catch {
    return 'en'
  }
}

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
  glowBright:
    'https://i.pinimg.com/736x/f6/9c/dd/f69cddbc1ffca4ea96e1c6b141c60228.jpg',
  glowNourish:
    'https://i.pinimg.com/736x/14/f0/33/14f033ca25e1e6e585b346c8851997a8.jpg',
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

/* ---------- Kiswahili catalog copy (short desc + detail) ---------- */
const PRODUCT_SW = {
  1: { d: 'Serum ya vitamin C + hyaluronic kwa mng’ao na rangi sawa.', l: 'Serum yetu inachanganya vitamin C na hyaluronic kung’arisha na kulainisha ngozi — bila muwasho.' },
  2: { d: 'Rangi nyepesi ya matte inadumu saa 12 bila kukausha.', l: 'Matte laini kama hariri inakaa saa 12 bila kuhama, midomo inabaki laini na vitamin E.' },
  3: { d: 'Maji ya waridi yanayonyesha na kuburudisha papo hapo.', l: 'Maji ya Damask rose yanarejesha unyevu na kutuliza wekundu — nzuri hata juu ya makeup.' },
  4: { d: 'Foundation ya kati inayojengeka, rangi 30.', l: 'Rangi zinazofanana na ngozi kwa fundi usioonekana kama barakoa, na hyaluronic kwa mng’ao.' },
  5: { d: 'Inayeyusha makeup na SPF huku ikilisha ngozi.', l: 'Balm laini inayeyuka kuyeyusha makeup na uchafu — mafuta ya camellia hayaachi ukavu.' },
  6: { d: 'Vivuli 12 vya joto — laini, havimwagi.', l: 'Rangi 12 za joto kuanzia shimmer hadi matte, laini na zinadumu saa 14.' },
  7: { d: 'Vitamin C 20% kwa madoa na ngozi iliyofifia.', l: 'Serum ya vitamin C 20% na ferulic acid inafifisha madoa na kung’arisha — nyepesi na ya haraka.' },
  8: { d: 'Brashi 12 laini kwa uso, macho na midomo.', l: 'Brashi 12 za vegan kwa kuchanganya bila shida — na pochi ya safari.' },
  9: { d: 'Peptides + mbadala wa retinol kwa mikunjo.', l: 'Cream ya usiku yenye peptides na bakuchiol inaimarisha ngozi ndani ya wiki 4.' },
  10: { d: 'Foundation yenye unyevu, rangi 24.', l: 'Foundation yenye hyaluronic kwa ngozi yenye afya, inayojengeka na kudumu saa 12.' },
  11: { d: 'Unyevu wa haraka kwa uso, mikono na mwili.', l: 'Cream maarufu nyepesi na vitamin E — inaingia haraka, ngozi laini bila mafuta.' },
  12: { d: 'Shea + cocoa kwa lishe ya saa 48.', l: 'Shea, cocoa na almond kwa unyevu wa saa 48 — harufu ya vanilla, bila parabens.' },
  13: { d: 'Lotion ya shea kwa ngozi kavu sana.', l: 'Lotion ya shea na almond kwa ngozi kavu — inaingia haraka na kulinda unyevu saa 24.' },
  14: { d: 'SPF 50 isiyoacha weupe, salama.', l: 'SPF 50 ya madini haina weupe wala muwasho — nzuri chini ya makeup, sugu kwa maji.' },
  15: { d: 'Cream asilia ya vegan — ngozi laini yenye mng’ao.', l: 'Bakina ni chapa safi ya vegan inayofanya ngozi kuwa laini na yenye mng’ao wa lulu.' },
  16: { d: 'Vita B5 kwa ngozi tulivu na yenye afya.', l: 'Serum ya vitamin B5 inatuliza muwasho na kulainisha mistari midogo.' },
  17: { d: 'Lotion ya shea na vanilla, saizi ya familia.', l: 'Dove yenye shea na vanilla kwa ngozi laini — inanukia vizuri, inafaa familia nzima.' },
  18: { d: 'Sabuni laini kwenye mitungi ya kifahari.', l: 'Sabuni ya Lixouva kwenye mitungi yenye vifuniko vya dhahabu — povu zuri na ngozi laini.' },
  19: { d: 'Lotion yenye unyevu mwingi kwa ngozi kavu.', l: 'Ozone mpya yenye unyevu wa ndani — ngozi laini na yenye mng’ao siku nzima.' },
  20: { d: 'Serum ya mafuta kwa mng’ao na ulaini.', l: 'Serum ya mafuta ya mimea inalisha na kung’arisha — matone 2-3 chini ya cream.' },
}

const PERFUME_SW = {
  201: { d: 'EDT ya mbao 100ml — harufu ya jioni.', l: 'Boss Bottled Night ni manukato ya mbao kwa mwanaume mwenye malengo — cardamom na musk.' },
  202: { d: 'Harufu kali ya usiku — tamu na viungo.', l: '9PM Rebel ya Afnan ni tamu na vanilla — inadumu usiku mzima.' },
  203: { d: 'Parfum kali ya viungo kwa usiku wa kimahaba.', l: 'Azzaro Most Wanted ni kali na yenye mvuto — lazima kwa mkusanyiko.' },
  204: { d: 'Orchid nyeusi na viungo — ya kisasa.', l: 'Zara Man ni ya kifahari na inadumu muda mrefu — chaguo la busara.' },
  205: { d: 'Ikoniki safi — bergamot na ambroxan.', l: 'Sauvage ya Dior ni manukato safi yanayopendwa duniani.' },
  206: { d: 'Harufu safi ya bahari — kwa wote.', l: 'Matelot ni harufu safi ya bahari na machungwa — kila siku.' },
  207: { d: 'Tamutamu ya Kiarabu — laini na ya kike.', l: 'Mousuf ni tamu na maua — nyepesi na nzuri kwa kila siku.' },
  208: { d: 'Joto la mdalasini na tende — kwa wote.', l: 'Khamrah ni tamu ya mdalasini na tende — joto na inadumu.' },
  209: { d: 'Oud nzito — ya kifalme.', l: 'Oud Royal ni oud nzito na amber — tajiri na isiyosahaulika.' },
  210: { d: 'Moshi na limao — nguvu kubwa.', l: 'Club de Nuit inadumu saa 10+ — sifa nyingi kwa kunyunyizia.' },
  211: { d: 'Maua na musk — siri laini.', l: 'Suspenso ni maua ya kike yanayokaa siku nzima — maridadi.' },
  212: { d: 'Vanilla laini — tamu na ya kupendeza.', l: 'Vanilla Musk ni vanilla na musk — joto na inayovutia.' },
}

const SET_SW = {
  101: 'Ratiba bora kwa ngozi yenye mng’ao', 102: 'Kila kitu kwa muonekano kamili',
  103: 'Kwa usiku unaostahili mng’ao', 104: 'Vitu muhimu vya spa nyumbani',
  105: 'Brashi + vipendwa vya uso', 106: 'Ulinzi wa ngozi + unyevu wa kila siku',
  107: 'Vipendwa vyetu maarufu sanduku moja', 108: 'Ratiba ya vitamin C kwa mng’ao',
  109: 'Ulaini wa mwili mzima', 110: 'Matibabu ya usiku ya kifahari',
  111: 'Vitamin C + SPF kufifisha madoa', 112: 'Chupa za pink kwa ulaini wa mwili',
  113: 'Vipodozi vya pink na kung’aa', 114: 'Kijani tulivu — utulivu na uimara',
  115: 'Mimea na mafuta kwa mng’ao wa kila siku', 116: 'Matibabu ya uso kwa ngozi laini',
  117: 'Mshirika wako wa ngozi yenye afya',
  301: 'Manukato ya Kay Ali matamu na laini', 302: 'Matatu bora ya kike sanduku moja',
  303: 'Matamu kama vanilla na viungo', 304: 'Jifafanue — safi na nzito',
  305: 'Nguvu za ofisini — Boss, Azzaro na Sauvage', 306: 'Sanduku maridadi la zawadi',
  307: 'Wanyama wa usiku — 9PM na Club', 308: 'Anasa ya dhahabu — ngangaa',
  309: 'Mrembo na wa kimahaba', 310: 'Matatu ya wanaume ya kila siku',
}

const CAT_SW = { Skincare: 'cat.skincare', Makeup: 'cat.makeup', Body: 'cat.body', 'Sun Care': 'cat.suncare' }
const AUD_SW = { Men: 'aud.men', Women: 'aud.women', Both: 'aud.both' }

const locP = (p, lang) => {
  const s = lang === 'sw' ? PRODUCT_SW[p.id] : null
  return s ? { ...p, desc: s.d || p.desc, longDesc: s.l || p.longDesc } : p
}
const locF = (p, lang) => {
  const s = lang === 'sw' ? PERFUME_SW[p.id] : null
  return s ? { ...p, desc: s.d || p.desc, longDesc: s.l || p.longDesc } : p
}
const locS = (s, lang) => (lang === 'sw' && SET_SW[s.id] ? { ...s, tagline: SET_SW[s.id] } : s)
const catL = (c, t) => (CAT_SW[c] ? t(CAT_SW[c]) : c)
const audL = (a, t) => (AUD_SW[a] ? t(AUD_SW[a]) : a)
const stL = (s, t) => t('st.' + String(s).toLowerCase())

const PAY_LABELS = {
  en: { card: 'Credit / Debit card', mobile: 'Mobile money (M-Pesa, Tigo Pesa, Airtel Money)', cod: 'Cash on delivery' },
  sw: { card: 'Kadi ya benki', mobile: 'Pesa kwa simu (M-Pesa, Tigo Pesa, Airtel Money)', cod: 'Lipa ukipokea' },
}

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
  { icon: '🐰', tk: 'feat.1t', dk: 'feat.1d' },
  { icon: '🌿', tk: 'feat.2t', dk: 'feat.2d' },
  { icon: '✨', tk: 'feat.3t', dk: 'feat.3d' },
  { icon: '♻️', tk: 'feat.4t', dk: 'feat.4d' },
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

/* ---------- Brand logo (Asma Store monogram lockup) ---------- */
function BrandLogo({ light = false }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const berry = `${uid}-berry`
  const charcoal = `${uid}-charcoal`
  const glow = `${uid}-glow`
  return (
    <svg className="brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 120" role="img" aria-label="Asma Store — Clean Beauty & Cosmetics">
      <defs>
        <linearGradient id={berry} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B263E" />
          <stop offset="50%" stopColor="#A8324A" />
          <stop offset="100%" stopColor="#C4435D" />
        </linearGradient>
        <linearGradient id={charcoal} x1="0%" y1="0%" x2="100%" y2="0%">
          {light ? (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E9D5DC" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#221F20" />
              <stop offset="100%" stopColor="#3A3537" />
            </>
          )}
        </linearGradient>
        <filter id={glow} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g transform="translate(10, 10)">
        <g transform="translate(10, 0)">
          <path d="M 50 10 A 40 40 0 1 0 90 50" fill="none" stroke={`url(#${berry})`} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          <path d="M 50 18 L 30 75 Q 38 78 48 68 Q 62 55 45 42 Q 30 30 52 18 Z" fill="none" stroke={`url(#${berry})`} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38" y1="52" x2="58" y2="52" stroke={`url(#${berry})`} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 58 22 C 68 15 78 20 75 32 C 65 35 58 28 58 22 Z" fill="#6B705C" opacity="0.9" />
          <polygon points="76,14 78,20 84,22 78,24 76,30 74,24 68,22 74,20" fill={`url(#${berry})`} filter={`url(#${glow})`} />
        </g>
        <g transform="translate(125, 0)">
          <text x="0" y="52" fontFamily="'Playfair Display', 'Didot', 'Georgia', serif" fontSize="44" fontWeight="600" letterSpacing="4" fill={`url(#${berry})`}>
            Asma Store
          </text>
          <line x1="2" y1="68" x2="270" y2="68" stroke={light ? '#E9D5DC' : '#9C887B'} strokeWidth="1" opacity="0.35" />
          <text x="3" y="86" fontFamily="'Montserrat', 'Helvetica', 'Arial', sans-serif" fontSize="11" fontWeight="400" letterSpacing="7" fill={`url(#${charcoal})`} opacity="0.8">
            CLEAN BEAUTY &amp; COSMETICS
          </text>
        </g>
      </g>
    </svg>
  )
}

/* ---------- Navbar ---------- */
function Navbar({ cartCount, user, onCart, onHome, onProducts, onPerfume, onSets, onOrders, onAuth, onLogout }) {
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLang()

  const navLinks = [
    { label: t('nav.home'), action: onHome },
    { label: t('nav.products'), action: onProducts },
    { label: t('nav.perfume'), action: onPerfume },
    { label: t('nav.sets'), action: onSets },
    { label: t('nav.orders'), action: onOrders },
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
          <BrandLogo />
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
            {t('nav.cart')} ({cartCount})
          </a>

          <div className="profile-wrap">
            <button
              className="profile-btn"
              aria-label={t('nav.account')}
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
                    <button onClick={() => { onOrders(); setMenuOpen(false); setOpen(false) }}>{t('nav.myOrders')}</button>
                    <button onClick={() => { onLogout(); setMenuOpen(false); setOpen(false) }}>{t('nav.logout')}</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => { onAuth('login'); setMenuOpen(false); setOpen(false) }}>{t('nav.login')}</button>
                    <button onClick={() => { onAuth('register'); setMenuOpen(false); setOpen(false) }}>{t('nav.register')}</button>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
        <button
          className={`hamburger ${open ? 'active' : ''}`}
          aria-label={t('nav.menu')}
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
/* ---------- Hero glow stories: brightening + nourishment ---------- */
const GLOW = {
  bright: { img: IMG.glowBright, products: [7, 1], set: 111 },
  nourish: { img: IMG.glowNourish, products: [12, 13], set: 109 },
}

function GlowModal({ kind, onClose, onProduct, onSet }) {
  const { t } = useLang()
  const g = GLOW[kind]
  const products = g.products.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean)
  const set = SETS.find((s) => s.id === g.set)
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', close)
      document.body.style.overflow = ''
    }
  }, [onClose])
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={t(kind === 'bright' ? 'glow.bright' : 'glow.nourish')}>
      <div className="glow-card" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close glow-close" onClick={onClose} aria-label={t('common.close')}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="glow-hero">
          <img src={g.img} alt={t(kind === 'bright' ? 'glow.bright' : 'glow.nourish')} />
          <div className="glow-hero-text">
            <p className="eyebrow">{t('glow.for')}</p>
            <h3>{t(kind === 'bright' ? 'glow.bright' : 'glow.nourish')}</h3>
          </div>
        </div>
        <p className="glow-label">{t('glow.use')}</p>
        <div className="glow-list">
          {products.map((p) => (
            <button key={p.id} type="button" className="glow-row" onClick={() => onProduct(p)}>
              <img src={p.image} alt={p.name} />
              <span className="glow-row-info"><strong>{p.name}</strong><span>{formatPrice(p.price)}</span></span>
              <span className="view-set">{t('orders.details')}</span>
            </button>
          ))}
        </div>
        {set && (
          <>
            <p className="glow-label">{t('glow.set')}</p>
            <button type="button" className="glow-row glow-set-row" onClick={() => onSet(set)}>
              <img src={set.image} alt={set.name} />
              <span className="glow-row-info"><strong>{set.name}</strong><span>{formatPrice(set.price)}</span></span>
              <span className="view-set">{t('sets.view')}</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function Hero({ onGlow }) {
  const { t } = useLang()
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>
            {t('hero.a')} <em>{t('hero.glow')}</em> {t('hero.b')}
          </h1>
          <p className="lead">
            {t('hero.lead')}
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn">{t('hero.shop')}</a>
            <a href="#about" className="btn btn-outline">{t('hero.story')}</a>
          </div>
          <div className="hero-stats">
            <div><strong>50K+</strong><span>{t('hero.customers')}</span></div>
            <div><strong>4.9★</strong><span>{t('hero.rating')}</span></div>
            <div><strong>100%</strong><span>{t('hero.vegan')}</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card main-card">
            <img src={IMG.heroMask} alt="" />
            <p>{t('hero.c1')}</p>
          </div>
          <div className="hero-card float-card-1">
            <img src={IMG.heroBath} alt="" />
            <p>{t('hero.c2')}</p>
          </div>
          <div className="hero-card float-card-2">
            <p className="stars">★★★★★</p>
            <small>{t('hero.c3')}</small>
          </div>
          <div
            className="hero-card float-card-3"
            onClick={() => onGlow && onGlow('bright')}
            role={onGlow ? 'button' : undefined}
            tabIndex={onGlow ? 0 : undefined}
            onKeyDown={(e) => e.key === 'Enter' && onGlow && onGlow('bright')}
          >
            <img src={IMG.glowBright} alt={t('glow.bright')} />
            <p className="glow-line">{t('glow.bright')}</p>
            <span className="glow-tap">{t('orders.details')}</span>
          </div>
          <div
            className="hero-card float-card-4"
            onClick={() => onGlow && onGlow('nourish')}
            role={onGlow ? 'button' : undefined}
            tabIndex={onGlow ? 0 : undefined}
            onKeyDown={(e) => e.key === 'Enter' && onGlow && onGlow('nourish')}
          >
            <img src={IMG.glowNourish} alt={t('glow.nourish')} />
            <p className="glow-line">{t('glow.nourish')}</p>
            <span className="glow-tap">{t('orders.details')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t } = useLang()
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
          <p className="about-caption">{t('ab.caption')}</p>
        </div>
        <div className="about-text">
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2>{t('about.title')}</h2>
          <p>
            Founded in 2019, Asma Store began with one belief: you shouldn't have to choose between
            clean ingredients and luxury results. Every formula is developed with dermatologists,
            blended from botanical actives, and finished in packaging you'll want on your shelf.
          </p>
          <ul className="about-list">
            <li>{t('ab.l1')}</li>
            <li>{t('ab.l2')}</li>
            <li>{t('ab.l3')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Share: image + details + price + shop link ---------- */
const itemUrl = (kind, id) => `${window.location.origin}${window.location.pathname}#${kind}-${id}`

async function shareItem({ title, text, image, url }) {
  const fullText = `${text}\n${url}`
  if (typeof navigator !== 'undefined' && navigator.share) {
    let files
    try {
      const res = await fetch(image, { mode: 'cors' })
      if (res.ok) {
        const blob = await res.blob()
        if (blob && blob.size > 0) {
          const file = new File([blob], 'product.jpg', { type: blob.type || 'image/jpeg' })
          if (!navigator.canShare || navigator.canShare({ files: [file] })) files = [file]
        }
      }
    } catch {
      /* image attach failed — share text + link */
    }
    try {
      if (files) await navigator.share({ title, text: fullText, url, files })
      else await navigator.share({ title, text: fullText, url })
      return 'shared'
    } catch (err) {
      if (err && err.name === 'AbortError') return 'cancelled'
    }
  }
  return 'fallback'
}

function ShareBtn({ title, price, desc, image, kind, id }) {
  const { t } = useLang()
  const [done, setDone] = useState(false)
  const onShare = async (e) => {
    e.stopPropagation()
    const url = itemUrl(kind, id)
    const text = `${title}\n${price}\n${desc}\n\n${image}`
    const full = `${text}\n${url}`
    const r = await shareItem({ title, text, image, url })
    if (r === 'fallback') {
      try {
        await navigator.clipboard.writeText(full)
      } catch {
        /* clipboard unavailable */
      }
      window.open(`https://wa.me/?text=${encodeURIComponent(full)}`, '_blank', 'noreferrer')
      setDone(true)
      setTimeout(() => setDone(false), 2200)
    }
  }
  return (
    <button
      type="button"
      className={`share-btn${done ? ' done' : ''}`}
      aria-label={done ? t('share.copied') : t('share.share')}
      title={t('share.share')}
      onClick={onShare}
    >
      {done ? (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
        </svg>
      )}
    </button>
  )
}

/* ---------- Product cards & detail ---------- */
function ProductCard({ product, onAdd, onSelect, inBag }) {
  const [wished, setWished] = useState(false)
  const { t, lang } = useLang()
  product = locP(product, lang)
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
          aria-label={wished ? t('card.wishRemove') : t('card.wishAdd')}
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
        <ShareBtn title={product.name} price={formatPrice(product.price)} desc={product.desc} image={product.image} kind={product.brand ? 'f' : 'p'} id={product.id} />
      </div>
      <div className="product-body">
        <span className="category">{catL(product.category, t)}</span>
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
            <span>{inBag ? t('card.inbag') : t('card.add')}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

const STEPS = [
  { n: '1', tk: 'steps.1t', dk: 'steps.1d' },
  { n: '2', tk: 'steps.2t', dk: 'steps.2d' },
  { n: '3', tk: 'steps.3t', dk: 'steps.3d' },
]

const PAYMENT_LABELS = {
  card: 'Credit / Debit card',
  mobile: 'Mobile money (M-Pesa, Tigo Pesa, Airtel Money)',
  cod: 'Cash on delivery',
}
const payLabel = (k, lang) => (PAY_LABELS[lang] && PAY_LABELS[lang][k]) || PAYMENT_LABELS[k] || k

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
  const { t, lang } = useLang()
  product = product.brand ? locF(product, lang) : locP(product, lang)
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
            <h2>{t('detail.confirmed')}</h2>
            <p className="order-num">Order <strong>#{ordered.num}</strong> · Total <strong>{formatPrice(ordered.total)}</strong></p>
            <p>
              Thank you, {form.name}! Your {qty} × {product.name} will be packed with care and shipped
              to {form.city || 'your address'} within 24 hours. Track it any time under "My Orders".
            </p>
            <button className="btn" onClick={onBack}>{t('detail.continue')}</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onBack}>{t('detail.backShop')}</button>
        <div className="detail-grid">
          <div className="detail-photo">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className="badge">{product.badge}</span>}
          </div>
          <div className="detail-info">
            <span className="category">{product.brand ? `${product.brand} · ${audL(product.audience, t)}` : catL(product.category, t)}</span>
            <h1>{product.name}</h1>
            <p className="stars">★★★★★ <small>(312 {t('common.reviews')})</small></p>
            <p className="detail-price">{formatPrice(product.price)}</p>
            <p className="detail-desc">{product.longDesc}</p>

            <div className="qty-row">
              <label htmlFor="qty">{t('detail.qty')}</label>
              <div className="qty-control">
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span id="qty">{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <span className="detail-total">{t('detail.total')}: {formatPrice(total)}</span>
            </div>

            <ul className="perks">
              <li>✓ {t('perk.ship')}</li>
              <li>✓ {t('perk.returns')}</li>
              <li>✓ {t('perk.24h')}</li>
            </ul>
          </div>
        </div>

        <div className="order-section">
          <h2>{t('detail.place')}</h2>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <h3>{t(s.tk)}</h3>
                <p>{t(s.dk)}</p>
              </div>
            ))}
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" placeholder={t('co.name')} value={form.name} onChange={handleChange} required disabled={processing} />
              <input name="phone" type="tel" placeholder={t('co.phone')} value={form.phone} onChange={handleChange} required disabled={processing} />
            </div>
            <input name="address" placeholder={t('co.address')} value={form.address} onChange={handleChange} required disabled={processing} />
            <div className="form-row">
              <input name="city" placeholder={t('co.city')} value={form.city} onChange={handleChange} required disabled={processing} />
              <select name="payment" value={form.payment} onChange={handleChange} disabled={processing}>
                <option value="card">{t('pay.card')}</option>
                <option value="mobile">{t('pay.mobile')}</option>
                <option value="cod">{t('pay.cod')}</option>
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
                  {t('detail.processing')}
                </>
              ) : (
                <>{t('detail.place')} — {formatPrice(grandTotal)}</>
              )}
            </button>
            <p className="secure-note">{t('detail.secure')}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ---------- Products section / page ---------- */
function Products({ onAdd, onSelect, cartItems, onSeeAll }) {
  const [filter, setFilter] = useState('All')
  const { t } = useLang()
  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))]
  const visible = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('home.collectionEyebrow')}</p>
          <h2>{t('home.collectionTitle')}</h2>
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c === 'All' ? t('common.all') : catL(c, t)}
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
            <button className="btn btn-outline" onClick={onSeeAll}>{t('home.viewAll')}</button>
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

function ShopToolbar({ query, onQuery, viewMode, onViewMode, filters, active, onFilter, searchLabel, flabel }) {
  const { t } = useLang()
  const fl = flabel || ((c) => c)
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
      <div className="view-toggle" role="group" aria-label={`${t('view.grid')} / ${t('view.list')}`}>
        <button
          type="button"
          className={viewMode === 'grid' ? 'active' : ''}
          aria-pressed={viewMode === 'grid'}
          aria-label={t('view.grid')}
          title={t('view.grid')}
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
          aria-label={t('view.list')}
          title={t('view.list')}
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
            {fl(c)}
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
  const { t } = useLang()
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
          <p className="eyebrow">{t('shopAll.eyebrow')}</p>
          <h2>{t('shopAll.title')}</h2>
          <p style={{ color: 'var(--muted)' }}>
            {t('shopAll.sub')}
          </p>
          <ShopToolbar
            query={query}
            onQuery={setQuery}
            viewMode={viewMode}
            onViewMode={changeView}
            filters={categories}
            active={filter}
            onFilter={setFilter}
            searchLabel={t('search.products')}
            flabel={(c) => (c === 'All' ? t('common.all') : catL(c, t))}
          />
          <p className="result-count">{visible.length} {visible.length === 1 ? t('common.item') : t('common.items')}</p>
        </div>
        {visible.length === 0 ? (
          <div className="cart-empty">
            <p>No products match “{query}”{filter !== 'All' ? ` in ${filter}` : ''}.</p>
            <button className="btn btn-outline" onClick={() => { setQuery(''); setFilter('All') }}>{t('common.clearAll')}</button>
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
  const { t, lang } = useLang()
  product = locF(product, lang)
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
          <span className="badge">{audL(product.audience, t)}</span>
        )}
        <button
          type="button"
          aria-label={wished ? t('card.wishRemove') : t('card.wishAdd')}
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
        <ShareBtn title={product.name} price={formatPrice(product.price)} desc={product.desc} image={product.image} kind="f" id={product.id} />
      </div>
      <div className="product-body">
        <span className="category">{product.brand} · {audL(product.audience, t)}</span>
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
            <span>{inBag ? t('card.inbag') : t('card.add')}</span>
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
  const { t, lang } = useLang()
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
            <p className="eyebrow">{t('perfume.eyebrow')}</p>
            <h2>{t('perfume.title')}</h2>
            <p style={{ color: 'var(--muted)' }}>
              {t('perfume.sub')}
            </p>
            <ShopToolbar
              query={query}
              onQuery={setQuery}
              viewMode={viewMode}
              onViewMode={changeView}
              filters={PERFUME_FILTERS}
              active={filter}
              onFilter={setFilter}
              searchLabel={t('search.perfumes')}
              flabel={(c) => (c === 'All' ? t('common.all') : audL(c, t))}
            />
            <p className="result-count">{visible.length} {visible.length === 1 ? t('common.scent') : t('common.scents')}</p>
          </div>
          {visible.length === 0 ? (
            <div className="cart-empty">
              <p>No perfumes match “{query}”{filter !== 'All' ? ` for ${filter}` : ''}.</p>
              <button className="btn btn-outline" onClick={() => { setQuery(''); setFilter('All') }}>{t('common.clearAll')}</button>
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
            <p className="eyebrow">{t('perfume.setsEyebrow')}</p>
            <h2>{t('perfume.setsTitle')}</h2>
            <p style={{ color: 'var(--muted)' }}>
              Same {filter} filter, curated bundles at a better price. Click a set to see what’s inside.
            </p>
          </div>
          <div className="product-grid">
            {visibleSets.map((raw) => {
              const set = locS(raw, lang)
              return (
                <article
                  key={set.id}
                  className="product-card set-card"
                  onClick={() => onSelectSet(raw)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectSet(raw)}
                >
                <div className="product-img">
                  <img src={set.image} alt={set.name} loading="lazy" />
                  <span className="badge">{audL(set.audience, t)} · {set.productIds.length} pcs</span>
                  <ShareBtn title={set.name} price={formatPrice(set.price)} desc={`${set.tagline}. ${set.saveNote}.`} image={set.image} kind="ps" id={set.id} />
                </div>
                  <div className="product-body">
                    <span className="category">{t('nav.perfume')} {t('set.word')} · {audL(set.audience, t)}</span>
                    <h3>{set.name}</h3>
                    <p>{set.tagline}</p>
                    <div className="product-foot">
                      <span className="price">{formatPrice(set.price)}</span>
                      <span className="view-set">{t('sets.view')}</span>
                    </div>
                  </div>
                </article>
              )
            })}
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
  const { t, lang } = useLang()
  set = locS(set, lang)
  const products = set.productIds.map((id) => locF(PERFUMES.find((p) => p.id === id), lang)).filter(Boolean)
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
        <button className="back-link" onClick={onBack}>{t('detail.backPerfume')}</button>
        <div className="detail-grid">
          <div className="detail-photo">
            <img src={set.image} alt={set.name} />
          </div>
          <div className="detail-info">
            <span className="category">{t('nav.perfume')} {t('set.word')} · {audL(set.audience, t)}</span>
            <h1>{set.name}</h1>
            <p className="stars">★★★★★ <small>(96 {t('common.reviews')})</small></p>
            <p className="detail-price">{formatPrice(set.price)}</p>
            <p className="detail-desc">{set.tagline}. {set.saveNote}.</p>
            <ul className="perks">
              <li>✓ {t('perk.sealed')}</li>
              <li>✓ {t('perk.giftreq')}</li>
              <li>✓ {t('perk.24h')}</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <button className="btn" onClick={handleAdd}>
                {added ? t('detail.added') : t('detail.addSet')}
              </button>
            </div>
          </div>
        </div>

        <div className="set-products">
          <h2>{t('detail.inside')}</h2>
          <div className="set-product-list">
            {products.map((p) => (
              <div key={p.id} className="set-product-row">
                <img src={p.image} alt={p.name} />
                <div className="set-product-info">
                  <span className="category">{p.brand} · {audL(p.audience, t)}</span>
                  <strong>{p.name}</strong>
                  <p>{p.desc}</p>
                </div>
                <span className="set-product-price">{formatPrice(p.price)}</span>
              </div>
            ))}
          </div>
          <div className="set-total">
            <span>{t('detail.indiv')}</span>
            <span>{formatPrice(products.reduce((s, p) => s + p.price, 0))}</span>
          </div>
          <div className="set-total grand">
            <span>{t('detail.setPrice')}</span>
            <span>{formatPrice(set.price)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Sets ---------- */
function SetsPage({ onSelectSet }) {
  const { t, lang } = useLang()
  return (
    <section className="sets-page section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('sets.eyebrow')}</p>
          <h2>{t('sets.title')}</h2>
          <p style={{ color: 'var(--muted)' }}>
            {t('sets.sub')}
          </p>
        </div>
        <div className="product-grid">
          {SETS.map((raw) => {
            const set = locS(raw, lang)
            return (
              <article
                key={set.id}
                className="product-card set-card"
                onClick={() => onSelectSet(raw)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectSet(raw)}
              >
              <div className="product-img">
                <img src={set.image} alt={set.name} loading="lazy" />
                <span className="badge">{set.productIds.length} {t('set.products')}</span>
                <ShareBtn title={set.name} price={formatPrice(set.price)} desc={`${set.tagline}. ${set.saveNote}.`} image={set.image} kind="s" id={set.id} />
              </div>
                <div className="product-body">
                  <span className="category">{t('set.word')}</span>
                  <h3>{set.name}</h3>
                  <p>{set.tagline}</p>
                  <div className="product-foot">
                    <span className="price">{formatPrice(set.price)}</span>
                    <span className="view-set">{t('sets.view')}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SetDetailPage({ set, onBack, onAddToBag }) {
  const { t, lang } = useLang()
  const [added, setAdded] = useState(false)
  set = locS(set, lang)
  const products = set.productIds.map((id) => locP(PRODUCTS.find((p) => p.id === id), lang))

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
        <button className="back-link" onClick={onBack}>{t('detail.backSets')}</button>
        <div className="detail-grid">
          <div className="detail-photo">
            <img src={set.image} alt={set.name} />
          </div>
          <div className="detail-info">
            <span className="category">{t('set.curated')}</span>
            <h1>{set.name}</h1>
            <p className="stars">★★★★★ <small>(148 {t('common.reviews')})</small></p>
            <p className="detail-price">{formatPrice(set.price)}</p>
            <p className="detail-desc">{set.tagline}. {set.saveNote}.</p>
            <ul className="perks">
              <li>✓ {t('perk.ship')}</li>
              <li>✓ {t('perk.gift')}</li>
              <li>✓ {t('perk.24h')}</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <button className="btn" onClick={handleAdd}>
                {added ? t('detail.added') : t('detail.addSet')}
              </button>
            </div>
          </div>
        </div>

        <div className="set-products">
          <h2>{t('detail.inside')}</h2>
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
            <span>{t('detail.indiv')}</span>
            <span>{formatPrice(products.reduce((s, p) => s + p.price, 0))}</span>
          </div>
          <div className="set-total grand">
            <span>{t('detail.setPrice')}</span>
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
  const { t } = useLang()
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
            {t('co.back')}
          </button>
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">{t('co.eyebrow')}</p>
            <h2>{t('co.title')}</h2>
          </div>

          <div className="checkout-grid">
            <div className="order-summary">
              <h3>{t('co.summary')}</h3>
              {items.map((i) => (
                <div key={i.id} className="summary-row">
                  <img src={i.image} alt="" />
                  <div className="summary-info">
                    <strong>{i.name}</strong>
                    <span>{t('co.qty')} {i.qty}</span>
                  </div>
                  <span className="summary-price">{formatPrice(i.price * i.qty)}</span>
                </div>
              ))}
              <div className="summary-totals">
                <p><span>{t('cart.subtotal')}</span><span>{formatPrice(subtotal)}</span></p>
                <p><span>{t('cart.shipping')}</span><span>{shipping === 0 ? t('cart.free') : formatPrice(shipping)}</span></p>
                <p className="grand"><span>{t('cart.total')}</span><span>{formatPrice(total)}</span></p>
              </div>
            </div>

            <form className="order-form" onSubmit={placeOrder}>
              <h3>{t('co.delivery')}</h3>
              <input name="name" placeholder={t('co.name')} value={form.name} onChange={handleChange} required disabled={processing} />
              <input name="phone" type="tel" placeholder={t('co.phone')} value={form.phone} onChange={handleChange} required disabled={processing} />
              <input name="address" placeholder={t('co.address')} value={form.address} onChange={handleChange} required disabled={processing} />
              <input name="city" placeholder={t('co.city')} value={form.city} onChange={handleChange} required disabled={processing} />
              <select name="payment" value={form.payment} onChange={handleChange} disabled={processing}>
                <option value="card">{t('pay.card')}</option>
                <option value="mobile">{t('pay.mobile')}</option>
                <option value="cod">{t('pay.cod')}</option>
              </select>
              <button type="submit" className={`btn btn-wide ${processing ? 'loading' : ''}`} disabled={processing}>
                {processing ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    {t('detail.processing')}
                  </>
                ) : (
                  <>{t('co.pay')} — {formatPrice(total)}</>
                )}
              </button>
              <p className="secure-note">{t('co.secure')}</p>
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
            <h2>{t('co.success')}</h2>
            <p className="order-num">
              Order <strong>#{order.num}</strong> · Total <strong>{formatPrice(order.total)}</strong>
            </p>
            <p>
              {t('co.thanksLong')
                .replace('{name}', form.name || 'dear customer')
                .replace('{count}', String(order.items.reduce((s, i) => s + i.qty, 0)))
                .replace('{city}', form.city || 'your address')}
            </p>
            <button className="btn" onClick={onContinueShopping}>{t('co.thanks')}</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onContinueShopping}>{t('cart.continue')}</button>
        <div className="section-head" style={{ marginBottom: 40 }}>
          <p className="eyebrow">{t('cart.eyebrow')}</p>
          <h2>{t('cart.title')}</h2>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>{t('cart.empty')}</p>
            <button className="btn" onClick={onContinueShopping}>{t('cart.browse')}</button>
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
              <h3>{t('cart.summary')}</h3>
              <p><span>{t('cart.subtotal')}</span><span>{formatPrice(subtotal)}</span></p>
              <p><span>{t('cart.shipping')}</span><span>{shipping === 0 ? t('cart.free') : formatPrice(shipping)}</span></p>
              {shipping > 0 && (
                <p className="ship-hint">{t('cart.add')} {formatPrice(FREE_SHIPPING - subtotal)} {t('cart.moreForFree')}</p>
              )}
              <p className="grand"><span>{t('cart.total')}</span><span>{formatPrice(total)}</span></p>
              <button className="btn btn-wide" onClick={() => { setStep('checkout'); window.scrollTo({ top: 0 }) }}>
                {t('cart.checkout')}
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
  const { t } = useLang()
  const statuses = ['All', ...new Set(orders.map((o) => o.status))]
  const visible = filter === 'All' ? orders : orders.filter((o) => o.status === filter)
  return (
    <section className="orders-page section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('orders.eyebrow')}</p>
          <h2>{t('orders.title')} {orders.length > 0 && <small className="muted">({orders.length})</small>}</h2>
          <p style={{ color: 'var(--muted)' }}>
            {t('orders.sub')}
          </p>
          {orders.length > 0 && (
            <div className="filters">
              {statuses.map((s) => (
                <button
                  key={s}
                  className={`chip ${filter === s ? 'active' : ''}`}
                  onClick={() => setFilter(s)}
                >
                  {s === 'All' ? t('common.all') : stL(s, t)}
                </button>
              ))}
            </div>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="cart-empty">
            <p>{t('orders.empty')}</p>
            <button className="btn" onClick={onShop}>{t('orders.shop')}</button>
          </div>
        ) : visible.length === 0 ? (
          <div className="cart-empty">
            <p>{t('or.none').replace('{f}', filter === 'All' ? '' : stL(filter, t))}</p>
            <button className="btn btn-outline" onClick={() => setFilter('All')}>{t('or.showAll')}</button>
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
                    <strong>#{o.num} <span className="order-kind">{isService ? t('ord.svc') : t('ord.prod')}</span></strong>
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
                  <span className={`order-status st-${o.status.toLowerCase()}`}>{stL(o.status, t)}</span>
                  <span className="order-total">{formatPrice(o.total)}</span>
                  <span className="view-set">{t('orders.details')}</span>
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
  const { t, lang } = useLang()
  return (
    <section className="detail section">
      <div className="container">
        <button className="back-link" onClick={onBack}>{t('orders.back')}</button>
        <div className="order-detail-card">
          <div className="order-detail-head">
            <div>
              <p className="eyebrow">{isService ? t('od.booking') : t('od.title')}</p>
              <h2>#{order.num}</h2>
              <p className="muted">
                Placed on {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <span className={`order-status big st-${order.status.toLowerCase()}`}>{stL(order.status, t)}</span>
          </div>

          <div className="order-steps">
            {['Processing', 'Confirmed', 'Completed'].map((s, i) => {
              const reached = ['Processing', 'Confirmed', 'Completed'].indexOf(order.status) >= 0
                ? (order.status === 'Processing' ? 0 : order.status === 'Confirmed' ? 1 : 2) >= i
                : i === 0
              return (
                <span key={s} className={`order-step ${reached ? 'done' : ''}`}>
                  <em>{i + 1}</em> {stL(s, t)}
                </span>
              )
            })}
          </div>

          <div className="order-detail-body">
            <div className="order-items-list">
              <h3 className="order-items-title">{t('od.items')} ({order.items.length})</h3>
              {order.items.map((i) => (
                <div key={i.id} className="summary-row">
                  <img src={i.image} alt={i.name} />
                  <div className="summary-info">
                    <strong>{i.name}</strong>
                    <span>{t('co.qty')} {i.qty} × {formatPrice(i.price)}</span>
                  </div>
                  <span className="summary-price">{formatPrice(i.price * i.qty)}</span>
                </div>
              ))}
            </div>

            <div className="order-side">
              <div className="order-totals">
                <p><span>{t('od.subtotal')}</span><span>{formatPrice(order.subtotal)}</span></p>
                <p><span>{isService ? t('od.fee') : t('od.shipping')}</span><span>{shipping === 0 ? (isService ? '—' : t('od.free')) : formatPrice(shipping)}</span></p>
                <p className="grand"><span>{isService ? t('od.total') : t('od.totalPaid')}</span><span>{formatPrice(order.total)}</span></p>
              </div>
              <div className="order-customer">
                <h4>{isService ? t('od.booking') : t('od.delivery')}</h4>
                <p>{order.customer.name}</p>
                <p>{order.customer.phone}</p>
                <p>{order.customer.address}, {order.customer.city}</p>
                <p className="muted">{t('od.paidVia')} {payLabel(order.customer.payment, lang)}</p>
              </div>
            </div>
          </div>

          <div className="order-help">
            <div>
              <strong>{t('od.help')} {isService ? t('od.bookingWord') : t('od.order')}?</strong>
              <p className="muted">{t('od.mention')} #{order.num} {t('od.helpSub')}</p>
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
  const { t } = useLang()
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
              <BrandLogo />
            </a>

            <h1>{isRegister ? t('auth.create') : t('auth.welcome')}</h1>
            <p className="auth-sub">
              {isRegister
                ? t('auth.joinSub')
                : t('auth.loginSub')}
            </p>

            <div className="social-stack">
              <button type="button" className="social-btn" onClick={(e) => { e.preventDefault(); onSuccess({ name: 'Google User', email: 'user@gmail.com' }) }}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81Z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.1A12 12 0 0 0 12 24Z" />
                  <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.29a12 12 0 0 0 0 10.76l3.98-3.1Z" />
                  <path fill="#EA4335" d="M12 4.77c1.76 0 3.35.61 4.6 1.8l3.42-3.42A11.98 11.98 0 0 0 12 0 12 12 0 0 0 1.29 6.62l3.98 3.1C6.22 6.88 8.87 4.77 12 4.77Z" />
                </svg>
                {t('auth.google')}
              </button>
              <button type="button" className="social-btn" onClick={(e) => { e.preventDefault(); onSuccess({ name: 'Apple User', email: 'user@icloud.com' }) }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 12.54c-.03-2.9 2.37-4.29 2.48-4.36-1.35-1.98-3.46-2.25-4.21-2.28-1.79-.18-3.5 1.05-4.4 1.05-.91 0-2.31-1.03-3.8-.99-1.95.03-3.76 1.14-4.77 2.88-2.03 3.53-.52 8.76 1.46 11.63.96 1.4 2.11 2.97 3.62 2.91 1.45-.06 2-.94 3.75-.94s2.25.94 3.78.91c1.56-.03 2.55-1.41 3.5-2.82 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.03-1.16-3.06-4.6l1.07.86ZM14.16 4.06c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63Z" />
                </svg>
                {t('auth.apple')}
              </button>
            </div>

            <div className="auth-divider"><span>{t('auth.or')}</span></div>

            <form onSubmit={handleSubmit} className="auth-form">
              {isRegister && (
                <label className="field">
                  <span className="field-label">{t('auth.fullname')}</span>
                  <input name="name" placeholder="rowrok@gmailcom" value={form.name} onChange={handleChange} required />
                </label>
              )}
              <label className="field">
                <span className="field-label">{t('auth.email')}</span>
                <input type="email" name="email" placeholder="rowrok@gmailcom" value={form.email} onChange={handleChange} required />
              </label>
              <label className="field">
                <span className="field-label">{t('auth.password')}</span>
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
                    <span>{t('auth.remember')}</span>
                  </label>
                  <button type="button" className="link-btn" onClick={() => {}}>{t('auth.forgot')}</button>
                </div>
              )}

              <button type="submit" className="btn auth-submit">
                {isRegister ? t('auth.signupBtn') : t('auth.loginBtn')}
              </button>
            </form>

            <p className="auth-switch dark">
              {isRegister ? (
                <>{t('auth.have2')} <button onClick={() => onSwitchMode('login')}>{t('nav.login')}</button></>
              ) : (
                <>{t('auth.have')} <button onClick={() => onSwitchMode('register')}>{t('auth.signupBtn')}</button></>
              )}
            </p>
            <button className="back-link center" onClick={onBack}>{t('auth.back')}</button>
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
              {t('auth.caption')}
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
  const { t } = useLang()
  return (
    <section className="features section-dark">
      <div className="container feature-grid">
        {FEATURES.map((f) => (
          <div key={f.tk} className="feature">
            <span className="feature-icon">{f.icon}</span>
            <h3>{t(f.tk)}</h3>
            <p>{t(f.dk)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Services — advice + machine treatments ---------- */
const SERVICES = [
  { id: 'advice', k: 'advice', image: IMG.aboutCosmetics },
  { id: 'analyzer', k: 'analyzer', image: IMG.faceAnalyzer },
  { id: 'machine', k: 'machine', image: IMG.machineTreatment },
]

function Services({ onOpenAnalyzer, onOpenAdvice }) {
  const { t } = useLang()
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('svc.eyebrow')}</p>
          <h2>{t('svc.title')}</h2>
          <p style={{ color: 'var(--muted)' }}>
            {t('svc.sub')}
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
                  <img src={s.image} alt={t(`svc.${s.k}.title`)} loading="lazy" />
                  <span className="badge">{t(`svc.${s.k}.tag`)}</span>
                </div>
                <div className="service-body">
                  <h3>{t(`svc.${s.k}.title`)}</h3>
                  <p>{t(`svc.${s.k}.text`)}</p>
                  <ul className="service-points">
                    {(t(`svc.${s.k}.points`) || []).map((pt) => (
                      <li key={pt}>✓ {pt}</li>
                    ))}
                  </ul>
                  {clickable ? (
                    <button
                      className="btn btn-small service-cta"
                      onClick={(e) => { e.stopPropagation(); handler() }}
                    >
                      {t(`svc.${s.k}.cta`)} →
                    </button>
                  ) : (
                    <a href="#contact" className="btn btn-small service-cta" onClick={(e) => e.stopPropagation()}>{t(`svc.${s.k}.cta`)}</a>
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
  { id: 'essential', price: 15000, mins: 20 },
  { id: 'glow', price: 45000, mins: 45, popular: true },
  { id: 'clinical', price: 85000, mins: 75 },
]

const SCRUB_OPTIONS = [
  { id: 'none', price: 0 },
  { id: 'gentle', price: 12000 },
  { id: 'deep', price: 18000 },
]

function nextDays(n, lang) {
  const out = []
  const fmt = new Intl.DateTimeFormat(lang === 'sw' ? 'sw-TZ' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
  const today = lang === 'sw' ? 'Leo' : 'Today'
  const tomorrow = lang === 'sw' ? 'Kesho' : 'Tomorrow'
  for (let i = 0; i < n; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    out.push({ key: d.toISOString().slice(0, 10), label: i === 0 ? today : i === 1 ? tomorrow : fmt.format(d), sub: fmt.format(d) })
  }
  return out
}
const SLOT_TIMES = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30']

function AnalyzerBookingPage({ onBack, addOrder }) {
  const { t, lang } = useLang()
  const days = nextDays(4, lang)
  const [pkgId, setPkgId] = useState('glow')
  const [scrubId, setScrubId] = useState('gentle')
  const [day, setDay] = useState(days[1].key)
  const [time, setTime] = useState('14:00')
  const [form, setForm] = useState({ name: '', phone: '', notes: '', payment: 'mobile' })
  const [processing, setProcessing] = useState(false)
  const [booking, setBooking] = useState(null)
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const pkg = ANALYZER_PACKAGES.find((p) => p.id === pkgId)
  const scrub = SCRUB_OPTIONS.find((s) => s.id === scrubId)
  const total = pkg.price + scrub.price
  const pkgName = t(`pkg.${pkg.id}.name`)
  const scrubName = t(`scrub.${scrub.id}.name`)
  const dayLabel = (days.find((d) => d.key === day)?.label || day)

  const pay = (e) => {
    e.preventDefault()
    if (processing || !time || !day) return
    setProcessing(true)
    setTimeout(() => {
      const itemName = `${pkgName}${scrub.id !== 'none' ? ' + ' + scrubName : ''} — ${dayLabel} ${time}`
      const order = buildOrder(
        [{ id: 'svc-analyzer', name: itemName, category: 'Service', price: total, qty: 1, image: ANALYZER_POSTER }],
        { name: form.name, phone: form.phone, address: `Asma Store (in-store service)`, city: `${dayLabel} at ${time}${form.notes ? ' · ' + form.notes : ''}`, payment: form.payment },
        total,
        0,
        total,
      )
      addOrder(order)
      setBooking({ ...order, pkg: pkgName, scrub: scrubName, slot: `${dayLabel} at ${time}` })
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
            <h2>{t('an.okTitle')}</h2>
            <p className="order-num">Booking <strong>#{booking.num}</strong> · Total <strong>{formatPrice(booking.total)}</strong></p>
            <div className="booking-lines">
              <p><span>{t('an.okService')}</span><span>{booking.pkg}</span></p>
              <p><span>{t('an.okScrub')}</span><span>{booking.scrub}</span></p>
              <p><span>{t('an.okWhen')}</span><span>{booking.slot}</span></p>
              <p><span>{t('an.okGuest')}</span><span>{form.name} · {form.phone}</span></p>
            </div>
            <p>{t('an.okThanks')}</p>
            <button className="btn" onClick={onBack}>{t('detail.continue')}</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="detail section analyzer-page">
      <div className="container">
        <button className="back-link" onClick={onBack}>{t('common.backHome')}</button>

        <div className="analyzer-hero">
          <div className="analyzer-video">
            <video src={ANALYZER_VIDEO} poster={ANALYZER_POSTER} controls autoPlay muted loop playsInline preload="metadata" />
            <span className="badge">{t('an.video')}</span>
          </div>
          <div className="analyzer-intro">
            <p className="eyebrow">{t('an.eyebrow')}</p>
            <h1>{t('an.title')}</h1>
            <p className="stars">★★★★★ <small>4.9 · 212 {t('common.reviews')}</small></p>
            <p className="detail-desc">
              {t('an.desc')}
            </p>
            <ul className="perks">
              <li>✓ {t('an.p1')}</li>
              <li>✓ {t('an.p2')}</li>
              <li>✓ {t('an.p3')}</li>
            </ul>
            <div className="analyzer-trust">
              <div><strong>{t('an.t1v')}</strong><span>{t('an.t1l')}</span></div>
              <div><strong>{t('an.t2v')}</strong><span>{t('an.t2l')}</span></div>
              <div><strong>{t('an.t3v')}</strong><span>{t('an.t3l')}</span></div>
            </div>
          </div>
        </div>

        <div className="booking-grid">
          <div className="booking-main">
            <div className="booking-block">
              <h2><span className="step-n">1</span> {t('an.s1')}</h2>
              <div className="pkg-grid">
                {ANALYZER_PACKAGES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`pkg-card ${pkgId === p.id ? 'selected' : ''}`}
                    onClick={() => setPkgId(p.id)}
                  >
                    {p.popular && <span className="pkg-badge">{t('an.popular')}</span>}
                    <strong>{t(`pkg.${p.id}.name`)}</strong>
                    <span className="pkg-price">{formatPrice(p.price)} <small>· {p.mins} {t('an.mins')}</small></span>
                    <span className="pkg-desc">{t(`pkg.${p.id}.desc`)}</span>
                    <span className="pkg-points">{(t(`pkg.${p.id}.points`) || []).map((x) => <em key={x}>✓ {x}</em>)}</span>
                    <span className="pkg-radio" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-block">
              <h2><span className="step-n">2</span> {t('an.s2')} <small className="muted">{t('an.s2note')}</small></h2>
              <div className="scrub-grid">
                {SCRUB_OPTIONS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`scrub-card ${scrubId === s.id ? 'selected' : ''}`}
                    onClick={() => setScrubId(s.id)}
                  >
                    <strong>{t(`scrub.${s.id}.name`)}</strong>
                    <span>{t(`scrub.${s.id}.desc`)}</span>
                    <span className="pkg-price">{s.price === 0 ? t('an.included') : '+' + formatPrice(s.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-block">
              <h2><span className="step-n">3</span> {t('an.s3')}</h2>
              <div className="slot-days">
                {days.map((d) => (
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
              <h3>{t('an.book')}</h3>
              <div className="booking-lines small">
                <p><span>{pkgName}</span><span>{formatPrice(pkg.price)}</span></p>
                <p><span>{scrubName}</span><span>{scrub.price === 0 ? '—' : formatPrice(scrub.price)}</span></p>
                <p><span>Slot</span><span>{dayLabel} · {time}</span></p>
                <p className="grand"><span>{t('detail.total')}</span><span>{formatPrice(total)}</span></p>
              </div>
              <input name="name" placeholder={t('co.name')} value={form.name} onChange={handleChange} required disabled={processing} />
              <input name="phone" type="tel" placeholder={t('co.phone')} value={form.phone} onChange={handleChange} required disabled={processing} />
              <input name="notes" placeholder={t('an.notes')} value={form.notes} onChange={handleChange} disabled={processing} />
              <select name="payment" value={form.payment} onChange={handleChange} disabled={processing}>
                <option value="mobile">{t('pay.mobile')}</option>
                <option value="card">{t('pay.card')}</option>
                <option value="cod">{t('pay.store')}</option>
              </select>
              <button type="submit" className={`btn btn-wide ${processing ? 'loading' : ''}`} disabled={processing || !day || !time}>
                {processing ? (<><span className="spinner" aria-hidden="true" />{t('detail.processing')}</>) : (<>{t('an.pay').replace('{total}', formatPrice(total))}</>)}
              </button>
              <p className="secure-note">🔒 Secure checkout · {t('an.cancel')}</p>
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
  { id: 'coffee', image: IMG.coffeeScrub },
  { id: 'morning', image: IMG.morningRoutine },
  { id: 'tips', image: IMG.beautyTips },
]

function AdvicePage({ onBack, onOpenAnalyzer }) {
  const [lightbox, setLightbox] = useState(null)
  const { t } = useLang()
  useEffect(() => {
    if (!lightbox) return
    const close = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', close)
      document.body.style.overflow = ''
    }
  }, [lightbox])
  return (
    <section className="detail section analyzer-page">
      <div className="container">
        <button className="back-link" onClick={onBack}>{t('common.backHome')}</button>

        <div className="analyzer-hero">
          <div className="analyzer-video">
            <video src={ADVICE_VIDEO} poster={ADVICE_POSTER} controls autoPlay muted loop playsInline preload="metadata" />
            <span className="badge">Morning glow routine — watch</span>
          </div>
          <div className="analyzer-intro">
            <p className="eyebrow">{t('ad.eyebrow')}</p>
            <h1>{t('ad.title')}</h1>
            <p className="stars">★★★★★ <small>{t('ad.rating')}</small></p>
            <p className="detail-desc">
              {t('ad.desc')}
            </p>
            <ul className="perks">
              <li>✓ {t('ad.p1')}</li>
              <li>✓ {t('ad.p2')}</li>
              <li>✓ {t('ad.p3')}</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 22 }}>
              <button className="btn" onClick={onOpenAnalyzer}>{t('svc.scan')}</button>
              <a className="btn btn-outline" href="https://wa.me/255616509415" target="_blank" rel="noreferrer">WhatsApp us</a>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {ADVICE_GUIDES.map((g, i) => (
            <article key={g.id} className="service-card">
              <div
                className="service-img zoomable"
                onClick={() => setLightbox(g)}
                role="button"
                tabIndex={0}
                aria-label={t(`ad.${g.id}.title`)}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(g)}
              >
                <img src={g.image} alt={t(`ad.${g.id}.title`)} loading="lazy" />
                <span className="badge">{t(`ad.${g.id}.tag`)}</span>
                <span className="zoom-hint" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
              </div>
              <div className="service-body">
                <span className="category">{t('ad.guide')} {i + 1}</span>
                <h3>{t(`ad.${g.id}.title`)}</h3>
                <p>{t(`ad.${g.id}.text`)}</p>
                <ol className="advice-steps">
                  {(t(`ad.${g.id}.steps`) || []).map((s) => (
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
              <p className="eyebrow">{t('ad.visit')}</p>
              <h2>Asma Store — Sinza, Dar es Salaam</h2>
              <ul className="contact-details">
                <li>⌂ Sinza Mori Road, Near Sinza Bus Stand, Dar es Salaam, Tanzania</li>
                <li>☏ <a href="tel:+255616509415">+255 616 509 415</a> (call / WhatsApp) · Mon–Sat</li>
                <li>✉ <a href="mailto:hello@asmastore.com">hello@asmastore.com</a></li>
              </ul>
              <div className="hero-actions" style={{ marginTop: 18, marginBottom: 0 }}>
                <a className="btn btn-small" href="https://wa.me/255616509415?text=Hi%20Asma%20Store!%20I%20need%20beauty%20advice" target="_blank" rel="noreferrer">{t('ad.chat')}</a>
                <a className="btn btn-small btn-outline" href="https://www.google.com/maps/search/?api=1&query=Sinza+Mori+Road+Dar+es+Salaam" target="_blank" rel="noreferrer">{t('ad.maps')}</a>
              </div>
            </div>
            <div className="hours-card">
              <h3>{t('ad.hours')}</h3>
              <p><span>{t('ad.mon')}</span><span>09:00 – 20:00</span></p>
              <p><span>{t('ad.fri')}</span><span>12:30 – 14:00</span></p>
              <p><span>{t('ad.sun')}</span><span>12:00 – 18:00</span></p>
              <p className="ship-hint">{t('ad.walk')}</p>
            </div>
          </div>
        </div>
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={t(`ad.${lightbox.id}.title`)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label={t('common.close')}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <figure className="lightbox-fig" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={t(`ad.${lightbox.id}.title`)} />
            <figcaption>{t(`ad.${lightbox.id}.title`)} — {t(`ad.${lightbox.id}.tag`)}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

function Testimonials() {
  const { t } = useLang()
  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('rev.eyebrow')}</p>
          <h2>{t('rev.title')}</h2>
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
  const { t } = useLang()
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section className="contact section" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2>{t('contact.title')}</h2>
          <p>
            {t('contact.sub')}
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
            <h3>{t('ct.ok').replace('{name}', form.name || 'beautiful')}</h3>
            <p>{t('ct.oksub')}</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder={t('contact.name')} value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder={t('contact.email')} value={form.email} onChange={handleChange} required />
            <textarea name="message" rows="4" placeholder={t('contact.msg')} value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn">{t('contact.send')}</button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer({ onHome, onProducts, onSection }) {
  const { t } = useLang()
  const go = (e, fn) => {
    e.preventDefault()
    fn()
  }
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="logo logo-footer" onClick={(e) => go(e, onHome)}><BrandLogo light /></a>
        <nav className="footer-links">
          <a href="#about" onClick={(e) => go(e, () => onSection('about'))}>{t('foot.about')}</a>
          <a href="#products" onClick={(e) => go(e, onProducts)}>{t('foot.products')}</a>
          <a href="#reviews" onClick={(e) => go(e, () => onSection('reviews'))}>{t('foot.reviews')}</a>
          <a href="#contact" onClick={(e) => go(e, () => onSection('contact'))}>{t('foot.contact')}</a>
        </nav>
        <p>© {new Date().getFullYear()} Asma Store. {t('foot.rights')}</p>
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
  const [glowKind, setGlowKind] = useState(null)

  const [user, setUser] = useState(() => loadStore('lumiere_user'))
  const [orders, setOrders] = useState(() => loadStore('lumiere_orders') || [])
  const [cart, setCart] = useState([])
  const [lang, setLang] = useState(loadLang)
  const [langOpen, setLangOpen] = useState(false)

  const changeLang = (l) => {
    setLang(l)
    setLangOpen(false)
    try {
      localStorage.setItem('asma_lang', l)
    } catch {
      /* ignore */
    }
  }

  const t = (k) => (STR[lang] && STR[lang][k]) || STR.en[k] || k

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
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const goSection = (id) => {
    setView('home')
    setHash('')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0 })
    }, 90)
  }

  const setHash = (h) => {
    try {
      const url = h
        ? `${window.location.pathname}${window.location.search}#${h}`
        : `${window.location.pathname}${window.location.search}`
      window.history.replaceState(null, '', url)
    } catch {
      /* ignore */
    }
  }

  const openProduct = (p, returnTo) => {
    setSelectedProduct(p)
    setDetailReturn(returnTo || view)
    setView('detail')
    setHash(`${p.brand ? 'f' : 'p'}-${p.id}`)
    window.scrollTo({ top: 0 })
  }

  const openProducts = () => {
    setView('products')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openPerfume = () => {
    setView('perfume')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openPerfumeSet = (s) => {
    setSelectedPerfumeSet(s)
    setView('perfumeSetDetail')
    setHash(`ps-${s.id}`)
    window.scrollTo({ top: 0 })
  }

  const openSets = () => {
    setView('sets')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openSet = (s) => {
    setSelectedSet(s)
    setView('setDetail')
    setHash(`s-${s.id}`)
    window.scrollTo({ top: 0 })
  }

  const openAnalyzer = () => {
    setView('analyzer')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openAdvice = () => {
    setView('advice')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openCart = () => {
    setView('cart')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openOrders = () => {
    setView('orders')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  const openOrder = (o) => {
    setSelectedOrder(o)
    setView('orderDetail')
    window.scrollTo({ top: 0 })
  }

  const continueShopping = () => {
    setView(['products', 'perfume'].includes(detailReturn) ? detailReturn : 'home')
    setHash('')
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const openFromHash = () => {
      const m = /^#(p|f|s|ps)-(\d+)$/.exec(window.location.hash || '')
      if (!m) return
      const id = Number(m[2])
      if (m[1] === 'p' || m[1] === 'f') {
        const p = [...PRODUCTS, ...PERFUMES].find((x) => x.id === id)
        if (p && (!selectedProduct || selectedProduct.id !== id || view !== 'detail')) {
          setSelectedProduct(p)
          setDetailReturn('home')
          setView('detail')
          window.scrollTo({ top: 0 })
        }
      } else if (m[1] === 's') {
        const s = SETS.find((x) => x.id === id)
        if (s && (!selectedSet || selectedSet.id !== id || view !== 'setDetail')) {
          setSelectedSet(s)
          setView('setDetail')
          window.scrollTo({ top: 0 })
        }
      } else if (m[1] === 'ps') {
        const s = PERFUME_SETS.find((x) => x.id === id)
        if (s && (!selectedPerfumeSet || selectedPerfumeSet.id !== id || view !== 'perfumeSetDetail')) {
          setSelectedPerfumeSet(s)
          setView('perfumeSetDetail')
          window.scrollTo({ top: 0 })
        }
      }
    }
    window.addEventListener('hashchange', openFromHash)
    openFromHash()
    return () => window.removeEventListener('hashchange', openFromHash)
  })

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
        <Hero onGlow={setGlowKind} />
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
    <LangCtx.Provider value={{ lang, setLang: changeLang, t }}>
      {navbar}
      <main>{content}</main>
      <Footer onHome={goHome} onProducts={openProducts} onSection={goSection} />
      {glowKind && (
        <GlowModal
          kind={glowKind}
          onClose={() => setGlowKind(null)}
          onProduct={(p) => { setGlowKind(null); openProduct(p, 'home') }}
          onSet={(s) => { setGlowKind(null); openSet(s) }}
        />
      )}
      <div className="corner-stack">
        {cartCount > 0 && view !== 'cart' && (
          <button className="floating-cart" onClick={openCart} aria-label={`${t('corner.cart')}, ${cartCount} ${t('corner.items')}`}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1.5" />
              <circle cx="19" cy="21" r="1.5" />
              <path d="M2 3h3l2.6 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L22 7H6" />
            </svg>
            <span className="floating-cart-count" key={cartCount}>{cartCount}</span>
          </button>
        )}
        <div className="lang-fab-wrap">
          <div className={`lang-pops ${langOpen ? 'open' : ''}`} aria-hidden={!langOpen}>
            {['en', 'sw'].map((l, i) => (
              <button
                key={l}
                type="button"
                tabIndex={langOpen ? 0 : -1}
                className={`lang-pop ${lang === l ? 'active' : ''}`}
                style={{ '--i': i }}
                aria-label={l === 'en' ? t('lang.en') : t('lang.sw')}
                onClick={() => changeLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className={`lang-fab ${langOpen ? 'open' : ''}`}
            onClick={() => setLangOpen(!langOpen)}
            aria-label={t('lang.label')}
            aria-expanded={langOpen}
            title={t('lang.label')}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
            <span className="lang-code">{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </LangCtx.Provider>
  )
}

function SetsPreview({ onSeeAll, onSelectSet }) {
  const { t, lang } = useLang()
  return (
    <section className="products section" id="sets-preview" style={{ background: 'var(--blush)' }}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t('home.setsEyebrow')}</p>
          <h2>{t('home.setsTitle')}</h2>
        </div>
        <div className="product-grid">
          {SETS.slice(0, 3).map((raw) => {
            const set = locS(raw, lang)
            return (
              <article
                key={set.id}
                className="product-card set-card"
                onClick={() => onSelectSet(raw)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectSet(raw)}
              >
              <div className="product-img">
                <img src={set.image} alt={set.name} loading="lazy" />
                <span className="badge">{set.productIds.length} {t('set.products')}</span>
                <ShareBtn title={set.name} price={formatPrice(set.price)} desc={`${set.tagline}. ${set.saveNote}.`} image={set.image} kind="s" id={set.id} />
              </div>
                <div className="product-body">
                  <span className="category">{t('set.word')}</span>
                  <h3>{set.name}</h3>
                  <p>{set.tagline}</p>
                  <div className="product-foot">
                    <span className="price">{formatPrice(set.price)}</span>
                    <span className="view-set">{t('sets.view')}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button className="btn btn-outline" onClick={onSeeAll}>{t('home.viewAllSets')}</button>
        </div>
      </div>
    </section>
  )
}
