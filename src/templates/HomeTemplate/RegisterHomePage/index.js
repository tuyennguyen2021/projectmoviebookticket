import React from "react";
import { Form, Input, AutoComplete } from "antd";
import { MAGRPHIM } from "../../../utils/config";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bgMovie from "../../../assets/images/bgMovie.jpg";
import { Img } from "../../../assets/images/Images";
import { dangKyAction } from "../../../redux/actions/UsersAction";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);

  const contentStyle = {
    backgroundPosition: "center",
    backgroundsize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("${bgMovie}")`,
  };

  const onFinish = (values) => {
    let submit = {
      taiKhoan: values.taiKhoan,
      matKhau: values.nhapLaiMatKhau,
      email: values.email,
      soDt: values.soDt,
      maNhom: MAGRPHIM,
      hoTen: values.hoTen,
    };
    const action = dangKyAction(submit, navigate);
    dispatch(action);
  };

  if (userLogin.taiKhoan) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div style={{ ...contentStyle }}>
      <NavLink
        to="/"
        className="py-4 w-full bg-transparent lg:bg-transparent flex justify-center lg:justify-start lg:px-12 absolute "
      >
        <div className="cursor-pointer items-center hidden lg:block">
          <img src={Img[0]} width={100} />
        </div>
      </NavLink>
      <div className="lg:flex lg:justify-center lg:h-screen ">
        <div>
          <div className="p-10 mr-0 lg:mr-10  bg-white w-full lg:rounded-2xl lg:my-20 ">
            <NavLink to="/">
              <div className="cursor-pointer block lg:hidden">
                <img src={Img[0]} width={100} />
              </div>
            </NavLink>
            <h3 className="text-center text-4xl text-[#753BBD] font-display font-semibold xl:text-5xl xl:text-bold">
              ????NG K??
            </h3>

            <div className="mt-12">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                onFinishFailed={({ values, errorFields, outOfDate }) => {
                  console.log("d??? li???u submit kh??ng ????ng", values);
                }}
                initialValues={{
                  maLoaiNguoiDung: "QuanTri",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "Email kh??ng h???p l???!",
                    },
                    {
                      required: true,
                      message: "Vui l??ng nh???p email c???a b???n!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="M???t kh???u"
                  tooltip="M???t kh???u ??t nh???t c?? 1 k?? t??? vi???t hoa, 1 k?? t??? vi???t th?????ng, 1 k?? t??? s???, 1 k?? t??? ?????c bi???t v?? d??i t??? 8 ?????n 10 k?? t???!"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p m???t kh???u c???a b???n!",
                    },
                    {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                      message: "M???t kh???u kh??ng ????? m???nh!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="nhapLaiMatKhau"
                  label="Nh???p l???i m???t kh???u"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p l???i m???t kh???u!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("M???t kh???u nh???p l???i kh??ng ????ng!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="taiKhoan"
                  label="T??i kho???n"
                  tooltip="T??i kho???n kh??ng ch???a d???u v?? k?? t??? ?????c bi???t!"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p t??i kho???n c???a b???n!",
                      whitespace: true,
                    },
                    {
                      pattern: /^[a-zA-Z0-9]*$/,
                      message: "T??i kho???n kh??ng ch???a d???u v?? k?? t??? ?????c bi???t!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="soDt"
                  label="S??? ??i???n tho???i"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p s??? ??i???n tho???i c???a b???n!",
                    },
                    {
                      pattern:
                        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                      message: "S??? ??i???n tho???i kh??ng ????ng!",
                    },
                  ]}
                >
                  <Input maxLength={10} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="hoTen"
                  label="H??? v?? t??n"
                  rules={[
                    {
                      required: true,
                      message: "Tr?????ng n??y kh??ng ???????c ????? tr???ng!",
                    },
                  ]}
                >
                  <AutoComplete onChange={() => {}} placeholder="H??? v?? t??n">
                    <Input />
                  </AutoComplete>
                </Form.Item>
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 p-3 w-1/3 rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                  >
                    ????ng k??
                  </button>
                </div>
              </Form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                B???n ???? c?? t??i kho???n?
                <NavLink
                  to="/"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-1"
                >
                  ????ng nh???p
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
