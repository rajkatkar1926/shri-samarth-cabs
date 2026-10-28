import type { Metadata } from "next";
import { OutstationPage } from "@/components/site/OutstationPage";
import { outstationBySlug } from "@/lib/outstation";

const page = outstationBySlug("solapur-to-latur-taxi")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/solapur-to-latur-taxi" },
  openGraph: { title: page.title, description: page.description, url: "/solapur-to-latur-taxi", type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
};

export default function Page() {
  return <OutstationPage page={page} />;
}
