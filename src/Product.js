import React from "react";
import { Container } from "react-bootstrap";
import "./Product.css";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Product({ product, addToCart, url }) {

  return (
    <div className="jtain">
      <div style={{ "padding": "10px" }}>
        <Container>
          <Row>
            <Col md={4} className="nimi">{product?.name}</Col>
            <Col md={{ span: 6, offset: 4 }} className="hinta">Tuotteen hinta: {product?.price}€</Col>
            <Col md={{ span: 4 }} className="kuva"><img src={url + 'images/' + product?.image} alt={product?.name} /></Col>
            <Col md={{ span: 6 }} className="info">{product?.info}</Col>
            <Col md={{ span: 3 }} className="nappi"><button class="btn-lg btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}