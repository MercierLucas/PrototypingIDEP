import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import styles from '../style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BOProducts extends Component{
    render(){
        return(
            <Row style={{marginLeft:"5px"}} className="mt-3">
                <Col>{this.props.name}</Col>
                <Col>{this.props.from}</Col>
                <Col>{this.props.for}</Col>
                <Col style={{color:"#5dc162"}}>on time</Col>
                <Col>{this.props.price}</Col>
            </Row>
        );
    }
}

export default BOProducts;