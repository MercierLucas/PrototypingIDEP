import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Connexion extends Component{
    render(){
        return(
            <div className="mt-5 text-center">
                <h1>This is the connexion page</h1>
                <Row>
                    <Col><Button variant="outline-primary"><Link to='/'>Home</Link></Button></Col>
                    <Col><Button variant="outline-primary"><Link to='/usr'>Connect</Link></Button></Col>
                </Row>
            </div>
        );
    }
}

export default Connexion;