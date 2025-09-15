import { memo } from "react";
import { PatientView } from "../components/patient-view/PatientView";

const Patient = () => {
  return (
    <div className="Patient">
      <PatientView />
    </div>
  );
};

export default memo(Patient);
