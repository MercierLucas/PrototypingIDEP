import React, {Component} from 'react';
import ConnexionHeader from '../Components/ConnexionHeader';
import LeftMenu from '../Components/leftMenu';
import SearchBar from '../Components/SearchBar';
import BOProductItems from '../Components/BOProductItems';
import styles from '../style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class BackOfficeProducts extends Component{
    constructor(){
        super();
        this.state=({
            products:[],
            isLoading:false
        });
    }

    componentDidMount(){
        console.log('Mounted')
        this.setState({ isLoading: true });
        fetch("https://my-json-server.typicode.com/MercierLucas/demo_git/products")
          .then(response => response.json())
          .then(data =>{
              console.log(data);
              this.setState({isLoading:false,products:data})
              //this.setState({ hits: data.hits, isLoading: false })
            });
    }
    render(){
        return(
            <div className="text-center">
                <Row style={{marginLeft:"5px",color:"grey"}} className="text-center">
                    <Col>Name</Col>
                    <Col>Proposed by</Col>
                    <Col>Borrowed by</Col>
                    <Col>Status</Col>
                    <Col>Price</Col>
                </Row>
                {
                    this.state.products.map(product=>(
                        <BOProductItems name={product.product_name} from={product.proposedBy} for={product.borrowedBy} status="on time" price={product.price}/>
                    ))
/*                     Object.keys(this.state.products).map((keyName,key)=>(
                        <BOProductItems name={} from="Lucas M." for="Guillaume E." status="on time" price="4c"/>
                    )) */
                }
            </div>
        );
    }
}

export default BackOfficeProducts;