import React, {Component} from 'react';

import SearchBar from '../Components/SearchBar';
import ChatBubble from '../Components/ChatBubble';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/image';
import Form from 'react-bootstrap/Form';


import styles from '../style.module.css';

import avatar from '../img/search.svg';

import {getAllUsers,getMyInfos,sendMessage,getSentMessages,getReceivedMessages} from '../API/fakeAPI'

class Chat extends Component{

    constructor(){
        super();
        this.state=({
            sentMessages:[],
            receivedMessages:[],
            allMessages:[],
            userId:-1,
            isLoading:false,
            searchBox:'',
            customSearch:false,
            users:[],
            filteredUsers:[],
            selectedUserId:0,
            messageContent:''
        });
    }
    
    async componentDidMount(){
        let res = await getAllUsers()
        console.log("USERS")
        console.log(res)
        let infos = await getMyInfos()
        if(infos !== false){
            this.setState({userId:infos.id})
        }


        if(res !== false){
            this.setState({users:res})
        }

        
/*         console.log('Mounted')
        this.setState({ isLoading: true });
        fetch("https://my-json-server.typicode.com/MercierLucas/demo_git/messages")
          .then(response => response.json())
          .then(data =>{
              console.log(data);
              this.setState({isLoading:false,messages:data})
              //this.setState({ hits: data.hits, isLoading: false })
            }); */
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


    searchMessageWithUser(id){
        console.log("Loading messages with "+id)
        this.setState({selectedUserId:id},()=>{
            this.getAllMessages()
        })

    }

    async getAllMessages(){
        let s=await this.sentMessages()
        let r=await this.receivedMessages()
        let sorted=this.combineMessages(s,r)
        this.setState({allMessages:sorted})
    }

    async sentMessages(){
        let res = await getSentMessages(this.state.userId)
        if(res !== false){
            let messages=[]
            res.forEach(msg =>{
                if(msg.receiver.id === this.state.selectedUserId && msg.sender.id === this.state.userId)
                    messages.push(msg)
            })
            this.setState({sentMessages:messages})
            console.log("SENT MSG:")
            console.log(messages)
            return messages
        }
        return []
    }

    combineMessages(s,r){
        if(s.length === 0 && r.length === 0)
            return []
        else if(s.length === 0)
            return r
        else if(r.length === 0)
            return s
        
        console.log("ARRAYS")
        console.log(s)
        console.log(r)
        let sum = s.concat(r)
        sum.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 

        console.log("SORTED")
        console.log(sum)

        return sum
    }

    async receivedMessages(){
        let res = await getReceivedMessages(this.state.userId)
        if(res !== false){
            let messages=[]
            res.forEach(msg =>{
                if(msg.receiver.id === this.state.userId && msg.sender.id === this.state.selectedUserId)
                    messages.push(msg)
            })
            console.log("RECEIVED MSG:")
            console.log(messages)
            return messages
        }
        return []
    }

    onMessageContentChange(e){
        this.setState({messageContent:e.target.value})
    }
    
    async sendMessage(e){
        e.preventDefault()
        console.log(this.state.messageContent)
        let res = await sendMessage(this.state.messageContent,this.state.userId,this.state.selectedUserId)
        if(res !== false){
            console.log(res)
            this.getAllMessages()

        }else{
            console.log(res)
        }
    }




    render(){
        let receiverId = 5;
        let senderId = 4;

        let users;
        this.state.customSearch ? users=this.state.filteredUsers : users = this.state.users

        return(
            <div className="mt-5 text-center">
                <Row>
                    <Col lg={5}>
                        <div className={styles.lg_panel}>
                            <div>
                                <input type="text" className={styles.searchBar} onChange={(value)=>this.onResearchChange(value)}  />
                                <img src={avatar} className={styles.iconRed} alt="" />
                            </div>

                            <div className={styles.scrollableUserList}>
                            {
                                users.map(user=>(
                                    
                                    <Row className={user.id  === this.state.selectedUserId ? styles.userListItemSelected : styles.userListItem} onClick={()=>{this.searchMessageWithUser(user.id)}}>
                                        <Col lg={4}><Image className={styles.userListImg} src={'https://eu.ui-avatars.com/api/?name='+user.username} roundedCircle/></Col>
                                        <Col lg={8}><p className={styles.userListName}>{user.username}</p></Col>
                                    </Row>

                                ))
                            }
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} className={styles.lg_panel}>
                        <p>Messages from: {this.state.selectedUserId}</p>
                        <div className={styles.scrollableChat}>
                        {
                             this.state.allMessages.map(message=>(
                                    message.sender.id === this.state.userId
                                    ?  (<ChatBubble chat={message.content} avatar={message.receiver.username} isMine={0}/>)
                                    : (<ChatBubble chat={message.content} avatar={message.sender.username} isMine={1}/>)
                            ))
                        }
{/*                             <ChatBubble chat={lorem} isMine={1}/>
                            <ChatBubble chat={lorem2} isMine={0}/>
                            <ChatBubble chat={lorem} isMine={0}/>
                            <ChatBubble chat={lorem} isMine={1}/>
                            <ChatBubble chat={lorem} isMine={1}/> */}
                        </div>
                        <Form onSubmit={(e)=>this.sendMessage(e)}>
                            <textarea className={styles.chatInput} cols="50" rows="2" onChange={(e)=>this.onMessageContentChange(e)}></textarea>
                            <Button variant="outline-primary" className={styles.outline_btn} type="submit" size="lg" >Send</Button>
                        </Form>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Chat;