import { memo } from "react";
import doctorDetailImg from "../../../../shared/assets/main/doctor-detail-img.svg";
import { Eye, Star, Trash } from "lucide-react";
import like from "../../../../shared/assets/main/like.svg";
import shield from "../../../../shared/assets/main/shield-tick.svg";
import total_number from "../../../../shared/assets/main/total_numbers.svg";
import total_profit from "../../../../shared/assets/main/total_profit.svg";
import docs from "../../../../shared/assets/main/docs.svg";
import { Documents } from "../../../../shared/static";

const DoctorDetails = () => {
  return (
    <div className="flex gap-7 h-[630px] items-start">
      <div className="flex flex-col w-[352px] shadow-md rounded-md px-5 py-7">
        <div className="">
          <div className="flex flex-col items-center">
            <div className="">
              <img src={doctorDetailImg} alt="" className="" />
            </div>
            <h1 className="font-semibold text-[18px] text-[#121212]">
              Mr. Doctor Name
            </h1>
            <span className="text-[#00DD00] font-medium text-[14px] mt-2">
              Aktiv
            </span>
            <div className="flex items-center justify-center bg-[#F2F3FD] mt-[7px] gap-[6px] w-[60px] rounded-[4px]">
              <Star className="w-[13px] h-[13px] text-[#DEAE37] fill-[#DEAE37]" />
              <span className="pt-[1px] font-semibold text-[12px]">4.7</span>
            </div>
            <div className="flex items-center gap-[10px] mt-4">
              <div>
                <img src={like} alt="" />
              </div>
              <span className="text-[#344054] font-medium text-[13px]">
                <span>98</span>% (<span>250</span> sharxlar)
              </span>
            </div>
            <div className="flex items-center gap-[10px] mt-[7px]">
              <div>
                <img src={shield} alt="" />
              </div>
              <span className="text-[#344054] font-medium text-[13px]">
                Medical Registration Verified
              </span>
            </div>
          </div>

          <div></div>
        </div>
        <div className="border border-[#D0D5DD] mt-7"></div>

        <div className="mt-[18px] flex flex-col gap-4">
          <div className="flex gap-[30px]">
            <div>
              <h5 className="text-[#667085] font-normal text-[13px]">Email</h5>
              <span className="text-[#121212] text-[15px] font-bold">
                jubed435@gmail.com
              </span>
            </div>
            <div>
              <h5 className="text-[#667085] font-normal text-[13px]">
                Telefon raqami
              </h5>
              <span className="text-[#121212] text-[15px] font-bold">
                91 555-0127
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-[#667085] font-normal text-[13px]">Yoshi</h5>
            <span className="text-[#121212] text-[15px] font-bold">39</span>
          </div>
        </div>

        <a
          href="#"
          className="mt-7 text-[#1067FF] font-medium text-[16px] underline flex justify-center"
        >
          Share your feedback
        </a>
      </div>

      <div className="flex-1 h-full">
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="border border-[#CCD0F8] bg-[#F2F3FD] h-[130px] flex flex-col justify-center gap-[8px] items-center">
            <div>
              <img src={total_number} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold text-[24px] text-[#121212]">
                165
              </span>
              <span className="font-medium text-[13px] text-[#121212]">
                Qabullar soni
              </span>
            </div>
          </div>
          <div className="border border-[#CCD0F8] bg-[#F2F3FD] h-[130px] flex flex-col justify-center gap-[8px] items-center">
            <div>
              <img src={total_profit} alt="" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold text-[24px] text-[#121212]">
                54,145,841.00 UZS
              </span>
              <span className="font-medium text-[13px] text-[#121212]">
                Umumiy daromadi
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-[19px]">
          <h1 className="font-medium text-[#171822] text-[17px]">
            Mutaxassisligi
          </h1>

          <div className="flex gap-[9px]">
            <div className="border border-[#EAECF0] px-[13px] py-[4px] rounded-[14px] text-[13px]">
              Dentist
            </div>
            <div className="border border-[#EAECF0] px-[13px] py-[4px] rounded-[14px] text-[13px]">
              Lor
            </div>
          </div>
        </div>

        <div className="border border-[#D0D5DD] mt-7"></div>

        <div>
          <h1 className="font-medium text-[#171822] text-[17px] mt-[24px] mb-[18px]">
            Xujjatlar
          </h1>
          <div className="flex flex-col gap-[19px]">
            {Documents.map((doc) => (
              <div key={doc.id} className="flex flex-col gap-2">
                <p className="font-medium text-[14px] text-[#62626E]">
                  {doc.label}
                </p>
                <div className="flex items-center gap-[9px]">
                  <div>
                    <img src={docs} alt="" />
                  </div>
                  <p>{doc.filename}</p>

                  <div className="flex gap-3 ml-1">
                    <Eye className="w-[21px] h-[21px] text-[#1067FF]"/>
                    <Trash className="w-[21px] h-[21px] text-[#EA1C59]"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DoctorDetails);
