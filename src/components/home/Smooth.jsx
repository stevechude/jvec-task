import React, { useEffect } from "react";
import { smoothSection } from "../../lib/mock-data";
import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Smooth = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <section className="bg-[#282B2E]">
      <div className="lg:px-16 lg:py-6 md:p-4 md:py-8 p-2 py-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center gap-3 text-white">
            <h1 className="font-semibold text-lg md:text-2xl lg:text-4xl uppercase">
              The Smooth Move Blog
            </h1>
            <h4 className="uppercase font-medium text-sm md:text-base lg:text-xl md:w-96 text-center">
              Moving and relocation tips and everything in between
            </h4>
            <p className="text-xs md:text-sm lg:text-base text-center md:w-[32rem] lg:w-[40rem]">
              Check out our blog for helpful tips and guides on making your move
              as smooth as possible/. Topics include packing tips, moving
              checklists, and more.
            </p>
          </div>

          <div>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              keyBoardControl={true}
              containerClass="carousel-container-smooth"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding"
            >
              {smoothSection?.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  key={data.sn}
                  className="flex flex-col items-center gap-1 border border-[#535558] rounded-sm"
                >
                  <img
                    src={data.img}
                    alt="Packing Photo"
                    width={200}
                    height={50}
                    className="w-80 h-40 md:w-[40rem]"
                  />
                  <div className="p-2 flex flex-col gap-2">
                    <p className="font-light text-[#DEDEDE] text-sm lg:text-base">
                      {data?.date}
                    </p>
                    <p className="font-light text-[#fff] text-xs lg:text-sm">
                      {data?.desc}
                    </p>
                    <button className="py-1 md:py-1.5 lg:py-2 px-4 lg:px-8 bg-[#FF0000] outline-none font-extralight hover:font-medium text-xs lg:text-sm text-white w-fit">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smooth;
