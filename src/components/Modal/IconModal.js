import React from "react";

const IconModal = ({ open, icon, children }) => {
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
          <div className="w-full flex justify-center items-center">
            <h5 className="poppin-800 text-[70px] capitalize text-[--primary] icon">
              {icon}
            </h5>
          </div>
        </div>
        <div className="w-full pb-5 ">{children}</div>
      </div>
    </div>
  );
};

export default IconModal;
