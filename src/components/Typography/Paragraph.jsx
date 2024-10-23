import React from "react";

const Paragraph = ({ text, customClass }) => {
  return (
    <p className={`text-gray-700 text-base mt-1 ${customClass}`}>{text}</p>
  );
};

export default Paragraph;
