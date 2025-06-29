import React from "react";

const WorkCard = ({ work }) => {
  const { title, description, Icon } = work;
  return (
    <div className="bg-base-100 p-5 rounded-xl">
      <div>
        <Icon strokeWidth={1.5} size={40} className="text-secondary" />
      </div>
      <div className="mt-5">
        <h4 className="text-lg font-bold text-secondary">{title}</h4>
      </div>
      <div className="mt-5">
        <p className="text-primary-content">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
