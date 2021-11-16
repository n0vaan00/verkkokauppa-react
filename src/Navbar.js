import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavDropdown } from 'react-bootstrap';
export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    
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
    )
}
