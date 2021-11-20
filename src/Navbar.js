import React from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';


export default function NavBar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/verkkokauppaprojekti-back/products/getcategories.php')
    .then ((response) => {
      const json = response.data;
      console.log(response.data);
      setCategories(json);

    }).catch (error => {
      if(error.response === undefined) {
        alert(error);
      }else {
      alert(error.response.data.error);
      }
    })
  }, [])

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {categories.map(category => (
            <li key={category.trnro}>
              <Link>
              {category.tuoteryhma}
              </Link>
            </li>
          ))}
          </ul>
          
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
        /*  {categories.map(category => (
            <li>
              <Link>
              {category.trnimi}
              </Link>
            </li>
        ))} */
      
}
