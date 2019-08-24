import React, { Fragment } from 'react';
import { User, Films, Add } from '../components';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Films></Films>
      <User></User>
      <Fab size="small" color="default" aria-label="add" href="\user" >
          <AddIcon />
      </Fab>

      <Router>
        <Switch>
          <Route exact path='/user' component={ Add } />
        </Switch>
      </Router>

    </Fragment>
    
  )
}

export default App;
