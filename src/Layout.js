import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <header className="menu">
        <div className="box">
          <NavLink to={"/"} className="link" activeClassName="active">
            사고다발구간조회 / 사고차트
          </NavLink>
          <NavLink to={"/Board"} className="link" activeClassName="active">
            사고 제보 게시판
          </NavLink>
          <NavLink to={"/LawAbout"} className="link" activeClassName="active">
            자전거 사고 관련 뉴스
          </NavLink>
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
