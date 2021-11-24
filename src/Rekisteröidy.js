import React from 'react'

export default function Rekisteröidy() {
    return (
    <div>
        <h2>Rekisteröidy</h2>
            <form method="post" action="register.php">
                <div class="input-group">
                    <label>Etunimi</label>
                    <input type="text" name="etunimi"></input>
                </div>
                <div class="input-group">
                    <label>Sukunimi</label>
                    <input type="text" name="sukunimi"></input>
                </div>
                <div class="input-group">
                    <label>Osoite</label>
                    <input type="text" name="osoite"></input>
                </div>
                <div class="input-group">
                    <label>Postinumero</label>
                    <input type="text" name="postinro"></input>
                </div>
                <div class="input-group">
                    <label>Postitoimipaikka</label>
                    <input type="text" name="postotmp"></input>
                </div>
                <div class="input-group">
                    <label>Puhelinnumero</label>
                    <input type="text" name="puhnum"></input>
                </div>

                <div class="input-group">
                    <label>Käyttäjänimi</label>
                    <input type="text" name="username"></input>
                </div>
                <div class="input-group">
                    <label>Sähköposti</label>
                    <input type="email" name="email"></input>
                </div>
                <div class="input-group">
                    <label>Salasana</label>
                    <input type="password" name="password_1"></input>
                </div>
                <div class="input-group">
                    <label>Salasanan vahvistus</label>
                    <input type="password" name="password_2"></input>
                </div>
                <div class="input-group">
                    <button type="submit" class="btn" name="reg_user">Rekisteröidy</button>
                </div>
                <p>
                    Oletko jo rekisteröitynyt? <a href="registration/register.php">Kirjaudu sisään</a>
                </p>
            </form>
    </div>
    )
}
