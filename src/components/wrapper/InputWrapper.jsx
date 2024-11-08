import React from "react";

const InputWrapper = ({ children }) => {
  return (
    <div className="w-full flex justify-start items-start flex-col mb-2">
      {children}
    </div>
  );
};

export default InputWrapper;
