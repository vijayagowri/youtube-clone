import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from './Header';
const Body = () => {
  const isSideMenushow = useSelector((store) => store.menu.isMenuOpen);
  return (
    <>
     <Header />
    <div className="flex">
      {isSideMenushow && (
        <div className="w-48 bg-white">
          <Sidebar />
        </div>
      )}
      <Outlet />
    </div>
    </>
  );
};

export default Body;
