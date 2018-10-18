import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/about/about.js';
import Calendar from './components/Pages/calendar/calendar';
import Navbar from './components/Nav/navbar.js';
import Appoints from './components/Pages/profile/appoints';
import login from './components/login/login';
import Footer from './components/Footer/footer';
// import login from './components/Pages/login/auth';



//import login from './components/Pages/login/auth';


const App = () => (

  <Router>
    <div>
      <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Appointments" component={Appoints} />
        <Route exact path="/calender" component={Calendar} />
        <Route exact path='/login' component={login}/>
      <Footer />
    </div>


  </Router>

);

export default App;
