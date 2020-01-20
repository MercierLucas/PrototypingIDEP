import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BOProductItems from '../Components/BOProductItems';
import ModalObjects from '../Components/ModalObjects';
import styles from '../style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

import {getAllUsers,getObjectsById,deleteUserById} from '../API/fakeAPI'


import avatar from '../img/search.svg';
import coin from '../img/coin-stack.svg';
import trash from '../img/user.svg';

class BackOfficeUsers extends Component{
    constructor(){
        super();
        this.state=({
            users:[],
            filteredUsers:[],
            searchBox:'',
            customSearch:false,
            isLoading:false,
            userObjects:[]
        });
    }

    componentDidMount(){
        this.getUsers()
    }

    async getUsers(){
        let res = await getAllUsers()
        if(res !== false){
            this.setState({users:res})
        }
    }

    async getMyObjects(id){
        console.log("getting my objects...")
        let objects = await getObjectsById(id)
        if(objects !== false){
            this.setState({
                userObjects:objects
            },()=>{
                console.log(this.state.userObjects)
            })
        }
    }

    containsWord(word,array){
        let res=[]
        array.forEach(obj => {
            if(obj.username.includes(word))
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
                        filteredUsers: this.containsWord(word,this.state.users)
                    })
                }
                this.setState({customSearch:true})
                console.log(this.state.filteredUsers)
            })
        }else{
            this.setState({searchBar:""})
            this.setState({customSearch:false})
        }

        console.log(word.length!==0)
    }

    async deleteItem(id){
        console.log("deleting item")
        let res = await deleteUserById(id)
        console.log(res)
        this.getUsers()
    }

    render(){

        let users;
        this.state.customSearch ? users=this.state.filteredUsers : users = this.state.users

        return(
            <div className="text-center">
                <div>
                    <input type="text" className={styles.searchBar} onChange={(value)=>this.onResearchChange(value)}  />
                    <img src={avatar} className={styles.iconRed} alt="" />
                </div>
                <Row style={{marginLeft:"5px",color:"grey"}} className="text-center">
                    <Col>Name</Col>
                    <Col>Proposed items</Col>
                    <Col>Borrowed items</Col>
                    <Col>Role</Col>
                    <Col>Wallet</Col>
                    <Col>Actions</Col>
                </Row>
                {
                    users.map(user=>(
                        <Row>
                            <Col>{user.username}</Col>
                            <Col><ModalObjects username={user.username} userId={user.id}/></Col>
                            <Col><a href="#">see</a></Col>
                            {
                                (user.admin)
                                ? (<Col lg={2}><Badge variant="secondary">admin</Badge></Col>)
                                : (<Col lg={2}><Badge variant="success">user</Badge></Col>)
                            }
                            <Col>{user.balance} <Image className={styles.optionsImg} src={coin}/></Col>
                            <Col><a href="# " className={styles.redColor} onClick={()=>{if(window.confirm("Are you sure?")) this.deleteItem(user.id)}}><Image className={styles.optionsImg} src={trash}/></a></Col>
                        </Row>
                    ))
/*                     Object.keys(this.state.products).map((keyName,key)=>(
                        <BOProductItems name={} from="Lucas M." for="Guillaume E." status="on time" price="4c"/>
                    )) */
                }
            </div>
        );
    }
}

export default BackOfficeUsers;