import React, {Component} from 'react'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import VisitCounter from './components/VisitCounter/VisitCounter'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Blog from './components/Blog/Blog'
import ProfileCard from './components/InfoCards/ProfileCard'
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Divider } from '@material-ui/core'
import WelcomeCard from './components/InfoCards/WelcomeCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'home',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: '0',
        joined: ''
      }
    }
  }

  loadUser = (user) => {
    this.setState({user: {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      entries: user.entries,
      joined: user.joined
    }
  })
  }

  componentDidMount() {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log)
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
  displayState = (state) => {
    // 6 mains states:
    // - home, blog, investments, 
    // - reading, projects, contact
    /*
      skip home (hard to design) for now
      create blog, reading, contact
      start working on home and investments
    */
  }

  render() {
    return (
      <div className='App'>
        <Grid container spacing={1}>
          <Grid item xs={12} justify='center'>
            <Navigation onRouteChange={this.onRouteChange}/>
          </Grid>
          <Grid item xs={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={8}>
            <WelcomeCard />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
