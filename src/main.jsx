import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Play from "./Play";
import Home from "./Home";
import Layout from "./Layout";
import AboutFAQ from "./components/AboutFAQ/AboutFAQ";
import Logincard from "./Login_signup/Logincard"
import Signupcard from "./Login_signup/Signupcard"

function App() {
  const [toggleAuth, setToggleAuth] = useState(false);

  const [auth, setAuth] = useState(
    localStorage.getItem("auth") === "true"
  );

  const clickHandler = () => {
    setToggleAuth(!toggleAuth);
  };

  if (!auth) {
    return (
      <div>
        {toggleAuth ? (
          <Signupcard onClick={clickHandler} />
        ) : (
          <Logincard onClick={clickHandler} setAuth={setAuth} />
        )}
      </div>
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/About" element={<AboutFAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);