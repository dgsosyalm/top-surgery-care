import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Every real page route in src/app, paired with the exact canonical path
// each page already declares for itself (see each page's PAGE_PATH /
// alternates.canonical) — kept in sync by hand since there's no locale
// segment to derive this from automatically. This site serves English and
// German at the same URL (locale is a cookie, not a URL prefix), so there
// is one entry per page, not one per locale.
const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/top-surgery", priority: 0.8, changeFrequency: "monthly" },
  { path: "/results", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.8, changeFrequency: "yearly" },
  { path: "/patient-journey/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about-dr-serkan-dinar/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/medical-disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/kvkk-consent-form", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
