import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import styles from '../style.module.css'
import LeftMenu from '../Components/leftMenu';

import avatar from '../avatar.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchBar extends Component{
    render(){
        return(
            <div>
                <input type="text" className={styles.searchBar}/>
                <img src={avatar} className={styles.iconRed} alt=""/>
            </div>
        );
    }
}

export default SearchBar;