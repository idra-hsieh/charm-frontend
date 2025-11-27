// app/(auth)/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charm Auth",
  description: "Log in or sign up to access Charm.",
};

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {children}
    </div>
  );
}

export default AuthLayout;
