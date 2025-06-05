"use client";
import { scrollData } from "@/assets/data/dataBank";
import Image from "next/image";

const InfiniteScroll = () => {
  const firstLineData = [...scrollData, ...scrollData];
  const secondLineData = [...scrollData, ...scrollData];

  return (
    <section className="container mx-auto py-12 relative">
      <div className="text-center mb-5">
        <h4 className="uppercase text-blue-600 font-bold tracking-widest mb-2 animate-fade-in-down">
          My Best Skills
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 animate-fade-in-down">
          Technology & Tools
        </h1>
      </div>

      <div className="space-y-5 animate-fade-in-down">
        {/* 1st line */}
        <div className="overflow-hidden animate-fade-in-down">
          <div className="flex items-center gap-2 animate-marquee">
            {firstLineData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-2 group"
              >
                <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl p-2 flex flex-col items-center border border-blue-900">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={40}
                    width={40}
                    className="w-10 drop-shadow"
                    draggable={false}
                  />
                  <div className="flex items-center py-1">
                    <progress
                      className="progress border border-blue-900 bg-white h-[8px] w-[95px] rounded-full"
                      value={data?.progressValue}
                      max="100"
                    ></progress>
                    <span className="text-xs font-bold ml-2 text-blue-700">
                      {data?.progressValue}%
                    </span>
                  </div>
                  <h3 className="font-bold mt-1 text-blue-700 text-sm text-center">
                    {data.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 2nd line (reverse direction) */}
        <div className="overflow-hidden animate-fade-in-down">
          <div className="flex items-center gap-2 animate-marquee-reverse">
            {secondLineData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-2 group"
              >
                <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl p-2 flex flex-col items-center border border-purple-800">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={40}
                    width={40}
                    className="w-10 drop-shadow"
                    draggable={false}
                  />
                  <div className="flex items-center py-1">
                    <progress
                      className="progress border border-purple-900 bg-white h-[8px] w-[95px] rounded-full"
                      value={data?.progressValue}
                      max="100"
                    ></progress>
                    <span className="text-xs font-bold ml-2 text-purple-700">
                      {data?.progressValue}%
                    </span>
                  </div>
                  <h3 className="font-bold mt-1 text-purple-700 text-sm text-center">
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
