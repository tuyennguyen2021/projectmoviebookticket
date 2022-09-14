import React from "react";
import { Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { USER_LOGIN } from "../../utils/config";
import Swal from "sweetalert2";

const { TabPane } = Tabs;

const styleCss = {
  display: "-webkit-box",
  display: "block",
  height: "1rem",
  fontSize: "0.9rem",
  lineHeight: "1",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  marginTop: "0.7rem",
};

function CumRap({ listCumRap }) {
  return (
    <Tabs tabPosition="left" tabBarStyle={{ width: "320px" }}>
      {Array.isArray(listCumRap) &&
        listCumRap.map((rapPhim, index) => (
          <TabPane
            tab={
              <div className="flex w-full">
                <div className="ml-2 w-4/5">
                  <h3 style={{ ...styleCss }} className="text-white font-bold">
                    {rapPhim.tenCumRap}
                  </h3>
                </div>
              </div>
            }
            key={index}
          >
            {rapPhim.danhSachPhim?.map((phim, index) => (
              <Fragment key={index}>
                <div className="max-w-sm w-full lg:max-w-full lg:flex mt-2">
                  <div className="h-14 lg:h-14 lg:w-12 flex-none bg-cover  lg:rounded-t-none text-center overflow-hidden">
                    <img src={phim.hinhAnh} alt={phim.tenPhim} />
                  </div>
                  <div className="flex-grow border-gray-400 lg:border-l-0  lg:border-gray-400 bg-transparent rounded-b lg:rounded-b-none lg:rounded-r p-0 flex flex-col justify-between leading-normal ml-3">
                    <div>
                      <span className="text-white font-semibold mb-2 text-base hover:text-[#fb4226]">
                        {phim.tenPhim}
                      </span>
                      <p className="text-white text-md mt-2">
                        {rapPhim.diaChi}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-2 border-b border-gray-400">
                  {phim.lstLichChieuTheoPhim
                    ?.slice(0, 12)
                    .map((lichChieu, index) => (
                      <NavLink
                        to={`/checkout/${lichChieu.maLichChieu}`}
                        key={index}
                      >
                        <button className="font-bold rounded-sm border border-gray-200 p-2 text-green-700  text-xs bg-[#fafafa] hover:text-[#fb4226]">
                          {moment(lichChieu.ngayChieuGioChieu).format(
                            "hh:mm A"
                          )}
                        </button>
                      </NavLink>
                    ))}
                </div>
              </Fragment>
            ))}
          </TabPane>
        ))}
    </Tabs>
  );
}

export default CumRap;
