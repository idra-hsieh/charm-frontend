import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const SUPPORTED_LOCALES = ["en", "zh", "ja"] as const; // TO-DO: extend if added
type Locale = (typeof SUPPORTED_LOCALES)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Try getting locale from Next.js variable (en/zh/ja)
  let locale = await requestLocale;

  // If doesn't return language, or return un-supported language, back to default (en)
  if (!locale || !SUPPORTED_LOCALES.includes(locale as Locale)) {
    locale = routing.defaultLocale || "en";
  }

  // Import messages using the dynamic-import pattern from the docs
  // TO-DO: extend if new json added
  const header = (await import(`../messages/${locale}/header.json`)).default;
  const footer = (await import(`../messages/${locale}/footer.json`)).default;
  const placeholder = (await import(`../messages/${locale}/placeholder.json`)).default;
  const metadata = (await import(`../messages/${locale}/metadata.json`)).default;
  const cmi = {
    ui: (await import(`../messages/${locale}/cmi-test/ui.json`)).default,
    questions: (await import(`../messages/${locale}/cmi-test/questions.json`)).default,
    families: (await import(`../messages/${locale}/cmi-test/families.json`)).default,
    types: (await import(`../messages/${locale}/cmi-test/types.json`)).default,
    traits: (await import(`../messages/${locale}/cmi-test/traits.json`)).default,
  };

  return {
    locale,
    messages: {
      header,
      footer,
      placeholder,
      cmi,
      Metadata: metadata,
      // TO-DO: extend if new json added
    },
  };
});