import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="mainos"
                    className="d-block"
                    src="mainoss1.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>MukaMegaALE</h3>
                    <Link className="nav-link" aria-current="page" to="/category">Katoppa tonne!!</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="mainos"
                    className="d-block"
                    src="banner.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
