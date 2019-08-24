import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { FormLabel } from '@material-ui/core';
import './addUser.css'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            name: ''
        }
    }

    onChangeName(data) {
      this.setState({
        name: data.target.value
      });
    }
  
    onSubmit(data) {
        data.preventDefault()
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div className='modal'>
                <FormLabel class='modal-title'>
                Add new user
                </FormLabel>   
                <form onSubmit={this.onSubmit}>
                    <TextField
                    id="standard-dense"
                    label="Name"
                    onChange={this.onChangeName}
                    margin="dense"
                    />
                    <div class='btn-container'>
                    <Button size="medium" type="submit" variant="contained">
                        <SaveIcon /> Save 
                    </Button>
                    </div>
                </form>
            </div>
            )
    }
}
