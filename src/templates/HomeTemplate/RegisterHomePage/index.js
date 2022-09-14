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
              ĐĂNG KÝ
            </h3>

            <div className="mt-12">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                onFinishFailed={({ values, errorFields, outOfDate }) => {
                  console.log("dữ liệu submit không đúng", values);
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
                      message: "Email không hợp lệ!",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập email của bạn!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Mật khẩu"
                  tooltip="Mật khẩu ít nhất có 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự số, 1 ký tự đặc biệt và dài từ 8 đến 10 ký tự!"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu của bạn!",
                    },
                    {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                      message: "Mật khẩu không đủ mạnh!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="nhapLaiMatKhau"
                  label="Nhập lại mật khẩu"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập lại mật khẩu!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("Mật khẩu nhập lại không đúng!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="taiKhoan"
                  label="Tài khoản"
                  tooltip="Tài khoản không chứa dấu và ký tự đặc biệt!"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tài khoản của bạn!",
                      whitespace: true,
                    },
                    {
                      pattern: /^[a-zA-Z0-9]*$/,
                      message: "Tài khoản không chứa dấu và ký tự đặc biệt!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="soDt"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại của bạn!",
                    },
                    {
                      pattern:
                        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                      message: "Số điện thoại không đúng!",
                    },
                  ]}
                >
                  <Input maxLength={10} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name="hoTen"
                  label="Họ và tên"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống!",
                    },
                  ]}
                >
                  <AutoComplete onChange={() => {}} placeholder="Họ và tên">
                    <Input />
                  </AutoComplete>
                </Form.Item>
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 p-3 w-1/3 rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                  >
                    Đăng ký
                  </button>
                </div>
              </Form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Bạn đã có tài khoản?
                <NavLink
                  to="/"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-1"
                >
                  Đăng nhập
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
