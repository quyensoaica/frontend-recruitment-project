import { Button, Modal } from "antd";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
interface ModalCustomProps {
  open: boolean;
  onOK?: () => void;
  onCancel: () => void;
  modalTitle?: string;
  confirmTitle?: string;
  cancelTitle?: string;
  showHeader?: boolean;
  customHeader?: React.ReactNode;
  showFooter?: boolean;
  customFooter?: React.ReactNode;
  showCloseButton?: boolean;
  children: React.ReactNode;
  width?: number | string;
  scrollBody?: boolean;
  isLoading?: boolean;
  maskClosable?: boolean;
}

const ModalCustom = ({
  open,
  onCancel,
  onOK,
  modalTitle = "Truyền modalTitle vào nè",
  confirmTitle = "OK",
  cancelTitle = "Cancel",
  children,
  showHeader = true,
  customHeader = null,
  showFooter = true,
  customFooter = null,
  showCloseButton = true,
  scrollBody = false,
  width = 1200,
  isLoading = false,
  maskClosable = true,
}: ModalCustomProps) => {
  return (
    <Modal
      maskClosable={maskClosable}
      centered
      width={width}
      open={open}
      closeIcon={showCloseButton}
      onOk={onOK}
      onCancel={onCancel}
      footer={false}
    >
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
              {cancelTitle}
            </Button>
            <Button type='primary' onClick={onOK} loading={isLoading}>
              {confirmTitle}
            </Button>
          </div>
        )
      ) : null}
    </Modal>
  );
};
export default ModalCustom;
