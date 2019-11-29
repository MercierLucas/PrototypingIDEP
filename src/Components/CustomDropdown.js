import React, {Component} from 'react';

import styles from '../style.module.css'


import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

class BackOfficePrefs extends Component{
    render(){
        let items=[];
        for (var item in this.props.items) {
            console.log(this.props.items[item]);
            items.push(<option>{this.props.items[item]}</option>)
        }
        return(
            <Form>
                <div className="form-group">
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        {items}
                    </select>
                </div>
            </Form>
        );
    }
}

export default BackOfficePrefs;