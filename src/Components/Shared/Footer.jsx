"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-purple-100 py-8 px-4 mt-12 animate-footer-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 tracking-tight mb-2">
            Nurul Azam
          </span>
          <p className="text-gray-600 text-sm max-w-xs mb-2 text-center md:text-left">
            MERN Stack Developer passionate about building modern, scalable, and
            user-friendly web applications.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://github.com/nurulazam-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition"
              aria-label="GitHub"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nurulazam-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
              </svg>
            </a>
            <a
              href="mailto:nurulazam.dev@gmail.com"
              className="text-gray-500 hover:text-blue-700 transition"
              aria-label="Email"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold text-gray-700 mb-1">Quick Links</span>
          <Link
            href="/"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-blue-700 transition"
          >
            Contact
          </Link>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold text-gray-700 mb-1">Newsletter</span>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="px-3 py-2 rounded-l-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
          <span className="text-xs text-gray-400">
            Get latest updates and articles.
          </span>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm animate-footer-fade-in">
        <span>
          © {new Date().getFullYear()} nurulazam-dev. All rights reserved.
        </span>
      </div>
      <style jsx>{`
        .animate-footer-fade-in {
          animation: footer-fade-in 1.2s both;
        }
        @keyframes footer-fade-in {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
