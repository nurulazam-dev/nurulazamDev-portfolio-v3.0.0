"use client";

import { educationData } from "@/assets/data/dataBank";

const educations = [
  {
    institution: "University of Modern Science",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2017 - 2021",
    description:
      "Graduated with honors. Focused on software engineering, web development, and data structures.",
  },
  {
    institution: "City College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2015 - 2017",
    description:
      "Major in Science. Participated in programming contests and tech clubs.",
  },
];

const Education = () => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-blue-700 mb-6">Education</h2>
    <div className="space-y-6">
      {educationData.map((edu, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500 animate-fade-in-up"
          style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-semibold">{edu?.title}</h3>
            <span className="text-sm text-gray-500">{edu?.time}</span>
          </div>
          <div className="text-purple-600 font-medium mb-2">{edu?.org}</div>
          <p className="text-gray-700">{edu?.desc}</p>
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

export default Education;
