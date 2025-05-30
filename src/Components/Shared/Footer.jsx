"use client";
import React from "react";
import Link from "next/link";
import swal from "sweetalert";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-12 pb-6 px-4 mt-16 animate-footer-fade-in">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 items-start">
        {/* Brand & About */}
        <div className="flex flex-col items-center md:items-start col-span-1">
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 tracking-tight mb-2 animate-footer-logo">
            Nurul Azam
          </span>
          <p className="text-gray-600 text-sm max-w-xs mb-3 text-center md:text-left">
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
          <div className="mt-4 text-xs text-gray-400 text-center md:text-left">
            <span className="block">Based in Bangladesh</span>
            <span className="block">Open for freelance & remote work</span>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2 col-span-1">
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
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-2 col-span-1">
          <span className="font-semibold text-gray-700 mb-1">Contact Info</span>
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Mohammad Nurul Azam
          </span>
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M21 8V7l-3 2.29V8c0-3.31-2.69-6-6-6S3 4.69 3 8v1.29L0 7v1l12 7 12-7z" />
            </svg>
            nurulazam.dev@gmail.com
          </span>
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            +880 1881-131834
          </span>
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="inline"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
            +880 1830-086238
          </span>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start gap-2 col-span-1">
          <span className="font-semibold text-gray-700 mb-1">Newsletter</span>
          <form
            className="flex gap-2 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              swal("Thank You!", "You are successfully subscribing me");
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-md font-semibold hover:from-purple-600 hover:to-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
          <span className="text-xs text-gray-400">
            Get latest updates and articles.
          </span>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm animate-footer-fade-in">
        <span>
          © {new Date().getFullYear()} nurulazam-dev. All rights reserved.
        </span>
        <div className="flex justify-center gap-4 mt-2 text-xs">
          <a href="/privacy-policy" className="hover:text-blue-700 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-700 transition">
            Terms of Service
          </a>
        </div>
      </div>
      <style jsx>{`
        .animate-footer-fade-in {
          animation: footer-fade-in 1.2s both;
        }
        .animate-footer-logo {
          animation: footer-logo-pop 1.2s both;
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
        @keyframes footer-logo-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
