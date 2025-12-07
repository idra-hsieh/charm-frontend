"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StoredCMIResult } from "@/lib/cmi/api-types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl"; // 1. Import useLocale
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  resultData: StoredCMIResult;
}

const TRAITS = ["closeness", "control", "selfWorth", "boundary", "growth"] as const;

const BUTTON_BASE_STYLES = cn(
  "inline-flex items-center justify-center gap-2",
  "rounded-xl px-8 py-5 text-xs font-medium uppercase tracking-[0.16em]",
  "transition-all duration-200 ease-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
);

const BUTTON_ACTIVE_STYLES = cn(
  "bg-accent/85 text-background",
  "shadow-[0_6px_16px_rgba(187,147,100,0.28)]",
  "hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(187,147,100,0.35)] hover:bg-accent",
  "active:translate-y-0 active:shadow-[0_3px_10px_rgba(187,147,100,0.25)]"
);

function CMIResultFooter({ resultData }: Props) {
  const tUi = useTranslations("cmi.ui");
  const tTypes = useTranslations("cmi.types");
  const tFamilies = useTranslations("cmi.families");
  const locale = useLocale(); // 2. Get current locale
  
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);

  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = EMAIL_REGEX.test(email);

  const handleSubmit = () => {
    if (!isEmailValid || !agreed) {
      setShowEmailWarning(true);
      setTimeout(() => setShowEmailWarning(false), 2500);
      return;
    }

    console.log("Linking email:", email, "to result ID:", resultData.code);
  };

  // 3. Use the dynamic locale here instead of hardcoded "en-US"
  const formattedDate = new Date(resultData.createdAt).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const calculateScore = (val: unknown): number => {
    if (typeof val === "number") return Math.round(val);
    
    if (typeof val === "object" && val !== null && "rawDirection" in val) {
      const obj = val as { rawDirection: number };
      return Math.round(((obj.rawDirection + 1) / 2) * 100);
    }
    
    return 0;
  };

  const formattedScores = TRAITS.map((trait) => {
    const key = trait as keyof typeof resultData.result.traitScores;
    const traitData = resultData.result.traitScores[key];
    return calculateScore(traitData);
  }).join(" / ");

  return (
    <section className="w-full px-4 py-12 flex flex-col items-center gap-12">
      
      {/* --- TOP SECTION: Image & Stats --- */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-20 items-cente px-4">
        {/* Left: App Views Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[4/3] md:aspect-auto md:h-[300px] flex items-center justify-center md:justify-end"
        >
          <div className="relative w-full h-full max-w-[500px]">
            <Image 
              src="/images/app-views.png"
              alt="App Dashboard Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Test Summary Data */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 text-left pl-4 md:pl-0"
        >
          <InfoRow 
            label={tUi("result_footer_label_date")} 
            value={formattedDate} 
          />
          <InfoRow 
            label={tUi("result_footer_label_code")} 
            value={resultData.code} 
          />
          <InfoRow 
            label={tUi("result_footer_label_type")} 
            value={tTypes(`${resultData.result.type.id}.name`)} 
          />
          <InfoRow 
            label={tUi("result_footer_label_family")} 
            value={tFamilies(`${resultData.result.family.bits}.name`)} 
          />
          <InfoRow 
            label={tUi("result_footer_label_scores")} 
            value={formattedScores} 
          />
        </motion.div>
      </div>


      {/* --- BOTTOM SECTION: Email Capture Card --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={cn(
          "w-full max-w-4xl relative overflow-hidden",
          "rounded-3xl border border-white/10",
          "bg-[#23211f] shadow-2xl", 
          "p-8 md:p-12 lg:px-20 lg:py-16"
        )}
      >
        <div className="flex flex-col space-y-8">
          
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-primary font-semibold tracking-wide text-background/90">
              {tUi("result_footer_title")}
            </h2>
            <p className="text-base tracking-wide text-background/60 leading-relaxed max-w-2xl">
              {tUi("result_footer_desc")}
            </p>
          </div>

          {/* Form Section */}
          <div className="space-y-6 w-full mt-4">
            
            {/* Email Input */}
            <div className="space-y-2">
              <Label 
                htmlFor="footer-email" 
                className="text-xs text-white/60 ml-1 uppercase tracking-wider"
              >
                {tUi("result_footer_email_label")}
              </Label>
              <Input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "h-9 text-center text-sm tracking-wider backdrop-blur-md",
                  "rounded-xl transition-all duration-300",
                  "hover:-translate-y-[1px] hover:border-accent/50",
                  "focus-visible:ring-0 focus-visible:-translate-y-[1px]",
                  isEmailValid 
                    ? "bg-accent/10 text-background/80 shadow-[0_0_20px_rgba(255,255,255,0.02)] placeholder:text-black/30 border-accent/50 focus-visible:border-accent/50"
                    : "bg-secondary/25 border-background/20 text-background placeholder:text-background/30 focus-visible:border-accent/40 focus-visible:shadow-[0_0_20px_rgba(187,147,100,0.1)]"
                )}
              />
            </div>

            {/* Checkbox Agreement */}
            <div className="flex items-start md:items-center space-x-3 group">
              <Checkbox
                id="footer-terms"
                checked={agreed}
                onCheckedChange={(c) => setAgreed(c as boolean)}
                className={cn(
                    "border-white/30 data-[state=checked]:bg-accent data-[state=checked]:text-black data-[state=checked]:border-accent",
                    "h-4 w-4 rounded-xs transition-all duration-200",
                    "group-hover:border-accent/70"
                )}
              />
              <Label
                htmlFor="footer-terms"
                className={cn(
                  "text-xs font-light cursor-pointer select-none transition-all duration-200 transition-colors",
                  "text-background/50 group-hover:text-background/90 group-hover:font-medium",
                  agreed ? "text-background/90 font-medium" : "text-background/50"
                )}
              >
                {tUi("result_footer_agree_pre")}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">
                  {tUi("result_footer_privacy")}
                </Link>
                  {tUi("result_footer_and")}
                <Link href="/terms" className="underline underline-offset-2 hover:text-white transition-colors">
                  {tUi("result_footer_terms")}
                </Link>
                {tUi("result_footer_agree_suffix")}
              </Label>
            </div>

            {/* CTA Button */}
            <div className="relative flex flex-col items-center w-full">
                <Button
                    onClick={handleSubmit}
                    aria-disabled={!isEmailValid || !agreed}
                    className={cn(
                        BUTTON_BASE_STYLES,
                        "w-full rounded-full",
                        isEmailValid && agreed
                            ? BUTTON_ACTIVE_STYLES 
                            : "opacity-30 cursor-not-allowed bg-accent/40 text-white/40 border border-white/5"
                    )}
                >
                {tUi("result_footer_cta")}
                </Button>

                {showEmailWarning && (
                  <motion.p 
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-5 text-xs text-background/75 tracking-wide whitespace-nowrap"
                  >
                    {tUi("result_footer_warning")}
                  </motion.p>
                )}
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2">
      <span className="text-xs uppercase tracking-[0.15em] text-background/60 font-medium">
        {label}:
      </span>
      <span className="text-sm font-[500] text-accent tracking-[0.05em]">
        {value}
      </span>
    </div>
  );
}

export default CMIResultFooter;