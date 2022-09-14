import React from "react";
import { NavLink } from "react-router-dom";
import "./CardFilm.css";
import TrailerView from "../TrailerView";
import { PlayCircleFilled } from "@ant-design/icons";

export default function CardFilm({ props }) {
  const phim = props;
  return (
    <section className="page-contain">
      <div className="data-card ">
        <div className="rounded-lg h-[320px]">
          <div
            className="btnPlayTrailer cursor-pointer"
            onClick={() => {
              TrailerView(phim.trailer);
            }}
          >
            <PlayCircleFilled className="hover:scale-125" />
          </div>
          <img
            className="h-full w-full opacity-100  rounded-lg"
            src={phim.hinhAnh}
            alt={phim.tenPhim}
          />
        </div>
        <h4 className="text-center font-bold">
          {phim.tenPhim.split(" ").length > 3 ? (
            <span>{phim.tenPhim.split(" ").slice(0, 3).join(" ")} ...</span>
          ) : (
            <span>{phim.tenPhim}</span>
          )}
        </h4>
        <div className="grid grid-cols-1 mt-[-4rem]">
          <NavLink to={`/detail/${phim.maPhim}`} className="cardin">
            <button className="bg-white text-[#753BBD] py-2 px-4 text-xl font-bold rounded text-center hover:scale-90 w-full">
              Đặt Vé
            </button>
          </NavLink>
          {/* <button
            className="cardin bg-transparent px-4 border rounded"
            onClick={() => {
              TrailerView(`${phim.trailer}`);
            }}
          >
            <span className="trailer__hover">Xem Trailer</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}
