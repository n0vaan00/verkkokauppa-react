import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart';
import './Navbar.css';



export default function NavBar({url,setCategory,cart}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
  
    axios.get(url + 'products/getcategories.php')
    .then ((response) => {
      const json = response.data;
      console.log();
      setCategories(json);
      setCategory(json[0]);
    }).catch (error => {
      if(error.response === undefined) {
        alert(error);
      }else {
        alert(error.response.data.error);
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="logo.png" style={{"width": "50px"}}/>Paitaässä</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Koti</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Tuotteet</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown01">
                {categories.map(category => (
                  <li key={category.id}>
                    <Link className="dropdown-item"
                      to={{
                        pathname: '/',
                        state: {
                          id: category.id,
                          name: category.name,
                        }
                      }}
                    >
                    {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/kirjaudu">Kirjaudu</Link>
                </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li  className="nav-item">
              <Cart cart={cart}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
