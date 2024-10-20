import React from "react";

const ButtonPrimary = ({ text, onclick, type = "submit" }) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className="px-16 text-white poppin-500 text-lg py-2 rounded-full bg-[--primary] border border-[--primary] hover:text-[--primary] hover:bg-white transition-all ease-out duration-500"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
