// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// const Navbar = props => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       Champion Equine
//     </Link>
//     <div>
//       <ul className="navbar-nav">
//         <li
//           className={
//             window.location.pathname === "/" ||
//             window.location.pathname === "/about"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/" className="nav-link">
//             About
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/profile"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/profile" className="nav-link">
//             Profile
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/calender"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/calender" className="nav-link">
//             Calender
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/login"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/login" className="nav-link">
//             Login
//           </Link>
//         </li>
        
//       </ul>
//     </div>
//   </nav>
// );

// export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Champion Equine
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Calender</Button>
          <Button color="inherit">SIGNUP</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);