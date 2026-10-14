import type { MetadataRoute } from "next";
import { SITE_PAGES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }, ...SITE_PAGES.map((page) => ({ url: `${SITE_URL}${page.href}` }))];
}
