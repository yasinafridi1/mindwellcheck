import React from "react";

const ErrorText = ({ text }) => {
  return (
    <p className="text-red-500 text-[13px] poppin-500 ml-3 mt-1">{text}</p>
  );
};

export default ErrorText;
