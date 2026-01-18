"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Membership", href: "/membership" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="flex">
        <Image
          src="./Logo.svg"
          alt="Chair Location"
          width={60}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Desktop Links */}
      <NavLinks navLinks={navLinks} />

      {/* Desktop Actions */}
      <NavActions />

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border rounded-md border-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
