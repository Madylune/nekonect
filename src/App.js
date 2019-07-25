import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { auth, googleProvider } from './api/firebase'
import { Switch, Route } from 'react-router-dom'
import { getPath } from './routes'
import Sidebar from './components/sidebar'
// import Kitchen from './components/Kitchen'
// import Toilet from './components/Toilet'
// import Bathroom from './components/Bathroom'
import Garden from './components/garden'
// import Dancefloor from './components/Dancefloor'
import Header from './components/header'
import Footer from './components/footer'
import { withRouter } from 'react-router'

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledBody = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  background-image: ${props => props.user && props.isHome ? `url(${require('./img/home.jpg')})` : ''};
  background-repeat: no-repeat;
  background-size: cover;

  .Button {
    padding: 15px;
    width: 250px;
    margin: 5px 0;
    &.Button-google {
      background-color: #D6492E;
      color: #ffffff;
    }
    &.Button-fb {
      background-color: #38569E;
      color: #ffffff;
    }
  }
`

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } 
    })
  }

  signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
    .then((result) => {
      const user = result.user
      this.setState({
        user
      })
    }, (error) => {
      console.log('Error:', error.message)
    })
  }  

  render() {
    const { user } = this.state
    const isHome = this.props.history.location.pathname === '/'

    return (
      <StyledApp>
        <Header user={user} />
        <StyledBody user={user} isHome={isHome}>
        {user ? (
          <>
            <Sidebar />
            <Switch>
              {/* <Route exact={true} path={getPath('kitchen')} component={Kitchen} /> */}
              {/* <Route exact={true} path={getPath('toilet')} component={Toilet} /> */}
              {/* <Route exact={true} path={getPath('bathroom')} component={Bathroom} /> */}
              <Route exact={true} path={getPath('garden')} component={Garden} />
              {/* <Route exact={true} path={getPath('dancefloor')} component={Dancefloor} /> */}
            </Switch>
            {/* <button onClick={signOut}>Se déconnexion</button> */}
          </>
        ) : (
          <>
          {/* <Button 
            variant="contained" 
            size="small" 
            className="Button Button-fb" 
            onClick={() => signInWithFacebook()}>
            Se connecter avec Facebook
          </Button> */}
          <Button 
            variant="contained" 
            size="small" 
            className="Button Button-google" 
            onClick={this.signInWithGoogle}>
            Se connecter avec Google
          </Button>
          </>
        )}
        </StyledBody>
        {user && <Footer />}
      </StyledApp>
    )
  }
}

export default withRouter(App)
