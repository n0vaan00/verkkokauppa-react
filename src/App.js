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
  const [cart,setCart] = useState([]);
  

  let location = useLocation();

  useEffect(()=> {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  },[])

  useEffect(()=> {
    if (location.state !== undefined) {
      setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
      
    }
  },[location.state]) 
  
  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  return (
    <>
    <NavBar url={URL} setCategory={setCategory} cart={cart}/>
    <div id="content" className="container-fluid">
      <Switch>
        <Route 
        path="/" 
        render={() =>
          <Home
            url={URL}
            category={category}
            addToCart={addToCart}
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
