import React,{useState,useEffect} from 'react';
import axios from 'axios';


    const URL = 'http://localhost/verkkokauppaprojekti-back/products/';
    const SHOW = 'getcategories.php'

export default function Admin() {


    const [tryhma, setTryhma] = useState([]);
    const [ryhma, setRyhma] = useState('');

    function save(e) {
        e.preventDefault();
        const json = JSON.stringify({trnimi:ryhma})
        axios.post(URL + 'savecategory.php',json,{
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response) => {
          setTryhma(tryhma => [...tryhma,response.data]);
          setRyhma('');
        }).catch (error => {
            if(error.response === undefined) {
              alert(error);
            }else {
              alert(error.response.data.error);
            }
          });
      }

      function remove(id) {
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
        <div className="container">
      <h3>Lisää tuoteryhmä</h3>
      <form onSubmit={save}>
        <label>Uusi tuoteryhmä</label>
        <input value={ryhma} onChange={e => setRyhma(e.target.value)} placeholder="Uusi tuoteryhmä"/>
        <button>Tallenna</button>
      </form>
      <ol>
        {tryhma?.map(ryhma =>(
          <li key={ryhma.id}>
            {ryhma.trnimi}
            <a href="#" className="delete" onClick={() => remove(ryhma.id)}>
              Delete
            </a>
            </li>
        ))}
      </ol>
    </div>
    );
}
