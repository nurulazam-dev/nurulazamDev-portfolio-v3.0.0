"use client";
import { serviceData } from "@/assets/data/dataBank";

const Services = () => {
  return (
    <section className="container lg:mb-12 mb-8">
      <div className="text-center  lg:mb-6 mb-4">
        <h4 className="section-subTitle">My Service</h4>
        <h1 className="section-title">What services I provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1 justify-items-center px-5">
        {serviceData?.map((service, index) => {
          return (
            <div
              key={index}
              className="card w-[99%] lg:w-[360px] h-[250px] bg-base-100 mb-5 lg:mb-0 shadow-xl rounded-md btn_animation hover:bg-[#ffae00] hover:text-white"
            >
              <figure className="px-10 pt-5">
                <img
                  src={service?.image}
                  alt={service?.title}
                  className="h-[160px]"
                />
              </figure>
              <div className="card-body p-0 gap-0 items-center text-center">
                <h2 className="card-title">
                  <strong className="font-bold">{service?.title}</strong>{" "}
                  Development
                </h2>
                <p className="text-[#6a6767] text-[14px]">({service?.desc})</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
