import React,{useState,useEffect} from 'react';
import axios from 'axios';



    const URL = 'http://localhost/verkkokauppaprojekti-back/products/';
    const SHOW = 'getcategories.php';
    const SHOWPRODU = 'getproduct.php';

export default function Admin() {


    const [tryhma, setTryhma] = useState([]);
    const [ryhma, setRyhma] = useState('');
    const [tuotteet, setTuotteet] = useState([]);
    const [tuotenimi, setTuotenimi] = useState('');
    const [tuotehinta, setTuotehinta] = useState('');
    const [tuotetrnro, setTuotetrnro] = useState('');

/*Kategorioiden lisäys ja poisto*/
    function savecat(e) {
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

      function removecat(trnro) {
        const json = JSON.stringify({trnro:trnro})
        axios.post(URL + 'deletecategory.php', json, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
          .then((response) => {
            const newListWithoutRemoved = tryhma.filter((item) => item.trnro !== trnro);
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

      

/*Tuotteiden lisäys ja poisto*/
      function saveprod(e) {
        e.preventDefault();
        const json = JSON.stringify({tuotenimi:tuotenimi, hinta:tuotehinta, trnro:tuotetrnro})
        axios.post(URL + 'saveproduct.php',json,{
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response) => {
          setTuotteet(tuotteet => [...tuotteet,response.data]);
          setTuotenimi('');
          setTuotehinta('');
          setTuotetrnro('');
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
            setTryhma(newListWithoutRemoved);
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
      <div className="ryhmamuokkaus">
      <h3>Lisää tuoteryhmä</h3>
      <form onSubmit={savecat}>
        <label>Uusi tuoteryhmä</label>
        <input value={ryhma} onChange={e => setRyhma(e.target.value)} placeholder="Uusi tuoteryhmä"/>
        <button>Tallenna</button>
      </form>
      <ol>
        {tryhma?.map(ryhma =>(
          <li key={ryhma.trnro}>
            {ryhma.trnimi}
            <a href="#" className="delete" onClick={() => removecat(ryhma.trnro)}>
              Delete
            </a>
          </li>
        ))}
      </ol>
    </div>

    <div className="tuotemuokkaus">
    <h3>Lisää tuote</h3>
    <form onSubmit={saveprod}>
      <label>Uusi tuoteryhmä</label>
      <input value={tuotenimi} onChange={e => setTuotenimi(e.target.value)} placeholder="Uusi tuote"/>
      <label>Tuotteen hinta</label>
      <input value={tuotehinta} onChange={e => setTuotehinta(e.target.value)} placeholder="Tuotteen hinta"/>
      <label>Tuotteen tuoteryhmänumero</label>
      <input value={tuotetrnro} onChange={e => setTuotetrnro(e.target.value)} placeholder="Tuotteen ryhmänumero"/>
      <button>Tallenna</button>
    </form>
    <ol>
      {tuotteet?.map(tuotenimi =>(
        <li key={tuotenimi.tuotenro}>
          {tuotenimi.tuotenimi},  Hinta: {tuotenimi.hinta},   Ryhmänumero: {tuotenimi.trnro}&nbsp;
          <a href="#" className="delete" onClick={() => removeprod(ryhma.tuotenro)}>
            Delete
          </a>
        </li>
      ))}
    </ol>
  </div>
  </div>
    );
}
