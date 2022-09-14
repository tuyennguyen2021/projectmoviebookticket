import React, { Fragment, useEffect, useState } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { USER_LOGIN } from "../../../utils/config";
import Swal from "sweetalert2";
import Navbar from "../../../components/Header/Navbar";
import bg from "../../../assets/images/backgroundBook.jpg";
import "./Checkout.css";
import _ from "lodash";
import { ThongTinDatVe } from "./_core/models/ThongTinDatVe";
import { Button, Steps, Tooltip } from "antd";
import {
  layChiTietPhongVeAction,
  datVeAction,
} from "../../../redux/actions/QuanLyDatVeAction";
import { useDispatch, useSelector } from "react-redux";
import { DAT_VE } from "../../../redux/constants";
import { CloseOutlined } from "@ant-design/icons";
import paypal from "../../../assets/images/P.svg";
import paypal2 from "../../../assets/images/PP.svg";
import { CheckCircleOutlined } from "@ant-design/icons";

function Checkout() {
  const [thanhtoan, setThanhtoan] = useState(false);
  const Content1 = () => {
    return (
      <div className="my-2">
        <Tooltip title="Màn hình cách dãy ghế đầu 2m">
          <div
            className="bg-white shadow-lg rounded-t-full"
            style={{ width: "100%", height: 28 }}
          >
            <h1 className="text-center text-[#753BBD] font-bold leading-8 mb-2">
              Màn Hình
            </h1>
          </div>
        </Tooltip>
        <div className="-mx-2 text-center">{renderSeats()}</div>
        <div className="container lg:ml-8 text-white">
          <h1 className="text-white">Ghi chú:</h1>
          <div className="grid grid-cols-5 -mt-3">
            <div className="flex items-center">
              <button className="ghe"></button>
              <span>Ghế trống</span>
            </div>
            <div className="flex items-center">
              <button className="ghe gheDangDat"></button>
              <span>Ghế đang chọn</span>
            </div>
            <div className="flex items-center">
              <button className="ghe gheDaDuocDat"></button>
              <span>Ghế bạn đã đặt</span>
            </div>
            <div className="flex items-center">
              <button className="ghe gheVip"></button>
              <span>Ghế VIP </span>
            </div>
            <div className="flex items-center">
              <button className="ghe gheDaDat"></button>
              <span>Ghế đã bán</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Content2 = () => {
    let classDaChon =
      thanhtoan === true
        ? "bg-[#753BBD] border-none hover:bg-white hover:text-[#753BBD] hover:font-bold leading-5"
        : "";
    return (
      <div className="mt-20">
        <div className="container ">
          <div className="row flex flex-col justify-between items-center">
            <div
              onClick={() => {
                setThanhtoan(true);
                Swal.fire({
                  title: "Bạn chọn giao dịch trực tiếp tại quầy",
                  icon: "success",
                  timer: 3000,
                });
                if (thanhtoan) {
                  Swal.fire({
                    title: "Bạn đã thanh toán trước đó",
                    icon: "warning",
                    timer: 3000,
                  });
                }
              }}
              class={`px-6 py-3 text-lg ${classDaChon} text-center text-white border-white border-2 rounded-full cursor-pointer mb-5 transition leading-5`}
            >
              Thanh toán tại quầy{" "}
              {thanhtoan == true ? (
                <span className="text-green-700 text-2xl font-bold">
                  <CheckCircleOutlined />
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="px-6 py-3 text-lg text-white hover:bg-white bg-[#753BBD] rounded-full cursor-pointer">
              <div
                onClick={() => {
                  Swal.fire({
                    title: "Lỗi..!",
                    text: "Hệ thống thanh toán đang bảo trì",
                    icon: "warning",
                    timer: 3000,
                  });
                }}
                className="flex items-center justify-around"
              >
                <img src={paypal} alt="123" className="mr-1" />
                <img src={paypal2} alt="123" />
              </div>
            </div>
            <div className="flex items-center py-3">
              <input
                type="checkbox"
                color="primary"
                disabled
                checked
                inputProps={{ "aria-label": "disabled checked checkbox" }}
                className="mr-2"
              />
              <div className="text-white">
                Tôi đồng ý điều khoản sử dụng và vé mua không thể hoàn lại .
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Content3 = () => {
    return (
      <div className="my-4 min-w-fit">
        <p className="text-white text-xl">
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
          <br />
          Hãy kiểm tra email để biết kết quả giao dịch.
          <br />
          Chúc bạn có một buổi xem phim vui vẻ , hẹn gặp các bạn tại rạp. <br />
          Bạn muốn kiểm tra lịch sử giao dịch hãy nhấn nút bên dưới.
        </p>
      </div>
    );
  };

  const { Step } = Steps;
  const steps = [
    {
      title: "Chọn Ghế",
      content: <Content1 />,
    },
    {
      title: "Chọn Phương Thức Thanh Toán",
      content: <Content2 />,
    },
    {
      title: "Hoàn Thành",
      content: <Content3 />,
    },
  ];
  const stylesContent = {
    backgroundImage: `url(${bg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "10",
    backgroundRepeat: "no-repeat",
  };

  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } =
    useSelector((state) => state.QuanLyDatVeReducer);

  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPhongVeAction(id));
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  console.log({ thongTinPhim });

  function renderSeats() {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe == "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat == true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let classGheDaDuocDat = "";

      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD != -1) {
        classGheDaDat = "gheDangDat";
      }

      if (danhSachGheDangDat.length === 5) {
        let timerInterval;
        Swal.fire({
          title: "Lưu ý!!!",
          html: "Bạn chỉ được phép đặt tối đa 5 ghế cùng một lúc thôi nhé :)",
          timer: 3000,
          timerProgressBar: false,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
      console.log(danhSachGheDangDat.length, "ghe length");

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDangDat} ${classGheDaDat} ${classGheDaDuocDat}`}
          >
            {ghe.daDat ? (
              <CloseOutlined
                className="font-black"
                style={{ marginBottom: 7.5, fontWeight: "bold" }}
              />
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  }

  let tienVePhim = danhSachGheDangDat
    .reduce((tongTien, ghe, index) => {
      return (tongTien += ghe.giaVe);
    }, 0)
    .toLocaleString();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  if (!localStorage.getItem(USER_LOGIN)) {
    return (
      Swal.fire({
        title: "Lỗi...",
        text: "Vui lòng đăng nhập để đặt vé!",
        icon: "warning",
      }) && <Navigate replace to="/" />
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ ...stylesContent }} className=" min-h-srceen pt-20">
        <section>
          <div className="container py-18">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-9">
                <div className="flex flex-col items-center mx-12 ">
                  <Steps
                    current={current}
                    size="small"
                    responsive="false"
                    className="w-full "
                  >
                    {steps.map((item) => (
                      <Step
                        key={item.title}
                        title={item.title}
                        className="py-2"
                      />
                    ))}
                  </Steps>
                  <div className="steps-content w-full">
                    {steps[current].content}
                  </div>
                  <div className="steps-action shadow-2xl">
                    {current === 0 && (
                      <Button
                        className="xacNhan"
                        onClick={() => {
                          if (danhSachGheDangDat.length > 0) {
                            next();
                            Swal.fire({
                              title: "Vui lòng chọn phương thức thanh toán",
                              icon: "warning",
                              text: "Bạn không thể chọn lại ghế khi đã chọn phương thức thanh toán",
                              confirmButtonText: "OK",
                            });
                          } else {
                            Swal.fire({
                              title: "Chọn tối thiểu 1 ghế để đặt vé",
                              icon: "warning",
                              timer: 3000,
                            });
                          }
                        }}
                      >
                        Xác nhận
                      </Button>
                    )}

                    {current === 1 && thanhtoan == true && (
                      <Button
                        className="xacNhan"
                        onClick={() => {
                          next();
                          const thongTinDatVe = new ThongTinDatVe();
                          thongTinDatVe.maLichChieu = id;
                          thongTinDatVe.danhSachVe = danhSachGheDangDat;
                          dispatch(datVeAction(thongTinDatVe));
                        }}
                      >
                        Đặt Vé
                      </Button>
                    )}
                    {current === steps.length - 1 && (
                      <NavLink to="/history">
                        <Button className="xacNhan shadow-lg" type="primary">
                          Lịch sử đặt vé
                        </Button>
                      </NavLink>
                    )}
                    {current == 1 && (
                      <Button
                        className="chonLai shadow-lg"
                        style={{
                          margin: "0 8px",
                        }}
                        onClick={() => {
                          if (thanhtoan === false) {
                            prev();
                          } else {
                            Swal.fire({
                              icon: "error",
                              title: "Bạn không thể chọn lại ghế",
                              timer: 3000,
                            });
                          }
                        }}
                      >
                        Chọn Lại
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-3 text-white h-full">
                <h1 className="text-white font-bold text-center text-2xl">
                  THÔNG TIN ĐẶT PHIM
                </h1>

                <div className="grid justify-items-center ">
                  <img
                    src={thongTinPhim.hinhAnh}
                    alt="123"
                    className="rounded-xl shadow-lg h-[260px]"
                  />
                </div>

                <h3 className="text-xl text-white my-4 font-bold">
                  Phim: {thongTinPhim.tenPhim}
                </h3>
                <p className="">
                  Địa Điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}{" "}
                </p>
                <p>
                  Ngày Chiếu:{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}{" "}
                </p>
                <hr />
                <div>
                  <p>Email: {userLogin.email}</p>
                </div>
                <div>
                  <p>Số Điện Thoại: {userLogin.soDT}</p>
                </div>
                <div>
                  <p>Tài Khoản: {userLogin.taiKhoan}</p>
                </div>
                <hr />
                <div className="flex flex-row my-4">
                  <div className="w-4/5">
                    <span className="text-white font-semibold">Ghế:</span>
                    {_.sortBy(danhSachGheDangDat, ["stt"]).map(
                      (gheDD, index) => {
                        return (
                          <span
                            key={index}
                            className="text-green-600 text-xl ml-2"
                          >
                            {gheDD.stt}
                          </span>
                        );
                      }
                    )}
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-white text-lg">{tienVePhim}đ</span>
                  </div>
                </div>
                <hr />
                <div className="my-4 font-bold text-xl">
                  <p>Tổng Tiền: {tienVePhim}đ</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Checkout;
