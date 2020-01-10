import React, { Component } from 'react'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import profilterry from '../images/profilterry.jpg'
import styles from '../styles.css'

import Image from 'react-bootstrap/Image'

export default class MessagePreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    }


    render() {
        return (
            <div className='text-center' style={{ backgroundColor: 'white',borderRadius:10,margin:10 }}>
                <Row className='align-items-center' style={{ height: 100 }}>
                    <Col className='align-items-center'>
                        <div >
                            <Image src={this.state.photo} style={{ height: 70, width: 70}} roundedCircle >
                            </Image>
                        </div>

                    </Col>

                    <Col className='col-md-9'>
                        <h2 class='textos'>
                        Lorem ipsum  
                        </h2>
                    </Col>
                </Row>
            </div>
        )
    }
}