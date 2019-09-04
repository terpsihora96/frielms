import React, { Component } from 'react'
import api from '../api'

class ListUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        const res = await api.getUsers()

        this.setState({ users: res.data.data, isLoading: false })
    }

    render() {
        const {users, isLoading} = this.state;

        return (
            <div className="films">
                {isLoading && <div>Loading</div>}
                {!isLoading && <div>
                    <ul>
                        {users.map(user =>  {
                            return <li key={user._id}>{user.name}</li> 
                        })}
                    </ul>
                </div>}
            </div>
        )
    }
}

export default ListUsers
