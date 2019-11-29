import React, {Component} from 'react';

import SearchBar from '../Components/SearchBar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Chat extends Component{
    render(){
        return(
            <div className="mt-5 text-center">
                <Row>
                    <Col lg={5}>
                        <SearchBar/>

                        <div>img</div>
                    </Col>

                    <Col lg={7}>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Chat;