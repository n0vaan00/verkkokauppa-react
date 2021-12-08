import React from 'react';
import { Link } from "react-router-dom";
import './Kirjaudu.css';

export default function Admin() {

  
    return (
        <main>
    <div className="container" id="boksi">
        <Link style={{'color':'white','fontSize':'20px'}} className="nav-link" aria-current="page" to="/admincat">Hallinnoi tuoteryhmiä</Link>
        <Link style={{'color':'white','fontSize':'20px'}} className="nav-link" aria-current="page" to="/adminprod">Hallinnoi tuotteita</Link>
    </div>
        </main>
    );
}
