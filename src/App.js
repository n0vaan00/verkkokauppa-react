import './App.css';
import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import {Switch, Route } from "react-router-dom";
import Kirjaudu from './Kirjaudu';
import Home from './Home';



function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/kirjaudu" component={Kirjaudu} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
