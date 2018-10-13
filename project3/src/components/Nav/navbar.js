import React from "react";
import { Link } from "react-router-dom";
// import AuthModal from '../Modals/AuthModal';
import Login from '../login/login';
import "../../SCSS/input.css";
//require("react-bootstrap/lib/NavbarHeader");

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <div className="navContent">
  <nav className="navbar">
    <Link className="navbar-brand" to="/">
      Champion Equine
    </Link>
      <ul className="navbar">
        <li
          className={
            window.location.pathname === "/" ||
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
        <li className="login-button">
                <Login />
        </li>
      </ul> 

      </nav>
    </div>
  
);

export default Navbar;