import React, { useEffect } from "react";
import Slider from "react-slick";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import CardFilm from "../FilmItem/CardFilm";
import { getListMovieAction } from "../../redux/actions/ListMovieAction";
import styleSlick from "./MoviesList.module.css";

const SlickArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};
const SlickArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

function MovieLists({ props }) {
  const settings = {
    className: "center variable-width",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SlickArrowRight />,
    preArrow: <SlickArrowLeft />,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          slidesPerRow: 1,
          infinite: true,
          dots: true,
          nextArrow: <div />,
          preArrow: <div />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          // dots: true,
          nextArrow: <div />,
          preArrow: <div />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <div />,
          preArrow: <div />,
        },
      },
    ],
  };
  const { arrListMovie } = useSelector((state) => state.listMovieReducer);
  const filmDangChieu = arrListMovie.filter((item) => item.dangChieu === true);
  const filmSapChieu = arrListMovie.filter((item) => item.sapChieu === true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMovieAction());
  }, []);

  const renderFilm = (arr) => {
    return arr.map((item) => {
      console.log(item, "item");
      return (
        <div key={item.maPhim}>
          <CardFilm props={item} />
        </div>
      );
    });
  };
  return (
    <div className="relative">
      <div className="container mx-auto">
        <Slider {...settings}>
          {props ? renderFilm(filmDangChieu) : renderFilm(filmSapChieu)}
        </Slider>
      </div>
    </div>
  );
}

export default MovieLists;
