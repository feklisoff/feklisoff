import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Blog from './components/Blog/Blog'
import ProfileCard from './components/InfoCards/ProfileCard'
import Grid from '@material-ui/core/Grid'
import './App.css'
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'


const App = () => {
    return (
      <div className='App'>
        <Grid container>
          <Grid item xs={12}>
            <Router>
              <Navigation />
              <Switch>
                <Route exact path='/' component={withRouter(ProfileCard)}/>
                <Route exact path='/blog' component={withRouter(Blog)}/>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </div>
    )
}

export default App;
