import React, {Component} from 'react';

import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import {login} from '../API/fakeAPI'
import test from '../test.svg'
class Connexion extends Component{

    constructor(){
        super();
        this.state=({
            username:'',
            password:'',
            errorMessage:''

        });
    }

    onUsernameChange(e){
        this.setState({username:e.target.value})
    }
    onPasswordChange(e){
        console.log("ok");
        this.setState({password:e.target.value})
    }

    async onSubmit(e){
        console.log("submiting")
        e.preventDefault()
        if(this.state.username.length !== 0 && this.state.password.length !== 0){
            this.setState({errorMessage:""})
            let res=await login(this.state.username,this.state.password)
            console.log("RES: "+res)
            if(res === false)
                this.setState({errorMessage:"Wrong password"})
            else{
                let jwt = res
                console.log("Login: "+jwt)
            }
        }else{
            this.setState({errorMessage:"Please fill both fields before submitting"})
        }
    }

    render(){
        return(
            <div className="text-center" style={{backgroundColor:'#E5E5E5',padding:25}}>
                <Col className=" mt-5 col-md-12">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>Don't have an account yet?</h1>
                                </Col>
                                <Col>
                                    <Button variant="outline-primary" type="submit" size="lg">
                                        <Link to='/Register'>Register</Link>
                            </Button>
                                </Col>

                            </Row>
                            <Image src={test} fluid />
                        </Col>
                        <Col className="block-example border border-dark" style={{ borderRadius: 30}}>
                            <h1>Login</h1>
                            <Form onSubmit={(e)=>this.onSubmit(e)}>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="name" placeholder="TCrews" onChange={(value)=>this.onUsernameChange(value)} value={this.state.username} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="******" onChange={(value)=>this.onPasswordChange(value)} value={this.state.password} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="outline-primary" type="submit" size="lg" >
                                    Connect
                            </Button>
                            { //Check if message failed
                                (this.state.errorMessage  === '')
                                ? <div></div> 
                                : <Alert className="w-100 mt-5" variant='danger'>{this.state.errorMessage}</Alert>
                            }
                            </Form>

                        </Col>

                    </Row>
                </Col>
            </div>
        );
    }
}

export default Connexion;