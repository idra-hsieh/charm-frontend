"use client";

import { GlobeIcon } from "@/components/ui/icons/lucide-globe";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mainNavItems } from "@/lib/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import NavLink from "./NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageCode = "en" | "zh-TW";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("en");
  const pathname = usePathname;

  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguage(lang);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger: hamburger button */}
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className="
            inline-flex items-center justify-center rounded-md
            transition-all duration-150 hover:opacity-80 hover:scale-[1.1]
            active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-accent
          "
        >
          <CiMenuFries className="h-6 w-6 text-accent stroke-[0.5]" />
        </button>
      </SheetTrigger>

      {/* Sheet content */}
      <SheetContent
        side="right"
        className="
                w-[260px]
                border-l
                bg-marble
                px-5 pb-6 pt-12
                flex flex-col gap-6
            "
      >
        {/* Language toggle */}
        <div
          className="
          inline-flex items-center rounded-full bg-muted/60
          px-1 py-0.5 text-xs border border-border
        "
        >
          <button type="button" onClick={() => handleLanguageChange("en")}>
            English
          </button>
        </div>

        {/* Main Nav Items */}
        <nav className="flex flex-col gap-4">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              className="text-base"
              onClick={close}
            />
          ))}
        </nav>

        {/* Separator */}
        <div className="h-px bg-foreground/70" />

        {/* Log In + CTA */}
        <div className="flex flex-col gap-3">
          <Link
            href="/login"
            onClick={close}
            className="text-sm font-semibold underline underline-offset-2"
          >
            Log In
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
