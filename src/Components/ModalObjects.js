import React, {Component} from 'react';
import styles from '../style.module.css';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CustomButton from './CustomButton';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';

import AddProduct from '../Pages/AddProduct';

import {getObjectsById} from '../API/fakeAPI'

import avatar from '../img/search.svg';
import coin from '../img/coin-stack.svg';


class ModalObjects extends Component{

    constructor(props){
        super(props);
        this.state = ({
            show:false,
            userObjects:[],
        })
    }

    handleShow(){
        this.setState({
            show:true
        });
        console.log("PROPS")
        console.log(this.props)
        this.getMyObjects(this.props.userId)
    }

    handleClose(){
        this.setState({
            show:false
        });
    }

    async getMyObjects(id){
        
        console.log("getting my objects...")
        let objects = await getObjectsById(id)
        if(objects !== false){
            this.setState({
                userObjects:objects
            },()=>{
                console.log(this.state.userObjects)
            })
        }
    }


    render(){
        let opener;
        opener = <a href="#" onClick={()=>this.handleShow()}>see</a>;
/*         if(this.props.type === "edit"){
            opener = <a href="#" onClick={()=>this.handleShow()}>modify</a>;
            title = "Modifying existing object";
            confirmBtn = "Edit";
        } */

        return(
            <div>
                {opener}
                <Modal show={this.state.show} onHide={()=>this.handleClose()} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Seeing: {this.props.username}'s objects</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col lg={4}>Object</Col>
                            <Col lg={2}>Status</Col>
                            <Col lg={2}>Price</Col>
                        </Row>
                            
                        <hr/>

                        {
                            this.state.userObjects.map(obj=>(
                                <Row>
                                    <Col lg={4}>{obj.title}</Col>
                                    {
                                        (obj.borrowed)
                                        ? (<Col lg={2}><Badge variant="secondary">borrowed</Badge></Col>)
                                        : (<Col lg={2}><Badge variant="success">available</Badge></Col>)
                                    }
                                    <Col lg={2}>{obj.price}<Image className={styles.optionsImg} src={coin}/></Col>
                                </Row>
                            ))
                        }
                        {
                            this.state.userObjects.length === 0 && <p>No objects yet</p>
                        }
                    </Modal.Body>
                </Modal>
          </div>
        );
    }
}

export default ModalObjects;