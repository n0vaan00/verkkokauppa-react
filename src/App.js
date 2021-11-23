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
<<<<<<< HEAD
import Product from './Product';
=======
import Rekisteröidy from './Rekisteröidy';
>>>>>>> b324fb11f03b85c5a0bbc1c28aa7492e66ae41c8

const URL = 'http://localhost/verkkokauppaprojekti-back/';

function App() {
  const [category,setCategory] = useState(null);
  const [product,setProduct] = useState(null);
  const [cart,setCart] = useState([]);
  

  let location = useLocation();

  useEffect(()=> {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  },[])

  useEffect(()=> {
    if (location.state !== undefined) {
      if (location.pathname==="/") {
        setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
      } else if (location.pathname==="/product") {
        setProduct({trnro: location.state.trnro,trnimi: location.state.trnimi});
      }
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
          />
        } 
        exact />
        <Route
          path="/product"
          render={() =>
            <Product
              url={URL}
              product={product}
              addToCart={addToCart}
            />
          }
          />
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
