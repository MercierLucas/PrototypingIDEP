import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BOProductItems from '../Components/BOProductItems';
import styles from '../style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class BackOfficeProducts extends Component{
    render(){
        return(
            <div className="text-center">
                <Row style={{marginLeft:"5px",color:"grey"}} className="text-center">
                    <Col>Name</Col>
                    <Col>Proposed by</Col>
                    <Col>Borrowed by</Col>
                    <Col>Status</Col>
                    <Col>Price</Col>
                </Row>

                <BOProductItems name="Python book" from="Lucas M." for="Guillaume E." status="on time" price="4c"/>
                <BOProductItems name="Appareil raclette" from="Lucas M." for="Guillaume E." status="on time" price="8c"/>
                <BOProductItems name="Casquette full speed" from="Julien BR" for="Guillaume E." status="on time" price="1000c"/>
            </div>
        );
    }
}

export default BackOfficeProducts;