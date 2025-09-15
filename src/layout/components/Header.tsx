import { memo } from "react";
import header from "../../shared/assets/header/header.svg";

const Header = () => {
  return (
    <div className="h-[70px] bg-[#2A313A] flex justify-end px-6">
      <div className="flex gap-[10px]">
        <div className="flex items-center">
          <img src={header} alt="" />
        </div>
        <div className="flex flex-col justify-center text-[#ffffff]">
          <span className="text-[14px]">Superadmin</span>
          <span className="text-[11px]">+998914760101</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
