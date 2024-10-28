import React from "react";

const FlexBox = ({ children, customClassses }) => {
  return (
    <div
      className={`w-full flex justify-center items-center flex-col ${customClassses}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
