export const SITE_URL = "https://shrisamarthcabs.com";
export const PHONE_TEL = "+919763747437";
export const PHONE_DISPLAY = "+91 97637 47437";
export const EMAIL = "Swamicabs48@gmail.com";

export const waLink = (extra?: string) =>
  `https://wa.me/919763747437?text=${encodeURIComponent(`Hello, I'm planning a trip from Solapur.\nDestination:\nTravel date:\nPreferred car:\nPlease share route availability and a quote.${extra ? `\n${extra}` : ""}`)}`;

export const googleMapsRoute = (destination: string) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("SPOT ON Nivant Lodge, Solapur")}&destination=${encodeURIComponent(destination)}&travelmode=driving`;

export type SitePage = { href: string; label: string; group: "Routes" | "Trips" | "Company" | "Guides" };

// Pages that are live. The footer and the mobile menu are built from this list.
export const SITE_PAGES: SitePage[] = [
  { href: "/solapur-to-tuljapur-taxi", label: "Solapur to Tuljapur", group: "Routes" },
  { href: "/solapur-to-akkalkot-taxi", label: "Solapur to Akkalkot", group: "Routes" },
  { href: "/solapur-to-pandharpur-taxi", label: "Solapur to Pandharpur", group: "Routes" },
  { href: "/solapur-to-gangapur-taxi", label: "Solapur to Gangapur", group: "Routes" },
];
