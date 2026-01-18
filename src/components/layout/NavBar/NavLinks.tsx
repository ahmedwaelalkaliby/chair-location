"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

export default function NavLinks({ navLinks }: { navLinks: NavItem[] }) {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`text-sm lg:text-base transition-all duration-200 ${
                isActive
                  ? "text-primary font-bold"
                  : "text-black hover:text-primary font-medium"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
