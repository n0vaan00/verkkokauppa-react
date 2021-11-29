import React from 'react';
import { Link } from "react-router-dom";

export default function Admin() {

  
    return (
    <div className="container">
        <Link className="nav-link" aria-current="page" to="/admincat">Hallinnoi tuoteryhmiä</Link>
        <Link className="nav-link" aria-current="page" to="/adminprod">Hallinnoi tuotteita</Link>
    </div>
    );
}
