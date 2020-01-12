import React, {Component} from 'react';
import styles from '../style.module.css'

import Chat from '../chat_white.png';
import Profile from '../avatar_white.png';
import Search from '../search_white.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

import loading from '../img/red_spinner.gif'

class LoadingScreen extends Component{

    randomIntFromInterval(max) { // min and max included 
        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        return Math.floor(Math.random() * (max + 1));
    }

    render(){
        let citations = ["IDEP has changes my life","Donnez moi d'la moulaga","Business is business","I use IDEP nearly everydays","J'remplace centimes par sentiments, mon cœur se transforme en billets"]
        let authors = ["Gandhi","D. Trump","Jimmy","E. Macron","PNL"]
        let citation = citations[this.randomIntFromInterval(citations.length-1)]
        let author = authors[this.randomIntFromInterval(authors.length-1)]
        return(
            <div className={styles.fullScreen}>
                <div className={styles.loadingDiv}>
                    <Image src={loading} fluid/>
                    <p>{citation}</p>
                    <p><i>- {author}</i></p>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;