import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TO-DO: Update this to match the BASE_URL in sitemap.ts
  const BASE_URL = "https://charm-money.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow indexing of private or system paths to preserve crawl budget and privacy
      disallow: [
        "/dashboard/", // Private user area
        "/api/",       // Backend API routes
        "/_next/",     // Next.js build assets
        "/private/",   // Any other internal routes
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

