import { memo } from "react";
import { ApplicationView } from "../components/application-view/ApplicationView";
import { Input } from "antd";
import search from "../../../shared/assets/main/search.svg";
import { useDoctor } from "../../doctor/services/useDoctor";

const Applications = () => {
  const { data } = useDoctor().getDoctors();
  const doctors = data?.data?.data;

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-[#121212] text-[24px]">Arizalar</h1>
          <span className="text-[#344054] font-normal text-[14px]">
            <span className="text-[#37404C] text-[14px] font-medium">
              Showing:
            </span>{" "}
            All Consultations of All Healthcare Providers
          </span>
        </div>
        <div className="w-[320px] h-[40px] border border-[#D0D5DD] rounded-md flex justify-between pr-3">
          <Input
            placeholder="Qidirish"
            className="!border-none !outline-none !ring-0 focus:!outline-none focus:!ring-0 !pt-[4px] placeholder:text-[16px]! placeholder:text-[#667085]!"
          />
          <div className="flex items-center">
            <img src={search} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-7 border border-[#EAECF0] shadow-sm rounded-md">
        <div className="py-5 px-6 font-semibold text-[20px] text-[#101828] flex items-center gap-3">
          Arizalar{" "}
          <span className="font-medium text-[15px] text-[#070B5C]">
            {doctors?.length}
          </span>
        </div>
        <ApplicationView data={doctors} />
      </div>
    </div>
  );
};

export default memo(Applications);
