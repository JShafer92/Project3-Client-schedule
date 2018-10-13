import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/about/about.js';
import Calendar from './components/Pages/calendar/calendar';
import Navbar from './components/Nav/navbar.js';
import Home from './components/Pages/home/home';
import login from './components/login/login';
// import login from './components/Pages/login/auth';



//import login from './components/Pages/login/auth';


const App = () => (
  <Router>
    <div>
      <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/calender" component={Calendar} />
        <Route exact path='/login' component={login}/>
    </div>
  </Router>
);

export default App;
