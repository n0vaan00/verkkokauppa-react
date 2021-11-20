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
       
    
  


    )
}
