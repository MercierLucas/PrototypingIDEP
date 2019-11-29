import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BackOfficeProducts from './BackOfficeProducts';
import BackOfficePrefs from './BackOfficePrefs';
import styles from '../style.module.css';

import { Switch, Route,Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class BackOffice extends Component{
    render(){
        return(
            <Row className="mt-4">
                <Col lg={9}>
                    <Row>
                        <Col lg={8}><p>Monitoring</p></Col>
                        <Col lg={4}><SearchBar/></Col>
                    </Row>
                    <div className={styles.lg_panel}>
                        <Row style={{marginLeft:"5px",paddingTop:"5px"}}>
                            <Col><Link to="/usr/BackOffice/products">Products</Link></Col>
                            <Col>Admin</Col>
                            <Col>Users</Col>
                            <Col><Link to="/usr/BackOffice/prefs">Preferences</Link></Col>
                        </Row>
                        <hr/>
                        <Switch>
                            <Route exact path='/usr/BackOffice' component={BackOfficeProducts}/>
                            <Route path='/usr/BackOffice/products' component={BackOfficeProducts}/>
                            <Route path='/usr/BackOffice/prefs' component={BackOfficePrefs}/>
                        </Switch>
                    </div>  
                </Col>
                <Col lg={3}>
                    <Row>
                        <Col><p>Details</p></Col>
                    </Row>
                    <div className={styles.lg_panel}>
                        <p style={{padding:"5px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequuntur ea consequatur laborum reiciendis quaerat et perspiciatis necessitatibus laudantium ullam. Fugit magni quaerat sequi accusamus quae quas velit recusandae pariatur?</p>
                    </div>  
                </Col>
            </Row>
        );
    }
}

export default BackOffice;