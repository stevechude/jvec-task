import React, { useEffect } from "react";
import { smoothSection } from "../../lib/mock-data";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Smooth = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
          {/* carousel */}
          {/* <div className="flex gap-3 pt-2 items-center lg:justify-center w-full"> */}
          <div className="w-full mx-auto">
            <Slider {...settings}>
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
                    className=" w-80 h-40 md:w-[40rem]"
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
            </Slider>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Smooth;
