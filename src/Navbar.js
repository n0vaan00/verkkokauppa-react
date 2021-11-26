import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid nav_linkit">
        <a className="navbar-brand" href="/"><img src="logo.png" />Paitaässä</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Etusivu</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"> Tuotteet</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {categories.map(category => (
                    <li key={category.trnro}>
                    <Link className="dropdown-item"
                      to={{
                        pathname: '/kategoria',
                        state: {
                          trnro: category.trnro,
                          trnimi: category.trnimi
                        }
                      }}>
                      {category.trnimi}
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
                      <li className="nav-item ostoskori">
                        Ostoskori:
                      <Cart cart={cart}/>
                      </li>
              </ul>
            </div>
      </div>
    </nav>
    )
}
