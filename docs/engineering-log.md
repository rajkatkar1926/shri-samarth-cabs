
## 2026-10-27 - Count every Call and WhatsApp tap from Google Ads visitors
Tier: T2 (live site, visitor cookie consent)
Checked: tag loads only after Accept; "No thanks" loads nothing; all 22 call links and 15 WhatsApp links on home, and 7 + 5 on a route page, each fire one conversion with the right ID and label
Fixed: set ADS_ID, call-tap label, WhatsApp-tap label (Google Ads actions "Click to call" and "WhatsApp tap")
Warned: visitors who decline the cookie notice are not counted, so tap numbers undercount; judge success by real calls and chats
Left: Google Ads shows "Recording" only after a real tap on the live site; call-asset calls are still not tracked
Files: lib/site.ts, docs/engineering-log.md
