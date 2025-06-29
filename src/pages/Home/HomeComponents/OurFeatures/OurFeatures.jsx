import React from "react";
import { useState } from "react";
import Container from "@/layouts/Container";
import FeatureImgOne from "@/assets/feature_one.png";
import FeatureImgTwo from "@/assets/feature_two.png";
import FeatureCard from "../FeatureCard/FeatureCard";

const OurFeatures = () => {
  const [features] = useState([
    {
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      cover: FeatureImgOne,
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      cover: FeatureImgTwo,
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      cover: FeatureImgTwo,
    },
  ]);

  return (
    <section className="py-[80px]">
      <Container>
        <div>
          <div className="border border-secondary border-dashed"></div>
          <div className="py-10 flex flex-col gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          <div className="border border-secondary border-dashed"></div>
        </div>
      </Container>
    </section>
  );
};

export default OurFeatures;
