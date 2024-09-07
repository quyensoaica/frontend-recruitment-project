import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Link, Route } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePath";
const cx = classNames.bind(style);

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <ContainerOutlined />,
    label: "Quản lý chung",
    children: [
      { key: "2.1", label: <Link to={ROUTE_PATH.ADMIN_PROFESSIONS}>Ngành nghề tuyển dụng</Link> },
      { key: "2.2", label: <Link to={ROUTE_PATH.ADMIN_POSITIONS}>Vị trí tuyển dụng</Link> },
      { key: "2.3", label: <Link to={ROUTE_PATH.ADMIN_EXPERIENCES}>Kinh nghiệm làm việc</Link> },
      { key: "2.4", label: <Link to={ROUTE_PATH.ADMIN_SALARY_RANGES}>Mức lương</Link> },
      { key: "2.6", label: <Link to={ROUTE_PATH.ADMIN_JOB_LOCATIONS}>Địa điểm làm việc</Link> },
    ],
  },
  {
    key: "3",
    icon: <DesktopOutlined />,
    label: "Quản lý người dùng",
    children: [
      { key: "3.1", label: <Link to={ROUTE_PATH.ADMIN_ROLES}>Phân quyền người dùng</Link> },
      { key: "3.2", label: <Link to={ROUTE_PATH.ADMIN_USERS}>Quản lý người dùng</Link> },
    ],
  },
  {
    key: "8",
    label: "Quản lý công ty",
    icon: <AppstoreOutlined />,
  },
  {
    key: "4",
    label: "Quản lý nhà tuyển dụng",
    icon: <MailOutlined />,
  },
  {
    key: "5",
    label: "Quản lý ứng viên",
    icon: <AppstoreOutlined />,
  },

  {
    key: "6",
    label: "Quản lý mẫu CV",
    icon: <AppstoreOutlined />,
  },
  {
    key: "7",
    label: "Quản lý bài tuyển dụng",
    icon: <AppstoreOutlined />,
  },
];

interface IMenuBarProps {
  collapsed: boolean;
}

const MenuBar = ({ collapsed }: IMenuBarProps): JSX.Element => {
  return (
    <div className={cx("menu", "scrollbar")}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode='inline'
        theme='light'
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default MenuBar;
