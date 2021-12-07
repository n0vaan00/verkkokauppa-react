import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Category.css';


export default function Home({url,category,addToCart}) {
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
        <div id="karuselli">
            <Carousel>
                <Carousel.Item>
                    <img
                    id="mainos"
                    className="d-block"
                    src="mainoss1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Kato kato karvamato</h3>
                    <Link className="nav-link" aria-current="page" to="/ale">T-PAETOJA!</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="mainos"
                    className="d-block"
                    src="mainos4.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>MukaMegaALE</h3>
                    <Link className="nav-link" aria-current="page" to="/ale">Katoppa tonne!!</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="mainos"
                    className="d-block"
                    src="mainos3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Tästäki johki</h3>
                    <Link className="nav-link" aria-current="page" to="/ale">O se mahtava!!</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
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
                        <Button>Lisätietoja</Button>
                        
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
