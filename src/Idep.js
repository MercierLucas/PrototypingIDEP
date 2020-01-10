import React, {Component} from 'react';
import Base from './Pages/Base';
import BackOffice from './Pages/BackOffice';
import Connexion from './Pages/Connexion';
import Register from './Pages/Register';
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom'


class Idep extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/connexion' component={Connexion}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/usr' component={Base}/>
                </Switch>
            </div>
        );
    }
}

export default Idep;