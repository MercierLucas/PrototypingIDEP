import React, {Component} from 'react';
import styles from '../style.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CustomButton from './CustomButton';
import Image from 'react-bootstrap/Image';

import AddProduct from '../Pages/AddProduct';


class ModalDialog extends Component{

    constructor(){
        super();
        this.state = {
            show:0
        };
    }

    handleShow(){
        this.setState({
            show:1
        });
    }

    handleClose(){
        this.setState({
            show:0
        });
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
            <div>
                {opener}
                <Modal show={this.state.show} onHide={()=>this.handleClose()} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title>Modify object:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddProduct/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onHide={()=>this.handleClose()}>
                        Confirm return
                    </Button>
                    <Button variant="secondary" onHide={()=>this.handleClose()}>
                        Close
                    </Button>

                    <Button variant="primary" onHide={()=>this.handleClose()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
          </div>
        );
    }
}

export default ModalDialog;