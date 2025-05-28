"use client";

import { experienceData } from "@/assets/data/dataBank";

const Experience = () => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
      Experience
    </h2>
    <div className="space-y-8">
      {experienceData.map((exp, idx) => (
        <div
          key={idx}
          className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 border-l-8 border-blue-500 group hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
        >
          {/* Timeline Dot */}
          <span className="absolute -left-5 top-8 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow group-hover:scale-125 transition-transform duration-300"></span>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-xl font-bold text-blue-700">{exp?.role}</h3>
            <span className="text-sm text-gray-500 mt-1 md:mt-0">
              {exp?.period}
            </span>
          </div>
          <div className="text-blue-500 font-semibold mb-2">{exp?.company}</div>
          <p className="text-gray-700 leading-relaxed">{exp?.desc}</p>
        </div>
      ))}
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
  </section>
);

export default Experience;
