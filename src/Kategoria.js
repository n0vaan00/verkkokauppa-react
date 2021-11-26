import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";



export default function Kategoria({url,category,addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null){
    axios.get(url + 'products/getproducts.php/' + category?.trnro)
    .then((response) => {
      const json = response.data;
      setProducts(json);
      console.log(json)
    }).catch (error => {
      if (error.response === undefined) {
        alert(error);
      } else {
        alert(error.response.data.error);
      }
    })
  }
  }, [category])
        return (
            <>
            <div style={{'paddingTop': '100px'}}>
              <h3>Tuotteet ryhmästä: {category?.trnimi}</h3>
              {products.map(product => (
                <div key={product.tuotenro}>
                  <Link to={{
                    pathname: '/tuote',
                    state: {
                      trnro: product.trnro,
                      trnimi: product.trnimi,
                      hinta: product.hinta,
                    }
                  }}
                  >
                  <p>{product.tuotenimi} {product.hinta}</p>
                  </Link>
                  
                  {/* <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Add to cart</button> */}
                   {/*} <div>
                      <img src={url + 'images/' + product.image} alt="" />
                   </div> */}
                  </div>
              ))}
            </div>
              
            </>
          );
}