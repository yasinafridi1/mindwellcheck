import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./modal.css";
import ButtonPrimary from "../Button/ButtonPrimary";

const TextModal = ({ open, onClose }) => {
  return (
    <div
      className={`${
        open
          ? "w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center modalBackground  "
          : "hidden"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="w-[98%] sm:w-[90%] md:w-[70%] max-h-[90%] lg:w-[60%] px-6 py-3 bg-white rounded-md overflow-y-auto">
        <div className="w-full mx-auto py-3 flex justify-end items-center ">
          <div className="w-[60%] flex justify-between items-center">
            <h5 className="poppin-800 text-xl capitalize">OOPS!</h5>
            <button onClick={onClose} className="p-4  text-2xl">
              <MdOutlineCancel />
            </button>
          </div>
        </div>
        <div className="w-full pb-5 text-red-600">
          Thank you for your recent participation in our survey! To ensure fair
          and accurate data collection, we limit survey submissions to once
          every 7 days. It appears you've already submitted a survey within this
          period. Please try again after 7 days from your last submission. We
          appreciate your understanding and look forward to your input in the
          future!
        </div>
        <div className="w-full flex justify-center items-center">
          <ButtonPrimary text="Close" onclick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default TextModal;
