# SEO activity log - shrisamarthcabs.com

## 2026-10-29 (Thu, Pune page)
- Asked the other Instagram session (built the PR 4 pages) to report open work. Split: I own page upgrades, Maps and weekly checks; it owns new pages.
- Pune page: added 2 FAQs (distance about 250 km via Mohol and Indapur; what to tell us to book). Facts were already on the page. Branch seo/2026-10-29-pune-upgrade.
- Fleet resolved by Raj: we run ALL cars listed on the site = Swift Dzire, Ertiga, Innova Crysta, Cruiser, Tempo Traveller, Urbania (six). Cars page, FAQ and info text said four; now say six, with Tempo Traveller and Urbania cards (no seat counts invented: "confirmed directly"). Checked in local preview. In PR 6.

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

- 2026-10-29: PR 6 merged + deployed by hand; live: Pune FAQ and six-car list on /cars. Google resubmit (Step 5) NOT done: Search Console not signed in in this browser pane. URLs to resubmit: /solapur-to-pune-taxi, /cars, /faq, /guides/solapur-temple-trip-planning.

- 2026-10-29: requested indexing for Pune, cars, faq, temple-trip guide in Search Console (swamicabs48 account); faq was not yet indexed, the other three already on Google.

## 2026-10-30 (Fri, weekly check, ad hoc at Raj's request)
- Live health, all 30 sitemap pages: 200, one H1, canonical, no noindex, old number 97637 absent. robots.txt allows Google/Bing/OpenAI/Perplexity; sitemap line present.
- Search Console (swamicabs48, data to 28 Oct, last 7 days): 11 clicks, 83 impressions, CTR 13.3%, avg position 33.3. Queries: "plan a solapur temple tour" (pos 14.7), "shree samarth solapur" (8.0), "solapur car rental" (27.7). Innova/Hycross rental queries show (pos 54-72).
- Pages report (last update 23 Oct): 8 indexed, 16 not indexed = 13 "Discovered - currently not indexed" (the new pages, wait), 2 redirect, 1 "blocked by robots.txt" = old http://shrisamarthcabs.com/ (last crawled 9 Oct, stale; live robots is clean, nothing to fix). Sitemap read 28 Oct: 30 pages, Success.
- MAPS FINDING (evidence: Maps searches today): our listing does NOT appear for "taxi in solapur" (top: Shri Sai, Anushka, Tanmay, Balaji, Sapthagiri, Amruta) nor for its own name - Google rewrites "shrisamarthcabs Solapur" to "shri samarth cabs Solapur" and shows two other businesses. Supports the open name/category fix (needs Raj yes): rename to the real signboard name, primary category Taxi service.
- Nothing changed on site or listing today. No pages submitted for indexing (already queued 29 Oct).
- 2026-10-30 (later, Raj yes): Maps listing edits submitted in Business Profile editor (swamicabs48): name "shri samarth cabs solapur" -> "Shri Samarth Cabs"; primary category Car Rental Service -> Taxi service, Car Rental Service kept as secondary. Both show "pending review" (up to ~10 min, can take longer). RECHECK name/category and map-pack search next session. Also seen: phone-number edit in the profile shows "taking longer than expected" (confirm it is 95116 00787, contact Google support if stuck); Google Ads says account balance has run out.
- 2026-10-30 (Fri, page upgrade at Raj's request "do SEO now"): Akkalkot taxi page: added 3 FAQs (car for elders, Akkalkot on the way to Gangapur, what to tell us when booking). All facts already on the page, nothing invented. Branch seo/2026-10-30-akkalkot-upgrade, build passes, FAQ markup present in built HTML. NOT pushed/merged, awaiting Raj yes. Maps phone-number and Ads balance left for next week (Raj).
- 2026-10-30: PR 7 merged 15:34 UTC, deployed by hand in Dokploy, live check OK (new Akkalkot FAQ visible on live page). Search Console: Akkalkot page was "Discovered - currently not indexed" (not on Google yet); Request indexing sent, "Indexing requested" shown. Recheck in 7 days.
- Parked for next week (Raj): Maps phone-number edit stuck; Google Ads balance run out; recheck pending Maps name/category.
- 2026-10-30 (Fri, more SEO for "Solapur car rental", Raj request): no page targeted this phrase (GSC: "solapur car rental" pos 27.7, "car rental solapur" pos 105). Cars page retargeted: title "Car Rental in Solapur with Driver | Shri Samarth Cabs", H1, answer-first lead, description, +2 FAQs (do you offer car rental in Solapur; how to book). Car guide wording fixed ("four cars" -> cars we offer; fleet is six). Branch seo/2026-10-30-car-rental-solapur, build passes, built HTML has new title + FAQ. NOT pushed/merged, awaiting Raj yes. Nothing invented (no self-drive, no prices).
- 2026-10-30 (Raj request): mapped competitor shritravels.in (32 pages). Written to seo/COMPETITOR-MAP-shritravels.md: side-by-side, gaps (pilgrimage hub, Satara, 8 guide/blog topics, festival posts), our edge (Latur, Dharashiv, Bengaluru, airport, Shirdi+Shani, car guide), 9-item queue. Rule: ideas only, no copied text, no copied prices/distances. Nothing changed on the live site.
- 2026-10-30: PR 8 (cars page for "car rental in Solapur" + competitor map) merged and deployed; live check OK; Request indexing sent for /cars ("Indexing requested").
- 2026-10-30 (Raj: "build all remaining pages"): branch seo/2026-10-30-new-pages-2, built 3 pages from competitor-map queue using only our own measured facts: /solapur-to-satara-taxi (219 km, 4h25 by Google Maps, tolls flagged, read in browser today), /solapur-pilgrimage-tours (hub linking all temple routes, trips, guides), /guides/places-near-solapur-within-100-km (distances already on our pages). Added to footer/menu + sitemap (33 pages). Build passes, FAQ markup present, old number absent. NOT pushed/merged, awaiting Raj yes.
- NOT built (facts unverified, no invention): taxi fare explainer (needs Raj's fare rules), Pune-Solapur highway guide (tolls), Solapur to Shirdi by car/bus/train, Ola/Uber in Solapur, temple timings, Kartiki Ekadashi / Datta Jayanti 2026 posts (dates from official sources only).
- 2026-10-30: PR 9 merged, deployed by hand, live check OK (satara 200, pilgrimage hub 200, places guide 200, sitemap 33 URLs). Search Console: Request indexing sent and confirmed for /solapur-to-satara-taxi, /solapur-pilgrimage-tours, /guides/places-near-solapur-within-100-km (all were "URL is unknown to Google"). Sitemap not resubmitted by hand (already on file; Google re-reads). Recheck indexing in 7 days.
