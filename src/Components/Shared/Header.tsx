"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LogIn, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import brandLogo from "public/assets/images/logo/nurulazan-dev-logo.png";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleNavClick = () => setMenuOpen(false);
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Brand logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={brandLogo}
            alt="M N A"
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Middle: Desktop nav links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Login + theme toggle + mobile trigger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <Link
            href="/login"
            className="hidden items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-600 px-3 py-2 text-sm font-semibold text-white md:inline-flex"
          >
            <LogIn size={16} />
            Login
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav links */}
      {menuOpen && (
        <nav className="border-t border-slate-200/70 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
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
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              onClick={handleNavClick}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-600 px-3 py-2 text-sm font-semibold text-white"
            >
              <LogIn size={16} />
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
