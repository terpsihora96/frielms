import React, { Component } from 'react'
import api from '../api'

class ListUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getUsers()
        .then(res => this.setState({ data: res.data.data }))
    }

    render() {
        return (
            // <div> { this.isLoading &&  'Loading' } </div>

            <p>Doesn't work.</p>
        )
    }
}

export default ListUsers
