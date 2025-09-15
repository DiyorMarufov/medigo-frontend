import { memo } from "react";
import mainLogo from "../../../shared/assets/main/main-logo.svg";

const SuspenseLoading = () => {
  return (
    <div className="h-[93vh] flex items-center justify-center">
      <div>
        <img src={mainLogo} alt="" className="w-[60px] h-[60px]" />
      </div>
    </div>
  );
};

export default memo(SuspenseLoading);
