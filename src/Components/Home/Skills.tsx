"use client";
import { skillsData } from "public/assets/data/dataBank";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="container mx-auto py-5 lg:mb-12 mb-8">
      <div className="text-center mb-16">
        <h4 className="uppercase text-blue-600 font-semibold tracking-widest mb-2 animate-fade-in-down">
          Skills
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in-down">
          My Available Skills
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl hover:rounded-none shadow-xl p-8 pt-20 w-full max-w-md mx-auto flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            {/* Skill image */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-tr from-blue-100 via-purple-100 to-white rounded-full blur-xl opacity-70 z-0"></div>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
              <Image
                src={skill.image}
                alt={skill.title}
                height={112}
                width={112}
                className="h-28 w-28 object-contain rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white"
              />
            </div>
            <div className="relative z-20 flex flex-col items-center mt-2">
              <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
                {skill.title}
              </h2>
              <hr className="w-24 border-blue-200 mb-4" />
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-full">
                {skill.skillsData.map((skillData, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 font-medium text-base group-hover:text-violet-800 transition"
                  >
                    {/* Custom SVG checkmark */}
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        className="text-white"
                      >
                        <path
                          d="M4 8.5l3 3 5-5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{skillData.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
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
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
      `}</style>
    </section>
  );
};

export default Skills;
