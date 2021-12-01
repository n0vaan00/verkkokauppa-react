import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

    const URL = 'http://localhost/verkkokauppaprojekti-back/products/';
    const SHOWPRODU = 'getproduct.php';

export default function Adminprod() {

    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [info, setInfo] = useState('');
    const [cat_id, setCatId] = useState('');

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
     
    return (

    <div className="container">
    <Link className="nav-link" aria-current="page" to="/admincat">Hallinnoi tuoteryhmiä</Link>

    <h3>Lisää tuote</h3>
    <form onSubmit={saveprod}>
      <label>Uusi tuote</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Uusi tuote"/>
      <label>Tuotteen hinta</label>
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Tuotteen hinta"/>
      <label>Tuotteen kuva</label>
      <input value={image} onChange={e => setImage(e.target.value)} placeholder="Tuotteen kuva"/>
      <label>Tuotteen tiedot</label>
      <input value={info} onChange={e => setInfo(e.target.value)} placeholder="Tuotteen tiedot"/>
      <label>Tuotteen tuoteryhmänumero</label>
      <input value={cat_id} onChange={e => setCatId(e.target.value)} placeholder="Tuotteen ryhmänumero"/>
      <button>Tallenna</button>
    </form>
    <ol>
      {product?.map(productname =>(
        <li key={productname.id}>
         {productname.name},  Hinta: {productname.price}, Kuva: {productname.image}, Tiedot: {productname.info},   Ryhmänumero: {productname.category_id}&nbsp;
          <a href="#" className="delete" onClick={() => removeprod(productname.id)}>
            Delete
          </a>
        </li>
      ))}
    </ol>
    </div>

    )
}
