import type { Metadata } from "next";
import { OutstationPage } from "@/components/site/OutstationPage";
import { outstationBySlug } from "@/lib/outstation";

const page = outstationBySlug("solapur-to-vijayapura-taxi")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/solapur-to-vijayapura-taxi" },
  openGraph: { title: page.title, description: page.description, url: "/solapur-to-vijayapura-taxi", type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
};

export default function Page() {
  return <OutstationPage page={page} />;
}
