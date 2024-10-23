import React from "react";
import "./card.css";

const Card = ({ header, value, customClass }) => {
  return (
    <div
      className={`flex-grow basis-72 p-4 rounded-md text-[--whitesh] ${customClass}`}
    >
      <div className="p-4 text-xl">
        <h1 className="poppin-600">{header}</h1>
        <h5 className="poppin-800">{value}</h5>
      </div>
    </div>
  );
};

export default Card;
