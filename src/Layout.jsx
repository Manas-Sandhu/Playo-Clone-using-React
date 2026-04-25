import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

export default function Layout({setAuth,setToggleAuth}) {
  return (
    <div>
      <Navbar setAuth={setAuth} setToggleAuth={setToggleAuth} />
      <Outlet />
      <Footer />
    </div>
  );
}
