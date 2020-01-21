import React, {Component} from 'react';
import styles from '../style.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

import ModalDialog from '../Components/ModalDialog';
import AddFileModal from '../Components/addFileModal';
import SearchBar from '../Components/SearchBar';
import CustomButton from '../Components/CustomButton';

import {getMyInfos,getObjectsById,getBorrowedProducts,deleteObjectsById} from '../API/fakeAPI'

import avatar from '../img/search.svg';
import coin from '../img/coin-stack.svg';
import trash from '../img/delete.svg';

class MyProfile extends Component{

    constructor(props){
        super()
        this.state=({
            id:-1,
            forename :"",
            surname :"",
            username:"",
            mail:"",
            balance:0.0,
            admin:false,
            avatar_url:"",
            myObjects:[],
            myObjectsFiltered:[],
            searchBox:"",
            borrowedObjects:[],
            areObjectsFiltered:false
        })

    }

    async componentDidMount(){
        let infos = await getMyInfos()
        console.log("INFOS RETURNED: "+Object.keys(infos))
        console.log(infos)
        if(infos !== false){
            this.setState({
                id:infos.id,
                forename :infos.forename,
                surname :infos.surname,
                username:infos.username,
                mail:infos.mail,
                balance:infos.balance,
                admin:infos.admin,
                avatar_url:'https://eu.ui-avatars.com/api/?name='+infos.forename+'+'+infos.surname,
                searchBox:""
            },()=>{
                this.getMyObjects()
                this.getBorrowedObjects()
                }
            )
        }        
    }

    async getMyObjects(){
        console.log("getting my objects...")
        let objects = await getObjectsById(this.state.id)
        if(objects !== false){
            this.setState({
                myObjects:objects
            },()=>{
                console.log(this.state.myObjects)
            })
        }
    }

    async getBorrowedObjects(){
        let bObjects = await getBorrowedProducts(this.state.id)
        if(bObjects !== false){
            this.setState({
                borrowedObjects:bObjects
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

    displayObjects(){
            this.state.myObjects.map(obj=>(
                <Row>
                    <Col lg={4}>{obj.title}</Col>
                    {
                        (obj.borrowed)
                        ? (<Col lg={2}><Badge variant="secondary">borrowed</Badge></Col>)
                        : (<Col lg={2}><Badge variant="success">available</Badge></Col>)
                    }
                    <Col lg={2}>{obj.price} $</Col>
                    <Col lg={2}><ModalDialog type="modify"/></Col>
                    <Col lg={2}>delete</Col>
                </Row>
            ))
        
    }

    async deleteItem(id){
        console.log("deleting item")
        let res = await deleteObjectsById(id)
        console.log(res)
        this.getMyObjects()
    }
    render(){
        let myObjects;
        this.state.areObjectsFiltered ? myObjects=this.state.myObjectsFiltered : myObjects = this.state.myObjects

        return(
            <div className="mt-5">
                <Row>
                    <Col sm={12} md={{span:4,offset:1}}>
                        <div className={styles.sm_panel}>
                            <div className="text-center">
                                <Image className={styles.profileImage} src={this.state.avatar_url} roundedCircle/>
                                <p>{this.state.forename} {this.state.surname}</p>
                                <p>{this.state.mail}</p>
                                <p>{this.state.balance} <Image className={styles.optionsImg} src={coin}/></p>
                            </div>
                        </div>
                        <div className={styles.sm_panel}>
                            <p>Borrowed objects</p>
                            <hr/>
                            {
                                this.state.borrowedObjects.map(obj=>(
                                    <Row>
                                        <Col lg={10}>{obj.title}</Col>
                                        <Col lg={2}>X days</Col>
                                    </Row>
                                ))
                            }

                        </div>
                    </Col>

                    <Col sm={12} md={{span:6,offset:1}}>
                        <div className={styles.md_panel}>
                            <Row>
                                <Col><p>Objects I proposed</p></Col>
                                <Col>
                                    <input type="text" className={styles.searchBar} onChange={(value)=>this.onResearchChange(value)}  />
                                    <img src={avatar} className={styles.iconRed} alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={3}>Object</Col>
                                <Col lg={2}>Status</Col>
                                <Col lg={2}>Price</Col>
                                <Col lg={4}>Actions</Col>
                            </Row>
                            
                            <hr/>
                            {
                                myObjects.map(obj=>(
                                    <Row>
                                        <Col lg={3}>{obj.title}</Col>
                                        
                                        {
                                            (obj.borrowed)
                                            ? (<Col lg={2}><Badge variant="secondary">borrowed</Badge></Col>)
                                            : (<Col lg={2}><Badge variant="success">available</Badge></Col>)
                                        }
                                        <Col lg={2}>{obj.price} <Image className={styles.optionsImg} src={coin}/></Col>
                                        <Col lg={1}><ModalDialog type="edit" objId={obj.id} title={obj.title} category={obj.category} description={obj.description} price={obj.price} author={obj.author} /></Col>
                                        <Col lg={1}><AddFileModal type="edit" objId={obj.id}/></Col>
                                        <Col lg={1}><a href="# " className={styles.redColor} onClick={()=>{if(window.confirm("Are you sure?")) this.deleteItem(obj.id)}}><Image className={styles.optionsImg} src={trash}/></a></Col>
                                    </Row>
                                ))
                            }
                            <div className="text-center mt-3"><ModalDialog type="new" userId={this.state.id}/></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MyProfile;