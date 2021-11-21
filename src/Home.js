import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



export default function Home({url,category}) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    console.log(category)
    axios.get(url + 'products/getproducts.php/' + category.trnro)
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
  }, [category])
        return (
            <>
            <div style={{'padding-top': '100px'}}>
              <h3>Products for {category}</h3>
              {product.map(product => (
                <div key={product.tuotenro}>
                  
                  <p>{product.trnimi}</p>
                  <p>{product.tuotenimi}</p>
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