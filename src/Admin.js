import React from 'react';
import { Link } from "react-router-dom";

export default function Admin() {

  
    return (
    <div className="container" style={{'padding-top': '100px'}}>
        <Link className="nav-link" aria-current="page" to="/admincat">Hallinnoi tuoteryhmiä</Link>
        <Link className="nav-link" aria-current="page" to="/adminprod">Hallinnoi tuotteita</Link>
    </div>
    );
}
