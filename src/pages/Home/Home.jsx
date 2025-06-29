import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import OurServices from "./HomeComponents/OurServices/OurServices";
import WorkingFlow from "./HomeComponents/WorkingFlow/WorkingFlow";

const Home = () => {
  return (
    <>
      <Banner />
      <WorkingFlow />
      <OurServices />
    </>
  );
};

export default Home;
