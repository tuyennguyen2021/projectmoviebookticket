import { TeamOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { TOKEN, USER_LOGIN } from "../../utils/config";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Quản lý phim", "sub1", <VideoCameraOutlined />, [
    getItem(<NavLink to="/admin/films">Danh Sách Phim</NavLink>, "3"),
    getItem(<NavLink to="/admin/films/addnew">Thêm Phim</NavLink>, "4"),
  ]),
  getItem("Quản lý user", "sub2", <TeamOutlined />, [
    getItem(<NavLink to="/admin/users">Danh Sách User</NavLink>, "5"),
    getItem(<NavLink to="/admin/users/addnew">Thêm User</NavLink>, "6"),
  ]),
];

export default function AdminTemplate(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Navigate replace to="/" />;
  }

  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Navigate replace to="/" />;
  }

  const menu = (
    <Menu
      items={[
        {
          label: <NavLink to="/">Trang Chủ</NavLink>,
          key: "0",
        },

        {
          label: (
            <NavLink
              to=""
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                window.location.reload();
              }}
            >
              Đăng Xuất
            </NavLink>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <Fragment>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <div className="text-right pr-10 pt-1 text-white">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()} className="mr-2">
                  <Space>Hello!{userLogin.taiKhoan}</Space>
                </a>
              </Dropdown>
            </div>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          ></Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
}
