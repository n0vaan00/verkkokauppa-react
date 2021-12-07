import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function Ale({url}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(url + 'sales/getsales.php/')
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
        <div>
            <h3>ALETUOTTEITA</h3>
            <div id="tarjoukset">
            <h3>Huiman halapoja</h3>
            <div style={{'display': 'inline-block'}}>
              
              {products.map(product => (
                <div className="Card" key={product.id}>
                  <Link to={{
                    pathname: '/product',
                    state: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      info: product.info,
                      image: product.image
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
                      </Card.Body>
                    </Card>
                  </Link>
                  </div>
              ))}
            </div>
        </div>
        </div>
    )
}
