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
import Tuote from './Tuote';
import Rekisteröidy from './Rekisteröidy';
import Kategoria from './Kategoria';
import Tilaus from './Tilaus';


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
      if (location.pathname==="/kategoria") {
        setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi});
      } else if (location.pathname==="/product") {
        setProduct({trnro: location.state.trnro,trnimi: location.state.trnimi,hinta: location.state.hinta});
      }
    }
  },[location.state]) 
  
  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.trnro === product.trnro);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    }
    product["amount"] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.trnro === product.trnro));
    const modifiedCart = Object.assign([...cart],{[index]:product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }
  return (
    <>
    <NavBar url={URL} setCategory={setCategory} cart={cart}/>
    <div id="content" className="container-fluid">
      <Switch>
      <Route path="/home" component={Home} />
        <Route 
        path="/kategoria" 
        render={() =>
          <Kategoria
            url={URL}
            category={category}
          />
        } 
        exact />
        <Route
          path="/tuote"
          render={() =>
            <Tuote
              url={URL}
              product={product}
              addToCart={addToCart}
            />
          }
          />
           <Route path="/tilaus"
             render = {() =>
              <Tilaus
              cart={cart}
              updateAmount={updateAmount}
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
