import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FreeQuote = () => {
  return (
    <section className="bg-[#101010]">
      <div className="lg:px-16 lg:py-6 md:p-4 md:py-8 p-2 py-8">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center px-2 py-10 w-full">
          <div className="flex flex-col gap-3">
            <p className="text-lg md:text-xl lg:text-5xl text-white font-semibold md:w-[15rem] lg:w-[30rem]">
              Ready for a Stressless
              <br /> Move? Get your Free Quote.
            </p>
            <p className="text-xs md:text-sm lg:text-base text-white/80 md:w-[20rem] lg:w-[30rem]">
              Fill out our online booking form to schedule your move with JVEC
              MOVERS. Provide details about your move, and we’ll get back to you
              with a customized plan and quote,
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-5 lg:gap-20 text-[#FF3333] w-full">
            <p className="flex items-center justify-between md:justify-normal md:gap-36 lg:gap-52 font-bold">
              <span className="text-lg md:text-2xl lg:text-5xl">
                Free Quote{" "}
              </span>
              <BsArrowRight size={25} />
            </p>
            <div className="h-[1px] w-full md:w-72 lg:w-[30rem] bg-[#FF3333]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
