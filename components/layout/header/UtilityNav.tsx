"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type UtilityNavProps = {
  variant: "signup" | "login";
  className?: string;
};

function UtilityNav({ variant, className }: UtilityNavProps) {
  const locale = useLocale();
  const t = useTranslations("header");

  const href = variant === "signup" ? "/signup" : "/login";
  const localizedHref = `/${locale}${href}`;

  const base = "text-sm font-semibold transition-colors";

  const styles =
    variant === "signup"
      ? "inline-flex items-center justify-center rounded-full bg-foreground/80 px-4 py-1.5 text-white shadow-md hover:bg-foreground"
      : "underline underline-offset-2";

  const label = variant === "signup" ? t("utility.signup") : t("utility.login");

  return (
    <Link href={localizedHref} className={cn(base, styles, className)}>
      {label}
    </Link>
  );
}

export default UtilityNav;
