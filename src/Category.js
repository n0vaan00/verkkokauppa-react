import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import './Category.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Cart from './inc/Cart';



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
            <h3>{category?.name}</h3>
              
            <div style={{'display': 'inline-block'}}>
              
              {products.map(product => (
                <div className="Card" key={product.id}>
                  <Link to={{
                    pathname: '/product',
                    state: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      info: product.info
                    }
                  }}
                  >
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={url + 'images/' + product.image} alt={product.name} style={{height:'20rem'}} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.price}
                        </Card.Text> 
                        <Button>Lisätietoja</Button>
                        
                      </Card.Body>
                    </Card>
                  </Link>
                  </div>
              ))}
            </div>
              
            </>
          );
}
