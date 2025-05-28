import { scrollData } from "@/assets/data/dataBank";
import Image from "next/image";

const InfiniteScroll = () => {
  // Duplicate data for seamless infinite scroll effect
  const firstLineData = [...scrollData, ...scrollData];
  const secondLineData = [...scrollData, ...scrollData];

  return (
    <section className="container mx-auto py-6 lg:mb-8 mb-4 ">
      <div className="text-center mb-8">
        <h4 className="uppercase text-blue-600 font-semibold tracking-widest mb-2 animate-fade-in-down">
          My Best Skills
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in-down">
          Technology & Tools
        </h1>
      </div>

      {/* 1st line */}
      <div className="overflow-hidden px-5 mb-6">
        <div className="logos-slide firstLine-logos-slide">
          {firstLineData.map((data, index) => (
            <div key={index} className="my-2 me-2">
              <div className="bg-white rounded-xl flex flex-col items-center h-[100px] w-[140px] py-3 me-3 shadow-lg hover:scale-105 transition-transform duration-300 animate-card-fade-in">
                <Image
                  src={data.image}
                  alt={data.title}
                  height={35}
                  width={35}
                  className="w-[35px] mb-1 drop-shadow"
                  draggable={false}
                />
                <div className="flex items-center py-[3px]">
                  <progress
                    className="progress border-2 border-[#ff7c3a] bg-white h-[8px] w-[70px] rounded-full"
                    value={data?.progressValue}
                    max="100"
                  ></progress>
                  <span className="text-[10px] font-bold ps-[4px] text-orange-500">
                    {data?.progressValue}%
                  </span>
                </div>
                <h3 className="font-bold mt-[2px] text-[#272b9d] text-[15px] text-center">
                  {data.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd line */}
      <div className="overflow-hidden px-5">
        <div className="logos-slide secondLine-logos-slide">
          {secondLineData.map((data, index) => (
            <div key={index} className="my-2 me-2">
              <div className="bg-white rounded-xl flex flex-col items-center h-[100px] w-[140px] py-3 me-3 shadow-lg hover:scale-105 transition-transform duration-300 animate-card-fade-in">
                <Image
                  src={data.image}
                  alt={data.title}
                  height={35}
                  width={35}
                  className="w-[35px] mb-1 drop-shadow"
                  draggable={false}
                />
                <div className="flex items-center py-[3px]">
                  <progress
                    className="progress border-2 border-purple-400 bg-white h-[8px] w-[70px] rounded-full"
                    value={data?.progressValue}
                    max="100"
                  ></progress>
                  <span className="text-[10px] font-bold ps-[4px] text-purple-600">
                    {data?.progressValue}%
                  </span>
                </div>
                <h3 className="font-bold mt-[2px] text-purple-700 text-[15px] text-center">
                  {data.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes firstLineInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes secondLineInfinite {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .logos-slide {
          display: flex;
          white-space: nowrap;
        }
        .firstLine-logos-slide {
          animation: firstLineInfinite 18s linear infinite;
        }
        .secondLine-logos-slide {
          animation: secondLineInfinite 18s linear infinite;
        }
        @keyframes card-fade-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-card-fade-in {
          animation: card-fade-in 0.8s both;
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
