import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import WorkingFlow from "./HomeComponents/WorkingFlow/WorkingFlow";
import OurServices from "./HomeComponents/OurServices/OurServices";
import ClientLogoMarquee from "./HomeComponents/ClientLogoMarquee/ClientLogoMarquee";
import OurFeatures from "./HomeComponents/OurFeatures/OurFeatures";

const Home = () => {
  return (
    <>
      <Banner />
      <WorkingFlow />
      <OurServices />
      <ClientLogoMarquee />
      <OurFeatures />
    </>
  );
};

export default Home;
