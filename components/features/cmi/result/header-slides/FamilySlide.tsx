"use client";

import { StoredCMIResult } from "@/lib/cmi/api-types";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  result: StoredCMIResult["result"];
  badgeSrc: string;
};

function FamilySlide({ result, badgeSrc }: Props) {
  const tFamilies = useTranslations("cmi.families");
  const tUi = useTranslations("cmi.ui");

  const familyBits = result.family.bits;

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-4 md:py-6 space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-widest">
          {tUi("result_header_family_title")}
        </p>
        <h1 className="text-3xl md:text-5xl font-primary font-bold text-foreground">
          {tFamilies(`${familyBits}.name`)}
        </h1>
      </div>

      {/* Badge */}
      <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-xl my-2">
        <Image
          src={badgeSrc}
          alt={tFamilies(`${familyBits}.name`)}
          fill
          className="object-contain"
        />
      </div>

      {/* Essence */}
      <div className="space-y-2 max-w-lg">
        <span className="text-xs font-bold tracking-widest uppercase text-accent/80 block">
          {tUi("result_header_essence")}
        </span>
        <p className="text-lg md:text-xl font-serif italic text-foreground/80 leading-relaxed">
          &ldquo;{tFamilies(`${familyBits}.essence`)}&rdquo;
        </p>
      </div>

      {/* Strategy */}
      <div className="space-y-2 max-w-lg pt-4 border-t border-foreground/5 w-full">
        <span className="text-xs font-bold tracking-widest uppercase text-accent/80 block mt-2">
          {tUi("result_header_strategy")}
        </span>
        <p className="text-lg font-primary text-foreground font-semibold">
          {tFamilies(`${familyBits}.strategy`)}
        </p>
      </div>
    </div>
  );
}

export default FamilySlide;
