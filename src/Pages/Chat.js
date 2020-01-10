import React, {Component} from 'react';

import SearchBar from '../Components/SearchBar';
import ChatBubble from '../Components/ChatBubble';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../style.module.css';


class Chat extends Component{

    constructor(){
        super();
        this.state=({
            messages:[],
            isLoading:false
        });
    }
    
    componentDidMount(){
        console.log('Mounted')
        this.setState({ isLoading: true });
        fetch("https://my-json-server.typicode.com/MercierLucas/demo_git/messages")
          .then(response => response.json())
          .then(data =>{
              console.log(data);
              this.setState({isLoading:false,messages:data})
              //this.setState({ hits: data.hits, isLoading: false })
            });
    }

    render(){
        let lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus odit dolorem sunt porro incidunt ipsum dignissimos repellat enim eveniet unde, culpa accusamus aspernatur! Blanditiis veritatis qui molestias placeat modi.";
        let lorem2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus odit dolorem sunt porro incidunt ipsum dignissimos repellat enim eveniet unde, culpa accusamus aspernatur! Blanditiis veritatis qui molestias placeat modi "+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus quas vero, praesentium aspernatur eligendi aliquam et possimus voluptate sunt perferendis cumque, delectus amet quam harum facere ratione, accusantium at!";
        let receiverId = 5;
        let senderId = 4;
        return(
            <div className="mt-5 text-center">
                <Row>
                    <Col lg={5}>
                        <SearchBar/>

                        <div>img</div>
                    </Col>

                    <Col lg={7} className={styles.lg_panel}>
                        <p>{senderId}</p>
                        <div className={styles.scrollableChat}>
                        {
                             this.state.messages.map(message=>(
                                    message.sender.id === receiverId
                                    ?  (<ChatBubble chat={message.content} isMine={1}/>)
                                    : (<ChatBubble chat={message.content} isMine={0}/>)
                            ))
                        }
{/*                             <ChatBubble chat={lorem} isMine={1}/>
                            <ChatBubble chat={lorem2} isMine={0}/>
                            <ChatBubble chat={lorem} isMine={0}/>
                            <ChatBubble chat={lorem} isMine={1}/>
                            <ChatBubble chat={lorem} isMine={1}/> */}
                        </div>
                        <textarea className={styles.chatInput} cols="50" rows="2"></textarea>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Chat;