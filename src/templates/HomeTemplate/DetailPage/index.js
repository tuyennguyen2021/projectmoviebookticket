import React, { useEffect, useState } from "react";
import { Rate, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";
import { layThongTinChiTietPhimAction } from "../../../redux/actions/TheaterAction";

import bg from "../../../assets/images/backgroundBook.jpg";
const { TabPane } = Tabs;
function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  let [tabPosition] = useState("left");
  const state = useSelector((state) => state.listMovieReducer.filmDetail);
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);

  // if ((state.danhGia = null)) {
  //   window.location.reload();
  // }
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <div className="py-20 lg:py-20 px-4 md:px-4  w-full lg:max-w-full md:flex items-center">
          <div className=" w-60 mx-auto md:w-72 lg:w-80 flex-none overflow-hidden">
            <div>
              <img
                src={state.hinhAnh}
                alt="123"
                className="h-full w-full rounded-xl mb-4"
              />
            </div>
          </div>
          <div className="mx-0 lg:mx-[10%]  bg-black bg-opacity-25 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex  justify-between items-center leading-normal">
            <div className="text-white">
              <h1 className="text-white text-4xl  font-bold">
                {state.tenPhim}
              </h1>
              <p className="mt-4">
                Tình Trạng:{" "}
                {state.dangChieu === true ? "Đang Chiếu" : "Sắp Chiếu"}
              </p>
              <p className="mt-4">{state.moTa}</p>
              <p className="mt-4">
                Điểm IMBb:{" "}
                {state.danhGia && (
                  <Rate disabled defaultValue={state.danhGia} count={10} />
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full bg-white rounded-xl py-10 lg:w-4/5">
        {state.sapChieu === true ? (
          <div className="text-center text-red-600 text-xl">
            Phim chưa có lịch chiếu!!
          </div>
        ) : (
          <Tabs
            tabPosition={tabPosition}
            className="overflow-y-scroll h-[300px]"
          >
            {state.heThongRapChieu?.map((htr, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex items-center">
                      <img src={htr.logo} className="rounded-full w-14 ml-4" />
                      <div className="ml-4 hidden lg:block">
                        {htr.tenHeThongRap}
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {htr.cumRapChieu?.map((cumRap, index) => {
                    return (
                      <div className="mt-5" key={index}>
                        <div className="flex flex-row">
                          <img
                            style={{ width: 60, height: 60 }}
                            src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                            className="w-14"
                            alt="123"
                          />
                          <div className="ml-3">
                            <p className="font-bold">{cumRap.tenCumRap}</p>
                            <p>{cumRap.diaChi}</p>
                          </div>
                        </div>
                        <div className="thong-tin-lich-chieu grid grid-cols-4 ">
                          {cumRap.lichChieuPhim
                            ?.slice(0, 18)
                            .map((lichChieu, index) => {
                              return (
                                <NavLink
                                  to={`/checkout/${lichChieu.maLichChieu}`}
                                  key={index}
                                  className="mt-4"
                                >
                                  <button className="font-bold rounded-sm border border-gray-200 p-2 text-green-700  text-xs bg-[#fafafa] hover:text-[#fb4226] mr-2">
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </button>
                                </NavLink>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default Detail;
