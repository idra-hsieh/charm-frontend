import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

// TO-DO: Update this to custom domain before production deployment (e.g., https://www.charm.money)
const BASE_URL = "https://charm-money.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * List of static public routes to index.
   * NOTE: Do not include private routes like '/dashboard' here.
   */
  const routes = [
    "", // Home
    "/login",
    "/signup",
    "/about",
    "/money-identities",
    "/cmi-test",
    "/resources",
    "/resources/cmi-framework",
    "/resources/prompts",
    "/contact",
    "/faq",
    "/tutorial",
    "/accessibility",
    "/privacy",
    "/terms",
  ];

  // Helper to ensure locales exist to prevent runtime crashes (Safe access)
  const locales = routing?.locales ?? ["en", "ja"];

  // Generate sitemap entries for every route in every locale (en/ja)
  const sitemapEntries = routes.map((route) => {
    return locales.map((locale) => {
      // Construct the full URL
      // Logic handles the root path correctly to avoid double slashes
      const url = `${BASE_URL}/${locale}${route === "" ? "" : route}`;

      // Dynamically generate alternates for all available locales
      // Refactored to use a simple loop to avoid syntax confusion with reduce/generics
      const languages: Record<string, string> = {};
      locales.forEach((loc) => {
        languages[loc] = `${BASE_URL}/${loc}${route === "" ? "" : route}`;
      });

      return {
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
        // Vital for multi-language SEO: tells Google that /en and /ja are versions of the same page
        alternates: {
          languages,
        },
      };
    });
  });

  // TO-DO: Fetch and map dynamic routes here if needed in the future
  // Example: const blogPosts = await getBlogPosts();

  // Flatten the array of arrays (Locales x Routes) into a single sitemap structure
  // Explicit cast ensures Next.js accepts the flat array structure
  return sitemapEntries.flat() as MetadataRoute.Sitemap;
}

