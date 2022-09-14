import React, { useRef } from "react";
import { Carousel, Rate } from "antd";
import movie1 from "../../assets/videos/movie1.mp4";
import movie2 from "../../assets/videos/movie2.mp4";
import movie3 from "../../assets/videos/movie3.mp4";
import {
  PlayCircleFilled,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import TrailerView from "../TrailerView";
import { NavLink } from "react-router-dom";

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const movies = [
  {
    id: 9174,
    title: "Curella",
    movieDemo: movie1,
    trailerLink: "https://www.youtube.com/embed/hNCmb-4oXJA",
    danhGia: 8,
  },
  {
    id: 8896,
    title: "Doctor Strange In The Multiverse of Madness",
    movieDemo: movie2,
    trailerLink: "https://www.youtube.com/embed/hNCmb-4oXJA",
    danhGia: 9,
  },
  {
    id: 9162,
    title: "Turning Red",
    movieDemo: movie3,
    trailerLink: "https://www.youtube.com/embed/XdKzUbAiswE",
    danhGia: 10,
  },
];
function SliceHome() {
  const ref = useRef();
  const renderMovieList = () => {
    return movies.map((movie, index) => {
      return (
        <div key={index} className="relative">
          <video src={movie.movieDemo} loop muted autoPlay />
          <div className="absolute z-50 bottom-0 lg:bottom-10 left-10 text-white">
            <h1 className="text-white text-base sm:text-3xl font-bold lg:text-6xl">
              {movie.title}
            </h1>
            <div className="text-base hidden lg:block lg:text-xl my-2 ">
              IMBb:{" "}
              <span className="hidden lg:block">
                <Rate disabled defaultValue={movie.danhGia} count={10} />
              </span>
            </div>

            <button
              className="flex items-center justify-between text-sm lg:text-xl hover:scale-125"
              onClick={() => {
                TrailerView(movie.trailerLink);
              }}
            >
              <PlayCircleFilled className="pr-3 text-2xl" />
              <span>Xem Trailer</span>
            </button>
            <NavLink to={`/detail/${movie.id}`}>
              <button className="border-solid border-2 text-center text-xl rounded-lg py-2 my-4 w-20 lg:w-40 hover:scale-110">
                Đặt Vé
              </button>
            </NavLink>
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
      <Carousel
        autoplay
        autoplaySpeed={20000}
        ref={ref}
        dots={false}
        infinite={true}
        lazyLoad={true}
      >
        {renderMovieList()}
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

export default SliceHome;
