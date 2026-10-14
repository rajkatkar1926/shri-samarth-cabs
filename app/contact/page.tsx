import type { Metadata } from "next";
import { InfoPage } from "@/components/site/InfoPage";
import { infoBySlug } from "@/lib/info";

const page = infoBySlug("contact")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: page.title, description: page.description, url: "/contact", type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
};

export default function Page() {
  return <InfoPage page={page} />;
}
