import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import test from '../images/test.svg'
import dab from '../images/dab.jpg'
import friend from '../images/friend.jpg'

import MessagePreview from '../Components/MessagePreview'

import NewMessagePreview from '../Components/newMessagePreview'


import Bookpresented from '../Components/Bookpresented'

export default class Login extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#E5E5E5',padding:25}} class='bigdiv'>
                <h1>This is the Login page</h1>
                <Col className="col-md-12">
                    <Row>
                        <Col className="block-example border border-dark" style={{ borderRadius: 30}}>
                            <h1>Create Account</h1>
                            <h2 className="">Create an account to start trading items !</h2>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>FirstName</Form.Label>
                                            <Form.Control type="name" placeholder="Terry" />
                                            <Form.Text className="text-muted">
                                                Your name will be displayed to other user for them to identify you.
                                        </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicLastName">
                                            <Form.Label>LastName</Form.Label>
                                            <Form.Control type="name" placeholder="Crews" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email adress</Form.Label>
                                    <Form.Control type="email" placeholder="terry.crews@isep.fr" />
                                    <Form.Text className="text-muted">
                                        You must use your @isep.fr email in ordder for us to validate your account
                                        </Form.Text>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="******" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="******" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" type="submit" size="lg">
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>Already a member ?</h1>
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit" size="lg">
                                        Login
                            </Button>
                                </Col>

                            </Row>
                            <Image src={test} fluid />
                        </Col>
                    </Row>


                    <Col className='col-md-4' >
                        <NewMessagePreview photo={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} 
                        lastmessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci "}
                        />
                        <NewMessagePreview photo={"https://images.pexels.com/photos/2144413/pexels-photo-2144413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                        lastmessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci "}
                        />
                        <NewMessagePreview
                        photo={"http://www.leparisien.fr/resizer/PdJfx3aUtmLc1tc18fHCK-kHzRI=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/T2G2F4K54A7BHO6PFD4OJDUVOY.jpg"}
                        lastmessage={"J'adore le muscle et la data"}
                       
                        />
                        <NewMessagePreview photo={"https://images.pexels.com/photos/2144413/pexels-photo-2144413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                        lastmessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci "}
                        />
                        <NewMessagePreview photo={"https://images.pexels.com/photos/2144413/pexels-photo-2144413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                        lastmessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci "}
                        />
                        <NewMessagePreview photo={"https://images.pexels.com/photos/2144413/pexels-photo-2144413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
                        lastmessage={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci "}
                        />

                        
                    </Col>
                </Col>

            </div>

        )
    }
}

