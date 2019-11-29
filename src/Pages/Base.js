import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import BackOffice from './BackOffice';
import MyProfile from './MyProfile';
import Chat from './Chat';
import Search from './Search';

import { Switch, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Base extends Component{
    render(){
        return(
            <Row style={{height:"100vh",width:"100vw"}}>
                <LeftMenu/>
                <Col lg={11} xs={10}>
                    <ConnexionHeader/>
                    <Switch>
                        <Route exact path='/usr' component={MyProfile}/>
                        <Route exact path='/usr/my-profile' component={MyProfile}/>
                        <Route exact path='/usr/chat' component={Chat}/>
                        <Route exact path='/usr/search' component={Search}/>
                        <Route path='/usr/Backoffice' component={BackOffice}/>
                    </Switch>
                </Col>  
            </Row>
        );
    }
}

export default Base;