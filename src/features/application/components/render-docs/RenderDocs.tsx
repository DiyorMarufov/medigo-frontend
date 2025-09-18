import docs from "../../../../shared/assets/main/docs.svg";
import { Eye } from "lucide-react";

export const renderDocs = (fileObj: any) => {
  if (!fileObj) return null;

  const labels: Record<string, string> = {
    passport_file: "Passport fotosurati (oldi va orqasi)",
    diplom_file: "Diplom (Bakalavr va mutaxassislik)",
    yatt_file: "O‘z-o‘zini band qilish",
    sertifikat_file: "Sertifikat",
    tibiy_varaqa_file: "Shaxsiy tibbiy varaqa",
  };

  return Object.keys(fileObj).map((key) => {
    if (
      key === "id" ||
      key === "created_at" ||
      key === "updated_at" ||
      !fileObj[key]
    ) {
      return null;
    }

    return (
      <div key={key} className="flex flex-col gap-2">
        <p className="font-medium text-[14px] text-[#62626E]">
          {labels[key] || key}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[9px]">
            <div>
              <img src={docs} alt="" />
            </div>
            <p className="cursor-pointer hover:text-blue-500">
              <a href={fileObj[key]} target="_blank" rel="noopener noreferrer">
                {labels[key] || "Fayl"}
              </a>
            </p>
          </div>
          <div>
            <Eye className="w-[21px] h-[21px] text-[#1067FF] cursor-pointer hover:opacity-75" />
          </div>
        </div>
      </div>
    );
  });
};
