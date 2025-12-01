// app/(marketing)/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Charm | Where your money and life philosophy align.",
    template: "%s | Charm",
  },
  description:
    "Discover your financial personality with the Charm Money Indicator®. Charm is a financial educational system offering personalized tracking and advice to align your money with your life philosophy.",
  keywords: [
    "Financial Personality Test",
    "Charm Money Indicator",
    "CMI-I",
    "Financial Tracking",
    "Money Psychology",
    "Financial Advice",
    "Life Philosophy",
  ],
  openGraph: {
    title: "Charm | Where your money and life philosophy align.",
    description: "Take the CMI-I test and discover your financial personality.",
    url: "https://charm.money", // TO-DO: update real url
    siteName: "Charm",
    locale: "en_US",
    type: "website",
    images: [{ url: "images/charm-logo.png", width: 1200, height: 630 }],
  },
};

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1 bg-gradient-to-b from-[#050505] to-[#40403F] -mt-[25px]">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
