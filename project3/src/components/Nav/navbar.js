import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import "./Navbar.css";
=======
import "../../SCSS/input.css";
>>>>>>> dfbd6c7bbda1101f6620347eca93d532fd706e52

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <div>
  <nav className="navbar">
    <Link className="navbar-brand" to="/">
      Champion Equine
    </Link>
      <ul className="navbar">
        <li
          className={
<<<<<<< HEAD
            // window.location.pathname === "/" ||
            window.location.pathname === "/about"
=======
            window.location.pathname === "/" ||
              window.location.pathname === "/about"
>>>>>>> dfbd6c7bbda1101f6620347eca93d532fd706e52
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
      </nav>
    </div>
  
);

export default Navbar;