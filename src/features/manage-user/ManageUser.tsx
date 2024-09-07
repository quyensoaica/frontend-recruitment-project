import CardCustom from "@/components/Card";
import style from "./ManageUser.module.scss";
import classNames from "classnames/bind";
import FilterBox from "./FilterBox";
import ActionBox from "./ActionBox";
import TableUser from "./TableUser";
import ModalSaveUser from "./ModalSaveUser";
const cx = classNames.bind(style);
const ManageUser = () => {
  return (
    <CardCustom title='Quản lý người dùng' fullHeight>
      <div className={cx("manage-user-wrapper")}>
        <div className={cx("header")}>
          <div className={cx("filter")}>
            <FilterBox />
          </div>
          <div className={cx("actions")}>
            <ActionBox />
          </div>
        </div>
        <div className={cx("body")}>
          <div className={cx("table-user")}>
            <TableUser />
          </div>
        </div>
        <div className={cx("footer")}>
          <ModalSaveUser />
        </div>
      </div>
    </CardCustom>
  );
};
export default ManageUser;
