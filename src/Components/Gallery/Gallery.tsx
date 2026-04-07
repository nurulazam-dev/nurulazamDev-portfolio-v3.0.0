import React, { useState } from "react";
import Img1 from "../../assets/images/Blogs_banner/why-soft-skills-matter-more-than-you-think-in-web-development.png";
import Image from "next/image";

const groupedImages = {
  Highlights: [
    { src: Img1, alt: "Award Ceremony 2023" },
    { src: Img1, alt: "Blood Donation Event" },
    { src: Img1, alt: "Annual Event" },
    { src: Img1, alt: "Blood Campain" },
    { src: Img1, alt: "Achievement Award" },
    { src: Img1, alt: "Achievement 2024" },
    { src: Img1, alt: "Best Award 2025" },
    { src: Img1, alt: "Blood Award" },
    { src: Img1, alt: "Donate Award" },
    { src: Img1, alt: "Volunteering at Community Center" },
  ],
  "Blood Donation Drives": [
    { src: Img1, alt: "Blood Donation Event" },
    { src: Img1, alt: "Blood Campain" },
    { src: Img1, alt: "Blood Award" },
    { src: Img1, alt: "Donate Award" },
  ],
  Awards: [
    { src: Img1, alt: "Award Ceremony 2023" },
    { src: Img1, alt: "Achievement Award" },
    { src: Img1, alt: "Achievement 2024" },
    { src: Img1, alt: "Best Award 2025" },
  ],
  "Community Events": [
    { src: Img1, alt: "Annual Event" },
    { src: Img1, alt: "Volunteering at Community Center" },
  ],
};

const tabOrder = [
  "Highlights",
  "Blood Donation Drives",
  "Awards",
  "Community Events",
] as const;

type Tab = (typeof tabOrder)[number];

const Gallery = () => {
  const [selected, setSelected] = useState<{ tab: Tab; idx: number } | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<Tab>("Highlights");
  const [showAll, setShowAll] = useState(false);

  // For Highlights, show only first 6 unless "See More" is clicked
  const highlightImages = groupedImages["Highlights"];
  const displayImages =
    activeTab === "Highlights" && !showAll
      ? highlightImages.slice(0, 6)
      : groupedImages[activeTab];

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 animate-gradient-x">
        Gallery
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg animate-fade-in-down delay-100">
        Explore highlights from my social activities and achievements. Click any
        image to view it larger.
      </p>
      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {tabOrder.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md border-2 ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-700 to-purple-600 text-white border-blue-700 scale-105"
                : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100 hover:scale-105"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Gallery Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-up">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            className="relative group overflow-hidden rounded-2xl shadow-2xl bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-3xl focus:outline-none"
            onClick={() => setSelected({ tab: activeTab, idx })}
            aria-label={`View ${img.alt}`}
            type="button"
            style={{
              animationDelay: `${idx * 0.07 + 0.1}s`,
              animationName: "fadeInUp",
              animationDuration: "0.7s",
              animationFillMode: "both",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <div className="text-white text-lg font-bold drop-shadow mb-1">
                {img.alt}
              </div>
              <div className="text-white text-xs opacity-80">
                Click to enlarge
              </div>
            </div>
            <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-80 group-hover:scale-110 transition-transform duration-300 animate-pulse">
              {activeTab}
            </span>
          </button>
        ))}
      </div>
      {/* See More Button */}
      {activeTab === "Highlights" && !showAll && highlightImages.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:scale-105 hover:from-blue-800 hover:to-purple-700 transition text-lg animate-bounce-slow flex items-center gap-2"
            onClick={() => setShowAll(true)}
            type="button"
          >
            See More
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
        </div>
      )}
      {/* Lightbox Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10 hover:text-red-400 transition"
              onClick={() => setSelected(null)}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            <Image
              loading="lazy"
              src={groupedImages[selected.tab][selected.idx].src}
              alt={groupedImages[selected.tab][selected.idx].alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-zoom-in"
            />
            <div className="text-center text-white mt-4 text-2xl font-semibold drop-shadow">
              {groupedImages[selected.tab][selected.idx].alt}
            </div>
            {/* Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              {selected.idx > 0 && (
                <button
                  className="text-white text-4xl px-2 hover:text-blue-300"
                  onClick={() =>
                    setSelected({ ...selected, idx: selected.idx - 1 })
                  }
                  aria-label="Previous"
                  type="button"
                >
                  &#8592;
                </button>
              )}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              {selected.idx < groupedImages[selected.tab].length - 1 && (
                <button
                  className="text-white text-4xl px-2 hover:text-blue-300"
                  onClick={() =>
                    setSelected({ ...selected, idx: selected.idx + 1 })
                  }
                  aria-label="Next"
                  type="button"
                >
                  &#8594;
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s both;
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
        .animate-fade-in-down {
          animation: fade-in-down 0.8s both;
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s both;
        }
        @keyframes zoom-in {
          0% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom-in {
          animation: zoom-in 0.5s both;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow:
            0 10px 40px 0 rgba(80, 80, 200, 0.18),
            0 2px 4px 0 rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};

export default Gallery;
