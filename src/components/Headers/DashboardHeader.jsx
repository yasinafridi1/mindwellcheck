import React from "react";
import defaultProfile from "../../images/default-profile.png";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <header className="text-[--whitesh] w-full h-[70px] bg-[--primary] p-1 border-b border-gray-300 flex justify-between items-center pr-2 md:pr-4 lg:pr-6">
      <div className="px-1 md:px-3 flex justify-start items-center ">
        <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full">
          <img
            src={
              userData?.photo
                ? process.env.REACT_APP_IMAGE_URL + userData.photo
                : defaultProfile
            }
            className="w-full h-full rounded-full"
            alt="User Avatar"
          />
        </div>
        <div className="flex justify-center items-start flex-col ml-3">
          <h4 className="poppin-700 text-[14px]  md:text-[16px]">
            {userData?.fullName}
          </h4>
          <p className="text-[10px] md:text-[13px] lg:text-[15px]">
            {userData?.email}
          </p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
