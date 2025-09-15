import { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/sidebar/Logo.svg";
import dashboardLogo from "../../shared/assets/sidebar/statistics.svg";
import application from "../../shared/assets/sidebar/application.svg";
import users from "../../shared/assets/sidebar/user.svg";
import settings from "../../shared/assets/sidebar/settings.svg";
import logout from "../../shared/assets/sidebar/logout.svg";

const Sidebar = () => {
  return (
    <div className="w-[276px] h-screen bg-[#FCFCFD] shadow-xl rounded-md sticky top-0 left-0 p-4 text-white">
      <div className="flex justify-center mt-3">
        <img src={logo} alt="" />
      </div>
      <ul className="my-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 font-normal text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100"
              }`
            }
            to={"/"}
          >
            <div>
              <img src={dashboardLogo} alt="" />
            </div>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 font-normal text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100"
              }`
            }
            to={"/doctors"}
          >
            <div>
              <img src={application} alt="" />
            </div>
            Doctors
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 font-normal text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100"
              }`
            }
            to={"/applications"}
          >
            <div>
              <img src={application} alt="" />
            </div>
            Applications
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 font-normal text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100"
              }`
            }
            to={"/patients"}
          >
            <div>
              <img src={users} alt="" />
            </div>
            Patients
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 font-normal text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100"
              }`
            }
            to={"/admins"}
          >
            <div>
              <img src={users} alt="" />
            </div>
            Administrators
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 font-normal text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100"
              }`
            }
            to={"/settings"}
          >
            <div>
              <img src={settings} alt="" />
            </div>
            Settings
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `mb-2 rounded-[6px] flex items-center gap-3 text-[16px] px-4 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#CCD0F8]/60 to-[#CCD0F8]/20 text-[#0F5EE8] font-medium"
                  : "text-[#667085] hover:bg-slate-100 font-normal"
              }`
            }
          >
            <div>
              <img src={logout} alt="logout" />
            </div>
            Log out
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default memo(Sidebar);
