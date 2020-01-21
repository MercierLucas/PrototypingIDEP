import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import ibep from '../img/isep.jpg'
import styles from '../style.module.css';

class Home extends Component{
    render(){
        return(
            <div className={styles.container}>
                <div>
                    
                    <Image src={ibep} fluid styles={{'height':'95%','width':'90%','filter':'blur(20px)'}}/>
                    <div className={styles.bottom_right}>
                        <h1>Welcome to IDEP</h1>
                        <h3>ISEP Devices Exchange Plateform</h3>
                        <Row>
                            <Col><Link to='/' ><Button variant="outline-primary" className={styles.outline_btn_white}>Home</Button></Link></Col>
                            <Col><Link to='/Connexion' ><Button variant="outline-primary" className={styles.outline_btn_white}>Connexion</Button></Link></Col>
                            <Col><Link to='/Register' ><Button variant="outline-primary" className={styles.outline_btn_white}>Register</Button></Link></Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;