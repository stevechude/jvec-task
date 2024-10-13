import React from "react";

const Represent = () => {
  return (
    <section className="bg-[#EAEAEA] text-white">
      <div className="lg:px-24 lg:py-16 md:p-8 p-2 py-16 pb-64 max-w-[100vw]">
        <div className="relative">
          <img
            src="/represent/represent.jpg"
            alt="What we rep"
            width={400}
            height={400}
            className="w-[20rem] md:w-[30rem] lg:w-[35rem]"
          />
          <div className="bg-[#3B3B3B] max-w-[40rem] w-full md:w-[25rem] lg:w-full absolute top-40 md:top-8 md:right-0 md:bottom-0 lg:right-20 md:my-4">
            <div className="p-2 md:p-4 lg:p-8 py-6 flex flex-col items-center gap-2 lg:gap-4">
              <div className="flex flex-col items-center gap-1">
                <p className="text-lg md:text-2xl lg:text-4xl font-semibold">
                  What We Represent
                </p>
                <p className="text-base md:text-lg lg:text-xl font-semibold">
                  Stress-Free Moves, Perfect Clean
                </p>
              </div>
              <p className="text-center font-light text-xs md:text-sm lg:text-base">
                JVEC MOVERS is dedicated to providing top-notch moving and
                cleaning services. Based in Johnson City, Tennessee, we cater to
                both local and long-distance relocations, including moves to
                Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and
                Washington DC. We specialize in making your moving experience as
                smooth and stress-free as possible, from packing and
                transportation to cleaning your new home or office.
              </p>
              <button className="py-1 md:py-1.5 lg:py-2 px-4 lg:px-8 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base text-white w-fit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Represent;
