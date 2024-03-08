import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
