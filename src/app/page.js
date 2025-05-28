"use client";
import Contact from "@/Components/Home/Contact";
import Hero from "@/Components/Home/Hero";
import Services from "@/Components/Home/Services";
import Skills from "@/Components/Home/Skills";
import Resume from "@/Components/Resume/Resume";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Services />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
