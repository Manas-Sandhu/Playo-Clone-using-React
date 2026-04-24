import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove the .dark class on <body> whenever darkMode changes
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
}
