import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import './Category.css';



export default function Category({url,category,addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null){
    axios.get(url + 'products/getproducts.php/' + category?.id)
    .then((response) => {
      const json = response.data;
      setProducts(json);
      console.log(category.id);
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
            <h3 style={{'paddingTop': '100px'}}>Tuotteet ryhmästä: {category?.name}</h3>
              
            <div style={{'display': 'inline-block'}}>
              
          
              {products.map(product => (
                <div key={product.id}>
                  <Link to={{
                    pathname: '/product',
                    state: {
                      id: product.id,
                      name: product.name,
                      price: product.price
                    }
                  }}
                  >

                  <p>{product.name} {product.price}€</p>
                  <img id="productpic" src={url + 'images/' + product.image} alt={product.name}/>
                  
                  </Link>
                  <figcaption>{product.info}</figcaption>
                  </div>
              ))}
            </div>
              
            </>
          );
}
