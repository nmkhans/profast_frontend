import Container from "@/layouts/Container";
import React from "react";
import Marquee from "react-fast-marquee";

import CasioLogo from "@/assets/brands/casio.png";
import AmazonLogo from "@/assets/brands/amazon.png";
import MoonstarLogo from "@/assets/brands/moonstar.png";
import StartPeopleLogo from "@/assets/brands/start-people.png";
import RedStandLogo from "@/assets/brands/randstad.png";
import StartLogo from "@/assets/brands/start.png";
import { useState } from "react";

const ClientLogoMarquee = () => {
  const [logos] = useState([
    CasioLogo,
    AmazonLogo,
    MoonstarLogo,
    StartPeopleLogo,
    RedStandLogo,
    StartLogo,
  ]);

  return (
    <section className="py-[80px]">
      <Container>
        <div>
          <h3 className="text-secondary text-xl font-bold text-center">
            We've helped thousands of sales teams
          </h3>
        </div>
        <div className="mt-10">
          <Marquee>
            <div className="flex items-center gap-20">
              {logos.map((logo, i) => (
                <div key={i}>
                  <img src={logo} alt="marquee image" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default ClientLogoMarquee;
