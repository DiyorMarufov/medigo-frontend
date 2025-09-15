import { memo } from "react";
import { AdminView } from "../components/admin-view/AdminView";

const Admin = () => {
  return (
    <div className="Admin">
      <AdminView />
    </div>
  );
};

export default memo(Admin);
