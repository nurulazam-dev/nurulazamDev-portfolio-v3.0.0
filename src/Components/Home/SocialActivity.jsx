import React from "react";

const activities = [
  {
    title: "Financial Secretary",
    org: "Raozan Blood Bank",
    date: "Feb 2017 - Jan 2022",
    desc: (
      <>
        <span className="font-semibold">Impact:</span> Oversaw all financial
        operations, ensuring transparency and trust for hundreds of voluntary
        blood donors. Helped save lives by supporting seamless donation drives
        and community outreach.
      </>
    ),
    icon: (
      <svg
        width="44"
        height="44"
        fill="none"
        viewBox="0 0 24 24"
        className="text-red-600 drop-shadow-lg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 8v4l2 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    color: "from-red-500 via-pink-400 to-pink-300",
    highlight: "Supported 1000+ blood donations",
  },
  {
    title: "Admin & (B+) Blood Donor",
    org: "M.B. Blood Bank",
    date: "Jul 2021 - Present",
    desc: (
      <>
        <span className="font-semibold">Mission:</span> Leading M_B_Blood_Bank,
        a volunteer-driven initiative by HAKSAB, to build and manage blood and
        organ donation centers across Bangladesh. Personally donated blood and
        inspired others to join the cause.
      </>
    ),
    icon: (
      <svg
        width="44"
        height="44"
        fill="none"
        viewBox="0 0 24 24"
        className="text-white drop-shadow-lg"
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
        <rect
          x="8"
          y="8"
          width="8"
          height="8"
          fill="currentColor"
          opacity="0.10"
        />
      </svg>
    ),
    color: "from-blue-600 via-blue-400 to-blue-200",
    highlight: "Admin & active donor",
  },
  {
    title: "Assistant Secretary",
    org: "HAKSAB, Raozan Branch",
    date: "Jan 2024 - Present",
    desc: (
      <>
        <span className="font-semibold">Role:</span> Serving the Raozan branch
        of Hazrat Abul Khair Sultanpury (RH.) Association Bangladesh, a
        non-profit social Islamic organization. Organizing events, empowering
        youth, and supporting underprivileged communities.
      </>
    ),
    icon: (
      <svg
        width="44"
        height="44"
        fill="none"
        viewBox="0 0 24 24"
        className="text-green-600 drop-shadow-lg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 8v4l3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.12" />
      </svg>
    ),
    color: "from-green-600 via-green-400 to-green-200",
    highlight: "Empowering local youth",
  },
];

const SocialActivity = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-4 animate-fade-in-down tracking-tight">
        Social Impact & Community Leadership
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl animate-fade-in-down delay-100">
        Beyond code, I believe in giving back. Here’s how I’ve contributed to
        society—leading, organizing, and inspiring positive change in my
        community.
      </p>
      <div className="flex flex-col sm:flex-row gap-7 w-full max-w-6xl justify-center items-stretch">
        {activities.map((a, idx) => (
          <div
            key={a.title}
            className={`relative group flex-1 bg-gradient-to-br ${a.color} rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-between overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:shadow-3xl animate-fade-in-up`}
            style={{ animationDelay: `${idx * 0.18 + 0.2}s` }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-white/20 blur-sm opacity-60" />
            <span className="mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce-slow">
              {a.icon}
            </span>
            <h3 className="text-2xl font-bold text-white drop-shadow text-center mb-1">
              {a.title}
            </h3>
            <span className="text-base text-white/90 font-medium mb-1 text-center">
              {a.org}
            </span>
            <span className="text-xs text-white/80 mb-2">{a.date}</span>
            <div className="mb-4 text-white text-center text-sm">{a.desc}</div>
            <div className="mt-auto">
              <span className="inline-block bg-white/80 text-blue-900 font-semibold px-4 py-1 rounded-full shadow animate-pulse">
                {a.highlight}
              </span>
            </div>
          </div>
        ))}
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
          animation: bounce-slow 2.2s infinite;
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 10px 40px 0 rgba(80, 80, 200, 0.18),
            0 2px 4px 0 rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};

export default SocialActivity;
