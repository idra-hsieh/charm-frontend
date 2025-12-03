// types
export type NavItem = {
  labelKey: string;
  href: string;
  external?: boolean;
};

export type FooterSection = {
  titleKey: string;
  items: NavItem[];
};

// Header: Main Nav (header → main)
export const mainNavItems: NavItem[] = [
  { labelKey: "main.money_identity_test", href: "/cmi-test" },
  { labelKey: "main.money_identities", href: "/money-identities" },
  { labelKey: "main.resources", href: "/resources" },
  { labelKey: "main.charm_app", href: "/about" },
];

// Header: Utility Nav (header → utility)

export const utilityNavItems: NavItem[] = [
  { labelKey: "utility.login", href: "/login" },
  { labelKey: "utility.signup", href: "/signup" },
];

// Footer Nav
export const footerSections: FooterSection[] = [
  {
    titleKey: "learn.title",
    items: [
      { labelKey: "learn.cmi_framework", href: "/resources/cmi-framework" },
      { labelKey: "learn.money_identities", href: "/money-identities" },
      { labelKey: "learn.articles_guides", href: "/resources" },
    ],
  },
  {
    titleKey: "tools.title",
    items: [
      { labelKey: "tools.charm_indicator", href: "/cmi-test" },
      { labelKey: "tools.daily_companion", href: "/about" },
      { labelKey: "tools.reflection_prompts", href: "/resources/prompts" },
    ],
  },
  {
    titleKey: "support.title",
    items: [
      { labelKey: "support.contact", href: "/contact" },
      { labelKey: "support.faq", href: "/faq" },
      { labelKey: "support.tutorial", href: "/tutorial" },
    ],
  },
  {
    titleKey: "company.title",
    items: [
      { labelKey: "company.terms", href: "/terms" },
      { labelKey: "company.privacy", href: "/privacy" },
      { labelKey: "company.accessibility", href: "/accessibility" },
    ],
  },
  {
    titleKey: "socials.title",
    items: [
      { labelKey: "socials.instagram", href: "/placeholder" },
      { labelKey: "socials.facebook", href: "/placeholder" },
      { labelKey: "socials.linkedin", href: "/placeholder" },
      { labelKey: "socials.youtube", href: "/placeholder" },
      { labelKey: "socials.qrcode", href: "/placeholder" },
    ],
  },
];
