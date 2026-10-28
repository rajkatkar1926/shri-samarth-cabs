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
