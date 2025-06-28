import React from "react";
import Container from "./../../../../layouts/Container";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSlide from "../BannerSlide/BannerSlide";
import SlideOne from "../../../../assets/bannerSlideOne.png";
import SlideTwo from "../../../../assets/bannerSlideTwo.png";
import SlideThree from "../../../../assets/bannerSlideThree.png";

const Banner = () => {
  return (
    <section className="py-[30px]">
      <Container>
        <Carousel
          showThumbs={false}
          showArrows
          autoPlay
          swipeable
          infiniteLoop
        >
          <BannerSlide img={SlideOne} />
          <BannerSlide img={SlideTwo} />
          <BannerSlide img={SlideThree} />
        </Carousel>
      </Container>
    </section>
  );
};

export default Banner;
