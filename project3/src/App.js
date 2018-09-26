import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './Pages/about'
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Calendar from './components/Calendar';
import Profile from './components/Profile';
import Login from './components/Login';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
