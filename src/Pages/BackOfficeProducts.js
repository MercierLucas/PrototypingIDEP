import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BOProductItems from '../Components/BOProductItems';
import styles from '../style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

import {getAllObjects} from '../API/fakeAPI'

import avatar from '../img/search.svg';
import coin from '../img/coin-stack.svg';

class BackOfficeProducts extends Component{

    constructor(){
        super();
        this.state=({
            isLoading:false,
            myObjects:[],
            myObjectsFiltered:[],
            searchBox:"",
            borrowedObjects:[],
            areObjectsFiltered:false
        });
    }

    componentDidMount(){
        this.getMyObjects()
    }

    async getMyObjects(){
        console.log("getting my objects...")
        let objects = await getAllObjects()
        if(objects !== false){
            this.setState({
                myObjects:objects
            },()=>{
                console.log(this.state.myObjects)
            })
        }
    }

    containsWord(word,array){
        let res=[]
        array.forEach(obj => {
            if(obj.title.includes(word))
                res.push(obj)
        });

        return res
    }

    onResearchChange(e){
        
        e.preventDefault()
        let word = e.target.value
        console.log("LOWER: "+word)
        if(word.length !== 0){
            this.setState({searchBox:word},()=>{
                if(this.state.searchBox.length !== 0){
                    this.setState({
                        myObjectsFiltered: this.containsWord(word,this.state.myObjects)
                    })
                }
                console.log(this.state.myObjectsFiltered)
                this.setState({areObjectsFiltered:true})
            })
        }else{
            this.setState({searchBar:""})
            this.setState({areObjectsFiltered:false})
        }

        console.log(word.length!==0)
    }

    render(){
        let myObjects;
        this.state.areObjectsFiltered ? myObjects=this.state.myObjectsFiltered : myObjects = this.state.myObjects
        return(
            <div className="text-center">
                <div>
                    <input type="text" className={styles.searchBar} onChange={(value)=>this.onResearchChange(value)}  />
                    <img src={avatar} className={styles.iconRed} alt="" />
                </div>
                <Row style={{marginLeft:"5px",color:"grey"}} className="text-center">
                    <Col>Name</Col>
                    <Col>Status</Col>
                    <Col>Price</Col>
                </Row>
                {
                    myObjects.map(obj=>(
                        <Row>
                            <Col>{obj.title}</Col>
                            
                            {
                                (obj.borrowed)
                                ? (<Col><Badge variant="secondary">borrowed</Badge></Col>)
                                : (<Col><Badge variant="success">available</Badge></Col>)
                            }
                            <Col>{obj.price} <Image className={styles.optionsImg} src={coin}/></Col>
                        </Row>
                    ))
                }
            </div>
        );
    }
}

export default BackOfficeProducts;