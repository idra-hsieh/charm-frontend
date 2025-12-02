import { getTranslations } from "next-intl/server";
import PageClient from "./PageClient";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.auth.login" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LoginPage() {
  return <PageClient />;
}