import React, {Component} from 'react';
import Base from './Pages/Base';
import BackOffice from './Pages/BackOffice';
import Connexion from './Pages/Connexion';
import Register from './Pages/Register';
import Disconnect from './Pages/Disconnect';
import Home from './Pages/Home';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom'
import {checkCreditentials} from './API/fakeAPI'
import Cookies from 'js-cookie';


class Idep extends Component{

    constructor(props){
        super(props)
        this.state=({
            login:false
        })
    }
    checkForCredits = async () => {
        console.log("CHECK CALLED")
        let isLogged = false;
        let jwt = Cookies.get("jwt")
        console.log("has found jwt:"+jwt)
        if(typeof jwt !== 'undefined'){
            let jwt_test='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhIiwiZXhwIjoxNTc5MDQzNzQ5LCJpYXQiOjE1Nzg2ODM3NDl9.xf_kuBWjS_WFAnwq16zH8FOnwzBa1DWROhpFRjsokj0M0dGgUwcBEyNEdNJWVgYiw4WRpSaEYRwjPX5daE5AbA'
            //console.log("JWT : "+jwt)
            isLogged = await checkCreditentials(jwt)
            console.log("has waited: "+isLogged)
            this.setState({login:isLogged},()=>{
                console.log("login : "+this.state.login)
            })
        }else{
            this.setState({login:false})
        }
        console.log("Is logged :"+isLogged)
        return 
    }

    componentDidMount = async () =>{
        console.log("BASE router called")
        this.checkForCredits()
        //this.setState({login:temp},console.log("UPDATE STATE : "+this.state.login))
        
    }

    async componentDidUpdate(){

    }

    render(){
        let granted = function(){
            console.log("ACCESS GRANTED: goto usr" )
            return <Route path='/usr' component={Base}/>
        }
        let denied = function(){
            console.log("ACCESS DENIED: goto connexion" )
            return <Redirect to="/connexion" push/>
        }
        //let canGo = wait checkForCredits()
        return(
            <div>
                {/*
                    pas co & user => login
                    pas co & login => login
                    co  & user => usr
                    co  & login => usr
                */}
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
{/*                         <Route 
                            path='/connexion'
                            render={(props)=>(
                                <Connexion {...props} check={this.checkForCredits}/>
                            )}
                        /> */}
                        <Route path='/register' component={Register}/>
                        <Route path='/disconnect' component={Disconnect}/>
                        <Route 
                            path='/connexion'
                            render={(props)=>(
                                <Connexion {...props} check={this.checkForCredits}/>
                            )}
                        />
                        <Route path="/usr" render={()=>(
                            this.state.login === true
                            ? granted()
                            //? 
                            : denied()
                        )}/>

                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Idep;