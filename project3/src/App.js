import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/Pages/about/about'
import './App.css';
import Navbar from './components/Nav/index'
import Calendar from './components/Pages/calendar/calendar';
import Home from './components/Pages/home/home';
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/about/about.js';
import Calendar from './components/Pages/calendar/calendar';
import Navbar from './components/Nav/navbar.js';
import Home from './components/Pages/home/home';
import login from './components/Pages/login/auth';

>>>>>>> dfbd6c7bbda1101f6620347eca93d532fd706e52

const App = () => (
  <Router>
    <div>
<<<<<<< HEAD
      <Navbar />
      {/* <Wrapper> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/calender" component={Calendar} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
      {/* </Wrapper> */}
      {/* <Footer /> */}
=======
      <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/calender" component={Calendar} />
        <Route exact path='/login' component={login}/>
>>>>>>> dfbd6c7bbda1101f6620347eca93d532fd706e52
    </div>
  </Router>
);

export default App;
