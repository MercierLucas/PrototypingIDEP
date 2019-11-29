import React, {Component} from 'react';
import styles from '../style.module.css'

import Chat from '../chat_white.png';
import Profile from '../avatar_white.png';
import Search from '../search_white.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';


class LeftMenu extends Component{
    render(){
        return(
            <Col md={1} xs={2} lg={1} style={{position:"relative",backgroundColor: "#3d3b3c"}} className="text-center">
                <div className={styles.centerVH}>
                    <div><Link to='/usr/my-profile'><img src={Profile} className={styles.leftIcon} alt=""/></Link></div>
                    <div><Link to='/usr/chat'><img src={Chat} style={{marginTop:"20px",marginBottom:"20px"}} className={styles.leftIcon} alt=""/></Link></div>
                    <div><Link to='/usr/search'><img src={Search} className={styles.leftIcon} alt=""/></Link></div>
{/*                     <p className={styles.WhiteColor}>Profile</p>
                    <p className={styles.WhiteColor}>Chat</p>
                    <p className={styles.WhiteColor}>Search</p> */}
                </div>
            </Col>
        );
    }
}

export default LeftMenu;