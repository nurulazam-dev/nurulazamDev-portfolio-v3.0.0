"use client";

import { educationData, experienceData } from "public/assets/data/dataBank";
import SectionHeader from "../Shared/SectionHeader";

const Resume = () => (
  <section className="container mx-auto py-5 px-4">
    <SectionHeader subtitle="My Resume" title="My Experiences and Educations" />

    <div className="grid md:grid-cols-2 gap-14">
      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center animate-fade-in-left">
          Experience
        </h2>
        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-100 to-purple-200 rounded-full opacity-60"></div>
          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 border-l-8 border-blue-500 group hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-7 top-10 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-500 border-4 border-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-700">
                    {exp?.role}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">
                    {exp?.period}
                  </span>
                </div>
                <div className="text-blue-500 font-semibold mb-2">
                  {exp?.company}
                </div>
                <p className="text-gray-700 leading-relaxed">{exp?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-700 mb-8 text-center animate-fade-in-right">
          Education
        </h2>
        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-purple-100 to-blue-200 rounded-full opacity-60"></div>
          <div className="space-y-10">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl shadow-xl p-8 border-l-8 border-purple-500 group hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-7 top-10 w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-500 border-4 border-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></span>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-xl font-semibold">{edu?.title}</h3>
                  <span className="text-sm text-gray-500">{edu?.time}</span>
                </div>
                <div className="text-purple-600 font-medium mb-2">
                  {edu?.org}
                </div>
                <p className="text-gray-700">{edu?.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
      @keyframes fade-in-left {
        0% {
          opacity: 0;
          transform: translateX(-40px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes fade-in-right {
        0% {
          opacity: 0;
          transform: translateX(40px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .animate-fade-in-down {
        animation: fade-in-down 0.8s both;
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s both;
      }
      .animate-fade-in-left {
        animation: fade-in-left 1s both;
      }
      .animate-fade-in-right {
        animation: fade-in-right 1s both;
      }
    `}</style>
  </section>
);

export default Resume;
