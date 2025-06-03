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
  const [atTop, setAtTop] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollButton = () => {
    if (atTop) {
      // Scroll to bottom (Contact section)
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top
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
        aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
      >
        {atTop ? (
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
        ) : (
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
        )}
      </button>
    </main>
  );
}
