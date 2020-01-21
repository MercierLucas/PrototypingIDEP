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

import {addProduct,updateObjectsInfo,uploadFile} from '../API/fakeAPI'

import folder from '../img/folder.svg';

class AddFileModal extends Component{

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
            image:''
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
        let res = await uploadFile(this.props.objId,this.state.image)
        console.log("FILE:")
        console.log(res)
        if(res === true){
            this.setState({successMessage:'Upload successful'})
            this.setState({errorMessage:''})
        }else{
            this.setState({successMessage:''})
            this.setState({errorMessage:'Upload failed, check file size or retry'})
        }
    }

    onImageChange(e){
        console.log(e.target.files[0])
        this.setState({image:e.target.files[0]})
    }



    render(){
        let opener;
        let title;
        let confirmBtn;
/*         if(this.props.type === "edit"){
            opener = <a href="#" onClick={()=>this.handleShow()}>modify</a>;
            title = "Modifying existing object";
            confirmBtn = "Edit";
        }
        else if (this.props.type === "new"){
            opener = <button onClick={()=>this.handleShow()} className={styles.productItemUnselect}>Add product</button>;
            title = "Adding new object";
            confirmBtn = "Add"
        } */
        opener = <a href="#" onClick={()=>this.handleShow()}><Image className={styles.optionsImg} src={folder}/></a>;
            //opener = <CustomButton onClick={()=>this.handleShow()} name="Add product"/>;
        return(
            <div>
                {opener}
                <Modal show={this.state.show} onHide={()=>this.handleClose()} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Modify object:</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                            <form onSubmit={(e)=>this.onSubmit(e)} encType='mutlipart/form-data'>
                                <Row>
                                    <Col>
                                        <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupFileAddon01">
                                            Upload
                                            </span>
                                        </div>
                                        <div className="custom-file">
                                            <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                            aria-describedby="inputGroupFileAddon01"
                                            onChange={(e)=>this.onImageChange(e)}
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            Choose file
                                            </label>
                                        </div>
                                        </div>
                                    </Col>
                                </Row>
                            <div className="text-center mt-3">
                                <Button variant="outline-primary" className={styles.outline_btn} type="submit" size="lg" >
                                    Upload
                                </Button>
                            </div>
                            {
                                (this.state.errorMessage !== "") && <Alert className="w-100 mt-5" variant='danger'>{this.state.errorMessage}</Alert>
                            }
                            {
                                (this.state.successMessage !== "") && <Alert className="w-100 mt-5" variant='success'>{this.state.successMessage}</Alert>
                            }
                        </form>
                    </Modal.Body>
                </Modal>
          </div>
        );
    }
}

export default AddFileModal;