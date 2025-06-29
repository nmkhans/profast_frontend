import React from "react";
import ServiceImage from "@/assets/service.png";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-base-100 p-2 lg:p-10 rounded-xl">
      <div className="text-center">
        <img
          className="w-12 mx-auto"
          src={ServiceImage}
          alt="Service icon"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-secondary text-lg font-bold text-center mb-3">
          {service.title}
        </h3>
        <p className="text-primary-content text-center">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
