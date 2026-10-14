import type { Metadata } from "next";
import { InfoPage } from "@/components/site/InfoPage";
import { infoBySlug } from "@/lib/info";

const page = infoBySlug("about")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/about" },
  openGraph: { title: page.title, description: page.description, url: "/about", type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
};

export default function Page() {
  return <InfoPage page={page} />;
}
