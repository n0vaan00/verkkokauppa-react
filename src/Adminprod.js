import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

    const URL = 'http://localhost/verkkokauppaprojekti-back/products/';
    const SHOWPRODU = 'getproduct.php';

export default function Adminprod() {

    const [tuotteet, setTuotteet] = useState([]);
    const [tuotenimi, setTuotenimi] = useState('');
    const [hinta, setHinta] = useState('');
    const [trnro, setTrnro] = useState('');

/*Tuotteiden lisäys ja poisto*/
      function saveprod(e) {
        e.preventDefault();
        const json = JSON.stringify({tuotenimi:tuotenimi, hinta:hinta, trnro:trnro})
        axios.post(URL + 'saveproduct.php',json,{
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response) => {
          setTuotteet(tuotteet => [...tuotteet,response.data]);
          setTuotenimi('');
          setHinta('');
          setTrnro('');
        }).catch (error => {
            if(error.response === undefined) {
              alert(error);
            }else {
              alert(error.response.data.error);
            }
          });
      }
       
      function removeprod(tuotenro) {
        const json = JSON.stringify({tuotenro:tuotenro})
        axios.post(URL + 'deleteproduct.php', json, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
          .then((response) => {
            const newListWithoutRemoved = tuotteet.filter((item) => item.tuotenro !== tuotenro);
            setTuotteet(newListWithoutRemoved);
          }).catch (error => {
            alert(error.response ? error.response.data.error : error);
          });
      }
    useEffect(() => {
            axios.get(URL+SHOWPRODU)
              .then((response) => {
                setTuotteet(response.data);
              }).catch(error => {
                alert(error);
              });
          }, [])
     
    return (

    <div className="container">
    <Link className="nav-link" aria-current="page" to="/admincat">Hallinnoi tuoteryhmiä</Link>

    <h3>Lisää tuote</h3>
    <form onSubmit={saveprod}>
      <label>Uusi tuote</label>
      <input value={tuotenimi} onChange={e => setTuotenimi(e.target.value)} placeholder="Uusi tuote"/>
      <label>Tuotteen hinta</label>
      <input value={hinta} onChange={e => setHinta(e.target.value)} placeholder="Tuotteen hinta"/>
      <label>Tuotteen tuoteryhmänumero</label>
      <input value={trnro} onChange={e => setTrnro(e.target.value)} placeholder="Tuotteen ryhmänumero"/>
      <button>Tallenna</button>
    </form>
    <ol>
      {tuotteet?.map(tuotenimi =>(
        <li key={tuotenimi.tuotenro}>
         {tuotenimi.tuotenimi},  Hinta: {tuotenimi.hinta},   Ryhmänumero: {tuotenimi.trnro}&nbsp;
          <a href="#" className="delete" onClick={() => removeprod(tuotenimi.tuotenro)}>
            Delete
          </a>
        </li>
      ))}
    </ol>
    </div>

    )
}
