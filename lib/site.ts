export const SITE_URL = "https://shrisamarthcabs.com";
export const PHONE_TEL = "+919511600787";
export const PHONE_DISPLAY = "+91 95116 00787";
export const EMAIL = "Swamicabs48@gmail.com";

export const waLink = (extra?: string) =>
  `https://wa.me/919511600787?text=${encodeURIComponent(`Hello, I'm planning a trip from Solapur.\nDestination:\nTravel date:\nPreferred car:\nPlease share route availability and a quote.${extra ? `\n${extra}` : ""}`)}`;

export const googleMapsRoute = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("SPOT ON Nivant Lodge, Solapur")}&destination=${encodeURIComponent(destination)}&travelmode=driving`;

export type SitePage = { href: string; label: string; group: "Routes" | "Trips" | "Company" | "Guides" };

// Pages that are live. The footer and the mobile menu are built from this list.
export const SITE_PAGES: SitePage[] = [
  { href: "/solapur-outstation-taxi", label: "Solapur outstation taxi", group: "Routes" },
  { href: "/solapur-to-pune-taxi", label: "Solapur to Pune", group: "Routes" },
  { href: "/solapur-to-mumbai-taxi", label: "Solapur to Mumbai", group: "Routes" },
  { href: "/solapur-to-kolhapur-taxi", label: "Solapur to Kolhapur", group: "Routes" },
  { href: "/solapur-to-hyderabad-taxi", label: "Solapur to Hyderabad", group: "Routes" },
  { href: "/solapur-airport-taxi", label: "Solapur airport taxi", group: "Routes" },
  { href: "/solapur-to-shirdi-taxi", label: "Solapur to Shirdi", group: "Routes" },
  { href: "/solapur-to-vijayapura-taxi", label: "Solapur to Vijayapura", group: "Routes" },
  { href: "/solapur-to-latur-taxi", label: "Solapur to Latur", group: "Routes" },
  { href: "/solapur-to-dharashiv-taxi", label: "Solapur to Dharashiv", group: "Routes" },
  { href: "/solapur-to-sangli-miraj-taxi", label: "Solapur to Sangli and Miraj", group: "Routes" },
  { href: "/solapur-to-bengaluru-taxi", label: "Solapur to Bengaluru", group: "Routes" },
  { href: "/solapur-to-tuljapur-taxi", label: "Solapur to Tuljapur", group: "Routes" },
  { href: "/solapur-to-akkalkot-taxi", label: "Solapur to Akkalkot", group: "Routes" },
  { href: "/solapur-to-pandharpur-taxi", label: "Solapur to Pandharpur", group: "Routes" },
  { href: "/solapur-to-gangapur-taxi", label: "Solapur to Gangapur", group: "Routes" },
  { href: "/packages/akkalkot-gangapur-one-day", label: "Akkalkot and Gangapur, 1 day", group: "Trips" },
  { href: "/packages/tuljapur-pandharpur-one-day", label: "Tuljapur and Pandharpur, 1 day", group: "Trips" },
  { href: "/packages/four-temple-two-day-circuit", label: "Four-temple circuit, 2 days", group: "Trips" },
  { href: "/packages/shirdi-shani-shingnapur-trip", label: "Shirdi and Shani Shingnapur, 2 days", group: "Trips" },
  { href: "/cars", label: "Our cars", group: "Company" },
  { href: "/about", label: "About us", group: "Company" },
  { href: "/contact", label: "Contact", group: "Company" },
  { href: "/faq", label: "FAQ", group: "Company" },
  { href: "/privacy", label: "Privacy", group: "Company" },
  { href: "/guides/solapur-temple-trip-planning", label: "How to plan a temple trip", group: "Guides" },
  { href: "/guides/which-car-for-your-group", label: "Which car for your group", group: "Guides" },
  { href: "/guides/akkalkot-swami-samarth-darshan-guide", label: "Akkalkot darshan guide", group: "Guides" },
  { href: "/guides/pandharpur-wari-travel-tips", label: "Pandharpur wari travel tips", group: "Guides" },
];

// Google Ads tag. Leave ADS_ID empty until the owner's account gives the ID (format "AW-1234567890").
// With it empty, no tag loads and no cookie notice shows. Labels come from each conversion action in Google Ads.
export const ADS_ID = "AW-18514159533";
export const ADS_CALL_TAP_LABEL = "chlxCOX2g6sdEK3PnvxE";
export const ADS_WHATSAPP_TAP_LABEL = "K8ShCOj2g6sdEK3PnvxE";
