import React, { useEffect } from "react";
import "./history.css";
import { layThongTinNguoiDungAction } from "../../redux/actions/UsersAction";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Navbar from "../Header/Navbar";
import bg from "../../assets/images/backgroundBook.jpg";

function BookingHistory() {
  const { thongTinNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinNguoiDungAction());
  }, []);

  const contentStyle = {
    backgroundImage: `url(${bg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "10",
    backgroundRepeat: "no-repeat",
  };

  const renderTicket = () => {
    return thongTinNguoiDung?.thongTinDatVe?.map((ticket, index) => {
      const diaDiem = _.first(ticket.danhSachGhe);
      return (
        <div
          className="flex justify-around lg:w-1/3 md:w-1/2 w-full border-b pb-10 mb-10 border-gray-200"
          key={index}
        >
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src={ticket.hinhAnh} alt={ticket.hinhAnh} />
          </div>
          <div className="flex-grow sm:text-left text-left mt-6 sm:mt-0 text-white mr-2">
            <h2 className=" text-white text-xl font-black mb-2">
              {ticket.tenPhim}
            </h2>
            <p className="leading-relaxed text-base">
              Ngày đặt: {moment(ticket.ngayDat).format("hh:mm A DD-MM-YYYY")}
            </p>
            <p className="leading-relaxed text-base">{ticket.tenHeThongRap}</p>
            <p className="leading-relaxed text-base">
              Địa Điểm: {diaDiem.tenHeThongRap} - {diaDiem.tenCumRap}
            </p>
            <p className="leading-relaxed text-base">
              Số Ghế:
              {ticket.danhSachGhe.map((ghe, index) => {
                return (
                  <span
                    key={index}
                    className="ml-2 text-white text-md font-bold"
                  >
                    {ghe.tenGhe}
                  </span>
                );
              })}
            </p>
            <p className="leading-relaxed text-base">Thanh Toán Tại Quầy</p>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <Navbar />
      <div style={{ ...contentStyle }} className="min-h-screen pt-28">
        <h1 className="text-center text-white font-bold text-3xl ">
          Lịch Sử Đặt Vé
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap ">
            {renderTicket()}
          </div>
        </section>
      </div>
    </>
  );
}

export default BookingHistory;
