import React from "react";
import FootIcon from "../assets/FootIcon";
import Logo from "../assets/Logo";
import { PiCopyright } from "react-icons/pi";
import { footerData } from "../lib/mock-data";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-xs md:text-sm font-bold w-full bg-[#292D32] flex flex-col">
      <div className="lg:px-16 lg:py-6 md:p-4 p-2 overflow-y-auto">
        <div className="flex flex-wrap flex-col md:flex-row justify-center md:justify-between gap-8 font-light">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1 items-center md:items-start justify-center md:justify-start text-[#FFFDFD]">
              <Logo />
              <p className="flex items-center text-center gap-1">
                <span>Copyright</span>
                <span>
                  <PiCopyright />
                </span>
                <span>2024</span>
              </p>
              <p className="w-full text-center md:text-start md:w-[198px]">
                JVEC Movers. All Rights Reserved.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#6F7173] w-[140px] self-center md:self-start md:w-[172px] text-center md:text-start">
                Book Now - Schedule Your Move
              </p>
              <button className="w-fit self-center md:self-start py-1.5 md:py-2 lg:py-2 px-8 lg:px-8 bg-[#FF0000] text-white outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base">
                Free Quote
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-1">
            <p className="text-[#FF3333] font-semibold text-center md:text-start">
              SERVICES
            </p>
            <p className="text-[#6F7173] text-center md:text-start">
              Residential Moving
            </p>
            <div className="flex flex-col items-center md:items-start gap-1">
              {footerData?.services?.moving?.map((dt, i) => (
                <p key={i} className="text-[#FFFDFD]">{dt}</p>
              ))}
            </div>
            <p className="text-[#6F7173] text-center md:text-start">
              Specialty Moves
            </p>
            <div className="flex flex-col items-center md:items-start gap-1">
              {footerData?.services?.specialty?.map((dt, i) => (
                <p key={i} className="text-[#FFFDFD]">{dt}</p>
              ))}
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-2">
            <p className="text-[#FF3333] text-center md:text-start font-semibold">QUICK LINKS</p>
            <div className="flex flex-col items-center md:items-start gap-1">
              {footerData?.quickLinks?.map((dt, i) => (
                <p key={i} className="text-[#FFFDFD]">{dt}</p>
              ))}
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-[#FF3333] font-semibold text-center md:text-start">
                CONTACT US
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[#FFFDFD] text-center md:text-start">
                  12 Rev. Oguniyi Street, off Oba <br /> Akinjobi, ikeja GRA,
                  Lagos,
                  <br />
                  Nigeria.
                </p>
                <p className="flex items-center justify-center md:justify-start gap-1">
                  <span className="text-[#FFFDFD]">Phone:</span>
                  <span className="text-[#FF3333]">+234-0814-097-9054</span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-1">
                  <span className="text-[#FFFDFD]">Email:</span>
                  <span className="text-[#FF3333]">hello@jvecmovers.com</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#FF3333] font-semibold text-center md:text-start">
                Follow Us
              </p>
              <div className="flex flex-col gap-2 text-[#FFFDFD]">
                <p className="text-center md:text-start">
                  Stay connected with us on social <br /> media for updates and
                  promotions.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <button className="flex items-center gap-2">
                    <IoLogoWhatsapp />
                    <p>WhatsApp</p>
                  </button>
                  <button className="flex items-center gap-2">
                    <FaFacebookSquare />
                    <p>Facebook</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-4 lg:py-3 relative">
        <FootIcon className="lg:h-[45rem] absolute bottom-0" />
      </div> */}
    </footer>
  );
};

export default Footer;
