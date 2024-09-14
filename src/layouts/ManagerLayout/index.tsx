import React from "react";
import style from "./ManagerLayout.module.scss";
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";
const cx = classNames.bind(style);
const ManagerLayout: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <AdminHeader toggleCollapsed={toggleCollapsed} />
      </div>
      <div className={cx("body")}>
        <div
          className={cx("sidebar", {
            close: collapsed,
          })}
        >
          <Sidebar collapsed={collapsed} menuType='manager' />
        </div>
        <div
          className={cx("content", "scrollbar", {
            close: collapsed,
          })}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ManagerLayout;
