import React, { useState } from "react";
import Img1 from "../../assets/images/Blogs_banner/learn_react.jpeg";

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
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("Highlights");
  const [showAll, setShowAll] = useState(false);

  // For Highlights, show only first 6 unless "See More" is clicked
  const highlightImages = groupedImages["Highlights"];
  const displayImages =
    activeTab === "Highlights" && !showAll
      ? highlightImages.slice(0, 6)
      : groupedImages[activeTab];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore highlights from my social activities and achievements. Click any
        image to view it larger.
      </p>
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {tabOrder.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-blue-700 text-white shadow"
                : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-100"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            className="overflow-hidden rounded-lg shadow hover:scale-105 transition focus:outline-none"
            onClick={() => setSelected({ tab: activeTab, idx })}
            aria-label={`View ${img.alt}`}
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="object-cover w-full h-48"
            />
          </button>
        ))}
      </div>
      {/* See More Button */}
      {activeTab === "Highlights" && !showAll && highlightImages.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition"
            onClick={() => setShowAll(true)}
            type="button"
          >
            See More
          </button>
        </div>
      )}
      {/* Lightbox Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
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
            <img
              src={groupedImages[selected.tab][selected.idx].src}
              alt={groupedImages[selected.tab][selected.idx].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <div className="text-center text-white mt-4 text-lg">
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
    </section>
  );
};

export default Gallery;
