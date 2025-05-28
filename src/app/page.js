"use client";
import Contact from "@/Components/Home/Contact";
import Hero from "@/Components/Home/Hero";
import Services from "@/Components/Home/Services";
import Skills from "@/Components/Home/Skills";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Services />
      <Skills />
      <Contact />
    </main>
  );
}
