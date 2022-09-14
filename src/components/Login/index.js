import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  console.log(userLogin, "userLogin");
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Không được để trống"),
      matKhau: Yup.string().required("Không được để trống"),
    }),
    onSubmit: (values) => {
      const action = dangNhapAction(values, navigate);
      dispatch(action);
      console.log("value", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="absolute z-10">
      <div className="flex-col">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-3xl text-white">ĐĂNG NHẬP NHANH</h3>
        </div>
        <div className="space-y-5 w-72">
          <div className="space-y-2">
            {formik.errors.taiKhoan && (
              <p className="text-red-600 -mb-1 -mt-4">
                (*){formik.errors.taiKhoan}
              </p>
            )}
            <input
              name="taiKhoan"
              onChange={formik.handleChange}
              className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              placeholder="Tài khoản"
            />
          </div>
          <div className="space-y-2">
            {formik.errors.matKhau && (
              <p className="text-red-600 mb-0 -mt-4">
                (*){formik.errors.matKhau}
              </p>
            )}
            <input
              name="matKhau"
              type="password"
              onChange={formik.handleChange}
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              placeholder="Mật Khẩu"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flexjustify-center text-white bg-[#753BBD] hover:bg-white hover:text-[#753BBD] px-6 py-3  rounded-md  font-semibold"
            >
              ĐĂNG NHẬP
            </button>

            <div className="text-base text-white">
              <a href="#" className="">
                Quên mật khẩu
              </a>
            </div>
          </div>
          <div className="mt-3">
            <div>
              <NavLink to="/register">
                <button className="px-10 py-3 bg-[#753BBD] text-white rounded-md font-semibold text-sm hover:bg-white hover:text-[#753BBD]">
                  ĐĂNG KÝ THÀNH VIÊN
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
