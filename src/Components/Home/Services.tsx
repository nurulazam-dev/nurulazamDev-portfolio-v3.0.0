"use client";
import { skillsData } from "public/assets/data/dataBank";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative z-10 py-12 px-4 sm:px-8 lg:px-16 bg-white text-gray-900">
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h4 className="text-base uppercase tracking-widest text-blue-600 mb-2 animate-fade-in-down">
          Core Skill Categories
        </h4>
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-down">
          Tech Stack I Work With
        </h1>
        <p className="text-gray-600 mt-4 text-base animate-fade-in-up">
          Frontend, backend, and toolchain capabilities that power my modern
          full-stack workflow. I use these technologies to deliver scalable,
          maintainable, and high-performance applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto animate-fade-in-up">
        {skillsData.map((group, index) => (
          <div
            key={group.id}
            className="relative group px-6 py-3 rounded-xl border border-gray-200 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-blue-500 animate-fade-in-down"
            style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
          >
            <div className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-40 h-34 flex items-center justify-center  group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={group.image}
                  alt={group.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.skillsData.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
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
