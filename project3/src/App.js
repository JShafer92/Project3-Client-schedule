import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/Pages/about/about.js';
import Calendar from './components/Pages/calendar/calendar';
import Navbar from './components/Nav/navbar.js';
import Appoints from './components/Pages/profile/appoints';
import login from './components/login/login';
import Footer from './components/Footer/footer';


const App = () => (
<<<<<<< HEAD

=======
  
>>>>>>> 4c227a5c54aa633f857e228665e6773badc048dc
  <Router>
    <div>
      <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
<<<<<<< HEAD
        <Route exact path="/Appointments" component={Appoints} />
        <Route exact path="/calender" component={Calendar} />
        <Route exact path='/login' component={login}/>
      <Footer />
    </div>


  </Router>

=======
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/calender" component={Calendar} />
        {/* <Route exact path='/login' component={login}/> */}
    {/* </Navbar> */}
    </div>
    
  </Router>
  
>>>>>>> 4c227a5c54aa633f857e228665e6773badc048dc
);

export default App;
