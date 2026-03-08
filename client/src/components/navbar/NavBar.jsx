import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        GameStore
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Store
        </Link>

        <Link to="/admin" className="nav-link">
          Admin
        </Link>

        <div className="auth-section">
          <button className="nav-btn nav-btn-login">Login</button>

          <button className="nav-btn nav-btn-logout">Logout</button>
        </div>
      </div>
    </nav>
  );
}
