import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ConsentTag } from "@/components/site/ConsentTag";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrisamarthcabs.com"),
  alternates: { canonical: "/" },
  title: "Solapur Cab Service | Shri Samarth Cabs",
  description: "Rent a car with a driver from Solapur for your chosen trip. Ask Shri Samarth Cabs about pilgrimage travel, route availability, and a quote.",
  applicationName: "Shri Samarth Cabs",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Shri Samarth Cabs | Car Rental with Driver from Solapur",
    description: "Driver-included car hire from Solapur. Call or WhatsApp to discuss your trip and get a quote.",
    url: "/",
    siteName: "Shri Samarth Cabs",
    images: [{ url: "/hero/light.webp", width: 1672, height: 940, alt: "Shri Samarth Cabs, car hire with a driver from Solapur" }],
    locale: "en_IN",
    type: "website",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": "https://shrisamarthcabs.com/#business",
  name: "Shri Samarth Cabs",
  url: "https://shrisamarthcabs.com/",
  logo: "https://shrisamarthcabs.com/icons/icon-192.png",
  image: "https://shrisamarthcabs.com/hero/light.webp",
  telephone: "+91-9511600787",
  description: "Car hire with a driver from Solapur for pilgrimage trips to Tuljapur, Akkalkot, Gangapur and Pandharpur.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vijapur Rd, Kanchan Ganga Nagar, Saiful, Jule",
    addressLocality: "Solapur",
    addressRegion: "Maharashtra",
    postalCode: "413008",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9511600787",
    contactType: "reservations",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "22:00",
    },
  },
  hasMap:"https://maps.app.goo.gl/uikh4dgqrKxwC76o9",
  sameAs: ["https://maps.app.goo.gl/uikh4dgqrKxwC76o9"],
  areaServed: ["Solapur", "Tuljapur", "Akkalkot", "Gangapur", "Pandharpur"].map((name) => ({ "@type": "City", name })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><head><link rel="preload" as="image" href="/hero/light.webp" fetchPriority="high" /><script dangerouslySetInnerHTML={{ __html: "try{var n=navigator;if((n.hardwareConcurrency||8)<=4||(n.deviceMemory||8)<=4)document.documentElement.setAttribute('data-lite','1')}catch(e){}" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /></head><body><MotionProvider />{children}<ConsentTag /></body></html>;
}
