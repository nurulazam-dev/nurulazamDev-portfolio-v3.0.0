"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
      <h1 className="text-9xl text-red-700 font-bold mb-2">404</h1>
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 z-10 animate-fade-in-down">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-5 z-10 text-center animate-fade-in-up">
        Oops! The page you are looking for does not exist or has been moved.
        <br />
        Let’s get you back to safety.
      </p>
      <Link
        href="/"
        className="z-10 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition-transform animate-fade-in-up"
      >
        Go Home
      </Link>
      <style jsx>{`
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(18px);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-ghost-float {
          animation: ghost-float 2.5s ease-in-out infinite alternate;
        }
        @keyframes ghost-float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-12px);
          }
        }
        .animate-stroke {
          stroke: #6366f1;
          stroke-width: 2;
          paint-order: stroke fill;
          filter: drop-shadow(0 2px 12px #a78bfa55);
          animation: stroke-glow 2s infinite alternate;
        }
        @keyframes stroke-glow {
          0% {
            filter: drop-shadow(0 2px 12px #a78bfa55);
          }
          100% {
            filter: drop-shadow(0 4px 24px #6366f199);
          }
        }
      `}</style>
    </section>
  );
}
