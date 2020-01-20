import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BackOfficeProducts from './BackOfficeProducts';
import BackOfficePrefs from './BackOfficePrefs';
import BackOfficeUsers from './BackOfficeUsers';
import styles from '../style.module.css';

import { Switch, Route,Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import {createUser} from '../API/fakeAPI'

class BackOffice extends Component{


    constructor(){
        super()

        this.state=({
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            balance:0,
            errorMessage:'',
            confirmMessage:'',
            isAdmin:false
        })
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
    onBalanceChange(e){
        console.log("ok");
        this.setState({balance:parseInt(e.target.value)})
    }

    onAdminChange(e){
        this.setState({isAdmin:e.target.checked})
    }

    async onSubmit(e){
        e.preventDefault()
        console.log("submited")
        if(this.state.username.length !== 0 && this.state.firstname.length !== 0 && this.state.lastname.length !== 0 && this.state.password.length !== 0){
            this.setState({errorMessage:''})
            this.setState({confirmMessage:""})
            let res = await createUser (this.state.firstname,this.state.lastname,this.state.username,this.state.email,this.state.password,this.state.balance,this.state.isAdmin)
            if(res === false){
                this.setState({errorMessage:"Error while adding user"})
            }else{
                console.log(res)
                this.setState({confirmMessage:"User created"})
            }
        }else{
            this.setState({confirmMessage:""})
            this.setState({errorMessage:'Please fill all fields'})
        }

    }

    render(){
        return(
            <Row className="mt-4">
                <Col lg={9}>
                    <Row>
                        <Col lg={8}><p>Monitoring</p></Col>
                    </Row>
                    <div className={styles.lg_panel}>
                        <Row style={{marginLeft:"5px",paddingTop:"5px"}}>
                            <Col><Link to="/usr/BackOffice/products">Products</Link></Col>
                            <Col><Link to="/usr/BackOffice/users">Users</Link></Col>
                            <Col><Link to="/usr/BackOffice/prefs">Preferences</Link></Col>
                        </Row>
                        <hr/>
                        <Switch>
                            <Route exact path='/usr/BackOffice' component={BackOfficeProducts}/>
                            <Route path='/usr/BackOffice/products' component={BackOfficeProducts}/>
                            <Route path='/usr/BackOffice/prefs' component={BackOfficePrefs}/>
                            <Route path='/usr/BackOffice/users' component={BackOfficeUsers}/>
                        </Switch>
                    </div>  
                </Col>
                <Col lg={3}>
                    <Row>
                        <Col><p>Details</p></Col>
                    </Row>
                    <div className={styles.lg_panel}>
                        <Form onSubmit={(e)=>this.onSubmit(e)}>
                            <div>Create user</div>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicFirstName">
                                        <Form.Label>FirstName</Form.Label>
                                        <Form.Control type="name" placeholder="Terry" onChange={(text)=>this.onFirstNameChange(text)} value={this.state.firstname} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicLastName">
                                        <Form.Label>LastName</Form.Label>
                                        <Form.Control type="name" placeholder="Crews" onChange={(value)=>this.onLastNameChange(value)} value={this.state.lastname} />
                                    </Form.Group>
                                </Col>
                            </Row>
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
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="TCrews" onChange={(value)=>this.onPasswordChange(value)} value={this.state.password} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email adress</Form.Label>
                                        <Form.Control type="email" placeholder="terry.crews@isep.fr" onChange={(value)=>this.onEmailChange(value)} value={this.state.email} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Balance</Form.Label>
                                        <Form.Control type="number" placeholder="1-100" onChange={(value)=>this.onBalanceChange(value)} value={this.state.balance} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Is an admin" onChange={(e)=>this.onAdminChange(e)}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <Button variant="outline-primary" className={styles.outline_btn} type="submit" size="lg" >
                                    Submit
                                </Button>
                            </div>
                            { //Check if message failed
                                    (this.state.errorMessage  !== '') && <Alert className="w-100 mt-5" variant='danger'>{this.state.errorMessage}</Alert>
                            }
                            { //Check if message failed
                                    (this.state.confirmMessage  !== '') && <Alert className="w-100 mt-5" variant='success'>{this.state.confirmMessage}</Alert>
                            }

                        </Form>
                    </div>  
                </Col>
            </Row>
        );
    }
}

export default BackOffice;