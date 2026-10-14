import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RoutePage } from "@/components/site/RoutePage";
import { routeBySlug, routes } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const route = routeBySlug(params.slug);
  if (!route) return {};
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: `/${route.slug}` },
    openGraph: { title: route.title, description: route.description, url: `/${route.slug}`, type: "website", locale: "en_IN", siteName: "Shri Samarth Cabs" },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const route = routeBySlug(params.slug);
  if (!route) notFound();
  return <RoutePage route={route} />;
}
