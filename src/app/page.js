"use client";
import Hero from "@/Components/Home/Hero";
import Services from "@/Components/Home/Services";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Services />
    </main>
  );
}
