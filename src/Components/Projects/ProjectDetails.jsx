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
      <div className="w-full  bg-white rounded-xl shadow-xl p-8 animate-fade-in-up">
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
            className="w-full object-cover rounded shadow mb-6"
          />
          <div className="flex justify-between items-center mb-5 border">
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
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
              >
                Live Site
              </Link>
              <Link
                href={project?.clientCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition font-semibold"
              >
                GitHub (Client)
              </Link>
              <Link
                href={project?.serverCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition font-semibold"
              >
                GitHub (Server)
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project?.technologies?.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <li>
            <p className="text-gray-800 mb-1">{project?.des1}</p>
          </li>
          <li>
            <p className="text-gray-800 mb-6">{project?.des2}</p>
          </li>
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
