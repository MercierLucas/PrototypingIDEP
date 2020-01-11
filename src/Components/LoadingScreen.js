import React, {Component} from 'react';
import styles from '../style.module.css'

import Chat from '../chat_white.png';
import Profile from '../avatar_white.png';
import Search from '../search_white.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

import loading from '../bim.gif'

class LoadingScreen extends Component{
    render(){
        return(
            <div className={styles.fullScreen}>
                <div className={styles.centerVH}>
                    <Image src={loading} fluid/>
                    <p>Connection success, redirecting...</p>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;