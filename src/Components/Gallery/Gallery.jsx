import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Img1 from "../../assets/images/Blogs_banner/learn_react.jpeg";
// Add more imports for your images as needed

const groupedImages = {
  Highlights: [
    {
      src: Img1,
      alt: "Award Ceremony 2023",
      details:
        "Received recognition for outstanding community service in 2023.",
    },
    {
      src: Img1,
      alt: "Blood Donation Event",
      details: "Organized a successful blood donation event with 200+ donors.",
    },
    {
      src: Img1,
      alt: "Annual Event",
      details:
        "Participated in the annual community event to raise awareness for health.",
    },
    {
      src: Img1,
      alt: "Blood Campain",
      details: "Led a campaign to encourage voluntary blood donation.",
    },
    {
      src: Img1,
      alt: "Achievement Award",
      details: "Honored for consistent contributions to social causes.",
    },
    {
      src: Img1,
      alt: "Achievement 2024",
      details: "Awarded for exceptional leadership in 2024.",
    },
    {
      src: Img1,
      alt: "Best Award 2025",
      details: "Recognized as the best volunteer of 2025.",
    },
    {
      src: Img1,
      alt: "Blood Award",
      details: "Received a special award for blood donation efforts.",
    },
    {
      src: Img1,
      alt: "Donate Award",
      details: "Acknowledged for inspiring others to donate blood.",
    },
    {
      src: Img1,
      alt: "Volunteering at Community Center",
      details:
        "Volunteered at the local community center for youth empowerment.",
    },
  ],
  "Blood Donation Drives": [
    {
      src: Img1,
      alt: "Blood Donation Event",
      details: "Coordinated logistics and volunteer teams for the event.",
    },
    {
      src: Img1,
      alt: "Blood Campain",
      details:
        "Promoted blood donation through social media and local outreach.",
    },
    {
      src: Img1,
      alt: "Blood Award",
      details:
        "Received appreciation from the blood bank for regular donations.",
    },
    {
      src: Img1,
      alt: "Donate Award",
      details: "Motivated new donors to join the cause.",
    },
  ],
  Awards: [
    {
      src: Img1,
      alt: "Award Ceremony 2023",
      details: "Awarded for dedication and impact in 2023.",
    },
    {
      src: Img1,
      alt: "Achievement Award",
      details: "Recognized for continuous achievements in social work.",
    },
    {
      src: Img1,
      alt: "Achievement 2024",
      details: "Leadership award for 2024.",
    },
    {
      src: Img1,
      alt: "Best Award 2025",
      details: "Best volunteer award for 2025.",
    },
  ],
  "Community Events": [
    {
      src: Img1,
      alt: "Annual Event",
      details: "Helped organize and manage the annual event.",
    },
    {
      src: Img1,
      alt: "Volunteering at Community Center",
      details: "Provided mentorship and support to local youth.",
    },
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
  const router = useRouter();

  // For Highlights, show only first 6 unless "See More" is clicked
  const highlightImages = groupedImages["Highlights"];
  const displayImages =
    activeTab === "Highlights" && !showAll
      ? highlightImages.slice(0, 6)
      : groupedImages[activeTab];

  return (
    <section className="py-14 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <h2 className="text-4xl font-extrabold mb-4 text-center text-blue-800 tracking-tight animate-fade-in-down">
        Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-down delay-100">
        Explore highlights from my social activities and achievements. Each
        image tells a story of dedication, teamwork, and impact. Click any image
        to view it larger and read more details.
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition focus:outline-none bg-white group"
            onClick={() => setSelected({ tab: activeTab, idx })}
            aria-label={`View ${img.alt}`}
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="object-cover w-full h-48 group-hover:opacity-80"
            />
            <div className="p-2 text-center">
              <div className="font-semibold text-blue-900 text-base">
                {img.alt}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {img.details}
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* See More Button */}
      {activeTab === "Highlights" && !showAll && highlightImages.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-2 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-800 hover:to-purple-700 transition text-lg"
            onClick={() => router.push("/gallery")}
            type="button"
          >
            See More in Full Gallery
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
            <div className="text-center text-white mt-4 text-xl font-semibold">
              {groupedImages[selected.tab][selected.idx].alt}
            </div>
            <div className="text-center text-blue-100 mt-2 text-base">
              {groupedImages[selected.tab][selected.idx].details}
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
        .animate-fade-in-down {
          animation: fade-in-down 0.8s both;
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
      `}</style>
    </section>
  );
};

export default Gallery;
