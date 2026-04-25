import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ setAuth, setToggleAuth }) {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.setItem("auth", "false");
    setAuth(false);
    if (setToggleAuth) setToggleAuth(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo-text">
            PLAY<span className="logo-o">O</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className={`nav-btn ${location.pathname === "/" ? "nav-btn--active" : ""}`}>
            🏠 Home
          </button>
        </Link>
        <Link to="/Play" style={{ textDecoration: "none" }}>
          <button className={`nav-btn ${location.pathname === "/Play" ? "nav-btn--active" : ""}`}>
            🏃 Play
          </button>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <button className={`nav-btn ${location.pathname === "/About" ? "nav-btn--active" : ""}`}>
            📅 About
          </button>
        </Link>
      </div>

      <div className="navbar-right">
        <button className="login-btn" onClick={handleLogout}>
          👤 Logout →
        </button>
      </div>
    </nav>
  );
}