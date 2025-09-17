import { memo, useState, type FC } from "react";
import Popup from "../../../../shared/ui/Popup";
import { Eye, X } from "lucide-react";
import { Button, Input } from "antd";
import docs from "../../../../shared/assets/main/docs.svg";

interface Props {
  data: any[];
}

const getStatusStyles = (step: string) => {
  switch (step) {
    case "Kutilmoqda":
      return {
        bg: "#FDF8E4",
        dot: "#F4C646",
        text: "#A17E14",
      };
    case "Ruxsat berilgan":
      return {
        bg: "#EFFBE7",
        dot: "#6EE82D",
        text: "#3A8B10",
      };
    case "Bekor qilingan":
      return {
        bg: "#FBECEE",
        dot: "#F1416C",
        text: "#CB1031",
      };
    default:
      return {
        bg: "#F3F4F6",
        dot: "#9CA3AF",
        text: "#4B5563",
      };
  }
};

const countDocs = (data: any) => {
  let sum: number = 0;

  for (let i in data) {
    if (data[i] !== null) {
      sum += 1;
    }
  }
  return sum;
};

export const ApplicationView: FC<Props> = memo(({ data }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <table className="w-full table-auto text-left">
        <thead className="bg-[#F9FAFB]">
          <tr className="text-gray-700 text-sm">
            <th className="pl-6 py-3 flex items-center gap-3">
              <input type="checkbox" />
              <span className="font-medium text-[14px] text-[#475467]">
                Telefon raqami
              </span>
            </th>
            <th className="px-4 py-3 text-center font-medium text-[14px] text-[#475467]">
              ID
            </th>
            <th className="px-4 py-3 text-center font-medium text-[14px] text-[#475467]">
              Hujjatlar soni
            </th>
            <th className="px-4 py-3 text-center font-medium text-[14px] text-[#475467]">
              Yuborilgan sana
            </th>
            <th className="px-4 py-3 text-center font-medium text-[14px] text-[#475467]">
              Status
            </th>
            <th className="px-4 py-3 min-w-[280px] text-center font-medium text-[14px] text-[#475467]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-900">
          {data?.map((doctor: any) => (
            <tr key={doctor?.id} className="border-t border-t-[#EAECF0]">
              <td className="pl-6 py-3 flex items-center gap-3">
                <input type="checkbox" />
                <span className="font-medium text-[16px] text-[#121212]">
                  {doctor?.phone}
                </span>
              </td>
              <td className="px-4 py-3 text-center font-normal text-[15px] text-[#475467]">
                {"#" + doctor?.id}
              </td>
              <td className="px-4 py-3 text-center font-normal text-[15px] text-[#475467]">
                {countDocs(doctor?.Doctor_file[0])}
              </td>
              <td className="px-4 py-3 text-center font-normal text-[15px] text-[#475467]">
                Dec 07, 2025
              </td>
              <td className="px-4 py-3 text-center">
                {(() => {
                  let translateUzb: any;

                  const status = doctor?.step;

                  if (status === "finish") {
                    translateUzb = "Ruxsat berilgan";
                  } else if (status === "pending") {
                    translateUzb = "Kutilmoqda";
                  } else {
                    translateUzb = "Bekor qilingan";
                  }
                  const { bg, dot, text } = getStatusStyles(translateUzb);

                  return (
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-[3px] text-sm font-medium"
                      style={{ backgroundColor: bg, color: text }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: dot }}
                      />
                      {translateUzb}
                    </span>
                  );
                })()}
              </td>
              <td className="px-4 py-3 min-w-[280px] flex gap-[15px] items-center justify-center">
                <button
                  onClick={() => setIsShow(true)}
                  className="font-semibold text-[15px] text-[#475467] cursor-pointer hover:opacity-80"
                >
                  Tekshirish
                </button>
                <button className="font-semibold text-[15px] text-[#D93D56] cursor-pointer hover:opacity-80">
                  Bekor qilish
                </button>
                <button className="font-semibold text-[15px] text-[#475467] cursor-pointer hover:opacity-80">
                  Tasdiqlash
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Popup isShow={isShow} onClose={() => setIsShow(false)}>
        <div className="w-[708px] h-[717px] bg-[#ffffff] rounded-[20px] py-[17px] px-5">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[17px] text-[#2C3E50]">
              #123 arizani tekshirish
            </span>
            <div onClick={() => setIsShow(false)}>
              <X className="text-[#6A7883] cursor-pointer hover:bg-slate-200 rounded-md" />
            </div>
          </div>
          <div className="bg-[#EAECF0] h-[1px] my-5"></div>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="w-[calc(50%-0.5rem)]">
              <label className="block text-[#344054] text-[14px] mb-1">
                Telefon raqami
              </label>
              <Input
                value="+998 94 426 0303"
                readOnly
                style={{
                  backgroundColor: "#F9FAFB",
                  height: "44px",
                  color: "#667085",
                  fontSize: "17px",
                }}
              />
            </div>

            <div className="w-[calc(50%-0.5rem)]">
              <label className="block text-[#344054] text-[14px] mb-1">
                Holati
              </label>
              <Input
                value="Kutilmoqda"
                readOnly
                style={{
                  backgroundColor: "#F9FAFB",
                  height: "44px",
                  color: "#667085",
                  fontSize: "17px",
                }}
              />
            </div>

            <div className="w-[calc(50%-0.5rem)]">
              <label className="block text-[#344054] text-[14px] mb-1">
                Yuborilgan sana
              </label>
              <Input
                value="Dec 07, 2025"
                readOnly
                style={{
                  backgroundColor: "#F9FAFB",
                  height: "44px",
                  color: "#667085",
                  fontSize: "17px",
                }}
              />
            </div>
          </div>

          <div>
            <h1 className="font-medium text-[#171822] text-[18px]">
              Hujjatlar <span>[5]</span>
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-[19px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Passport fotosutati (oldi va orqasi)
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <div>
                        <img src={docs} alt="" />
                      </div>
                      <p className="cursor-pointer hover:text-blue-500">
                        <a href={""}>Passport</a>
                      </p>
                    </div>

                    <div className="">
                      <Eye className="w-[21px] h-[21px] text-[#1067FF] cursor-pointer hover:opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[19px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Diplom (Bakalavr va mutaxassislik)
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <div>
                        <img src={docs} alt="" />
                      </div>
                      <p className="cursor-pointer hover:text-blue-500">
                        <a href={""}>Diplom</a>
                      </p>
                    </div>

                    <div className="">
                      <Eye className="w-[21px] h-[21px] text-[#1067FF] cursor-pointer hover:opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[19px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    O‘z-o‘zini band qilish
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <div>
                        <img src={docs} alt="" />
                      </div>
                      <p className="cursor-pointer hover:text-blue-500">
                        <a href={""}>Ozini ozi band qilish</a>
                      </p>
                    </div>

                    <div className="">
                      <Eye className="w-[21px] h-[21px] text-[#1067FF] cursor-pointer hover:opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[19px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Sertifikat
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <div>
                        <img src={docs} alt="" />
                      </div>
                      <p className="cursor-pointer hover:text-blue-500">
                        <a href={""}>Sertifikat</a>
                      </p>
                    </div>

                    <div className="">
                      <Eye className="w-[21px] h-[21px] text-[#1067FF] cursor-pointer hover:opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[19px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Shaxsiy tibbiy varaqa
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <div>
                        <img src={docs} alt="" />
                      </div>
                      <p className="cursor-pointer hover:text-blue-500">
                        <a href={""}>Tibbiy varaqa</a>
                      </p>
                    </div>

                    <div className="">
                      <Eye className="w-[21px] h-[21px] text-[#1067FF] cursor-pointer hover:opacity-75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="mt-10 flex gap-5">
              <Button className="h-[44px]! border-none! hover:opacity-80!">
                <span className="font-semibold text-[17px] text-[#070B5C]">
                  Ortga
                </span>
              </Button>
              <Button className="h-[44px]! border-none! bg-[#D93D56]! hover:opacity-80!">
                <span className="font-semibold text-[17px] text-[#ffffff]">
                  Arizani bekor qilish
                </span>
              </Button>
              <Button className="h-[44px]! border-none! bg-[#0E1680]! hover:opacity-80!">
                <span className="font-semibold text-[17px] text-[#ffffff]">
                  Tasdiqlash
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
});
