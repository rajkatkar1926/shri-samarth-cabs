import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrisamarthcabs.com"),
  alternates: { canonical: "/" },
  title: "Solapur Cab Service | Shri Samarth Cabs",
  description: "Rent a car with a driver from Solapur for your chosen trip. Ask Shri Samarth Cabs about pilgrimage travel, route availability, and a quote.",
  applicationName: "Shri Samarth Cabs",
  openGraph: {
    title: "Shri Samarth Cabs | Car Rental with Driver from Solapur",
    description: "Driver-included car hire from Solapur. Call or WhatsApp to discuss your trip and get a quote.",
    url: "/",
    siteName: "Shri Samarth Cabs",
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
  logo: "https://shrisamarthcabs.com/brand/logo-mark.webp",
  telephone: "+91-9763747437",
  description: "Car hire with a driver from Solapur for pilgrimage trips to Tuljapur, Akkalkot, Gangapur and Pandharpur.",
  address: { "@type": "PostalAddress", addressLocality: "Solapur", addressRegion: "Maharashtra", addressCountry: "IN" },
  areaServed: ["Solapur", "Tuljapur", "Akkalkot", "Gangapur", "Pandharpur"].map((name) => ({ "@type": "City", name })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><head><link rel="preload" as="image" href="/hero/mobile.webp" media="(max-width: 760px)" fetchPriority="high" /><link rel="preload" as="image" href="/hero/desktop.webp" media="(min-width: 761px)" fetchPriority="high" /><script dangerouslySetInnerHTML={{ __html: "try{var n=navigator;if((n.hardwareConcurrency||8)<=4||(n.deviceMemory||8)<=4)document.documentElement.setAttribute('data-lite','1')}catch(e){}" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /></head><body><MotionProvider />{children}</body></html>;
}
