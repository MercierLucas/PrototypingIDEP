import React from 'react';
import FlatList from 'flatlist-react';
import styles from '../style.module.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


import { getMyInfos, addTransaction } from '../API/fakeAPI'



export default class MyFilteringComponent extends React.Component {

    async componentWillMount() {
        let infos = await getMyInfos()
        if (infos !== false) {
            this.setState({
                id: infos.id,
                forename: infos.forename,
                surname: infos.surname,
                username: infos.username,
                balance: infos.balance,
            }
            )
        }
    }

    state = {
        bigdata: [],
        searchTerm: '',
        show: false,
        item: [],
        id: '',
        forename: '',
        surname: '',
        username: '',
        balance: '',
        sellerInfo: [],
        errorMessage: "",
        successMessage: ""
    }

    showModal = async (item, sellerInfo) => {
        this.setState({ item: item });
        this.setState({ sellerInfo: sellerInfo })
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });

    };



    renderItem = (item, idx) => {
        return (
            <div>
                <div key={`${item.id}-${idx}`} className={styles.testeur} >
                    <div class="row" >
                        <div class="col-lg-4 ">
                            <Image
                                roundedCircle
                                src={'https://eu.ui-avatars.com/api/?name=' + item.owner.forename + '+' + item.owner.surname}
                                fluid
                            />
                        </div>
                        <div class="col-lg-8 " className={styles.fancyz}>
                            {item.owner.username}
                        </div>
                    </div>
                    <div onClick={() => this.showModal(item, item.owner)}>
                        <div className={styles.spacing} >
                            <Image
                                fluid
                                src={item.imageUrl}

                            />
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ bigdata: nextProps.bigdata });
    }

    handleSearchInput = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    bruh = () => {
        if (!this.state.item.owner.username) {
            return null;
        }
        return (
            <div>
                {this.state.item.owner.username}
            </div>
        );
    }

    doTransaction = async () => {
        let resProduct = await addTransaction(this.state.item.id, this.state.sellerInfo.id,this.state.id)
        if (resProduct === true) {
            this.setState({ successMessage: "Successfully rented" })
            this.setState({ errorMessage: "" })
        } else {
            this.setState({ successMessage: "" })
            this.setState({ errorMessage: "Error while doing the transaction" })
        }
    }

    render() {


        return (

            <div>
                <input value={this.state.searchTerm} onChange={this.handleSearchInput} />
                <div>
                    <FlatList list={this.props.bigdata} renderItem={this.renderItem} searchTerm={this.state.searchTerm}
                        searchBy="product_name"
                        searchCaseInsensitive
                        displayGrid
                    />
                </div>
                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Renting {this.state.item.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>The Seller : {this.state.sellerInfo.username}
                        </h1>
                        <Image
                            fluid
                            src={this.state.item.imageUrl} />
                        <h2>
                            Price : {this.state.item.price}
                        </h2>
                        <h4>
                            Money Available : {this.state.balance}
                        </h4>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>this.doTransaction()} >
                            I want to buy !
                     </Button>
                    </Modal.Footer>
                    {
                            (this.state.errorMessage !== "") && <Alert className="w-100 mt-5" variant='danger'>{this.state.errorMessage}</Alert>
                        }
                        {
                            (this.state.successMessage !== "") && <Alert className="w-100 mt-5" variant='success'>{this.state.successMessage}</Alert>
                        }
                </Modal>


            </div>
        );
    }
};