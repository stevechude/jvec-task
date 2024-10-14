import React from "react";
import Hero from "../components/home/Hero";
import ChooseUs from "../components/home/ChooseUs";
import Team from "../components/home/Team";
import Represent from "../components/home/Represent";
import Geographic from "../components/home/Geographic";
import ClientsWeServe from "../components/home/ClientsWeServe";

const Home = () => {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <Team />
      <Represent />
      <Geographic />
      <ClientsWeServe />
    </div>
  );
};

export default Home;
