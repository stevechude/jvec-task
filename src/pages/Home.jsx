import React from "react";
import Hero from "../components/home/Hero";
import ChooseUs from "../components/home/ChooseUs";
import Team from "../components/home/Team";
import Represent from "../components/home/Represent";
import Geographic from "../components/home/Geographic";
import ClientsWeServe from "../components/home/ClientsWeServe";
import Smooth from "../components/home/Smooth";
import FreeQuote from "../components/home/FreeQuote";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ChooseUs />
      <Team />
      <Represent />
      <Geographic />
      <ClientsWeServe />
      <Smooth />
      <FreeQuote />
    </div>
  );
};

export default Home;
