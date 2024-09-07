import CardCustom from "@/components/Card";
import style from "./ManageUser.module.scss";
import classNames from "classnames/bind";
import FilterBox from "./FilterBox";
import ActionBox from "./ActionBox";
import TableUser from "./TableUser";
import ModalSaveUser from "./ModalSaveUser";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import PaginationCustom from "@/components/Pagination";
const cx = classNames.bind(style);
const ManageUser = () => {
  const { totalUser, limit } = useSelector((state: RootState) => state.userStore);
  const handleChangePage = (page: number) => {
    console.log("Change page", page);
  };

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
          <div className='flex justify-content-end'>
            <PaginationCustom total={totalUser || 0} limit={limit} />
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
