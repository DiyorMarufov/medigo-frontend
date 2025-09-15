import { memo } from "react";
import { SettingsView } from "../components/settings-view/SettingsView";

const Settings = () => {
  return (
    <div className="Settings">
      <SettingsView />
    </div>
  );
};

export default memo(Settings);
