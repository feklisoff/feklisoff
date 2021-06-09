import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Blog from './components/Blog/Blog'
import HomePage from './components/HomePage/HomePage'
import ContactForm from './components/Contact/Contact'
import books from './components/Books/CardList'
import Grid from '@material-ui/core/Grid'
import './App.css'
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'


const App = () => {
    return (
      <div className='App'>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <Router>
              <Navigation />
              <Switch>
                <Route exact path='/' component={withRouter(HomePage)}/>
                <Route exact path='/blog' component={withRouter(Blog)}/>
                <Route exact path='/contact' component={withRouter(ContactForm)}/>
                <Route exact path='/books' component={withRouter(books)}/>
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </div>
    )
}

export default App;
