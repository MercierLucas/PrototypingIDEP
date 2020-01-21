import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



import OtherFiltering from '../Components/OtherFiltering'
import {getAllObjects} from '../API/fakeAPI'


class Search extends Component {  

    constructor(){
        super();
        this.state=({
            data:[],
            isLoading:false,
        });
    }
    
    
    async componentWillMount(){
        console.log('Mounted')
        let products = await getAllObjects()  
        if (products !== false) {
            this.setState({
                data:products
            }
            )
        }     
    }


    render() {

        return (
            <div className="text-center">
                <OtherFiltering bigdata={this.state.data}/>
            </div>
        );
    }
}

export default Search;