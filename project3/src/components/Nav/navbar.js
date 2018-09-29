import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Champion Equine
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            // window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/profile"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/calender"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/calender" className="nav-link">
            Calender
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/login"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
);

export default Navbar;