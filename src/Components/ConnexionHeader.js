import React, {Component} from 'react';
import styles from '../style.module.css'

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import {getMyInfos} from '../API/fakeAPI';


class ConnexionHeader extends Component{


    constructor(){
        super()
        this.state=({
            username:'',
        })
    }
    async componentDidMount(){
        let infos = await getMyInfos()
        if(infos !== false){
            this.setState({username:infos.username})
        }
    }
    render(){
        return(
            <Row className={styles.BannerColor} style={{width:"92.5vw",position:"relative",boxShadow:" 2px 2px 5px grey"}}>
                <Col lg={{ span:2, offset:8}} sm={{ span:2, offset:7}} xs={{ span:5}} ><p className={styles.accountName}>{this.state.username}</p></Col>
                <Col lg={1} sm={2} xs={6}><Link to='/disconnect'><p className={styles.accountName}>Disconnect</p></Link></Col>
                <Col lg={1} sm={2} xs={6}><Link to='/usr/BackOffice'><Image src="https://via.placeholder.com/45" roundedCircle  /></Link></Col>
            </Row>
        );
    }
}

export default ConnexionHeader;