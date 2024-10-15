import React, { useEffect } from "react";
import { teamSection } from "../../lib/mock-data";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-black mt-6 md:mt-4">
      <div className="lg:px-16 lg:py-6 md:p-4 p-2 flex flex-col gap-5">
        <div className="flex flex-col items-center md:gap-1">
          <h3 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#FF0000]">
            Our Team
          </h3>
          <p className="text-white font-semibold tracking-wide text-base md:text-lg lg:text-2xl">
            Highly trained professionals in
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-3">
          {teamSection?.map((data) => (
            <div key={data?.sn}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="flex flex-col gap-2">
              <img
                src={data?.image}
                alt={data?.desc}
                width={200}
                height={200}
                className="md:w-[20rem] lg:w-[25rem] transition-transform duration-300 transform hover:-translate-y-1"
              />
              <p className="text-white text-sm lg:text-base text-center">
                {data?.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 text-white">
          <p className="text-center text-xs md:text-sm lg:text-base lg:w-[65rem]">
            Our team comprises highly trained professionals who can handle moves
            of all sizes, from small apartments to large commercial relocations.
            Led by our founder and CEO,{" "}
            <span className="text-[#FF0000] font-semibold">Joshua</span>, we are
            committed to excellence in every move. Our staff undergoes rigorous
            training in moving techniques, safety protocols, and customer
            service standards to ensure your belongings are handled with the
            utmost care and professionalism.
          </p>
          <button className="py-1 md:py-1.5 lg:py-2 px-4 lg:px-8 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base text-white w-fit">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
