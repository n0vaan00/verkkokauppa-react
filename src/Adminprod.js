import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Kirjaudu.css';

    const URL = 'http://localhost/verkkokauppaprojekti-back/products/';
    const SHOWPRODU = 'getproduct.php';
    const SHOW = 'getcategories.php';

export default function Adminprod() {

    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [info, setInfo] = useState('');
    const [cat_id, setCatId] = useState('');
    const [tryhma, setTryhma] = useState([]);

/*Tuotteiden lisäys ja poisto*/
      function saveprod(e) {
        e.preventDefault();
        const json = JSON.stringify({name:name, price:price, image:image, info:info, category_id:cat_id})
        axios.post(URL + 'saveproduct.php',json,{
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response) => {
          setProduct(product => [...product,response.data]);
          setName('');
          setPrice('');
          setImage('');
          setInfo('');
          setCatId('');
        }).catch (error => {
            if(error.response === undefined) {
              alert(error);
            }else {
              alert(error.response.data.error);
            }
          });
      }
       
      function removeprod(id) {
        const json = JSON.stringify({id:id})
        axios.post(URL + 'deleteproduct.php', json, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
          .then((response) => {
            const newListWithoutRemoved = product.filter((item) => item.id !== id);
            setProduct(newListWithoutRemoved);
          }).catch (error => {
            alert(error.response ? error.response.data.error : error);
          });
      }
    useEffect(() => {
            axios.get(URL+SHOWPRODU)
              .then((response) => {
                setProduct(response.data);
              }).catch(error => {
                alert(error);
              });
          }, [])
          
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
          <Link style={{'color':'white','fontSize':'20px'}} className="nav-link" aria-current="page" to="/admincat">Hallinnoi tuoteryhmiä</Link>

          <h3>Lisää tuote</h3>
            <form onSubmit={saveprod}>
              <label>Uusi tuote</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Uusi tuote"/><br/>
              <label>Tuotteen hinta</label>
                <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Tuotteen hinta"/><br/>
              <label>Tuotteen kuva</label>
                <input value={image} onChange={e => setImage(e.target.value)} placeholder="Tuotteen kuva"/><br/>
              <label>Tuotteen tiedot</label>
                <input value={info} onChange={e => setInfo(e.target.value)} placeholder="Tuotteen tiedot"/><br/>
              <label>Tuotteen tuoteryhmänumero</label>
                <input value={cat_id} onChange={e => setCatId(e.target.value)} placeholder="Tuotteen ryhmänumero"/><br/>
              <button>Tallenna</button>
            </form>
          <ol>
              {product?.map(productname =>(
                <li key={productname.id} id="adminlista">
                  {productname.id}. {productname.name},  Hinta: {productname.price}, Kuva: {productname.image}, Tiedot: {productname.info},   Ryhmänumero: {productname.category_id}&nbsp;
                  <a href="#" className="delete" onClick={() => removeprod(productname.id)}>Poista</a>
                </li>
              ))}
          </ol>
          <br/>
    <div id="katlist">
      <h4>Kategoriat</h4>
    <ol>
        {tryhma?.map(ryhma =>(
          <li key={ryhma.id} id="adminlista">
            {ryhma.id}. {ryhma.name}&nbsp;
          </li>
        ))}
      </ol>
    </div>
    </div>
    )
}
