import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function NavBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/verkkokauppaprojekti-back/products/getcategories.php')
    .then ((response) => {
      console.log(response);
      const json = response.data;
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
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     
        /*  {categories.map(category => (
            <li>
              <Link>
              {category.trnimi}
              </Link>
            </li>
        ))} */
       
    
<<<<<<< HEAD
  


=======
    <a class="navbar-brand" href="/Home">PaitaÄssä<img class="logonav" src="logo.png"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li>
        <NavDropdown title="Pitkähihaiset" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Villapaidat</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Hupparit</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Kauluspaidat</NavDropdown.Item>
        </NavDropdown>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/T-paidat">T-paidat</Link>
         </li>
        <li class="nav-item">
        <Link className="nav-link" to="/hihattomat">Hihattomat</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contactus">Ota yhteyttä</Link>
        </li>

        
      </ul>
    </div>
  </div>
</nav>
>>>>>>> 93b935b136a6efc1f6157d5dce66f78601d0140b
    )
}
