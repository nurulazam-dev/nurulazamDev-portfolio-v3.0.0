"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/assets/data/dataBank";

const categories = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullStack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen px-6 sm:px-16 font-[family-name:var(--font-geist-sans)] flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="w-full max-w-6xl pt-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-7 text-center text-gray-900 animate-fade-in-down">
          My Projects
        </h1>
        {/* ======================
            Category Filter part
          ====================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories?.map((cat) => (
            <button
              key={cat?.value}
              onClick={() => setSelectedCategory(cat?.value)}
              className={`px-4 py-2 rounded font-semibold border transition
                ${
                  selectedCategory === cat?.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow"
                    : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                }
              `}
            >
              {cat?.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {filteredProjects?.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No projects found in this category.
            </div>
          )}
          {filteredProjects?.map((project, idx) => (
            <div
              key={project?.id}
              className="bg-white shadow-xl rounded-xl p-4 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.1 + 0.2}s`,
                minHeight: "370px",
              }}
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <Image
                  src={project?.imageLink}
                  alt={project?.title || "Project Image"}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h2 className="text-xl font-bold text-blue-700">
                {project?.title}
              </h2>
              <h3 className="text-[16px] font-[500] mb-2 text-violet-600">
                {project?.projectType}
              </h3>
              <p className="text-gray-700 mb-3 line-clamp-3">
                {project?.subTitle}
              </p>
              <div className="mt-auto pt-2">
                <Link
                  href={`/projects/${project?.id}`}
                  className="w-full block px-3 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Animations */}
      <style jsx global>{`
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
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;
