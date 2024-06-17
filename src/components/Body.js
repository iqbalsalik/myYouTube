import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Body = () => {
  const menuSlider = useSelector((store) => store.toggleMenu.toggleBoolean);
  return (
    <div>
      <Header/>
      <div className="flex">
        {menuSlider ? <SideBar /> : null}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
