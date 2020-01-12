import React, {Component} from 'react';
import styles from '../style.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import ModalDialog from '../Components/ModalDialog';
import SearchBar from '../Components/SearchBar';
import CustomButton from '../Components/CustomButton';

import {getMyInfos,getObjectsById} from '../API/fakeAPI'



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
            myObjects:[]
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
                avatar_url:'https://eu.ui-avatars.com/api/?name='+infos.forename+'+'+infos.surname
            },()=>{
                this.getObjects()
                }
            )
        }        
    }

    async getObjects(){
        let objects = await getObjectsById(this.state.id)
        if(objects !== false){
            this.setState({
                myObjects:objects
            })
        }
    }
    render(){
        return(
            <div className="mt-5">
                <Row>
                    <Col sm={12} md={{span:4,offset:1}}>
                        <div className={styles.sm_panel}>
                            <div className="text-center">
                                <Image className={styles.profileImage} src={this.state.avatar_url} roundedCircle/>
                                <p>{this.state.forename} {this.state.surname}</p>
                                <p>{this.state.mail}</p>
                                <p>{this.state.balance} $$</p>
                            </div>
                        </div>
                        <div className={styles.sm_panel}>
                            <p>Borrowed objects</p>
                            <hr/>
                            {
                                this.state.myObjects.map(obj=>(
                                    <Row>
                                        <Col lg={10}>Object name</Col>
                                        <Col lg={2}>2days</Col>
                                    </Row>
                                ))
                            }

                        </div>
                    </Col>

                    <Col sm={12} md={{span:6,offset:1}}>
                        <div className={styles.md_panel}>
                            <Row>
                                <Col><p>Objects I proposed</p></Col>
                                <Col><SearchBar/></Col>
                            </Row>
                            
                            <hr/>
                            {
                                this.state.myObjects.map(obj=>(
                                    <Row>
                                        <Col lg={8}>{obj.title}</Col>
                                        <Col lg={2}><ModalDialog type="modify"/></Col>
                                        <Col lg={2}>delete</Col>
                                    </Row>
                                ))
                            }
                            <div className="text-center"><ModalDialog type="new" userId={this.state.id}/></div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MyProfile;