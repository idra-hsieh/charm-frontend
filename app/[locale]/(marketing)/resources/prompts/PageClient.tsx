"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

function Placeholder() {
  const t = useTranslations("placeholder");

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/login-placeholder.png"
          alt="Placeholder background"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
        <div className="absolute inset-0 bg-foreground/60 backdrop-blur-md" />
      </div>

      {/* Center Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 className="text-accent lg:text-6xl text-5xl font-semibold font-primary">
          {t("title")}
        </h1>
        <p className="font-primary text-white/80 mt-6 text-md lg:text-lg">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export default Placeholder;
