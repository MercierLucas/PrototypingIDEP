import React, {Component} from 'react';

import SearchBar from '../Components/SearchBar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAllProducts } from '../API/fakeAPI';

class Chat extends Component{

    render(){
        let products = getAllProducts();
        console.log(products);
        return(
            <div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">Email</Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Category
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Description" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Duration
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Duration" />
                                </Col>
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Exchange place
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Duration" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Price
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Duration" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

            </div>
        );
    }
}

export default Chat;