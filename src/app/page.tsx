"use client";
import Contact from "@/Components/Home/Contact";
import Hero from "@/Components/Home/Hero";
// import InfiniteScroll from "@/Components/Home/InfiniteScroll";
import Services from "@/Components/Home/Services";
import Skills from "@/Components/Home/Skills";
import Resume from "@/Components/Home/Resume";
import Blogs from "@/Components/Blogs/Blogs";
import Projects from "@/Components/Projects/Projects";
// import Achievement from "@/Components/Home/Achievement";
import SocialActivity from "@/Components/Home/SocialActivity";
// import Gallery from "@/Components/Gallery/Gallery";
// import Testimonial from "@/Components/Home/Testimonial";
import TechnologyTools from "@/Components/Home/TechnologyTools";
import MotionSection from "@/Components/Shared/MotionSection";

export default function HomePage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <MotionSection>
        <Hero />
      </MotionSection>
      <MotionSection delay={0.05}>
        <Services />
      </MotionSection>
      {/*  <MotionSection delay={0.1}>
        <InfiniteScroll />
      </MotionSection> */}
      <MotionSection delay={0.15}>
        <TechnologyTools />
      </MotionSection>
      <MotionSection delay={0.2}>
        <Skills />
      </MotionSection>
      <MotionSection delay={0.25}>
        <Resume />
      </MotionSection>
      <MotionSection delay={0.3}>
        <Projects />
      </MotionSection>
      {/*  <MotionSection delay={0.35}>
        <Achievement />
      </MotionSection> */}
      <MotionSection delay={0.4}>
        <SocialActivity />
      </MotionSection>
      {/* <MotionSection delay={0.45}>
        <Gallery />
      </MotionSection> */}
      {/*  <MotionSection delay={0.5}>
        <Testimonial />
      </MotionSection> */}
      <MotionSection delay={0.55}>
        <Blogs />
      </MotionSection>
      <MotionSection delay={0.6}>
        <Contact />
      </MotionSection>
    </div>
  );
}
