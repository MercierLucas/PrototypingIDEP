import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import CategoryItem from '../Components/CategoryItem';
import CustomDropdown from '../Components/CustomDropdown';
import styles from '../style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';



class BackOfficePrefs extends Component{
    render(){
        return(
            <div style={{padding:"10px"}}>
                <div>
                    <p style={{marginRight:"10px"}} className="d-inline">Categories</p>
                    <CategoryItem name="book" className="d-inline"/>
                    <CategoryItem name="Garden" className="d-inline"/>
                    <CategoryItem name="Cooking" className="d-inline"/>
                    <CategoryItem name="Sex" className="d-inline"/>
                    <CategoryItem name="Other" className="d-inline"/>
                    <button className={styles.productItemSelect}>+ New</button>
                </div>
                <Row className="mt-3">
                    <Col lg={{ span:2, offset:2}}><p className="d-inline" style={{marginRight:"10px"}}>Price</p></Col>
                    <Col><input type="text" className={styles.customInput} /></Col>
                    <Col sm={1}><p>to</p></Col>
                    <Col><input type="text" className={styles.customInput} /></Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={{ span:2, offset:2}}>Borrowing duration</Col>
                    <Col><CustomDropdown className="d-inline" name="Price" items={['day','week','months']} /></Col>
                </Row>
            </div>
        );
    }
}

export default BackOfficePrefs;