import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Standard Next.js robots.ts convention (unchanged in Next 16 — same file
// family as sitemap.ts). There's nothing on this site that needs hiding
// from crawlers: no admin/API routes, no internal-only pages. The Turkey
// geo-block (src/proxy.ts) is a request-time response based on the
// visitor's IP, not a path — it isn't something a robots rule can or
// should express, and this file doesn't touch it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
