import { getTranslations } from "next-intl/server";
import PageClient from "./PageClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.marketing.home" });
  return {
    title: {
      // Use absolute to exclude template
      absolute: `${t("title")}`, 
    },
    description: t("description"),
  };
}

export default function HomePage() {
  return <PageClient />;
}