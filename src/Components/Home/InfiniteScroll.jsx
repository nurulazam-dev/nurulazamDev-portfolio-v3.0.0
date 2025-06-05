"use client";
import { scrollData } from "@/assets/data/dataBank";
import Image from "next/image";

const InfiniteScroll = () => {
  const firstLineData = [...scrollData, ...scrollData];
  const secondLineData = [...scrollData, ...scrollData];

  return (
    <section className="container mx-auto py-10 lg:mb-12 mb-8 relative">
      {/* Decorative blurred blobs */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-2xl -z-10" />

      <div className="text-center mb-12">
        <h4 className="uppercase text-blue-600 font-bold tracking-widest mb-2 animate-fade-in-down">
          My Best Skills
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 animate-fade-in-down">
          Technology & Tools
        </h1>
      </div>

      {/* --- ADVANCED INFINITE MARQUEE STYLE --- */}
      <div className="space-y-8">
        {/* 1st line */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-2 animate-marquee">
            {firstLineData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-2 group"
              >
                <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-xl p-2 flex flex-col items-center group-hover:scale-105 transition-transform duration-300 border border-blue-100 dark:border-blue-900">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={40}
                    width={40}
                    className="w-10 mb-2 drop-shadow"
                    draggable={false}
                  />
                  <div className="flex items-center py-1">
                    <progress
                      className="progress border border-blue-200 dark:border-blue-900 bg-white dark:bg-[#232336] h-[8px] w-[80px] rounded-full"
                      value={data?.progressValue}
                      max="100"
                    ></progress>
                    <span className="text-xs font-bold ml-2 text-blue-700 dark:text-blue-300">
                      {data?.progressValue}%
                    </span>
                  </div>
                  <h3 className="font-bold mt-1 text-blue-700 dark:text-blue-200 text-sm text-center">
                    {data.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 2nd line (reverse direction) */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee-reverse">
            {secondLineData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[160px] mx-2 group"
              >
                <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-[#18181b] dark:via-[#232336] dark:to-[#18181b] rounded-2xl shadow-xl p-4 flex flex-col items-center group-hover:scale-105 transition-transform duration-300 border border-purple-100 dark:border-purple-900">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={40}
                    width={40}
                    className="w-10 mb-2 drop-shadow"
                    draggable={false}
                  />
                  <div className="flex items-center py-1">
                    <progress
                      className="progress border border-purple-200 dark:border-purple-900 bg-white dark:bg-[#232336] h-[8px] w-[80px] rounded-full"
                      value={data?.progressValue}
                      max="100"
                    ></progress>
                    <span className="text-xs font-bold ml-2 text-purple-700 dark:text-purple-300">
                      {data?.progressValue}%
                    </span>
                  </div>
                  <h3 className="font-bold mt-1 text-purple-700 dark:text-purple-200 text-sm text-center">
                    {data.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 22s linear infinite;
        }
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
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
      `}</style>
    </section>
  );
};

export default InfiniteScroll;
