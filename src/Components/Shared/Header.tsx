"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LogIn, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import brandLogo from "public/assets/images/logo/nurulazan-dev-logo.png";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
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
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = () => setMenuOpen(false);
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src={brandLogo}
            alt="M N A"
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

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
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 backdrop-blur-[2px]"
              aria-label="Close mobile menu"
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed right-0 top-0 z-[61] flex h-[100dvh] min-h-[100dvh] w-[60%] max-w-sm flex-col border-l border-slate-200/70 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95"
            >
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700">
                <Image
                  src={brandLogo}
                  alt="M N A"
                  className="h-9 w-auto object-contain"
                  priority
                />

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-2 overflow-y-auto">
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
                      className={`rounded-lg px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/login"
                onClick={handleNavClick}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <LogIn size={16} />
                Login
              </Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
