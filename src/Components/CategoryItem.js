import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import styles from '../style.module.css'
import LeftMenu from '../Components/leftMenu';

import avatar from '../avatar.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CategoryItems extends Component{

    constructor(){
        super();
        this.state={
            isSelected:0
        }
    }
    render(){
        let bg;

        if(this.state.isSelected)
            bg = <button className={styles.productItemSelect}>{this.props.name}</button>;
        else
            bg = <button className={styles.productItemUnselect}>{this.props.name}</button>;
        return(
             this.state.isSelected
                ? <button className={styles.productItemSelect}>{this.props.name}</button>
                : <button className={styles.productItemUnselect}>{this.props.name}</button>
        );
    }
}

export default CategoryItems;