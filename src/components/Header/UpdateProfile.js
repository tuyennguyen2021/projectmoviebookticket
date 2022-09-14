import React from "react";
import { useFormik, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { capNhatNguoiDungActionForUser } from "../../redux/actions/UsersAction";
import { MAGRPHIM } from "../../utils/config";

function UpdateProfile() {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung.taiKhoan,
      matKhau: thongTinNguoiDung.matKhau,
      email: "",
      soDT: "",
      maNhom: MAGRPHIM,
      maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
      hoTen: "",
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required("Không được để trống"),
      email: Yup.string().required("Không được để trống"),
      soDT: Yup.string().required("Không được để trống"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const action = capNhatNguoiDungActionForUser(values, navigate);
      dispatch(action);
      values.hoTen = "";
      values.email = "";
      values.soDT = "";
      setSubmitting(false);
      console.log("value", values);
    },
  });

  return (
    <Formik>
      <Form onSubmit={formik.handleSubmit} className="absolute z-10">
        <div className="flex-col">
          <div className="mb-4 text-center">
            <h3 className="font-semibold text-3xl text-white text-left">
              PROFILE <span className="text-sm">/Cập Nhật thông Tin</span>
            </h3>
          </div>
          <div className="space-y-5 w-72">
            <div className="space-y-2">
              {formik.errors.hoTen && (
                <p className="text-red-600 -mb-1 -mt-4">
                  (*){formik.errors.hoTen}
                </p>
              )}
              <input
                value={formik.values.hoTen}
                name="hoTen"
                type="text"
                onChange={formik.handleChange}
                className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Họ Tên"
              />
            </div>
            <div className="space-y-2">
              {formik.errors.email && (
                <p className="text-red-600 mb-0 -mt-4">
                  (*){formik.errors.email}
                </p>
              )}
              <input
                value={formik.values.email}
                name="email"
                type="email"
                onChange={formik.handleChange}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2">
              {formik.errors.soDT && (
                <p className="text-red-600 mb-0 -mt-4">
                  (*){formik.errors.soDT}
                </p>
              )}
              <input
                value={formik.values.soDT}
                name="soDT"
                type="type"
                onChange={formik.handleChange}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Số Điện Thoại"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  formik.resetForm();
                }}
                type="reset"
                className="flex justify-center text-white bg-[#753BBD] hover:bg-white hover:text-[#753BBD] px-6 py-3  rounded-md  font-semibold"
              >
                RESET ALL
              </button>
              <button
                type="submit"
                className="flex justify-center text-white bg-[#753BBD] hover:bg-white hover:text-[#753BBD] px-6 py-3  rounded-md  font-semibold"
              >
                CẬP NHẬT
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default UpdateProfile;
