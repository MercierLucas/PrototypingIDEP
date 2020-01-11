import React, {Component} from 'react';
import styles from '../style.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import ModalDialog from '../Components/ModalDialog';
import SearchBar from '../Components/SearchBar';
import CustomButton from '../Components/CustomButton';



class MyProfile extends Component{

    componentDidMount(){
        console.log("yo")
    }
    render(){
        return(
            <div className="mt-5">
                <Row>
                    <Col sm={12} md={{span:4,offset:1}}>
                        <div className={styles.sm_panel}>
                            <div className="text-center">
                                <Image className={styles.profileImage} src="https://via.placeholder.com/100" roundedCircle/>
                                <p>Lucas Mercier (lucas.mercier@isep.fr)</p>
                                <p>40 cryto bitcoins amérindiens</p>
                            </div>
                        </div>
                        <div className={styles.sm_panel}>
                            <p>Borrowed objects</p>
                            <hr/>
                            <Row>
                                <Col lg={10}>Object name</Col>
                                <Col lg={2}>2days</Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={12} md={{span:6,offset:1}}>
                        <div className={styles.md_panel}>
                            <Row>
                                <Col><p>Objects I proposed</p></Col>
                                <Col><SearchBar/></Col>
                            </Row>
                            
                            <hr/>
                            <Row>
                                <Col lg={8}>Object name</Col>
                                <Col lg={2}><ModalDialog type="modify"/></Col>
                                <Col lg={2}>delete</Col>
                            </Row>
                            <Row className="mt-2">
                                <Col lg={8}>Object name</Col>
                                <Col lg={2}>modify</Col>
                                <Col lg={2}>delete</Col>
                            </Row>
                            <div className="text-center"><ModalDialog type="new"/></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MyProfile;