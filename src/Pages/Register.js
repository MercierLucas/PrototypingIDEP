import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link,Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Alert from 'react-bootstrap/Alert'

import {register} from '../API/fakeAPI'

import test from '../test.svg'


export default class Register extends Component {

    constructor(){
        super();
        this.state=({
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            password:'',
            confirmPassword:'',
            errorMessage:'',
            redirect:false
        });
    }

    onFirstNameChange(e){
        this.setState({firstname:e.target.value})
    }
    onLastNameChange(e){
        console.log("ok");
        this.setState({lastname:e.target.value})
    }
    onUsernameChange(e){
        this.setState({username:e.target.value})
    }
    onEmailChange(e){
        console.log("ok");
        this.setState({email:e.target.value})
    }
    onPasswordChange(e){
        console.log("ok");
        this.setState({password:e.target.value})
    }
    onConfirmPasswordChange(e){
        console.log("ok");
        this.setState({confirmPassword:e.target.value})
    }

    async onSubmit(e){
        e.preventDefault();
        console.log("submit")
        if(this.state.password === this.state.confirmPassword){
            this.setState({errorMessage:""})
            let res=await register(this.state.firstname,this.state.lastname,this.state.username,this.state.email,this.state.password)
            console.log("RES: "+res)
            if(res === false){
                this.setState({redirect:false})
                this.setState({errorMessage:"Username already used"})
            }
                
            else{
                this.setState({redirect:true})
                this.setState({errorMessage:""})
                setTimeout(this.redirectToLogin,2000)
            }
        }else{
            this.setState({errorMessage:"Passwords doesn't match"})
        }
    }

    redirectToLogin(){
        console.log("redirecting...")
        //this.props.history.push('/connexion')
    }

    redire

    render() {
        return (
            <div style={{backgroundColor:'#E5E5E5',padding:25}} class='bigdiv'>
                <Col className="mt-5 col-md-12">
                    <Row>
                        <Col className="block-example border border-dark" style={{ borderRadius: 30}}>
                            <h1>Create Account</h1>
                            <h2 className="">Create an account to start trading items !</h2>
                            <Form onSubmit={(e)=>this.onSubmit(e)}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicFirstName">
                                            <Form.Label>FirstName</Form.Label>
                                            <Form.Control type="name" placeholder="Terry" onChange={(text)=>this.onFirstNameChange(text)} value={this.state.firstname} />
                                            <Form.Text className="text-muted" >
                                                Your name will be displayed to other user for them to identify you.
                                        </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicLastName">
                                            <Form.Label>LastName</Form.Label>
                                            <Form.Control type="name" placeholder="Crews" onChange={(value)=>this.onLastNameChange(value)} value={this.state.lastname} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="name" placeholder="TCrews" onChange={(value)=>this.onUsernameChange(value)} value={this.state.username} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email adress</Form.Label>
                                    <Form.Control type="email" placeholder="terry.crews@isep.fr" onChange={(value)=>this.onEmailChange(value)} value={this.state.email} />
                                    <Form.Text className="text-muted">
                                        You must use your @isep.fr email in order for us to validate your account
                                        </Form.Text>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="******" onChange={(value)=>this.onPasswordChange(value)} value={this.state.password} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="******" onChange={(value)=>this.onConfirmPasswordChange(value)} value={this.state.confirmPassword}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <Button variant="outline-primary" type="submit" size="lg" >
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>Already a member ?</h1>
                                </Col>
                                <Col className="text-center">
                                    <Button variant="outline-primary" type="submit" size="lg">
                                        <Link to='/Connexion'>Login</Link>
                                    </Button>
                                </Col>

                            </Row>
                            <Image src={test} fluid />
                        </Col>
                    </Row>
                </Col>
                <div className="text-center mt-3" >
                { //Check if message failed
                    (this.state.errorMessage  === '')
                    ? <div></div> 
                    : <Alert className="w-50" variant='danger'>{this.state.errorMessage}</Alert>
                }
                { //Check if message failed
                    (this.state.redirect  === true)
                    ? <Alert className="w-50" variant='success'>Account created, you can now <Link to='/Connexion'>login</Link>...</Alert>
                    : <div></div> 
                }
                    
                </div>
            </div>

        )
    }
}

