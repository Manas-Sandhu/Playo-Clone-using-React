import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ setAuth, setToggleAuth }) {
  const handleLogout = () => {
    // ❗ DO NOT remove user
    localStorage.setItem("auth", "false");

    // update state
    setAuth(false);

    // force Login page (not signup)
    if (setToggleAuth) {
      setToggleAuth(false);
    }
  };

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
          <button className="nav-btn">🏃 Play</button>
        </Link>
        <Link to="/About">
          <button className="nav-btn">📅 About</button>
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