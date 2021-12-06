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
                    <h3>Kato kato karvamato</h3>
                    <Link className="nav-link" aria-current="page" to="/ale">T-PAETOJA!</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    id="mainos"
                    className="d-block"
                    src="mainos2.jpg"
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
    )
}
