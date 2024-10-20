import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChooseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[url('/whybg.png')] bg-no-repeat object-cover bg-cover md:w-full h-[52rem] md:h-[48rem] lg:h-[45rem]">
      <div className="lg:px-16 lg:py-6 md:p-4 p-2">
        <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-16 py-4 lg:py-16 lg:mt-8">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex flex-col gap-3 text-center lg:text-start">
              <h1 className="lg:text-5xl md:text-3xl text-xl text-[#535558] font-bold">
                WHY CHOOSE US
              </h1>
              <p className="lg:text-3xl md:text-xl text-base font-semibold text-[#121212] lg:w-[20rem] ">
                YOUR PERSONALIZED MOVING SOLUTION
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center lg:items-start text-xs md:text-sm lg:text-base">
              <p className="text-center lg:text-start">
                Our mission is to provide stress-free, efficient, and courteous
                moving and cleaning services, ensuring seamless transitions for
                both residential and commercial clients. Explore our services
                and see how we can make your next move effortless.
              </p>
              <button className="py-1 md:py-1.5 lg:py-2 px-4 lg:px-8 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base text-white w-fit">
                Learn More
              </button>
            </div>
          </div>

          {/* 2 */}
          <div
            // data-aos="fade-left"
            // data-aos-easing="linear"
            // data-aos-duration="1000"
            style={{ boxShadow: "0px 0px 5px 1px #ccc" }}
            className="bg-white rounded-lg max-w-[650px] self-center"
          >
            <div className="p-2 flex flex-col md:flex-row">
              <div className="flex flex-col gap-6 md:p-6 md:mt-10">
                <div className="flex gap-2 items-start">
                  <img
                    src="/exceptional.svg"
                    alt="Exceptional Service"
                    width={50}
                    height={50}
                    className="mt-1"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="lg:text-lg font-semibold">
                      Exceptional <br /> Customer Service
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">
                      We prioritize customer satisfaction by offering friendly,
                      professional service. Our team is dedicated to making your
                      moving experience as stress-free as possible
                    </p>
                  </div>
                </div>
                <hr className="h-[1.5px] lg:h-[2px] w-full bg-black" />
                <div className="flex gap-2 items-start">
                  <img
                    src="/tracking.svg"
                    alt="Exceptional Service"
                    width={50}
                    height={50}
                    className="mt-1"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="lg:text-lg font-semibold">
                      GPS
                      <br /> Tracking
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">
                      We provide real-time tracking of your belongings, giving
                      you peace of mind during the moving process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-[2px] h-[25rem] lg:h-[32rem] bg-black" />
              <hr className="md:hidden h-[2.5px] w-full bg-black my-4" />
              <div className="flex flex-col gap-6 md:p-6 md:mb-10">
                <div className="flex gap-2 items-start">
                  <img
                    src="/pricing.svg"
                    alt="Exceptional Service"
                    width={50}
                    height={50}
                    className="mt-1"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="lg:text-lg font-semibold">
                      Competitive <br /> Pricing
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">
                      We prioritize customer satisfaction by offering friendly,
                      professional service. Our team is dedicated to making your
                      moving experience as stress-free as possible
                    </p>
                  </div>
                </div>
                <hr className="h-[1.5px] lg:h-[2px] w-full bg-black" />
                <div className="flex gap-2 items-start">
                  <img
                    src="/services.svg"
                    alt="Exceptional Service"
                    width={50}
                    height={50}
                    className="mt-1"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="lg:text-lg font-semibold">
                      Comprehensive
                      <br /> Services
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">
                      We provide real-time tracking of your belongings, giving
                      you peace of mind during the moving process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
