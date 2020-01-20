import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import carousel_1 from '../img/carousel_1.jpg'


class Home extends Component{
    render(){
        return(
            <div className="text-center">
                <h1>This is the home page</h1>
                <Carousel style={{height:500}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src="../img/carousel_1.jpg"
                            alt="Third slide"
                        />
                        {/* <Image src={carousel_1} className="d-block w-100" /> */}
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Row>
                    <Col><Button variant="outline-primary"><Link to='/'>Home</Link></Button></Col>
                    <Col><Button variant="outline-primary"><Link to='/Connexion'>Connexion</Link></Button></Col>
                    <Col><Button variant="outline-primary"><Link to='/Register'>Register</Link></Button></Col>
                </Row>
            </div>
        );
    }
}

export default Home;