import React,{useState}  from 'react'
import './Rekisteröidy.css';
import axios from 'axios';


export default function Rekisteröidy() {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[username, setUsername] = useState("");
    const[address, setAddress] = useState("");
    const[zip, setZip] = useState("");
    const[city, setCity] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");


    const createUser = e =>{
        e.preventDefault();
        axios.post("http://localhost/verkkokauppaprojekti-back/customer/addcustomer.php", {
            firstname: firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            address:address,
            zip:zip,
            city:city,
            username:username,
            password:password
        })
        .catch(e=> console.log(e))
    }

    return (
    <div id="main">
        <h2>Rekisteröidy</h2>
            <form method="post" action="register.php">
                <div class="input-group">
                    <label>Etunimi</label>
                    <input value={firstname} onChange={e => setFirstname(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Sukunimi</label>
                    <input value={lastname} onChange={e => setLastname(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Osoite</label>
                    <input value={address} onChange={e => setAddress(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Postinumero</label>
                    <input value={zip} onChange={e => setZip(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Postitoimipaikka</label>
                    <input value={city} onChange={e => setCity(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Puhelinnumero</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Sähköposti</label>
                    <input value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <label>Käyttäjänimi</label>
                    <input value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                
                <div class="input-group">
                    <label>Salasana</label>
                    <input value={password}  onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div class="input-group">
                    <button  style={{'color':'black'}}  onClick={createUser}>Rekisteröidy</button>
                </div>
                <p>
                    Oletko jo rekisteröitynyt? <a href="kirjaudu" style={{'color':'white'}}>Kirjaudu sisään</a>
                </p>
            </form>
    </div>
    )
}
