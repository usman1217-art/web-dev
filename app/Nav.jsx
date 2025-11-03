"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="w-full bg-[#001d3d] text-white shadow-md py-4 px-8 flex justify-between items-center relative z-[9999]">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-[#ffc300]">
        QBM
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`relative text-lg transition-all duration-300 hover:text-[#ffc300]
                ${
                  pathname === link.path
                    ? "text-white font-semibold after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-[#ffc300]"
                    : "text-gray-300"
                }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[70px] left-0 w-full bg-[#001d3d] flex flex-col items-center gap-6 py-6 border-t border-[#ffc300] md:hidden transition-all duration-300 z-[9999]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`text-lg transition-all duration-300 hover:text-[#ffc300]
                  ${
                    pathname === link.path
                      ? "text-white font-semibold"
                      : "text-gray-300"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
