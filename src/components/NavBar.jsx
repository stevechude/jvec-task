import React, { useState } from "react";
import Logo from "../assets/Logo";
import { FaPhoneAlt } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="font-bold bg-[#282B2E] text-[#9C9D9F] text-sm lg:text-base w-full relative">
      <div className="lg:px-16 lg:py-6 md:p-4 p-2 flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-10">
          <Logo />
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <p className="hover:text-white">Home</p>
            <p className="hover:text-white">About</p>
            <p className="hover:text-white">Services</p>
            <p className="hover:text-white">More</p>
            <p className="hover:text-white">Contact</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden md:flex items-center gap-3 text-white">
            <FaPhoneAlt />
            <p className="underline font-extralight hover:font-medium">
              0814-097-9054
            </p>
          </button>
          <button className="py-1 md:py-1.5 lg:py-2 px-4 lg:px-8 bg-[#FF0000] text-white outline-none font-extralight hover:font-medium text-xs md:text-sm lg:text-base">
            Free Quote
          </button>
          <div className="block md:hidden">
            <TiThMenu onClick={toggleMenu} size={20} color="white" />
            {menu && (
              <div className="bg-[#282B2E] border border-white/90 rounded-lg text-white flex flex-col gap-2 w-[50%] absolute top-2 -right-1">
                <MdOutlineRestaurantMenu
                  onClick={toggleMenu}
                  size={20}
                  color="#FF0000"
                  className="self-end m-1"
                />
                <div className="p-4 flex flex-col gap-2">
                  <p className="hover:text-white border-[#FF0000] border-b">
                    Home
                  </p>
                  <p className="hover:text-white border-[#FF0000] border-b">
                    About
                  </p>
                  <p className="hover:text-white border-[#FF0000] border-b">
                    Services
                  </p>
                  <p className="hover:text-white border-[#FF0000] border-b">
                    More
                  </p>
                  <p className="hover:text-white border-[#FF0000] border-b">
                    Contact
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
