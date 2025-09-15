import { Button } from "antd";
import { memo, type FC } from "react";
import doctorImg from "../../../../shared/assets/main/doctor-img.svg";
import doctorTool from "../../../../shared/assets/main/doctor-tool.svg";
import time from "../../../../shared/assets/main/time.svg";
import schedule from "../../../../shared/assets/main/schedule.svg";
import docs from "../../../../shared/assets/main/document.svg";
import arrowRight from "../../../../shared/assets/main/arrow-right.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any[];
}

export const DoctorView: FC<Props> = memo(({}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/doctors/1`);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* {data?.length > 0 ? (
        data?.map((doctor) => (
          <div
            className="shadow-md rounded-md h-[144px] flex items-center justify-between"
            key={doctor?.id}
          >
            <div className="h-full flex gap-5 justify-center">
              <div className="flex items-center pl-5">
                <img src={doctorImg} className="" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-[18px]">Dr. Ratul Ahamed</h1>
                <div className="flex gap-3 text-[#475467]">
                  <span>Heart Specialist</span>
                  <span>9:30am - 01:00am BST</span>
                  <span>Jun 24, 2021</span>
                </div>
                <p>
                  Infectious Diseases Hub aims to provide up-to-date, essential
                  research and on aspects of microbiology, virology, and
                  parasitology.
                </p>
                <h1>{doctor?.email}</h1>
                <p>{doctor?.phone}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-5">
              <Button className="bg-[#1067FF]! text-white! h-[48px]! w-[218px]! rounded-md font-semibold! text-[16px]!">
                View Appointment
              </Button>
              <Button className="h-[48px]! w-[218px]! rounded-md font-semibold! text-[16px]!">
                Batafsil
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[60vh] flex justify-center items-center">
          <div className="text-[20px]">No doctors found!</div>
        </div>
      )} */}

      <div
        className="shadow-md rounded-md h-[144px] flex items-center justify-between cursor-pointer hover:bg-slate-100"
        onClick={handleClick}
      >
        <div className="h-full flex gap-5 justify-center">
          <div className="flex items-center pl-5">
            <img src={doctorImg} className="" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-[18px]">Dr. Ratul Ahamed</h1>
            <div className="flex gap-3 text-[#475467] pt-1">
              <div className="flex items-center gap-2">
                <div>
                  <img src={doctorTool} alt="" />
                </div>
                <span>Heart Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={time} alt="" />
                </div>
                <span>9:30am - 01:00am BST</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={schedule} alt="" />
                </div>
                <span>Jun 24, 2021</span>
              </div>
            </div>
            <div className="flex gap-2 pt-3 pl-1">
              <div className="mt-[2px]">
                <img src={docs} alt="" />
              </div>
              <p className="font-normal text-[12px] text-[#667085] w-[444px]">
                Infectious Diseases Hub aims to provide up-to-date, essential
                research and on aspects of microbiology, virology, and
                parasitology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5">
          <Button className="bg-[#1067FF]! text-white! h-[48px]! w-[218px]! rounded-md font-semibold! text-[16px]! flex! gap-4! items-center!">
            View Appointment{" "}
            <div>
              <img src={arrowRight} alt="" />
            </div>
          </Button>
          <Button className="h-[48px]! w-[218px]! rounded-md font-semibold! text-[16px]!">
            Description
          </Button>
        </div>
      </div>
    </div>
  );
});
