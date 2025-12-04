"use client";

import { StoredCMIResult } from "@/lib/cmi/api-types";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  result: StoredCMIResult["result"];
  avatarSrc: string;
};

function TypeSlide({ result, avatarSrc }: Props) {
  const tTypes = useTranslations("cmi.types");
  const tFamilies = useTranslations("cmi.families");
  const tUi = useTranslations("cmi.ui");

  const typeBits = result.type.bits;
  const familyBits = result.family.bits;

  return (
    <div className="flex flex-col items-center w-full gap-4 mt-4">
      {/* Title */}
      <div className="text-center">
        <p className="text-xs font-semibold text-foreground/60 tracking-widest mb-3">
          {tUi("result_header_type_title")}
        </p>
        <h1 className="text-3xl font-bold tracking-wide text-foreground">
          {tTypes(`${result.type.id}.name`)}
        </h1>
      </div>

      {/* Three-column layout */}
      <div className="grid grid-cols-[1.1fr_auto_1.1fr] items-center w-full max-w-4xl mx-auto gap-x-5 gap-y-6">
        {/* Left: Indicator + Pattern Family */}
        <div className="flex flex-col text-right w-full space-y-10 self-center mb-7">
            {/* Group 1: Indicator */}
            <div className="flex flex-col mr-10">
                <div className="flex items-baseline gap-1 text-right text-xs tracking-wide">
                    <span className="text-foreground/60 uppercase">
                        {tUi("result_header_bits")}
                    </span>
                    <span className="font-semibold text-accent">
                        {typeBits}
                    </span>
                </div>
                <div className="mt-2 h-[0.5px] w-full bg-gradient-to-r from-foreground/50 to-accent" />
            </div>

            {/* Group 2: Pattern Family */}
            <div className="flex flex-col ml-10">
                <div className="flex items-baseline text-right text-xs tracking-wide gap-1">
                    <span className="text-foreground/60 uppercase">
                        {tUi("result_header_family")}
                    </span>
                    <span className="font-semibold text-accent">
                        {tFamilies(`${familyBits}.name`)}
                    </span>
                </div>
                <div className="mt-2 h-[0.5px] w-full bg-gradient-to-r from-foreground/50 to-accent" />
            </div>
        </div>

        {/* Center: avatar */}
        <div className="flex items-center justify-center self-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl">
            <Image
              src={avatarSrc}
              alt={tTypes(`${result.type.id}.name`)}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: growth direction */}
        <div className="flex flex-col text-right w-full space-y-1 self-center text-xs tracking-wide">
            <span className="text-foreground/60 uppercase">
                {tUi("result_header_growth")}
            </span>
            <div className="h-[0.5px] w-full bg-gradient-to-r from-accent to-foreground/50" />
            <span className="font-semibold text-accent italic">
                {tFamilies(`${familyBits}.growthDirection`)}
            </span>
        </div>
      </div>
    </div>
  );
}

export default TypeSlide;
