import { Avatar } from "antd";
import { BiEdit } from "react-icons/bi";
import style from "./AccountMenu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const AccountMenu = () => {
  return (
    <div className={cx("account-menu-wrapper")}>
      <div className={cx("user-info")}>
        <div className={cx("avatar")}>
          <Avatar size='large'>U</Avatar>
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>Nguyễn Tạ Quyền</div>
          <div className={cx("email")}>admin@gmail.com</div>
        </div>
      </div>
      <div className={cx("menu-list")}>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Cài đặt thông tin cá nhân</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Nâng cấp tài khoản</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Nhà tuyển dụng xem hồ sơ</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Cài đặt gợi ý việc làm</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Cài đặt thông báo việc làm</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Cài đặt nhận email tuyển dụng</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Đổi mật khẩu</span>
        </div>
        <div className={cx("menu-item")}>
          <span className={cx("icon")}>
            <BiEdit />
          </span>
          <span className={cx("name")}>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};
export default AccountMenu;
