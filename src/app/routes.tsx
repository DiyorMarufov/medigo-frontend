import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const DoctorDetails = lazy(
  () => import("../features/doctor/pages/doctor-detail/DoctorDetails")
);
const Applications = lazy(
  () => import("../features/application/pages/Applications")
);
const Patient = lazy(() => import("../features/patient/pages/Patient"));
const Admin = lazy(() => import("../features/admin/pages/Admin"));
const Settings = lazy(() => import("../features/settings/pages/Settings"));
const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Statistic = lazy(() => import("../features/statistic/pages/Statistic"));
const Doctors = lazy(() => import("../features/doctor/pages/Doctors"));

export const AppRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Statistic /> },
        { path: "doctors", element: <Doctors /> },
        { path: "doctors/:id", element: <DoctorDetails /> },
        { path: "applications", element: <Applications /> },
        { path: "patients", element: <Patient /> },
        { path: "admins", element: <Admin /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return routes;
};
