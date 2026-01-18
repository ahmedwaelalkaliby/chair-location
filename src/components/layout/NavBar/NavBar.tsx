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
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex">
        <Image
          src="./Logo.svg"
          alt="Chair Location"
          width={50}
          height={40}
          className="sm:w-[60px] sm:h-[50px] object-contain"
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
          className="p-2 border rounded-md border-gray-300 hover:bg-gray-50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-[#2d5f2b] font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button className="w-full bg-[#2d5f2b] text-white px-5 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity">
                Create Account
              </button>
              <button className="w-full border border-[#2d5f2b] text-[#2d5f2b] px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-50 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
