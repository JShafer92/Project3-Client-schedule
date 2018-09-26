import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/Pages/about/about'
import './App.css';
import Navbar from './components/Nav/index'
const App = () => (
  <Router>
    <div>
      <Navbar />
      {/* <Wrapper> */}
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/calender" component={calender} /> */}
        {/* <Route exact path="/profile" component={Profile} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
      {/* </Wrapper> */}
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
