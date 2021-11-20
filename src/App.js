import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Navbar';
import Header from './Header';
import Home from './Home';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Footer from './Footer';
import Pitkahihaiset from './Pitkahihaiset';
import Hihattomat from './Hihattomat';
import Tpaidat from './Tpaidat';

function App() {
  return (
    <>
    <NavBar />

    <div className="container">
      <Routes>
        <Route path="/" component={Home} exact />

      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
