"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-lg transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* ======================
                 Logo
        ====================== */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 tracking-tight group-hover:drop-shadow-lg transition">
            Nurul Azam
          </span>
        </Link>
        {/* ======================
                 Hamburger
        ====================== */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-blue-700 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-blue-700 rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-blue-700 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* ======================
               Navigation
        ====================== */}
        <nav
          className={`
            flex-col md:flex-row md:flex gap-2 md:gap-4
            fixed md:static top-16 left-0 w-full md:w-auto bg-white/95 md:bg-transparent
            shadow-lg md:shadow-none transition-all duration-300
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`relative px-4 py-3 md:px-3 md:py-[6px] font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <style jsx global>{`
        header {
          box-shadow: 0 4px 24px 0 rgba(80, 112, 255, 0.07);
        }
        @media (max-width: 767px) {
          nav {
            position: fixed !important;
            left: 0 !important;
            top: 56px !important;
            width: 100vw !important;
            background: rgba(255, 255, 255, 0.97) !important;
            z-index: 40 !important;
            border-radius: 0 0 1rem 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
