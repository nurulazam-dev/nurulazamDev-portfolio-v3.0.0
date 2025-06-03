"use client";
import Contact from "@/Components/Home/Contact";
import Hero from "@/Components/Home/Hero";
import InfiniteScroll from "@/Components/Home/InfiniteScroll";
import Services from "@/Components/Home/Services";
import Skills from "@/Components/Home/Skills";
import Resume from "@/Components/Home/Resume";
import Blogs from "@/Components/Blogs/Blogs";
import Projects from "@/Components/Projects/Projects";
import Achievement from "@/Components/Home/Achievement";
import SocialActivity from "@/Components/Home/SocialActivity";
import Gallery from "@/Components/Gallery/Gallery";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isAtContact, setIsAtContact] = useState(false);
  const contactRef = useRef(null);

  // Detect if user is near the Contact section
  useEffect(() => {
    const handleScroll = () => {
      if (!contactRef.current) return;
      const rect = contactRef.current.getBoundingClientRect();
      // If the top of Contact is within 200px of viewport top, consider "at contact"
      setIsAtContact(rect.top < 200 && rect.bottom > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollButton = () => {
    if (!isAtContact) {
      // Scroll to Contact section (down)
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top (up)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Services />
      <InfiniteScroll />
      <Skills />
      <Resume />
      <Projects />
      <Achievement />
      <SocialActivity />
      <Gallery />
      <Blogs />
      {/* Attach ref to Contact section */}
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Scroll Button */}
      <button
        onClick={handleScrollButton}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-700 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
        aria-label={isAtContact ? "Scroll to top" : "Scroll to Contact"}
      >
        {isAtContact ? (
          // Up arrow
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          // Down arrow
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
    </main>
  );
}
