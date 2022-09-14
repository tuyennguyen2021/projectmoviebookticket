import React, { useEffect, useRef } from "react";
import { Carousel } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getBannerAction } from "../../redux/actions/BannerAction";

const contentStyle = {
  height: "100%",
  //   lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

function Banner() {
  const { arrImg } = useSelector((state) => state.bannerReducer);
  const dispatch = useDispatch();
  console.log(arrImg, "arrImg");
  const ref = useRef();

  useEffect(() => {
    dispatch(getBannerAction());
  }, [dispatch]);

  const renderImgBanner = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              className="w-full opacity-0"
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="relative">
      <button
        className="absolute z-10 left-1 top-2/4 -translate-y-2/4 text-white opacity-60 hover:opacity-95"
        onClick={() => {
          ref.current.prev();
        }}
      >
        <DoubleLeftOutlined className="text-3xl" />
      </button>
      <Carousel draggable ref={ref} dots={false} infinite>
        {renderImgBanner()}
      </Carousel>
      <button
        className="absolute z-10 right-1 top-2/4 -translate-y-2/4 text-white opacity-60 hover:opacity-95"
        onClick={() => {
          ref.current.next();
        }}
      >
        <DoubleRightOutlined className="text-3xl text-white" />
      </button>
    </div>
  );
}

export default Banner;
