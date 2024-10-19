import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen  flex  justify-center items-center">
      <div className=" px-2 flex flex-col justify-center items-start sm:w-[80vw] md:w-[50vw]">
        <h1 className="text-[70px] sm:text-[100px]  satoshi-900">404</h1>
        <h1 className="satoshi-700 text-[18px] mb-3 sm:text-[26px]">
          Oops! This Page Could Not Be Found
        </h1>
        <p className="satoshi-500 text-[14px] mb-3 sm:text-[18px] sm:text-left">
          SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST,HAVE BEEN
          REMOVED, NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="px-6 py-2 bg-[--primary]  rounded-md mt-2 satoshi-500 text-white sm:px-10 sm:py-2 sm:text-[18px]"
        >
          GO TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
