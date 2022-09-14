import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { MAGRPHIM } from "../../../utils/config";
import { useNavigate, useParams } from "react-router-dom";
import {
  capNhatNguoiDungAction,
  layDanhSachLoaiNguoiDungAction,
  timKiemNguoiDungAction,
} from "../../../redux/actions/UsersAction";

export default function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { tk } = useParams();
  const { arrTypeUser } = useSelector((state) => state.quanLyNguoiDungReducer);
  const { userInfo } = useSelector((state) => state.quanLyNguoiDungReducer);
  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDungAction());
    dispatch(timKiemNguoiDungAction(tk));
  }, [dispatch, tk]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userInfo.taiKhoan,
      matKhau: userInfo.matKhau,
      email: userInfo.email,
      hoTen: userInfo.hoTen,
      soDT: userInfo.soDT,
      maNhom: MAGRPHIM,
      maLoaiNguoiDung: userInfo.maLoaiNguoiDung,
    },
    onSubmit: (values) => {
      dispatch(capNhatNguoiDungAction(values, navigate));
    },
  });
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Tài khoản">
          <Input
            disabled
            value={formik.values.taiKhoan}
            name="taiKhoan"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Mật khẩu">
          <Input.Password
            name="matKhau"
            value={formik.values.matKhau}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Email" type="email">
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Họ và Tên">
          <Input
            name="hoTen"
            value={formik.values.hoTen}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <Input
            name="soDT"
            value={formik.values.soDT}
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Loại tài khoản">
          <Select
            value={formik.values.maLoaiNguoiDung}
            onChange={(value) => formik.setFieldValue("maLoaiNguoiDung", value)}
          >
            {arrTypeUser.map((type, index) => {
              return (
                <Select.Option key={index} value={type.maLoaiNguoiDung}>
                  {type.tenLoai}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
