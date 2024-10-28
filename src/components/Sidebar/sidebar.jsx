import React, { useState } from "react";
import { dashboardNavItems } from "../../data/sidebardata";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [active, setActive] = useState(0);
  function handleLogout() {
    dispatch(logout()).then(() => {
      console.log("User logged out");
    });
  }
  return (
    <>
      <div className="w-[70px] h-screen bg-[--primary] transition-all ease-in-out duration-300 fixed top-0 left-0 overflow-y-auto  sm:w-[80px] md:border-none md:w-[95px] xl:w-[18%] text-[--whitesh]">
        <Link
          to={"/"}
          className="w-full p-1 h-[70px]  flex justify-center items-center border-b border-gray-300 poppin-600"
        >
          Mindwell Check
        </Link>
        <ul className="mt-2 w-full px-1 xl:px-0 text-center text-[--gray] pb-0">
          {dashboardNavItems.map((navitem, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                }}
                className="mx-auto my-3 w-full xl:w-[80%] flex justify-center items-center "
              >
                <NavLink
                  to={navitem.url}
                  className={`${
                    location.pathname === navitem.url
                      ? "bg-[--primary-light] text-[--whitesh]"
                      : "text-[--whitesh] hover:bg-[--whitesh] hover:text-black transition-all ease-in-out duration-300 "
                  }
                  capitalize relative rounded-md w-full py-2 text-base sm:text-lg md:text-xl font-medium flex justify-start flex-col xl:flex-row items-center pl-0 xl:pl-3
                  `}
                >
                  {navitem.icon}
                  <span className="pl-0 xl:pl-2 text-[9px] md:text-[13px] lg:text-base poppin-500 relative">
                    {navitem.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div>
          <li
            onClick={handleLogout}
            className="mx-auto my-1 w-full xl:w-[80%] cursor-pointer flex justify-center items-center "
          >
            <span
              className={
                "text-orange-900 capitalize relative rounded-md w-full py-2 text-base sm:text-lg md:text-xl font-bold flex justify-start flex-col xl:flex-row items-center pl-0 xl:pl-3"
              }
            >
              <TbLogout2 />

              <span className="pl-0 xl:pl-2 text-[9px] md:text-[13px] lg:text-base poppin-700">
                Logout
              </span>
            </span>
          </li>
        </div>
      </div>
      <div className="w-[80px] sm:w-[80px] md:w-[90px] transition-all ease-in-out duration-300 min-h-sreen xl:w-[18%]"></div>
    </>
  );
};

export default Sidebar;
