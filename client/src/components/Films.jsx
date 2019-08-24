import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import api from '../api'
import './Films.css'

class Films extends Component {
    constructor(props) {
      super(props)
      this.state = {
          data: [],
          isLoading: false,
      }
  }

  // Get list of films
  // TODO
  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await api.getFilmTitles()
    .then(res => this.setState({ data: res.data.data }))
  }

  render() {
    return (
      <div className="films">
        {this.data}
        <FormControl >
          <InputLabel shrink htmlFor="select-multiple-native">
            Films
          </InputLabel>
          <Select
            multiple
            native
          >
          <option >
            Film
          </option>
          <option >
            Film
          </option>
          <option >
            Film
          </option>
          <option >
            Film
          </option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default Films
