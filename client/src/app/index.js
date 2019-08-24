import React, { Fragment } from 'react';
import { User, Films, Add, ListUsers } from '../components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import './App.css'

function App() {
  return (
    <Fragment>
      <Typography variant="h1" component="h2" >
        Frielms
      </Typography>
      <div className="main">
        <Films></Films>
        <div>
          <User></User>
          <div className="add">
            <Fab size="small" color="default" aria-label="add" href="\user" >
              <AddIcon />
            </Fab>
          </div>
        </div> 
      </div>  
      
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
