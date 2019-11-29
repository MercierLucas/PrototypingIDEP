import React, {Component} from 'react';
import styles from '../style.module.css';



class CustomButton extends Component{
    render(){
        return(
            <button className={styles.productItemUnselect}>{this.props.name}</button>
        );
    }
}

export default CustomButton;