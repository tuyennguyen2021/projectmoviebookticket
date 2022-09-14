import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  layDanhSachLoaiNguoiDungAction,
  themNguoiDung,
} from "../../../redux/actions/UsersAction";
import { MAGRPHIM } from "../../../utils/config";

export default function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { arrTypeUser } = useSelector((state) => state.quanLyNguoiDungReducer);
  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDungAction());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDT: "",
      maNhom: MAGRPHIM,
      maLoaiNguoiDung: "KhachHang",
    },
    onSubmit: (values) => {
      dispatch(themNguoiDung(values, navigate));
    },
  });
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        autoComplete="off"
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            { required: true, message: "Tài khoản không được để trống!" },
            { min: 4, message: "Tài khoản cần tối thiểu 5 ký tự" },
          ]}
        >
          <Input name="taiKhoan" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[{ required: true, message: "Mật khẩu không được để trống" }]}
        >
          <Input.Password name="matKhau" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          type="email"
          rules={[
            {
              required: true,
              message: "Email không được để trống",
            },
            {
              type: "email",
              message: "Email không đúng định dạng",
            },
          ]}
        >
          <Input name="email" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item
          label="Họ và Tên"
          name="hoTen"
          rules={[{ required: true, message: "Họ và Tên không được để trống" }]}
        >
          <Input name="hoTen" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="soDT"
          rules={[
            { required: true, message: "Số điện thoại không được để trống" },
          ]}
        >
          <Input name="soDT" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Loại tài khoản">
          <Select
            name="maLoaiNguoiDung"
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
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
