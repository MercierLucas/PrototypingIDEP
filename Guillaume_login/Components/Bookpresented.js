import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import profilterry from '../images/profilterry.jpg'
import coins from '../images/coins.svg'
import dab from '../images/dab.jpg'

import Image from 'react-bootstrap/Image'
import styles from '../styles.css'

export default class Bookpresented extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'blue' }}>
                <Col>
                    <Row>
                        <Col className='col-md-3'>
                            <Image src={profilterry} fluid />
                        </Col>
                        <Col className='col-md-6' >
                            <p className={styles.textos}>Item name</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='col-md-3' >
                            <Image src={dab} fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-1'>
                            <Image src={coins} fluid />
                        </Col>
                        <Col className='col-md-1'>
                            <p>value to pay</p>
                        </Col>
                    </Row>
                </Col>
            </div >
        )
    }
}
