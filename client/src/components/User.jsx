import React, { Component, Fragment } from 'react';
import Gravatar from 'react-gravatar';
import { FormLabel } from '@material-ui/core';

class User extends Component {
    render() {
        return (
            <Fragment>
            <div className="users">
                <Gravatar email="{id}" size={100} default="monsterid"></Gravatar>
                <FormLabel>
                    Name Surname
                </FormLabel>
            </div>
            </Fragment> 
        )
    }
}

export default User
