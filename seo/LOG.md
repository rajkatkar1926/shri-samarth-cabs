# SEO activity log - shrisamarthcabs.com

## 2026-10-28 (setup)
- Site live (200). robots.txt allows Google, Bing, OpenAI and Perplexity crawlers. Sitemap live with 21 pages.
- Routine created: Mon/Tue/Thu/Sat. Plan in seo/PLAN.md.
- Health check, all 21 pages: 200, one H1 each, canonical present, no noindex, old number 97637 gone everywhere. Titles/descriptions present (5 titles over 60 chars, minor).
- Business data Google reads (schema): telephone + areaServed present. MISSING on all pages: FAQ markup (FAQPage), map location (geo / hasMap), opening hours, links to Maps/Justdial/Instagram (sameAs).
- Raj confirmed hours 6am-10pm and Maps link (see PLAN.md). Short link could not be expanded from the command line; open in browser to read address/pin.
## 2026-10-28 (session 1, Wed, run early at Raj's request)
- Read Maps listing in browser: name shown "shrisamarthcabs Solapur", category "Car leasing service", address Vijapur Rd, Kanchan Ganga Nagar, Saiful, Jule, Solapur 413008, Open 24 hours, phone 095116 00787, 5.0 stars / 2 reviews (both answered by owner), 8 photos.
- Built on branch seo/2026-10-28-schema-faq-map: FAQ markup on every page with FAQs (taken word-for-word from the visible FAQs), street + postcode + map link in the business block. Build passes; confirmed in built HTML. NOT merged, awaiting Raj.
- Hours resolved by Raj: service 24/7, phone enquiries 6am-10pm. Added to markup (open all day + contact hours 06:00-22:00). Maps already says 24 hours; add the 6-10 call-enquiry note to the Maps description (needs Raj yes).
- Not added on purpose: star rating (2 reviews, Google doesn't allow self-reviews markup for own business), map coordinates (not read, no guessing).
- FLAGS for Maps listing (need Raj yes before changing): business name has "Solapur" appended and no spaces (should be exactly the real signboard name "Shri Samarth Cabs"); category "Car leasing service" -> primary should be "Taxi service" (add car rental as secondary).
- (old note) Next fix (Thursday job #1): add FAQ markup to FAQ + route pages, and geo/hours/hasMap/sameAs to the business block. NEED from owner: exact office address pin, opening hours (24x7?), Maps listing link, any social links.

## 2026-10-28 (deploy)
- PR 3 merged 14:45 UTC. Site did NOT auto-deploy from the merge (last auto deploy was PR 2 on 27 Oct). Triggered deploy by hand in Dokploy app samarth-cabs-site (id Br8gvOtsTDtC6LahYmfJV, safe call application.deploy). Live and verified: FAQ markup, address, hours on the live pages.
- LESSON: after every merge, trigger application.deploy and verify on the live page. Do not assume auto-deploy.

## 2026-10-28 (new pages batch, at Raj's request: all backlog pages now)
- Branch seo/2026-10-28-new-pages (NOT pushed, NOT merged, awaiting Raj's yes after preview).
- 6 route pages: Shirdi (311 km), Vijayapura (100 km), Latur (122 km), Dharashiv (65.0 km), Sangli+Miraj (193 km, Sangli measured), Bengaluru (620 km). Distances read from Google Maps in the browser, same start point as existing pages.
- 1 trip page: Shirdi + Shani Shingnapur (Shani Shingnapur 260 km, measured). 2 guides: Akkalkot darshan, Pandharpur wari tips. No timings, dates or fares printed.
- Fixed phone-hours text on outstation hub: 7am to 10pm -> 6am to 10pm (matches what Raj confirmed).
- Build passes, 12 new URLs, FAQ markup present, old phone number 97637 absent. Added to footer/menu and sitemap.
- Not done: Maps listing fixes (name, category) still need Raj's yes.

## 2026-10-28 (logo/favicon)
- Raj: logo shows as grey globe, not visible to Google or AI. Cause: /favicon.ico was 404 (Google asks for it first), only one icon size, logo in schema was a 160px webp, no og:image. Fix on branch seo/2026-10-28-logo-favicon: favicon.ico + 48/96/192 icons, PNG logo in markup, og:image + image in markup. Not live until merged and deployed.
- Still open: the artwork is a detailed portrait; unreadable at 16px. A simple bold mark would show better in Google results. Google also takes days/weeks to refresh a favicon; request re-indexing in Search Console.

- PR 5 merged and deployed by hand; live check: favicon.ico 200, icons 200, sitemap now 30 pages, Shirdi page 200 (PR 4 pages included).
