import React from "react";

const FormHeader = ({ header, description }) => {
  return (
    <div className="w-full mb-6  text-[--primary] pl-2">
      <h1 className="poppin-800 text-2xl">{header}</h1>
      <p>{description}</p>
    </div>
  );
};

export default FormHeader;
