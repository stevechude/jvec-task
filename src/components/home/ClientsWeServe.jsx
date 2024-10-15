import React, { useEffect } from "react";
import { clientSection } from "../../lib/mock-data";
import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientsWeServe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="bg-white">
      <div className="lg:px-16 lg:py-6 md:p-4 md:py-8 p-2 py-8">
        <div className="flex flex-col gap-4 items-center justify-center overflow-x-auto">
          <h1 className="text-[#535558] text-xl md:text-2xl lg:text-4xl font-bold">
            Clients we Serve
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-[#121212] font-semibold">
            Our services cater to
          </h2>

          <div className="flex overflow-x-auto no-scrollbar gap-3 items-center lg:justify-center pt-6">
            {/* <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container-clients"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding"
          > */}
            {clientSection?.map((data) => (
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                key={data?.sn}
                className="bg-[#F4F4F4] rounded-sm md:h-[16rem] lg:h-[15rem] max-w-[18rem] lg:w-[18rem] w-60"
              >
                <div className="p-2 md:p-4 flex flex-col gap-3 items-start w-full">
                  <p className="text-[#121212] font-semibold text-lg">
                    {data?.title}
                  </p>
                  <div className="bg-[#EAEAEA] hover:bg-white cursor-pointer rounded-full p-2">
                    <img
                      src={data?.image}
                      alt={data?.title}
                      width={50}
                      height={50}
                      className="p-2 lg:w-[4rem] md:w-[3rem] hover:animate-spin transition duration-1000 ease-in-out"
                    />
                  </div>
                  <p className="pt-4 text-xs max-w-[15rem]">{data?.desc}</p>
                </div>
              </div>
            ))}
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsWeServe;
