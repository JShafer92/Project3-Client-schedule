import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/about/about.js';
//import Calendar from 'react-calendar';
import './App.css';
import Navbar from './components/Nav/navbar.js';
//import Drawer from './components/Drawer/Drawer.js';
// import Wrapper from './components/Wrapper';
//import Calender from './components/Calender/Calender.js';
// import Profile from './components/Profile';
// import Login from './components/Login';
//import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Navbar/>
      {/* <Wrapper> */}
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        {/*<Route exact path="/calender" component={Calender} /> */}
        {/* <Route exact path="/profile" component={Profile} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
      {/* </Wrapper> */}
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
