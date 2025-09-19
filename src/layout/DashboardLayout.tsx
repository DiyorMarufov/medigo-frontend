import { memo } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full">
        <Header />
      </header>

      <div className="flex flex-1 bg-[#FCFCFD] overflow-hidden">
        <aside className="px-6 pt-[38px] pb-[24px] bg-white">
          <Sidebar />
        </aside>

        <main className="flex-1 pl-3 pr-9 py-[38px] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default memo(DashboardLayout);
