import React, { Fragment } from 'react';
import { User, Films, Add, ListUsers } from '../components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


function App() {
  return (
    // Fragment needed for being able to use multiple JSX
    // Setting up the routes

    <Fragment>
      <Films></Films>
      <User></User>
      <Fab size="small" color="default" aria-label="add" href="\user" >
          <AddIcon />
      </Fab>
    
      <Router>
        <Switch>
          <Route exact path='/user' component={ Add } />
          <Route exact path='/users' component={ ListUsers } />
        </Switch>
      </Router>

    </Fragment>
    
  )
}

export default App;
