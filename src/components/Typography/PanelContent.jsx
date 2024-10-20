import React from "react";

const PanelContent = ({ header, description, btnText, onclick }) => {
  return (
    <div className="content text-left">
      <h3>{header}</h3>
      <p>{description}</p>
      <button
        onClick={onclick}
        className="px-16 text-white py-2 rounded-full bg-[--primary-dark] border border-[--primary-dark] "
      >
        {btnText}
      </button>
    </div>
  );
};

export default PanelContent;
