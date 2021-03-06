import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Kirjaudu.css';

    const URL = 'http://localhost/verkkokauppaprojekti-back/products/';
    const SHOW = 'getcategories.php';


export default function Admincat() {
    const [tryhma, setTryhma] = useState([]);
    const [ryhma, setRyhma] = useState('');

    /*Kategorioiden lisäys ja poisto*/
    function savecat(e) {
        e.preventDefault();
        const json = JSON.stringify({name:ryhma})
        axios.post(URL + 'savecategory.php',json,{
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response) => {
          setTryhma(name => [...name,response.data]);
          setRyhma('');
        }).catch (error => {
            if(error.response === undefined) {
              alert(error);
            }else {
              alert(error.response.data.error);
            }
          });
      }

      function removecat(id) {
        const json = JSON.stringify({id:id})
        axios.post(URL + 'deletecategory.php', json, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
          .then((response) => {
            const newListWithoutRemoved = tryhma.filter((item) => item.id !== id);
            setTryhma(newListWithoutRemoved);
          }).catch (error => {
            alert(error.response ? error.response.data.error : error);
          });
      }

      useEffect(() => {
        axios.get(URL+SHOW)
          .then((response) => {
            setTryhma(response.data);
          }).catch(error => {
            alert(error);
          });
      }, []) 

      
    return (
    <div className="containers" id="main">
        <Link style={{'color':'white','fontSize':'20px'}} className="nav-link" aria-current="page" to="/adminprod">Hallinnoi tuotteita</Link>

        <h3>Lisää tuoteryhmä</h3>
            <form onSubmit={savecat}>
                <label>Uusi tuoteryhmä</label>
                <input value={ryhma} onChange={e => setRyhma(e.target.value)} placeholder="Uusi tuoteryhmä"/>
                <button>Tallenna</button>
            </form>
      <ol>
        {tryhma?.map(ryhma =>(
          <li key={ryhma.id} id="adminlista">
            {ryhma.id}. {ryhma.name}&nbsp;
            <a href="#" className="delete" onClick={() => removecat(ryhma.id)}>
              Delete
            </a>
          </li>
        ))}
      </ol>


    </div>
    )
}
