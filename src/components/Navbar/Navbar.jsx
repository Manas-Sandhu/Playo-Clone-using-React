import { Link } from "react-router";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">
            PLAY<span className="logo-o">O</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center">
        <Link to="/Play">
          <button className="nav-btn">
            <span className="nav-icon">🏃</span> Play
          </button>
        </Link>
        <Link to="/About">
          <button className="nav-btn">
            <span className="nav-icon">📅</span> About
          </button>
        </Link>
      </div>

      <div className="navbar-right">


        <button className="login-btn">👤 Login / Signup</button>
      </div>
    </nav>
  );
}
