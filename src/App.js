import './App.css';
import React,{useState} from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import {Switch, Route } from "react-router-dom";
import Kirjaudu from './Kirjaudu';
import Home from './Home';
import Admin from './Admin';

const URL = 'http://localhost/verkkokauppaprojekti-back/';

function App() {
  const [category,setCategory] = useState(1);
  
  return (
    <>
    <NavBar url={URL}/>
    <div id="content" className="container-fluid">
      <Switch>
        <Route 
        path="/" 
        render={() =>
          <Home
            url={URL}
            category={category}
          />
        } 
        exact />
        <Route path="/kirjaudu" component={Kirjaudu} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
