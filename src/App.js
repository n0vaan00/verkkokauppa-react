import './App.css';
import React,{useState,useEffect} from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import {Switch, Route, useLocation } from "react-router-dom";
import Kirjaudu from './Kirjaudu';
import Home from './Home';
import Admin from './Admin';
import Admincat from './Admincat';
import Adminprod from './Adminprod';
import Rekisteröidy from './Rekisteröidy';

const URL = 'http://localhost/verkkokauppaprojekti-back/';

function App() {
  const [category,setCategory] = useState(null);
  
  let location = useLocation();

  useEffect(()=> {
    if (location.state !== undefined) {
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
      
    }
  },[location.state]) 
  
  return (
    <>
    <NavBar url={URL} setCategory={setCategory}/>
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
        <Route path="/rekisteröidy" component={Rekisteröidy} />
        <Route path="/admin" component={Admin} />
        <Route path="/admincat" component={Admincat} />
        <Route path="/adminprod" component={Adminprod} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
