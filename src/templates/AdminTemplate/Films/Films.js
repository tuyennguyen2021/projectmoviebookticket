import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Table, AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getListMovieAction,
  layDanhSachPhimKeyWordAction,
  xoaPhimAction,
} from "../../../redux/actions/ListMovieAction";
import { NavLink, Outlet } from "react-router-dom";

export default function Films() {
  const { arrFilmDefault } = useSelector((state) => state.listMovieReducer);
  const { arrFilmSearch } = useSelector((state) => state.listMovieReducer);
  console.log(arrFilmSearch, "arrFilmSearch12");
  console.log(arrFilmDefault, "arrFilmDefault123");
  const searchRef = useRef(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMovieAction());
  }, [dispatch]);

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "5%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <Fragment>
            <img
              style={{ width: 80, height: 110, borderRadius: 5 }}
              src={film.hinhAnh}
              alt={film.hinhAnh}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${text}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      sortDirections: ["descend", "ascend"],
      width: "50%",
    },
    {
      title: "Hành Động",
      dataIndex: "hanhDong",
      sortDirections: ["descend", "ascend"],
      width: "20%",
      render: (text, film) => {
        return (
          <div className="pl-10">
            <NavLink
              key={1}
              className=" mr-2  text-2xl "
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              key={2}
              onClick={() => {
                dispatch(xoaPhimAction(film.maPhim));
              }}
              className="text-2xl mr-2 cursor-pointer"
              to="/"
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>

            <NavLink
              key={3}
              className="text-2xl "
              to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
            >
              <CalendarOutlined style={{ color: "green" }} />
            </NavLink>
          </div>
        );
      },
    },
  ];
  const data = arrFilmDefault;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <AutoComplete
        className="mb-5 w-25"
        placeholder="Nhập vào tên phim bạn muốn tìm kiếm"
        value={value}
        onChange={(text) => {
          setValue(text);
        }}
        options={arrFilmSearch?.map((film) => {
          return {
            lable: film.tenPhim,
            value: film.tenPhim,
          };
        })}
        onSelect={(valueSelect, option) => {
          setValue(option.label);
          dispatch(layDanhSachPhimKeyWordAction(valueSelect));
        }}
        onSearch={(value) => {
          if (searchRef.current) {
            clearTimeout(searchRef.current);
          }
          searchRef.current = setTimeout(() => {
            if (value === "") {
              dispatch(getListMovieAction());
            } else {
              dispatch(layDanhSachPhimKeyWordAction(value));
            }
          }, 800);
        }}
        style={{ width: "100%", height: 50 }}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />;
      <Outlet />
    </div>
  );
}
