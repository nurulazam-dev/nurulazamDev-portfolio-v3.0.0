"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/assets/data/dataBank";

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Project Not Found
        </h1>
        <Link href="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full  bg-white rounded-xl shadow-xl px-8 py-5 animate-fade-in-up">
        <Link
          href="/projects"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Projects
        </Link>
        <div className="mb-6">
          <Image
            src={project?.imageLink}
            alt={project?.title}
            width={500}
            height={400}
            className="w-full object-cover rounded shadow mb-3"
          />
          {/* ===========================
            Category and Project Type
          =========================== */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wide shadow-sm
      ${
        project?.category === "fullStack"
          ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white"
          : project?.category === "frontend"
          ? "bg-gradient-to-r from-blue-500 to-purple-400 text-white"
          : project?.category === "backend"
          ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
          : "bg-gray-200 text-gray-700"
      } animate-fade-in-down`}
            >
              {project?.category === "fullStack" && "Full Stack"}
              {project?.category === "frontend" && "Frontend"}
              {project?.category === "backend" && "Backend"}
              {!["fullStack", "frontend", "backend"].includes(
                project?.category
              ) && project?.category}
            </span>
            <span className="px-3 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200 animate-fade-in-down">
              {project?.projectType}
            </span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div>
              <h1 className="text-3xl font-bold text-blue-700">
                {project?.title}
              </h1>
              <p className="text-gray-700">{project?.subTitle}</p>
            </div>
            <div className="flex gap-4">
              <Link
                href={project?.liveProject}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded flex items-center gap-2 font-semibold shadow transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-blue-400"
              >
                Live Site
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link
                href={project?.clientCode}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 bg-gradient-to-r from-gray-900 to-indigo-700 text-white rounded flex items-center gap-2 font-semibold shadow transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-blue-400"
              >
                GitHub (Client)
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              {project?.serverCode && (
                <Link
                  href={project?.serverCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2 bg-gradient-to-r from-indigo-900 to-black text-white rounded flex items-center gap-2 font-semibold shadow transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-blue-400"
                >
                  GitHub (Server)
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              )}
              {/* YouTube Video Button */}
              {project?.youtubeLink && (
                <Link
                  href={project?.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded flex items-center gap-2 font-semibold shadow transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-red-400"
                >
                  Watch Video
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 16.5l6-4.5-6-4.5v9z" />
                      <circle
                        cx="12"
                        cy="12"
                        r="11"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.technologies?.map((tech) => (
              <span
                key={tech}
                className="border border-blue-600 text-blue-600 px-2 py-[6px] rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            {project?.des1 && (
              <li className="text-gray-800">{project?.des1}</li>
            )}
            {project?.des2 && (
              <li className="text-gray-800">{project?.des2}</li>
            )}
            {project?.des3 && (
              <li className="text-gray-800">{project?.des3}</li>
            )}
          </ul>
        </div>
      </div>
      <style jsx global>{`
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
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
