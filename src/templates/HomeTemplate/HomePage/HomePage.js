import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import styleContent from "./HomePage.module.css";
import MovieLists from "../../../components/MoviesListSlick/MovieLists";
import { useDispatch, useSelector } from "react-redux";
import { getListMovieAction } from "../../../redux/actions/ListMovieAction";
import SliceHome from "../../../components/HomeSilder";
import PromoNews from "../HomePromoNew/PromoNews";
import Contact from "../../../components/Contact";
import "./bookingMoviePage.css";
import $ from "jquery";
import { layDanhSachHeThongRapAction } from "../../../redux/actions/TheaterAction";
import { CloseCircleOutlined } from "@ant-design/icons";
import img1 from "../../../assets/images/tap2.png";
import TheaterListMovie from "../../../components/TheaterList/TheaterListMovie";
import Loading from "../../../components/Loading/Loading";

const { TabPane } = Tabs;
function HomePage() {
  const [dangChieu, setDangChieu] = useState(true);
  const DangChieu = (value) => setDangChieu(value);

  const { heThongRapChieu } = useSelector((state) => state.listTheaterReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachHeThongRapAction());
    dispatch(getListMovieAction());
  }, []);

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".bookTheater").addClass("hien");
    } else if ($(this).scrollTop() < 600) {
      $(".bookTheater").removeClass("hien");
    }
  });

  const handleClickBookTheater = () => {
    if ($(".bookTheater-div") !== null && $(".bookTheater-overlay") !== null) {
      $(".bookTheater-div").addClass("bookTheaterdichuyen");
      $(".bookTheater-overlay").addClass("overlaydichuyen");
    }
  };

  const handleCloseBookTheater = () => {
    if ($(".bookTheater-div") !== null && $(".bookTheater-overlay") !== null) {
      $(".bookTheater-div").removeClass("bookTheaterdichuyen");
      $(".bookTheater-overlay").removeClass("overlaydichuyen");
    }
  };
  return (
    <div className="fullPage" id="phimdangchieu">
      <SliceHome />
      <div className={styleContent.slickHomecss}>
        <div className={`mx-auto slickHomecss`}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane
              tab={<p onClick={() => DangChieu(true)}>Phim Đang Chiếu</p>}
              key="1"
            >
              <MovieLists props={dangChieu} />
            </TabPane>
            <TabPane
              tab={<p onClick={() => DangChieu(false)}>Phim Sắp Chiếu</p>}
              key="2"
            >
              <MovieLists props={dangChieu} />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <PromoNews />
      <Contact />
      <div className="bookTheater hidden lg:block">
        <div className="bookTheater--navbar" onClick={handleClickBookTheater}>
          <div className="bookTheater--navbar__text">CỤM RẠP</div>
          <div className="bookTheater--navbar__tap">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="bookTheater-div hidden lg:block">
        <div className="bookTheater-div_close" onClick={handleCloseBookTheater}>
          <CloseCircleOutlined />
        </div>
        <div className="bookTheater-div_full">
          <TheaterListMovie heThongRapChieu={heThongRapChieu} />
        </div>
      </div>

      <div className="bookTheater-overlay hidden lg:block"></div>
    </div>
  );
}

export default HomePage;
