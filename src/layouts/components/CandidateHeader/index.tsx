import { BiSolidBellRing, BiSolidMessage } from "react-icons/bi";
import style from "./CandidateHeader.module.scss";
import classNames from "classnames/bind";
import { Avatar, Badge, Popover } from "antd";
import AccountMenu from "../AccountMenu";
import HeaderNotify from "../HeaderNotify";
import HeaderMessage from "../HeaderMessage";
import HeaderMenu from "./HeaderMenu";
import { RootState } from "@/stores";
import { useSelector } from "react-redux";
const cx = classNames.bind(style);

const CandidateHeader = () => {
  const { currentUser } = useSelector((state: RootState) => state.authStore);
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-leftbox")}>
          <div className={cx("logo-box")}>
            <img className={cx("logo")} src='/src/assets/logo-full.png' alt='logo' />
            <div className={cx("arrow")}></div>
          </div>
          <div className={cx("menu-box")}>
            <HeaderMenu />
          </div>
        </div>
        <div className={cx("header-rightbox")}>
          <Popover trigger={"click"} placement='bottom' content={<HeaderNotify />}>
            <Badge count={5} size='small' offset={[-5, 5]}>
              <span className={cx("header-icon")}>
                <BiSolidBellRing className={cx("icon")} />
              </span>
            </Badge>
          </Popover>
          <Popover trigger={"click"} placement='bottom' content={<HeaderMessage />}>
            <Badge count={5} size='small' offset={[-5, 5]}>
              <span className={cx("header-icon")}>
                <BiSolidMessage className={cx("icon")} />
              </span>
            </Badge>
          </Popover>

          <Popover trigger={"click"} placement='bottomRight' content={<AccountMenu />}>
            <Avatar src={currentUser?.avatar ? currentUser.avatar : ""} className='cursor-pointer' size={"large"}>
              U
            </Avatar>
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default CandidateHeader;
