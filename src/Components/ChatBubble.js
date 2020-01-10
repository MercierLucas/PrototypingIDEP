import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import styles from '../style.module.css'
import LeftMenu from '../Components/leftMenu';

import avatar from '../avatar.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class ChatBubble extends Component{

    constructor(){
        super();
        this.state={
            isSelected:0
        }
    }
    render(){
        let className;
        if(this.props.isMine) className = styles.leftAlignedBox;
        else className = styles.rightAlignedBox;
        return(
            <div className={styles.chatBox}>
                <div className={className}>
                    <div><Image src="https://via.placeholder.com/40" roundedCircle /></div>
                    <div  className={styles.userBubble}>
                        <p>{this.props.chat}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBubble;