import React, { useEffect, useRef, useState } from "react";
import { useFormik, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { MAGRPHIM } from "../../utils/config";
import Swal from "sweetalert2";
import { capNhatNguoiDungActionForUser } from "../../redux/actions/UsersAction";
import { quanLyNguoiDungService } from "../../services/UsersService";

function UpdateProfilePW() {
  const [infoUser, setInfouser] = useState({});
  useEffect(() => {
    quanLyNguoiDungService.layThongTinNguoiDung().then((res) => {
      setInfouser(res.data.content);
    });
  }, []);

  console.log(infoUser, "infoUser");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: infoUser.taiKhoan,
      matKhauCu: "",
      matKhau: "",
      matKhauNhapLai: "",
      email: infoUser.email,
      soDT: infoUser.soDT,
      maNhom: MAGRPHIM,
      maLoaiNguoiDung: infoUser.maLoaiNguoiDung,
      hoTen: infoUser.hoTen,
    },
    validationSchema: Yup.object({
      matKhauCu: Yup.string().required("Không được để trống"),
      matKhau: Yup.string().required("Không được để trống"),
      matKhauNhapLai: Yup.string()
        .required("Không được để trống")
        .oneOf([Yup.ref("matKhau"), null], "Mật khẩu không trùng nhau"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (infoUser.matKhau === values.matKhauCu) {
        let action = await dispatch(
          capNhatNguoiDungActionForUser(values, navigate)
        );
        action &&
          Swal.fire({
            title: "Đổi mật khẩu thành công",
            icon: "success",
            timer: 1500,
          });
      } else {
        Swal.fire({
          title: "Mật khẩu cũ không đúng",
          icon: "warning",
          timer: 1500,
        });
      }
      resetForm();
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="absolute z-10">
        <div className="flex-col">
          <div className="mb-4 text-center">
            <h3 className="font-semibold text-3xl text-white text-left">
              PROFILE <span className="text-sm">/Cập nhật mật khẩu</span>
            </h3>
          </div>
          <div className="space-y-5 w-72">
            <div className="space-y-2">
              {formik.errors.matKhauCu && (
                <p className="text-red-600 -mb-1 -mt-4">
                  (*){formik.errors.matKhauCu}
                </p>
              )}
              <input
                value={formik.values.matKhauCu}
                name="matKhauCu"
                type="password"
                onChange={formik.handleChange}
                className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Mật khẩu cũ"
              />
            </div>
            <div className="space-y-2">
              {formik.errors.matKhau && (
                <p className="text-red-600 mb-0 -mt-4">
                  (*){formik.errors.matKhau}
                </p>
              )}
              <input
                value={formik.values.matKhau}
                name="matKhau"
                type="text"
                onChange={formik.handleChange}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Mật khẩu mới"
              />
            </div>
            <div className="space-y-2">
              {formik.errors.matKhauNhapLai && (
                <p className="text-red-600 mb-0 -mt-4">
                  (*){formik.errors.matKhauNhapLai}
                </p>
              )}
              <input
                value={formik.values.matKhauNhapLai}
                name="matKhauNhapLai"
                type="password"
                onChange={formik.handleChange}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Nhập lại mật khẩu mới"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="flex justify-center text-white bg-[#753BBD] hover:bg-white hover:text-[#753BBD] px-6 py-3  rounded-md  font-semibold"
              >
                CẬP NHẬT
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateProfilePW;
