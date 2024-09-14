import { Avatar, Button, Col, Form, Input, Row, Select } from "antd";
import { BiCamera, BiRightArrowAlt } from "react-icons/bi";
import style from "./FormRegisterRecruitment.module.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { useEffect, useState } from "react";
import { ISelectOption } from "@/types/AppType";
import { IRegisterCompany } from "@/types/company/CompanyType";
import { CompanyActions } from "@/stores/companyStore/companyReducer";
import TextEditor from "@/components/TextEditor";
import { toast } from "react-toastify";
const cx = classNames.bind(style);
const FormRegisterRecruitment = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { provinces, memberCounts } = useSelector((state: RootState) => state.generalStore);
  const { isSubmitting, myCompany } = useSelector((state: RootState) => state.companyStore);
  const [provinceOptions, setProvinceOptions] = useState<ISelectOption[]>([]);
  const [memberCountOptions, setMemberCountOptions] = useState<ISelectOption[]>([]);
  const [companyIntroduce, setCompanyIntroduce] = useState<string>("");
  const [disabledForm, setDisabledForm] = useState<boolean>(false);
  const [formAction, setFormAction] = useState<"register" | "update">("register");

  const handleChangeCompanyIntroduce = (value: string) => {
    setCompanyIntroduce(value);
  };
  useEffect(() => {
    dispatch<any>(CompanyActions.getMyCompany());
  }, []);
  useEffect(() => {
    if (!myCompany) {
      setDisabledForm(false);
      form.resetFields();
      setCompanyIntroduce("");
      return;
    }
    form.setFieldsValue({
      companyName: myCompany.companyName,
      taxCode: myCompany.taxCode,
      companyWebsite: myCompany.companyWebsite,
      companyEmail: myCompany.companyEmail,
      phoneNumber: myCompany.phoneNumber,
      provinceId: myCompany.province.id,
      companyAddress: myCompany.companyAddress,
      memberCountId: myCompany.memberCount.id,
    });
    handleChangeCompanyIntroduce(myCompany.companyIntroduce || "");
    setDisabledForm(true);
  }, [myCompany]);

  useEffect(() => {}, [memberCountOptions]);
  const onFinish = async (values: any) => {
    const dataRegister: IRegisterCompany = {
      id: myCompany?.id,
      companyName: values.companyName,
      companyBanner: "",
      companyLogo: "",
      taxCode: values.taxCode,
      companyWebsite: values.companyWebsite,
      companyEmail: values.companyEmail,
      phoneNumber: values.phoneNumber,
      provinceId: values.provinceId,
      companyAddress: values.companyAddress,
      companyIntroduce: companyIntroduce,
      memberCountId: values.memberCountId,
    };
    if (formAction === "register") {
      await dispatch<any>(CompanyActions.registerCompanyByRecruiter(dataRegister)).unwrap();
    } else {
      await dispatch<any>(CompanyActions.updateCompanyWhenRegister(dataRegister)).unwrap();
    }
  };

  const handleUpdateInformation = () => {
    setFormAction("update");
    setDisabledForm(false);
    toast.info("Bạn đã mở khóa form để cập nhật thông tin");
  };

  useEffect(() => {
    if (!provinces || provinces.length === 0) return;
    const options = provinces.map((item) => ({
      value: item.id,
      label: item.provinceName,
    }));
    setProvinceOptions(options);
    form.setFieldsValue({
      provinceId: options[0].value,
    });
  }, [provinces]);
  useEffect(() => {
    if (!memberCounts || memberCounts.length === 0) return;
    const options = memberCounts.map((item) => ({
      value: item.id,
      label: item.displayName,
    }));
    setMemberCountOptions(options);
    form.setFieldsValue({
      memberCountId: options[0].value,
    });
  }, [memberCounts]);
  return (
    <div className={cx("form-wrapper")}>
      <div className={cx("title")}>
        <h4 className={cx("register")}>Đăng kí </h4>
        <h4 className={cx("become")}>Trở thành nhà tuyển dụng</h4>
      </div>
      <div className={cx("description")}>
        <span>Nhanh chóng hoàn thành hồ sơ để trở thành nhà tuyển dụng ngay nào!</span>
      </div>
      <Row justify={"center"}>
        <Col xs={24} lg={22} xl={20}>
          <div className={cx("form")}>
            <div className={cx("header")}>
              <div className={cx("banner")}>
                <span className={cx("icon")}>
                  <BiCamera />
                </span>
              </div>
              <div className={cx("avatar")}>
                <Avatar size={120} src='https://i.imgur.com/1b2bqy3.png' />
                <span className={cx("icon")}>
                  <BiCamera />
                </span>
              </div>
            </div>
            <Form form={form} layout='vertical' onFinish={onFinish} disabled={disabledForm}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={24}>
                  <Form.Item
                    label={<span className='font-weight-500'>Tên công ty</span>}
                    name='companyName'
                    rules={[{ required: true, message: "Tên công ty không được để trống" }]}
                  >
                    <Input
                      variant='filled'
                      size='large'
                      type='text'
                      className={cx("input")}
                      placeholder='Nhập tên công ty của bạn'
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                  <Form.Item label={<span className='font-weight-500'>Mã số thuế</span>} name='taxCode'>
                    <Input
                      variant='filled'
                      size='large'
                      type='text'
                      className={cx("input")}
                      placeholder='Nhập mã số thuế của công ty'
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={16}>
                  <Form.Item label={<span className='font-weight-500'>Website</span>} name='companyWebsite'>
                    <Input
                      variant='filled'
                      size='large'
                      type='text'
                      className={cx("input")}
                      placeholder='Nhập địa chỉ website công ty'
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    rules={[{ required: true, message: "Chọn số lượng nhân viên" }]}
                    label={<span className='font-weight-500'>Số lượng nhân viên</span>}
                    name='memberCountId'
                  >
                    <Select
                      size='large'
                      variant='filled'
                      className='full-width'
                      placeholder='Số lượng nhân viên'
                      // onChange={handleChange}
                      options={memberCountOptions}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    rules={[{ required: true, message: "Email của công ty không được để trống" }]}
                    label={<span className='font-weight-500'>Email</span>}
                    name='companyEmail'
                  >
                    <Input
                      variant='filled'
                      size='large'
                      type='email'
                      className={cx("input")}
                      placeholder='Nhập email của công ty'
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label={<span className='font-weight-500'>Số điện thoại</span>} name='phoneNumber'>
                    <Input
                      variant='filled'
                      size='large'
                      type='text'
                      className={cx("input")}
                      placeholder='Nhập số điện thoại liên hệ của công ty'
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    rules={[{ required: true, message: "Tỉnh thành làm việc không được để trống" }]}
                    label={<span className='font-weight-500'>Tỉnh thành làm việc</span>}
                    name='provinceId'
                  >
                    <Select
                      size='large'
                      variant='filled'
                      className='full-width'
                      placeholder='Tỉnh thành làm việc'
                      // onChange={handleChange}
                      options={provinceOptions}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={16}>
                  <Form.Item
                    rules={[{ required: true, message: "Địa chỉ chi tiết không được để trống" }]}
                    label={<span className='font-weight-500'>Địa chỉ chi tiết</span>}
                    name='companyAddress'
                  >
                    <Input
                      variant='filled'
                      size='large'
                      type='text'
                      className={cx("input")}
                      placeholder='Nhập số điện thoại liên hệ của công ty'
                    />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <div>
                    <span className='font-weight-500'>Giới thiệu công ty</span>
                    <TextEditor disabled={disabledForm} value={companyIntroduce} onChange={handleChangeCompanyIntroduce} />
                  </div>
                </Col>
                {myCompany !== undefined && (
                  <Col xs={24}>
                    <div className='d-flex justify-content-center'>
                      <div className={cx("feedback-box")}>
                        {myCompany.status === 0 ? (
                          <span className={cx("registered")}>
                            Hồ sơ đăng kí của bạn đã được gửi lên hệ thống, <br /> vui lòng chờ quản trị viên kiểm duyệt và xác
                            nhận
                          </span>
                        ) : myCompany.status === 1 ? (
                          <div className={cx("approve")}>
                            <span className={cx("description")}>Bạn đã trở thành nhà tuyển dụng!</span>
                            <Button
                              type='primary'
                              disabled={false}
                              iconPosition='end'
                              size='large'
                              icon={
                                <span className='d-flex align-item-center font-size-2rem'>
                                  <BiRightArrowAlt />
                                </span>
                              }
                            >
                              Đến trang tuyển dụng
                            </Button>
                          </div>
                        ) : (
                          <div className={cx("reject")}>
                            <span className={cx("description")}>Hồ sơ đăng kí của bạn đã bị từ chối</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Col>
                )}
                <Col xs={24} className='mt-20'>
                  <div className='text-end'>
                    {myCompany !== undefined && disabledForm && myCompany.status !== 1 && (
                      <Button onClick={handleUpdateInformation} type='primary' size='large' disabled={false}>
                        Cập nhật
                      </Button>
                    )}
                    <Button className='ml-10' size='large' disabled={false}>
                      Xem trước
                    </Button>
                    <Button className='ml-10' loading={isSubmitting} type='primary' size='large' htmlType='submit'>
                      {formAction === "register" ? "Đăng kí ngay" : "Lưu cập nhật"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FormRegisterRecruitment;
