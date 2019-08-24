import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

class User extends Component {
    render() {
        return (
            <Gravatar email="{id}" default="monsterid"></Gravatar>
        )
    }
}

export default User
