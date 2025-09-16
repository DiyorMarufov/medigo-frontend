import { memo } from "react";
import { useDoctor } from "../services/useDoctor";
import { DoctorView } from "../components/doctor-view/DoctorView";
import { Input } from "antd";
import search from "../../../shared/assets/main/search.svg";
import filter from "../../../shared/assets/main/filter.svg";

const Doctors = () => {
  const { getDoctors } = useDoctor();
  const { data } = getDoctors();
  return (
    <div className="">
      <div className="flex justify-between pb-7">
        <div>
          <h1 className="font-semibold text-[#121212] text-[24px]">
            Shifokorlar
          </h1>
          <span className="text-[#344054] font-normal text-[14px]">
            <span className="text-[#37404C] text-[14px] font-medium">
              Showing:
            </span>{" "}
            All Consultations of All Healthcare Providers
          </span>
        </div>

        <div className="flex gap-3">
          <div className="w-[320px] h-[40px] border border-[#D0D5DD] rounded-md flex justify-between pr-3">
            <Input
              placeholder="Qidirish"
              className="!border-none !outline-none !ring-0 focus:!outline-none focus:!ring-0 !pt-[4px] placeholder:text-[16px]! placeholder:text-[#667085]!"
            />
            <div className="flex items-center">
              <img src={search} alt="" />
            </div>
          </div>

          <div className="w-[87] h-[40px] border border-[#D0D5DD] flex items-center gap-2 px-4 rounded-md">
            Filtr
            <div>
              <img src={filter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <DoctorView data={data?.data?.data} />
    </div>
  );
};

export default memo(Doctors);
