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

export default function Home() {
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
      <Blogs />
      <Contact />
    </main>
  );
}
