import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-[109px]">
      <Link href="/">
        <Image
          src="/images/charm-logo.png"
          width={120}
          height={60}
          alt="logo"
        />
      </Link>
    </header>
  );
}

export default Header;
