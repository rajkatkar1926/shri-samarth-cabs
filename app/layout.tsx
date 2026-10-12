import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: "Solapur Cab Service | Shri Samarth Cabs",
  description: "Rent a car with a driver from Solapur for your chosen trip. Ask Shri Samarth Cabs about pilgrimage travel, route availability, and a quote.",
  applicationName: "Shri Samarth Cabs",
  openGraph: {
    title: "Shri Samarth Cabs | Car Rental with Driver from Solapur",
    description: "Driver-included car hire from Solapur. Call or WhatsApp to discuss your trip and get a quote.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><MotionProvider />{children}</body></html>;
}
