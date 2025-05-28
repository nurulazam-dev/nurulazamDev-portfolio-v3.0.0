"use client";
import { serviceData } from "@/assets/data/dataBank";

const Services = () => {
  return (
    <section className="container mx-auto py-12 lg:mb-12 mb-8">
      <div className="text-center mb-10">
        <h4 className="uppercase text-blue-600 font-semibold tracking-widest mb-2 animate-fade-in-down">
          My Services
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in-down">
          What I Provide
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto animate-fade-in-up">
          I offer a range of services to help you build, launch, and grow your
          web presence with modern technologies and best practices.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1 justify-items-center px-5">
        {serviceData?.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl shadow-xl p-8 w-full max-w-xs flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-tr from-blue-100 via-purple-100 to-white rounded-full blur-xl opacity-70 z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={service?.image}
                alt={service?.title}
                className="h-20 w-20 object-contain mb-4 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
              <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">
                {service?.title} Development
              </h2>
              <p className="text-gray-600 text-center text-sm mb-4">
                {service?.desc}
              </p>
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

export default Services;
