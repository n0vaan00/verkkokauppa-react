import React from 'react'
import { Link } from 'react-router-dom';

export default function Kirjaudu() {
    return (
      <main>
        <h2>Notta kirjaavvu sitte....</h2>
        <form>
            <label>Käyttäjänimi</label>
            <input type="text" id="knimi" name="kayttaja" placeholder="Käyttäjänimi"></input>
            <label>Salasana</label>
            <input type="text" id="ssana" name="salasana" placeholder="Salasana"></input>
            <input type="submit" value="Sissää"></input>
        </form>
        <h2>Rekisteröijy perkele</h2>

         <p> Ole hyvä ja runkkaa ittes sisälle..</p>
        <form>
            <label >Käyttäjänimi</label>
            <input type="text" id="knimi" name="kayttaja" placeholder="Käyttäjänimi"></input>
            <label >Salasana</label>
            <input type="text" id="ssana" name="salasana" placeholder="Salasana"></input>
            <br/>
            <label >Etunimi</label>
            <input type="text" id="enimi" name="etunimi" placeholder="Etunimi"></input>
            <label >Sukunimi</label>
            <input type="text" id="snimi" name="sukunimi" placeholder="Sukunimi"></input>
            <label >Osoite</label>
            <input type="text" id="osoite" name="osoitenimi" placeholder="Osoite"></input>
            <label >Postinumero</label>
            <input type="text" id="postinro" name="postinumero" placeholder="Postinumero"></input>
            <label >Postitoimipaikka</label>
            <input type="text" id="postitmp" name="postitoimipaikka" placeholder="Postitoimipaikka"></input>
            <label >Puhelinnumero</label>
            <input type="text" id="puhnum" name="puhelinnumero" placeholder="Puhelinnumero"></input>
            <br/>
            <button>Submittaa</button>
        </form>
            <div style={{'paddingTop': '100px'}}></div>
              <nav>
                <Link to="/admin">Admin</Link>
              </nav>
      </main>
    );
}
