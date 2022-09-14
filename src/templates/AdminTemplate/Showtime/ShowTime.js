import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import { quanLyDatVeService } from "../../../services/QuanLyDatVeService";
import { theaterService } from "../../../services/TheaterService";
import { layThongTinHeThongRapAction } from "../../../redux/actions/TheaterAction";
import { useDispatch, useSelector } from "react-redux";

export default function ShowTime() {
  const navigate = useNavigate();
  const { listHeThongRap } = useSelector((state) => state.listTheaterReducer);
  console.log(listHeThongRap, "listHeThongRap");
  const dispatch = useDispatch();
  const [state, setState] = useState({
    cumRapChieu: [],
  });
  /// maCumRap
  let { id, tenphim } = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        console.log(result, "result456");
        if (result.data.statusCode === 200) {
          await Swal.fire({
            title: "Tạo lịch chiếu mới thành công!",
            icon: "success",
            html: "Tự động chuyển sang danh sách phim sau 3 giây",
            timer: 3000,
            timerProgressBar: true,
            confirmButtonText: "Ok",
          });
          await navigate("/admin/films", { replace: true });
        }
      } catch (errors) {
        Swal.fire({
          title: "Error!",
          text: errors.response.data.content,
          icon: "error",
          confirmButtonText: "Thử lại",
        });
      }
    },
  });

  useEffect(() => {
    // return async () => {
    //   try {
    //     let result = await theaterService.layThongTinHeThongRap();
    //     setState({
    //       ...state,
    //       heThongRapChieu: result.data.content,
    //     });
    //     console.log(result, "hethongrap");
    //   } catch (error) {
    //     console.log(error, "error");
    //   }
    // };
    dispatch(layThongTinHeThongRapAction());
  }, []);

  const convertSelectHTR = () => {
    return listHeThongRap?.map((htr) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  const handleChangeHeThongRap = async (value) => {
    try {
      let result = await theaterService.layThongTinCumRap(value);
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
      console.log(result, "hethongcumrap");
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onChangeOkDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onchangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  return (
    <div className="container">
      <h3 className="text-2xl text-blue-400 text-center mb-10">
        Tạo lịch chiếu - {tenphim}
      </h3>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertSelectHTR()}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleChangeCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeOkDate}
            onOk={onChangeOkDate}
          />
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber onChange={onchangeInputNumber} />
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
