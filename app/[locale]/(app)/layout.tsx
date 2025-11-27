// app/(app)/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dashboard | Charm",
    template: "%s | Charm",
  },
  description: "Manage your financial journey.",
  icons: {
    icon: "/favicon.ico",
  },
};

function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">{children}</div>;
}

export default AppLayout;
