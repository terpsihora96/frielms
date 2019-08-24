import React, { Fragment } from 'react';
import { User, Films } from '../components';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function App() {
  return (
    <Fragment>
      <Films></Films>
      <User></User>

      <Fab size="small" color="default" aria-label="add" href="\user" >
          <AddIcon />
      </Fab>

    </Fragment>    
  )
}

export default App;
