"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// You can move this data to a separate file and import it if you want to share with the main projects page
const projects = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image:
      "https://nurulazam-dev.web.app/assets/1-mna-computer-manufacture-9OlILc0F.png",
    link: "https://nurulazam.dev",
    github: "https://github.com/nurulazam/portfolio",
    details:
      "This portfolio website highlights my skills, experience, and projects. Built with Next.js for SSR and Tailwind CSS for rapid UI development. Features responsive design, project showcase, and contact form.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description:
      "A full-featured MERN stack e-commerce application with authentication, cart, and payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://nurulazam-dev.web.app/assets/1-mna-computer-manufacture-9OlILc0F.png",
    link: "https://myecommerce.example.com",
    github: "https://github.com/nurulazam/mern-ecommerce",
    details:
      "A scalable e-commerce platform with user authentication, product management, shopping cart, and payment gateway integration. Built using the MERN stack and follows best practices for security and performance.",
  },
  {
    id: "blog",
    title: "Blog Platform",
    description:
      "A multi-user blog platform with Markdown support and RESTful API.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image:
      "https://nurulazam-dev.web.app/assets/1-mna-computer-manufacture-9OlILc0F.png",
    link: "https://myblog.example.com",
    github: "https://github.com/nurulazam/mern-blog",
    details:
      "A blogging platform supporting multiple users, Markdown editing, and RESTful APIs. Includes authentication, post management, and a clean, responsive UI.",
  },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;
  const project = projects.find((p) => p.id === id);

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
    <div className="min-h-screen p-6 sm:p-16 flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full  bg-white rounded-xl shadow-xl p-8 animate-fade-in-up">
        <Link
          href="/projects"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Projects
        </Link>
        <div className="mb-6">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={400}
            className="w-full object-cover rounded shadow mb-6"
          />
          <h1 className="text-3xl font-bold mb-2 text-blue-700">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p className="text-gray-800 mb-6">{project.details}</p>
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition font-semibold"
            >
              GitHub
            </a>
          </div>
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
