import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./modal.css";
import ModalFooter from "./ModalFooter";

const Modal = ({ headerText, open, onclick, children }) => {
  return (
    <div
      className={`${
        open
          ? "w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center modalBackground  "
          : "hidden"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="w-[98%] sm:w-[90%] md:w-[70%] max-h-[95%] lg:w-[60%] px-6 py-3 bg-white rounded-md">
        <div className="w-full mx-auto py-3 flex justify-end items-center ">
          <div className="w-[60%] flex justify-between items-center">
            <h5 className="satoshi-900 text-xl capitalize">{headerText}</h5>
            <button onClick={onclick} className="p-4  text-2xl">
              <MdOutlineCancel />
            </button>
          </div>
        </div>
        <div className="w-full py-5">
          {children}

          <ModalFooter onClose={onclick} loading={false} onSubmit={onclick} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
