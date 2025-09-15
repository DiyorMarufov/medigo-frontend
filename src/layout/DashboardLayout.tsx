import { memo } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="flex bg-[#FCFCFD]">
        <div className="px-6 pt-[38px] pb-[24px]">
          <Sidebar />
        </div>
        <main className="flex-1 pl-3 pr-9 py-[38px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default memo(DashboardLayout);
