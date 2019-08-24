import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Films extends Component {

  render() {
    return (
      <div>
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
