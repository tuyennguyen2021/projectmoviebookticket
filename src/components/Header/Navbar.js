import { CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Img } from "../../assets/images/Images";
import "./Navbar.css";
import $ from "jquery";
import Login from "../Login";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../utils/config";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Dropdown, Space, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinNguoiDungAction } from "../../redux/actions/UsersAction";
import UpdateProfile from "./UpdateProfile";
import UpdateProfilePW from "./UpdateProfilePW";

function Navbar() {
  const handleClickLogin = () => {
    if ($(".login-div") !== null) {
      $(".login-div").addClass("logindichuyen");
    }
  };

  const handleCloseLogin = () => {
    if ($(".login-div") !== null) {
      $(".login-div").removeClass("logindichuyen");
    }
  };

  const handleClickMenu = () => {
    if ($(".menu-div") !== null) {
      $(".menu-div").addClass("menudichuyen");
    }
  };

  const handleCloseMenu = () => {
    if ($(".menu-div") !== null) {
      $(".menu-div").removeClass("menudichuyen");
    }
  };

  const handleClickProfile = () => {
    if ($(".profile-div") !== null) {
      $(".profile-div").addClass("profiledichuyen");
    }
  };

  const handleCloseProfile = () => {
    if ($(".profile-div") !== null) {
      $(".profile-div").removeClass("profiledichuyen");
    }
  };
  const handleClickUpdateInfo = () => {
    if ($(".updateinfo-div") !== null) {
      $(".updateinfo-div").addClass("updateinfodichuyen");
    }
  };

  const handleCloseUpdateInfo = () => {
    if ($(".updateinfo-div") !== null) {
      $(".updateinfo-div").removeClass("updateinfodichuyen");
    }
  };

  const handleClickUpdatePassword = () => {
    if ($(".updatepassword-div") !== null) {
      $(".updatepassword-div").addClass("updatepassworddichuyen");
    }
  };

  const handleCloseUpdatePassword = () => {
    if ($(".updatepassword-div") !== null) {
      $(".updatepassword-div").removeClass("updatepassworddichuyen");
    }
  };

  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  const menu =
    userLogin.maLoaiNguoiDung === "QuanTri" ? (
      <Menu
        items={[
          {
            label: (
              <button onClick={handleClickProfile}>Thông tin tài khoản</button>
            ),
            key: "0",
          },
          {
            label: <NavLink to="/history">Lịch Sử Đặt Vé</NavLink>,
            key: "1",
          },

          {
            label: <NavLink to="/admin">Quản Trị</NavLink>,
            key: "2",
          },
          {
            label: (
              <NavLink
                to="/"
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  window.location.reload();
                }}
              >
                Đăng Xuất
              </NavLink>
            ),
            key: "3",
          },
        ]}
      />
    ) : (
      <Menu
        items={[
          {
            label: (
              <button onClick={handleClickProfile}>Thông tin tài khoản</button>
            ),
            key: "0",
          },
          {
            label: <NavLink to="/history">Lịch Sử Đặt Vé</NavLink>,
            key: "1",
          },

          {
            label: (
              <NavLink
                to="/"
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  window.location.reload();
                }}
              >
                Đăng Xuất
              </NavLink>
            ),
            key: "2",
          },
        ]}
      />
    );

  const { thongTinNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungReducer
  );

  console.log(thongTinNguoiDung, userLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);
  return (
    <>
      <div className="absolute z-50 top-0 left-0 right-0 text-[#753BBD] font-bold">
        <nav className="flex items-center justify-between bg-transparent mx-auto">
          <div className="flex min-w-fit my-5 ml-6">
            <button
              className="px-6 w-full py-3 bg-[#753BBD] shadow-lg text-white rounded-md font-semibold text-xl hover:bg-white hover:text-[#753BBD]"
              onClick={handleClickMenu}
            >
              MENU
            </button>
          </div>
          {/* Brand logo */}
          <div className="grid justify-items-center">
            <NavLink className="flex min-w-fit px-2" to="/">
              <img src={Img[0]} alt="logo1" width="100" />
            </NavLink>
          </div>
          {/* tai khoản */}
          {_.isEmpty(userLogin) ? (
            <div className="flex min-w-fit my-5 mr-6">
              <button
                className="px-6 w-full shadow-lg py-3 bg-[#753BBD] text-white rounded-md font-semibold text-xl hover:bg-white hover:text-[#753BBD]"
                onClick={handleClickLogin}
              >
                ĐĂNG NHẬP
              </button>
            </div>
          ) : (
            <Dropdown overlay={menu} trigger={["click"]} className="">
              <a onClick={(e) => e.preventDefault()}>
                <Space className="text-white my-5 text-xl mr-6">
                  <div className="flex items-center ">
                    <UserOutlined />
                    <div className="ml-3">{userLogin.taiKhoan}</div>
                  </div>
                </Space>
              </a>
            </Dropdown>
          )}
        </nav>
      </div>
      {/* popup login */}
      <div className="login-div">
        <div className="login-div_close" onClick={handleCloseLogin}>
          <CloseCircleOutlined />
        </div>
        <div className="login-div_full">
          <Login />
        </div>
      </div>
      {/* popup menu */}
      <div className="menu-div">
        <div className="menu-div_close" onClick={handleCloseMenu}>
          <CloseCircleOutlined />
        </div>
        <div className="menu-div_full text-left text-white text-3xl">
          <h2 className="text-white font-extrabold mb-3">MENU</h2>
          <hr width="100%" align="left" color="white" />
          <ul className="lg:w-auto ">
            <li className="block hover:scale-90 my-4">
              <NavLink to="/" className="p-2 ">
                TRANG CHỦ
              </NavLink>
            </li>
            <li className="block hover:scale-90 my-4">
              <Link
                to="phimdangchieu"
                className="p-2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                PHIM ĐANG CHIẾU
              </Link>
            </li>
            <li className="block hover:scale-90 my-4">
              <Link
                to="tintuc"
                className="p-2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                TIN TỨC
              </Link>
            </li>
            <li className="block hover:scale-90 my-4">
              <Link
                to="lienhe"
                className="p-2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                LIÊN HỆ
              </Link>
            </li>
            <li className="block hover:scale-90 my-4">
              <NavLink to="" className="p-2">
                TUYỂN DỤNG
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* popup profile */}
      <div className="profile-div">
        <div className="profile-div_close" onClick={handleCloseProfile}>
          <CloseCircleOutlined />
        </div>
        <div className="profile-div_full text-left text-white">
          <h2 className="text-white text-3xl font-extrabold mb-3">PROFILE</h2>
          <div className="border-white border py-2 px-10 rounded-lg text-base">
            <ul className="lg:w-auto -ml-8">
              <li className="block my-4">
                <p>Tài Khoản: {thongTinNguoiDung.taiKhoan}</p>
              </li>
              <li className="block my-4">
                <p>Họ Tên: {thongTinNguoiDung.hoTen}</p>
              </li>
              <li className="block my-4">
                <p>Email: {thongTinNguoiDung.email}</p>
              </li>
              <li className="block my-4">
                <p>Số Điện Thoại: {thongTinNguoiDung.soDT}</p>
              </li>
            </ul>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <button
              onClick={() => {
                handleCloseProfile();
                handleClickUpdateInfo();
              }}
              className=" text-white bg-[#753BBD] hover:bg-white hover:text-[#753BBD] px-5 py-3 text-sm rounded-md -ml-2 font-semibold"
            >
              ĐỔI THÔNG TIN
            </button>
            <button
              onClick={() => {
                handleCloseProfile();
                handleClickUpdatePassword();
              }}
              className="text-white bg-[#753BBD] hover:bg-white hover:text-[#753BBD] px-5 py-3 text-sm  rounded-md -mr-2  font-semibold"
            >
              ĐỔI MẬT KHẨU
            </button>
          </div>
        </div>
      </div>
      {/* popup update profile */}
      <div className="updateinfo-div">
        <div className="updateinfo-div_close" onClick={handleCloseUpdateInfo}>
          <CloseCircleOutlined />
        </div>
        <div className="updateinfo-div_full">
          <UpdateProfile />
        </div>
      </div>
      {/* popup update passworld */}
      <div className="updatepassword-div">
        <div
          className="updatepassword-div_close"
          onClick={handleCloseUpdatePassword}
        >
          <CloseCircleOutlined />
        </div>
        <div className="updatepassword-div_full">{<UpdateProfilePW />}</div>
      </div>
    </>
  );
}

export default Navbar;
