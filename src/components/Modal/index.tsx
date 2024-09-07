import { Button, Modal } from "antd";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
interface ModalCustomProps {
  open: boolean;
  onOK?: () => void;
  onCancel: () => void;
  modalTitle?: string;
  showHeader?: boolean;
  customHeader?: React.ReactNode;
  showFooter?: boolean;
  customFooter?: React.ReactNode;
  showCloseButton?: boolean;
  children: React.ReactNode;
  width?: number | string;
  scrollBody?: boolean;
  isLoading?: boolean;
}

const ModalCustom = ({
  open,
  onCancel,
  onOK,
  modalTitle = "Truyền modalTitle vào nè",
  children,
  showHeader = true,
  customHeader = null,
  showFooter = true,
  customFooter = null,
  showCloseButton = true,
  scrollBody = false,
  width = 1200,
  isLoading = false,
}: ModalCustomProps) => {
  return (
    <Modal centered width={width} open={open} closeIcon={showCloseButton} onOk={onOK} onCancel={onCancel} footer={false}>
      {showHeader ? (
        customHeader ? (
          customHeader
        ) : (
          <div className={cx("modal-header")}>
            <span className={cx("title")}>{modalTitle}</span>
          </div>
        )
      ) : null}
      <div
        className={cx("modal-body", "scrollbar", {
          "scroll-body": scrollBody,
        })}
      >
        {children}
      </div>
      {showFooter ? (
        customFooter ? (
          customFooter
        ) : (
          <div className={cx("modal-footer")}>
            <Button type='primary' danger onClick={onCancel}>
              Cancel
            </Button>
            <Button type='primary' onClick={onOK} loading={isLoading}>
              OK
            </Button>
          </div>
        )
      ) : null}
    </Modal>
  );
};
export default ModalCustom;
