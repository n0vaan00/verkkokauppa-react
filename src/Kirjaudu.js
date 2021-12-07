import React from 'react'
import { Link } from 'react-router-dom';
import './Kirjaudu.css';


export default function Kirjaudu() {


  
    return (
      <main>
        <h2>Kirjaudu sisään</h2>

        <form method="post" action="login.php">
  	
  	<div class="input-group">
  		<label>Käyttäjänimi</label>
  		<input type="text" name="username" ></input>
  	</div>
  	<div class="input-group">
  		<label>Salasana</label>
  		<input type="password" name="password"></input>
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">Login</button>
  	</div>
  	<p>
  		Etkö ole vielä rekisteröitynyt? <a href="rekisteröidy">Rekisteröidy tästä.</a>
  	</p>
  </form>
            <div></div>
              <nav>
                <Link to="/admin">Admin</Link>
              </nav>
      </main>
    );
}
