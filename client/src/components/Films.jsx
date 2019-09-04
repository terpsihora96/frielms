import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { CircularProgress } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import api from '../api'
import './Films.css'

class Films extends Component {
    constructor(props) {
      super(props)
      this.state = {
          films: [],
          isLoading: false,
      }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    const res = await api.getFilmTitles()

    this.setState({ films: res.data.data, isLoading: false })
  }

  render() {
    const {films, isLoading} = this.state;

    return (
      <div className="films">
        {isLoading && <div>Loading...</div>}
        {!isLoading && 
          <FormControl>
            <InputLabel shrink htmlFor="select-multiple-native">
              Films
            </InputLabel>
            <Select
              multiple
              native
              id="select-multiple-native"
            >
              {films.map((film, id) =>  {
                return <option key={id}>{film}</option>
              })}
            </Select>
          </FormControl>}
      </div>
    );
  }
}

export default Films
