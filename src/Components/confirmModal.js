import React, {Component} from 'react';
import styles from '../style.module.css';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CustomButton from './CustomButton';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';

import AddProduct from '../Pages/AddProduct';

import {addProduct} from '../API/fakeAPI'


class confirmModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            show:false,
            itemTitle:"",
            itemAuthor:"",
            itemCategory:"",
            itemDescription:"",
            itemPrice:0,
            errorMessage:"",
            successMessage:""
        };
    }

    componentDidMount(){
    }

    handleShow(){
        this.setState({
            show:true
        });
    }

    handleClose(){
        this.setState({
            show:false
        });
    }

    onItemTitleChange(e){
        this.setState({itemTitle:e.target.value})
    }

    onItemAuthorChange(e){
        this.setState({itemAuthor:e.target.value})
    }

    onItemCategoryChange(e){
        this.setState({itemCategory:e.target.value})
    }

    onItemDescriptionChange(e){
        this.setState({itemDescription:e.target.value})
    }

    onItemPriceChange(e){
        this.setState({itemPrice:e.target.value})
    }

    async onSubmit(e){
        e.preventDefault()
        console.log("Submitting adding product...")
        console.log("Adding for user: "+this.props.userId)
        let cats =["LIVRE", "LSCOLAIRE", "CD", "DVD"]
        if(this.state.itemTitle.length !== 0 && this.state.itemAuthor.length !== 0 && this.state.itemCategory.length !== 0 && this.state.itemDescription.length !== 0 && this.state.itemPrice.length !== 0){
            if(cats.includes(this.state.itemCategory)){
                let resProduct = await addProduct(this.props.userId,this.state.itemTitle,this.state.itemAuthor,this.state.itemDescription,this.state.itemCategory,this.state.itemPrice)
                if(resProduct === true){
                    this.setState({successMessage:"Successfully added"})
                    this.setState({errorMessage:""})
                }else{
                    this.setState({successMessage:""})
                    this.setState({errorMessage:"Error while adding product"})
                }
            }else{
                this.setState({successMessage:""})
                this.setState({errorMessage:"Please select a valid category"})
            }

        }else{
            this.setState({successMessage:""})
            this.setState({errorMessage:"Please fill all fields"})
        }

    }

    render(){
        let opener;
        let title;
        if(this.props.type === "modify"){
            opener = <a href="#" onClick={()=>this.handleShow()}>modify</a>;
            title = "Modifying existing object";
        }
        else if (this.props.type === "new"){
            opener = <button onClick={()=>this.handleShow()} className={styles.productItemUnselect}>Add product</button>;
            title = "Adding new object";
        }
            
            //opener = <CustomButton onClick={()=>this.handleShow()} name="Add product"/>;
        return(
            <div></div>
        );
    }
}

export default confirmModal;