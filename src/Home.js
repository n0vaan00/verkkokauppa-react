import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



export default function Home({url,category}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    if (category !== null){
=======
    if (category !== null) {
>>>>>>> 4f77b34df1d3978f463007d8939fe08698b56882
    axios.get(url + 'products/getproducts.php/' + category?.trnro)
    .then((response) => {
      const json = response.data;
      setProducts(json);
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
              <h3>Products for {category?.trnimi}</h3>
              {product.map(product => (
                <div key={product.tuotenro}>
                  <p>{product.tuotenimi}</p>
                  <p>{product.hinta}</p>
                   {/*} <div>
                      <img src={url + 'images/' + product.image} alt="" />
              </div> */}
                  </div>
              ))}
            </div>
              <nav>
                <Link to="/kirjaudu">About</Link>
              </nav>
            </>
          );
}