import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm rounded-2xl p-5">
      <figure className="me-10">
        <img className="w-48!" src={feature.cover} alt="features" />
      </figure>
      <div className="divider divider-secondary divider-horizontal"></div>
      <div className="card-body justify-center">
        <h2 className="card-title text-secondary font-bold">
          {feature.title}
        </h2>
        <p className="text-primary-content">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
