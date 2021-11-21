import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



export default function Home({url,category}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + category)
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
  }, [])
        return (
            <>
            <div style={{'padding-top': '100px'}}>
              <h3>Products for</h3>
              {products.map(product => (
                <div key={product.trnro}>
                  
                  <p>{product.trnimi}</p>
                    <div>
                      <img src={url + 'images/' + product.image} alt="" />
                    </div>
                  </div>
              ))}
            </div>
              <nav>
                <Link to="/kirjaudu">About</Link>
              </nav>
            </>
          );
}