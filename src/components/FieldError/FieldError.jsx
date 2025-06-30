import React from "react";

const FieldError = ({ name, type, errors }) => {
  return (
    errors[name]?.type === type && (
      <span className="text-red-500 font-bold inline-block">
        {errors[name]?.message}
      </span>
    )
  );
};

export default FieldError;
