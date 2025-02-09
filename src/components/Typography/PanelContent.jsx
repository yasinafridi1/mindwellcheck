import React from "react";

const PanelContent = ({ header, description, btnText, onclick, disabled }) => {
  return (
    <div className="content text-left">
      <h3>{header}</h3>
      <p>{description}</p>
      <button
        onClick={onclick}
        disabled={disabled}
        className={`text-xs sm:text-sm md:text-base px-16 text-white py-2 rounded-full bg-[--primary-dark] border border-[--primary-dark] ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default PanelContent;
