import { memo } from "react";
import { ApplicationView } from "../components/application-view/ApplicationView";

const Applications = () => {
  return (
    <div className="Applications">
      <ApplicationView />
    </div>
  );
};

export default memo(Applications);
