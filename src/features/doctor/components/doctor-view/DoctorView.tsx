import { Button } from "antd";
import { memo, type FC } from "react";
import doctorImg from "../../../../shared/assets/main/doctor-img.svg";

interface Props {
  data: any[];
}

export const DoctorView: FC<Props> = memo(({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((doctor) => (
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
      ))}
    </div>
  );
});
