# Shri Samarth Cabs - SEO routine (4x a week)

Site: https://shrisamarthcabs.com (Next.js, repo rajkatkar1926/shri-samarth-cabs, main auto-deploys).
Work folder: D:\Code\shri-samarth-cabs-seo (always `git pull` main first; work on a branch `seo/<date>-<topic>`).
Started: 28 Oct 2026. Rules: Orajic Local SEO + AEO Playbook v2 (skill `local-seo-aeo`).

## Confirmed facts (from Raj, 28 Oct 2026)
- Service runs 24/7 (matches Maps "Open 24 hours"). Phone enquiry time is 6 am to 10 pm daily. Never write "open 6-10" as business hours; say "call enquiries 6 am to 10 pm".
- Languages spoken: not confirmed, so not in the markup.
- Google Maps listing: https://maps.app.goo.gl/uikh4dgqrKxwC76o9 (open it in the browser to read exact address + pin for the schema; never guess).
- No social links given yet.

## Working agreements (from Raj, 28-29 Oct 2026)
- Show a checked preview first, then push. Merge and deploy only on his yes; after a merge, run Dokploy application.deploy and verify live.
- Standing yes: after pages go live, resubmit sitemap and Request indexing in Search Console (scheduled task Step 5). Do not double-submit pages another session already submitted.
- Split of work: one session builds NEW pages; this routine does upgrades of existing pages, Maps and weekly checks.
- Open fact to settle: fleet list differs between route pages (Tempo Traveller, Urbania) and FAQ/cars pages (Cruiser).

## Hard rules
- Nothing goes live without Raj's yes. Sessions prepare; Raj approves; then PR + merge.
- Never invent facts: prices, fares, cars, timings, reviews, awards. Use only what is in `lib/*.ts` or Raj confirmed. Unknown fact = ask, don't guess.
- No keywords in the Maps business name, no fake reviews, no review incentives, no bought links, no copy-paste city pages.
- Phone on everything: +91 95116 00787 (old 97637 47437 must not appear anywhere).
- Every session appends one dated entry to `seo/LOG.md` (what was checked, what changed, URLs, result).

## Weekly rhythm
- MON - Weekly check: site health (all sitemap pages 200, robots, sitemap, canonical, no noindex), Search Console 7-day clicks/positions if access, Maps listing: new reviews -> draft replies, draft 1 Maps post. Old phone number sweep.
- TUE - New page: write ONE new page from the backlog below (answer-first, real facts, FAQ, LocalBusiness/Service schema, internal links). Build locally, screenshot, send Raj preview.
- THU - Upgrade one existing page: answer-first intro, FAQ block, schema check, title/description, internal links, speed check (PageSpeed). AI-answer check: how the business shows for 3 local questions.
- SAT - Rank + report: Google check for the 8 tracking searches below, listings/citations check (Justdial, Sulekha, Bing Places, Apple Maps), weekly 5-line report to Raj.

## Tracking searches (same every week)
taxi in solapur / solapur outstation taxi / solapur to pune taxi / solapur to akkalkot taxi / solapur to tuljapur taxi / solapur to pandharpur taxi / cab service solapur / solapur airport taxi

## New page backlog (Tuesdays, in order; skip if facts missing)
1. Solapur to Shirdi taxi
2. Solapur to Vijayapura (Bijapur) taxi
3. Solapur to Latur taxi
4. Solapur to Dharashiv (Osmanabad) taxi
5. Solapur to Sangli / Miraj taxi
6. Solapur to Bengaluru taxi
7. Guide: Akkalkot Swami Samarth darshan timings + how to reach
8. Guide: Pandharpur Ashadhi/Kartiki wari travel tips
9. Package: Shirdi + Shani Shingnapur

## Existing pages to upgrade (Thursdays, in order)
Home, solapur-outstation-taxi, solapur-to-pune-taxi, solapur-to-akkalkot-taxi, solapur-to-tuljapur-taxi, solapur-to-pandharpur-taxi, solapur-airport-taxi, cars, faq, packages (3), guides (2), remaining routes.
