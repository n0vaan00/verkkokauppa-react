import './App.css';
import React,{useState,useEffect} from 'react';
import {Switch, Route, useLocation } from "react-router";
import NavBar from './inc/Navbar';
import Footer from './inc/Footer';
import Home from './Home';
import Order from './Order';
import Product from './Product';
import Kirjaudu from './Kirjaudu';
import Admin from './Admin';
import Admincat from './Admincat';
import Adminprod from './Adminprod';
import Rekisteröidy from './Rekisteröidy';
import Cart from './inc/Cart';

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
        setCategory({id: location.state.id, name: location.state.name});
      } else if (location.pathname==="/product") {
        setProduct({id: location.state.id, name: location.state.name, price: location.state.price});
      }
    }
  },[location.state]) 
  
  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
    product["amount"] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
}

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]:product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }
  function removefromCart (product) {
    const itemsNotRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsNotRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsNotRemoved));
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
           <Route 
           path="/order"
             render = {() =>
              <Order
              cart={cart}
              updateAmount={updateAmount}
              removefromCart={removefromCart}
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
  )
}

export default App;
