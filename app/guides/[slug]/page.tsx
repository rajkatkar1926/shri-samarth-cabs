import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPage } from "@/components/site/InfoPage";
import { infoBySlug, infoPages } from "@/lib/info";

export const dynamicParams = false;

const guides = infoPages.filter((p) => p.slug.startsWith("guides/"));

export function generateStaticParams() {
  return guides.map((p) => ({ slug: p.slug.replace("guides/", "") }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = infoBySlug(`guides/${params.slug}`);
  if (!page) return {};
  const path = `/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: { title: page.title, description: page.description, url: path, type: "article", locale: "en_IN", siteName: "Shri Samarth Cabs" },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = infoBySlug(`guides/${params.slug}`);
  if (!page) notFound();
  return <InfoPage page={page} />;
}
