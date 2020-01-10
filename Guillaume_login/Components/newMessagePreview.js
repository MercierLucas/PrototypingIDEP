import React, { Component } from 'react'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import profilterry from '../images/profilterry.jpg'
import styles from '../styles.css'

import Image from 'react-bootstrap/Image'

export default class NewMessagePreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.photo,
            lastmessage:this.props.lastmessage
        }
    }


    render() {
        return (
            <div style={{ borderRadius: 10, margin: 10 }} class='parentdiv'>
                <div class='imagediv'>
                    <Image src={this.state.photo} style={{ height: 70, width: 70 }} roundedCircle >
                    </Image>

                </div>
                <div class='textdiv'>
                    <p class='textos'>
                        {this.state.lastmessage}
                    </p>

                </div>
            </div>
        )
    }
}