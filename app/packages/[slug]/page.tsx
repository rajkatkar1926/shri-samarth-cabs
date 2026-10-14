import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackagePage } from "@/components/site/PackagePage";
import { packageBySlug, packages } from "@/lib/packages";

export const dynamicParams = false;

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pack = packageBySlug(params.slug);
  if (!pack) return {};
  const path = `/packages/${pack.slug}`;
  return {
    title: pack.title,
    description: pack.description,
    alternates: { canonical: path },
    openGraph: { title: pack.title, description: pack.description, url: path, type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const pack = packageBySlug(params.slug);
  if (!pack) notFound();
  return <PackagePage pack={pack} />;
}
