import React from 'react'

export default function Kirjaudu() {
    return (
      <main>
        <h2>Notta kirjaavvu sitte....</h2>
        <form>
            <label for ="knimi">Käyttäjänimi</label>
            <input type="text" id="knimi" name="kayttaja" placeholder="Käyttäjänimi"></input>
            <label for ="ssana">Salasana</label>
            <input type="text" id="ssana" name="salasana" placeholder="Salasana"></input>
            <input type="submit" value="Sissää"></input>
        </form>
        <h2>Rekisteröijy perkele</h2>

         <p> Ole hyvä ja runkkaa ittes sisälle..</p>
        <form>
            <label for ="knimi">Käyttäjänimi</label>
            <input type="text" id="knimi" name="kayttaja" placeholder="Käyttäjänimi"></input>
            <label for ="ssana">Salasana</label>
            <input type="text" id="ssana" name="salasana" placeholder="Salasana"></input>
            <br/>
            <label for ="enimi">Etunimi</label>
            <input type="text" id="enimi" name="etunimi" placeholder="Etunimi"></input>
            <label for ="snimi">Sukunimi</label>
            <input type="text" id="snimi" name="sukunimi" placeholder="Sukunimi"></input>
            <label for ="osoite">Osoite</label>
            <input type="text" id="osoite" name="osoitenimi" placeholder="Osoite"></input>
            <label for ="postinro">Postinumero</label>
            <input type="text" id="postinro" name="postinumero" placeholder="Postinumero"></input>
            <label for ="postitmp">Postitoimipaikka</label>
            <input type="text" id="postitmp" name="postitoimipaikka" placeholder="Postitoimipaikka"></input>
            <label for ="puhnum">Puhelinnumero</label>
            <input type="text" id="puhnum" name="puhelinnumero" placeholder="Puhelinnumero"></input>
            <br/>
            <button>Submittaa</button>
        </form>
    
      </main>
    );
}
