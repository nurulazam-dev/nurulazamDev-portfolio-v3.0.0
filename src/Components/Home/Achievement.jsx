import React from "react";

const achievements = [
  {
    title: "5+ Years Experience",
    desc: "Professional experience in web development.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        className="text-blue-600"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "50+ Projects",
    desc: "Successfully delivered diverse projects for clients worldwide.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        className="text-purple-600"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Top Rated Freelancer",
    desc: "Recognized for quality, reliability, and client satisfaction.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        className="text-yellow-500"
      >
        <polygon
          points="12,2 15,9 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,9"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Open Source Contributor",
    desc: "Actively contributing to open source projects and communities.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        className="text-green-600"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 8v4l3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Achievement = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-5 animate-fade-in-down">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {achievements.map((ach, idx) => (
            <div
              key={ach.title}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 group transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="mb-4 animate-bounce-slow">{ach.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {ach.title}
              </h3>
              <p className="text-gray-500 text-center">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
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
          animation: fade-in-down 0.8s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s both;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievement;
