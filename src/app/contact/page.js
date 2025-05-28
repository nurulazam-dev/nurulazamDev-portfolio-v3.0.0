"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle sending the form data to your backend or email service
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <main className="w-full max-w-xl bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 animate-fade-in-up border border-blue-100">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-2 animate-fade-in-down tracking-tight drop-shadow">
          Contact Me
        </h1>
        <p
          className="text-gray-600 text-center mb-10 animate-fade-in-down"
          style={{ animationDelay: "0.15s" }}
        >
          Have a question, proposal, or just want to say hi? <br />
          Fill out the form below and I&apos;ll get back to you soon!
        </p>
        {submitted ? (
          <div
            className="text-center py-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-5xl mb-4 animate-bounce">🎉</div>
            <div className="text-xl font-semibold text-blue-700 mb-2">
              Thank you for reaching out!
            </div>
            <div className="text-gray-500">
              I&apos;ll get back to you as soon as possible.
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-7 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="relative group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1 group-hover:text-blue-700 transition"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40"
                placeholder="Your Name"
              />
            </div>
            <div className="relative group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1 group-hover:text-blue-700 transition"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40"
                placeholder="you@email.com"
              />
            </div>
            <div className="relative group">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1 group-hover:text-blue-700 transition"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-blue-50/40 resize-none"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </main>
      <style jsx global>{`
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
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
      `}</style>
    </div>
  );
}
