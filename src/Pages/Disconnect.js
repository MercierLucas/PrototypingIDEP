import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BackOfficeProducts from './BackOfficeProducts';
import BackOfficePrefs from './BackOfficePrefs';
import styles from '../style.module.css';
import { Link,Redirect} from 'react-router-dom';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Cookies from 'js-cookie'


class Disconnect extends Component{

    constructor(props){
        super()
        this.state=({
            redirect:false
        })
    }
    
    componentDidMount(){
        Cookies.remove('jwt')
        console.log("Cookies removed, JWT:"+Cookies.get('jwt'))
        setTimeout(this.setState({redirect:true}),2000)

    }
     render(){
        return(
            (this.state.redirect) && <Redirect to='/connexion'push />
            
        );
    } 
}

export default Disconnect;