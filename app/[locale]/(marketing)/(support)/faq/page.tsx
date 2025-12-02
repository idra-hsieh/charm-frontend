import { getTranslations } from "next-intl/server";
import PageClient from "./PageClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.marketing.support.faq" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function FAQPage() {
  return <PageClient />;
}