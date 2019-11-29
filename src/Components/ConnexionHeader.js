import React, {Component} from 'react';
import styles from '../style.module.css'

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


class ConnexionHeader extends Component{
    render(){
        return(
            <Row className={styles.BannerColor} style={{width:"92.5vw",position:"relative",boxShadow:" 2px 2px 5px grey"}}>
                <Col lg={{ span:2, offset:9}} sm={{ span:2, offset:8}} xs={{ span:6}} ><p className={styles.accountName}>Pharaon XXX</p></Col>
                <Col lg={1} sm={2} xs={6}><Link to='/usr/BackOffice'><Image src="https://via.placeholder.com/45" roundedCircle  /></Link></Col>
            </Row>
        );
    }
}

export default ConnexionHeader;