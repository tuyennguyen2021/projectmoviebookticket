import React from "react";
import { NavLink } from "react-router-dom";
import erImg from "../../assets/images/page404.jpg";

function Page404() {
  return (
    <div className="w-full h-screen flex justify-center text-center flex-col pr-10 ">
      <img src={erImg} />
      <NavLink to="/">
        <button className="mt-10 bg-yellow-500 text-white px-4 py-6 rounded-lg">
          Quay lại trang chủ
        </button>
      </NavLink>
    </div>
  );
}

export default Page404;
