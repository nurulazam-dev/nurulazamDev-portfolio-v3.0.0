"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full py-10 bg-gradient-to-br from-blue-50 via-white to-purple-100 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl animate-float-slow z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl animate-float-slower z-0"></div>
      <div className="relative z-10 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-5 px-10">
        {/* Details */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center animate-fade-in-left">
          <p className="uppercase tracking-widest text-xs font-semibold text-blue-600 mb-2 animate-fade-in-down">
            Welcome to my portfolio website
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-2 animate-fade-in-down">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow">
              Mohammad Nurul Azam
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700 animate-fade-in-down">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Web Developer",
                  "Full Stack Developer",
                  "React Developer",
                  "Front End Developer",
                  "Responsive Designer",
                  "Professional Coder",
                  "YouTube Content Creator",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-700 mb-4 animate-fade-in-up">
            I specialize in building dynamic and responsive web applications
            using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I
            love crafting efficient, user-friendly interfaces and robust
            server-side functionality.
          </p>
          <div className="flex gap-4 mt-2 animate-fade-in-up">
            <Link href="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Hire Me
              </button>
            </Link>
            <a
              href="Nurul_Azan-MERN-Stack-Web-developer-resume.pdf"
              download="Nurul_Azan-MERN-Stack-Web-developer-resume.pdf"
              className="px-6 py-3 bg-white border border-blue-600 text-blue-700 font-bold rounded-lg shadow hover:bg-blue-50 transition transform hover:-translate-y-1 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 via-purple-200 to-transparent rounded-full blur-2xl opacity-70 z-0"></div>
            <Image
              src="https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png"
              alt="nurulazam dev"
              className="relative z-10 rounded-2xl shadow-2xl border-4 border-white"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
      </div>
      {/* Animations */}
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
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
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
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
