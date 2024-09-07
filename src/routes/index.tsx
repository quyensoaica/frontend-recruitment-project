import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import ROUTE_PATH from "./routePath";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import HomePage from "@/pages/home/HomePage";
import AuthRoute from "./AuthRoute";
import AdminProtectRoute from "./AdminRoute";
import MainLayout from "@/layouts/MainLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageUserPage from "@/pages/admin/manage-user/ManageUserPage";
import ManageRolePage from "@/pages/admin/manage-user/ManageRolePage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute />}>
          <Route element={<MainLayout />}>
            <Route element={<AdminProtectRoute />}>
              <Route path={ROUTE_PATH.ADMIN_DASHBOARD} element={<AdminDashboard />} />
              <Route path={ROUTE_PATH.ADMIN_USERS} element={<ManageUserPage />} />
              <Route path={ROUTE_PATH.ADMIN_ROLES} element={<ManageRolePage />} />
            </Route>
          </Route>
        </Route>
        <Route element={<AuthRoute />}>
          <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
          <Route path={ROUTE_PATH.REGISTER} element={<RegisterPage />} />
        </Route>
        <Route path={ROUTE_PATH.HOME} element={<HomePage />} />
        <Route path={ROUTE_PATH.ABOUT} element={<span>About</span>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
