import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { FormLabel } from '@material-ui/core';
import './addUser.css';
import api from '../api';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
  
        this.state = {
            name: '',
            btnName: 'Cancel'
        }
    }

    onChangeName(data) {
        this.setState({
            name: data.target.value,
            btnName: 'Cancel'
        });
    }
  
    onSubmit = async () => {
        const data = { name: this.state.name, films: [] }
        
        await api.addUser(data).then(res => {
            alert(`Success`)
            this.setState({
                name: '',
                btnName: 'Finish'
            })
        })
        
    }

    render() {
        return (
            <Fragment>
                <div className="background">
                    <div className='modal'>
                        <FormLabel className='modal-title'>
                        Add new user
                        </FormLabel>   
                        <form onSubmit={this.onSubmit}>
                            <TextField
                            id="standard-dense"
                            label="Name"
                            onChange={this.onChangeName}
                            margin="dense"
                            />
                            <div className='btn-container'>
                            <Button size="medium" type="submit" >
                                <SaveIcon /> Save 
                            </Button>
                            <Button size="medium" href={'/'} >
                                { this.state.btnName } 
                            </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
            )
    }
}
