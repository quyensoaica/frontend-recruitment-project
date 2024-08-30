import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { IoLogoGoogleplus } from "react-icons/io";
import style from "../auth.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import ROUTE_PATH from "@/routes/routePath";
const cx = classNames.bind(style);

type FieldType = {
  email: string;
  fullName: string;
  password: string;
};

const RegisterForm = () => {
  return (
    <div className={cx("register-form-wrapper")}>
      <h4 className={cx("title")}>Đăng kí tài khoản</h4>
      <Form name='basic' initialValues={{ remember: true }} autoComplete='off'>
        <Form.Item<FieldType> name='email' rules={[{ required: true, message: "Vui lòng điền email để đăng nhập!" }]}>
          <Input size='large' placeholder='Email' className='full-width' />
        </Form.Item>
        <Form.Item<FieldType> className='mt-30' name='fullName' rules={[{ required: true, message: "Vui lòng điền họ tên để nhà tuyển dụng xem hồ sơ!" }]}>
          <Input size='large' placeholder='Họ và tên' className='full-width' />
        </Form.Item>

        <Row justify={"space-between"} gutter={10}>
          <Col span={12}>
            <Form.Item<FieldType> className='mt-10' name='password' rules={[{ required: true, message: "Vui lòng điền mật khẩu để đăng nhập!" }]}>
              <Input placeholder='Mật khẩu' size='large' className='full-width' />
            </Form.Item>
          </Col>
          <Col span={12} className='text-end'>
            <Form.Item<FieldType> className='mt-10' name='password' rules={[{ required: true, message: "Vui lòng điền mật khẩu để đăng nhập!" }]}>
              <Input placeholder='Nhập lại mật khẩu' size='large' className='full-width' />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className='mt-10'>
          <Checkbox>Tôi đồng ý với việc xử lý và cung cấp thông tin dữ liệu cá nhân, đồng thời đã đọc và đồng ý với Thoả thuận sử dụng và Quy định bảo mật của JobViet.</Checkbox>
        </Form.Item>

        <Form.Item className='mt-10'>
          <Button type='primary' htmlType='submit' className='full-width' size='large'>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>

      <div className='mt-10'>
        {/* <p className='text-center'>Hoặc</p>
        <div className={cx("social-register", "text-center", "mt-10")}>
          <Button type='primary' danger size='large' icon={<IoLogoGoogleplus className={cx("icon")} />}>
            Đăng nhập với Google
          </Button>
        </div> */}
        <div className='mt-20 text-center'>
          <span>Bạn đã có tài khoản </span> <Link to={ROUTE_PATH.LOGIN}>Đăng nhập ngay</Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
