import React from "react";
import { Link } from "react-router-dom";
// import AuthModal from '../Modals/AuthModal';
import Login from '../login/login';
import "../../SCSS/input.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
  <div className="navContent">
    <nav className="navbar">
      <ul className="navbar">
        <li className="navbar-brand animated zoomIn delay-10s" >
          Champion Equine
    </li>
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
            window.location.pathname === "/appointments"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/appointments" className="nav-link">
            Appointments
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


        {/* <li className="login-button">
          <Login />
        </li> */}
      </ul>
      <li className="login-button">
        <Login />
      </li>
    </nav>
  </div >

);

export default Navbar;