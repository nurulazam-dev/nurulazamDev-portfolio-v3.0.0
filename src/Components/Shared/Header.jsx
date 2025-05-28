import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/">
          <span className="text-xl font-bold text-gray-900 cursor-pointer">
            Nurul Azam
          </span>
        </Link>
      </div>
      <nav className="flex gap-6">
        <Link
          href="/about"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
