"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Lee",
    role: "Product Manager, TechNova",
    image: "/images/testimonial1.jpg",
    quote:
      "Working with Nurul Azam was a game-changer. The website exceeded our expectations in both design and performance. Highly recommended!",
  },
  {
    name: "James Carter",
    role: "Founder, StartupX",
    image: "/images/testimonial2.jpg",
    quote:
      "Professional, creative, and always on time. The solutions delivered helped us scale our business rapidly.",
  },
  {
    name: "Alicia Gomez",
    role: "Lead Designer, Creatify",
    image: "/images/testimonial3.jpg",
    quote:
      "Nurul’s attention to detail and passion for quality shine through in every project. A pleasure to collaborate with!",
  },
  {
    name: "Michael Tan",
    role: "CTO, FinEdge",
    image: "/images/testimonial4.jpg",
    quote:
      "The best developer I’ve worked with. Communication was clear, and the results were outstanding.",
  },
  {
    name: "Emily Chen",
    role: "CEO, Brandify",
    image: "/images/testimonial5.jpg",
    quote:
      "Nurul brought our vision to life with creativity and technical excellence. Highly recommended!",
  },
];

const getVisibleSlides = (active, total, perView) => {
  // Returns an array of indices for visible slides
  let slides = [];
  for (let i = 0; i < perView; i++) {
    slides.push((active + i) % total);
  }
  return slides;
};

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);
  const timeoutRef = useRef();

  // Responsive: 1 slide on mobile, 2 on md, 3 on lg+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [active, perView]);

  // Manual navigation
  const goTo = (idx) => {
    setActive(idx);
    clearTimeout(timeoutRef.current);
  };

  const visibleSlides = getVisibleSlides(active, testimonials.length, perView);

  return (
    <section className="relative py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-200 rounded-full opacity-20 blur-2xl -z-10" />
      <div className="text-center mb-14">
        <h4 className="uppercase text-blue-600 font-bold tracking-widest mb-2 animate-fade-in-down">
          Testimonials
        </h4>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 animate-fade-in-down">
          What My Clients Say
        </h2>
      </div>
      <div className="relative max-w-6xl mx-auto px-2">
        {/* Slider */}
        <div className="flex justify-center gap-8 transition-all duration-700">
          {visibleSlides.map((idx, i) => (
            <div
              key={idx}
              className={`relative bg-white rounded-xl shadow-2xl px-8 py-10 flex flex-col items-center text-center max-w-xs w-full group hover:scale-105 transition-transform duration-300 ${
                i === 1 && perView === 3
                  ? "scale-105 z-20 border-2 border-purple-400"
                  : "z-10"
              }`}
              style={{
                opacity:
                  perView === 1 ? 1 : i === 1 && perView === 3 ? 1 : 0.85,
                boxShadow:
                  i === 1 && perView === 3
                    ? "0 8px 32px 0 rgba(99,102,241,0.15)"
                    : undefined,
                transition: "all 0.5s cubic-bezier(.4,2,.6,1)",
              }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-tr from-blue-100 via-purple-100 to-white rounded-full blur-xl opacity-80 z-0"></div>
              <div className="relative z-10 mb-4">
                <Image
                  src={testimonials[idx].image}
                  alt={testimonials[idx].name}
                  width={72}
                  height={72}
                  className="rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <blockquote className="text-gray-500 italic mb-4 relative z-10">
                “{testimonials[idx].quote}”
              </blockquote>
              <div className="relative z-10">
                <span className="block font-bold text-purple-700">
                  {testimonials[idx].name}
                </span>
                <span className="block text-xs text-blue-700">
                  {testimonials[idx].role}
                </span>
              </div>
              <div className="absolute bottom-4 right-6 text-5xl text-blue-100 opacity-40 select-none pointer-events-none">
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                  <path
                    d="M13 24c0-5.523 4.477-10 10-10V8c-8.837 0-16 7.163-16 16v4h6v-4zm14 0c0-5.523 4.477-10 10-10V8c-8.837 0-16 7.163-16 16v4h6v-4z"
                    fill="currentColor"
                    opacity="0.2"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-4 h-4 rounded-full border-2 border-blue-400 transition-all duration-300 ${
                idx === active
                  ? "bg-gradient-to-r from-blue-500 to-purple-400 shadow-lg scale-110"
                  : "bg-white"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
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
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
