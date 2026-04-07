"use client";
import { skillsData } from "public/assets/data/dataBank";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../Shared/SectionHeader";

const serviceContent: Record<
  string,
  { subtitle: string; points: string[]; accent: string }
> = {
  Frontend: {
    subtitle:
      "I craft responsive, modern, and high-performing interfaces with clean UX and motion.",
    points: [
      "Pixel-perfect UI with reusable components",
      "Responsive design for mobile, tablet, and desktop",
      "Smooth interactions with Framer Motion",
    ],
    accent: "from-sky-500 to-blue-600",
  },
  Backend: {
    subtitle:
      "I build secure APIs and scalable server architecture for real-world production systems.",
    points: [
      "REST APIs with authentication and role-based access",
      "Data modeling with Prisma, PostgreSQL, and MongoDB",
      "Validation, business logic, and performance-focused design",
    ],
    accent: "from-blue-500 to-sky-600",
  },
  Tools: {
    subtitle:
      "I use modern tooling and workflow best practices for quality, speed, and maintainability.",
    points: [
      "Version control, CI-ready project structure, and deployment flow",
      "Cloud, debugging, and API testing for stable releases",
      "Efficient collaboration with modern dev tools",
    ],
    accent: "from-sky-500 to-blue-600",
  },
};

const Services = () => {
  return (
    <section className="relative z-10 from-white px-4 py-14 sm:px-8 lg:px-16">
      <SectionHeader subtitle="My Services" title="What I Can Build For You" />

      <div className="mx-auto grid max-w-7xl gap-7 animate-fade-in-up md:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group, index) => (
          <div
            key={group.id}
            className="group relative rounded-2xl border border-gray-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl  animate-fade-in-down"
            style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={group.image}
                  alt={group.title}
                  width={92}
                  height={92}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                {group.title} Development
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {serviceContent[group.title]?.subtitle}
              </p>

              <ul className="mb-4 space-y-2">
                {serviceContent[group.title]?.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-700" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mb-5 flex flex-wrap gap-2">
                {group.skillsData.slice(0, 6).map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-auto inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r px-4 py-2.5 text-sm font-semibold text-white shadow transition-opacity hover:opacity-95 ${serviceContent[group.title]?.accent ?? "from-cyan-500 to-indigo-600"}`}
              >
                Discuss This Service
              </Link>
            </div>
          </div>
        ))}
      </div>

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
          animation: fade-in-down 0.8s ease both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease both;
        }
      `}</style>
    </section>
  );
};

export default Services;
