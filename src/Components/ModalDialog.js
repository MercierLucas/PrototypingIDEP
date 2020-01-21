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

import {addProduct,updateObjectsInfo} from '../API/fakeAPI'

import edit from '../img/edit.svg';

class ModalDialog extends Component{

    constructor(props){
        super(props);
        this.state = {
            show:false,
            objId:-1,
            itemTitle:"",
            itemAuthor:"",
            itemCategory:"",
            itemDescription:"",
            itemPrice:0,
            errorMessage:"",
            successMessage:"",
            image1:''
        };
    }

    componentDidMount(){
        console.log("PROPS")
        console.log(this.props)
        if(this.props.type === "edit"){
            this.setState({
                objId:this.props.objId,
                itemTitle:this.props.title,
                itemAuthor:this.props.author,
                itemCategory:this.props.category,
                itemDescription:this.props.description,
                itemPrice:this.props.price
            })
        }
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
                if(this.props.type === "edit"){
                    let resProduct = await updateObjectsInfo(this.state.objId,this.state.itemTitle,this.state.itemAuthor,this.state.itemDescription,this.state.itemCategory,this.state.itemPrice)
                    if(resProduct === true){
                        this.setState({successMessage:"Edit successful"})
                        this.setState({errorMessage:""})
                    }else{
                        this.setState({successMessage:""})
                        this.setState({errorMessage:"Error while editing product"})
                    }
                }
                else if(this.props.type === "new"){
                    let resProduct = await addProduct(this.props.userId,this.state.itemTitle,this.state.itemAuthor,this.state.itemDescription,this.state.itemCategory,this.state.itemPrice)
                    if(resProduct === true){
                        this.setState({successMessage:"Added product successful"})
                        this.setState({errorMessage:""})
                    }else{
                        this.setState({successMessage:""})
                        this.setState({errorMessage:"Error while adding product"})
                    }
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

    onImageChange(e){
        console.log(e.target.files[0])
    }

    render(){
        let opener;
        let title;
        let confirmBtn;
        if(this.props.type === "edit"){
            opener = <a href="#" onClick={()=>this.handleShow()}><Image className={styles.optionsImg} src={edit}/></a>;
            title = "Modifying existing object";
            confirmBtn = "Edit";
        }
        else if (this.props.type === "new"){
            opener = <button onClick={()=>this.handleShow()} className={styles.productItemUnselect}>Add product</button>;
            title = "Adding new object";
            confirmBtn = "Add"
        }
            
            //opener = <CustomButton onClick={()=>this.handleShow()} name="Add product"/>;
        return(
            <div>
                {opener}
                <Modal show={this.state.show} onHide={()=>this.handleClose()} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Modify object:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={(e)=>this.onSubmit(e)} encType='mutlipart/form-data'>
                        <Row>
                            <Col>
                            
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Item title
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Python book, Saw etc." onChange={(value)=>this.onItemTitleChange(value)} value={this.state.itemTitle}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Category
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Book, DVD etc." onChange={(value)=>this.onItemCategoryChange(value)} value={this.state.itemCategory}/>
                                    </Col>
                                    <Form.Text className="text-muted">
                                        Possible: LIVRE, LSCOLAIRE, CD, DVD
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Author
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Author, brand etc." onChange={(value)=>this.onItemAuthorChange(value)} value={this.state.itemAuthor}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Description
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Description" onChange={(value)=>this.onItemDescriptionChange(value)} value={this.state.itemDescription} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Price
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Duration" onChange={(value)=>this.onItemPriceChange(value)} value={this.state.itemPrice}/>
                                    </Col>
                                </Form.Group>

                            </Col>

                        </Row>
                        <div className="text-center">
                            <Button variant="outline-primary" className={styles.outline_btn} type="submit" size="lg" >
                                {confirmBtn}
                            </Button>
                        </div>
                        {
                            (this.state.errorMessage !== "") && <Alert className="w-100 mt-5" variant='danger'>{this.state.errorMessage}</Alert>
                        }
                        {
                            (this.state.successMessage !== "") && <Alert className="w-100 mt-5" variant='success'>{this.state.successMessage}</Alert>
                        }
                    </Form>
                    </Modal.Body>
                </Modal>
          </div>
        );
    }
}

export default ModalDialog;