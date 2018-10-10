import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/about/about.js';
import Calendar from './components/Pages/calendar/calendar';
import Navbar from './components/Nav/navbar.js';
import Home from './components/Pages/home/home';
import login from './components/Pages/login/auth';



<<<<<<< HEAD
=======
//import login from './components/Pages/login/auth';


>>>>>>> dcd1494dfc79b3438e81abdc64aae0d47bd004b9
const App = () => (
  <Router>
    <div>
      <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/calender" component={Calendar} />
<<<<<<< HEAD
        <Route exact path='/login' component={login}/>
=======
        {/* <Route exact path='/login' component={login}/> */}
>>>>>>> dcd1494dfc79b3438e81abdc64aae0d47bd004b9
    </div>
  </Router>
);

export default App;
