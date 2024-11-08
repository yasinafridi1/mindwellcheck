import React from "react";
import Sidebar from "../components/Sidebar/sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/Headers/DashboardHeader";

const DashboardLayout = () => {
  return (
    <section className="min-w-[100vw] min-h-screen max-h-auto flex justify-between items-start gap-1 bg-[--whitesh]">
      <Sidebar />
      <div className="w-[92%] xl:w-[82%] min-h-screen transition-all duration-300 ease-in-out flex justify-start items-center flex-col">
        <DashboardHeader />
        <div style={{ width: "96%" }} className="mt-5 pb-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
