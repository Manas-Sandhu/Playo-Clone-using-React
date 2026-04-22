import { createRoot } from "react-dom/client";
import Play from "./Play";
import Home from "./Home";

import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import AboutFAQ from "./components/AboutFAQ/AboutFAQ";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/Play" element={<Play />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<AboutFAQ />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
