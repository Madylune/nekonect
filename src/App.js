import React, { Component } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { auth, googleProvider } from './api/firebase'
import { Switch, Route } from 'react-router-dom'
import { getPath } from './routes'
import Sidebar from './components/sidebar'
import Toilet from './components/toilet'
import Shower from './components/shower'
import Garden from './components/garden'
import Dancefloor from './components/dancefloor'
import Header from './components/header'
import Footer from './components/footer'
import { withRouter } from 'react-router'
import Kitchen from './components/Kitchen'
import GameOver from './components/GameOver'

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

const getBodyBg = location => {
  switch(true) {
    case location === getPath('home'):
      return `url(${require('./img/backgrounds/home.jpg')})`
    case location === getPath('kitchen'):
      return `url(${require('./img/backgrounds/kitchen.jpg')})`
    case location === getPath('toilet'):
      return `url(${require('./img/backgrounds/toilet.jpg')})`
    case location === getPath('bathroom'):
      return `url(${require('./img/backgrounds/bathroom.jpg')})`
    case location === getPath('garden'):
      return `url(${require('./img/backgrounds/garden.jpg')})`
    case location === getPath('dancefloor'):
      return `url(${require('./img/backgrounds/dancefloor.jpg')})`
    case location === getPath('store'):
    case location === getPath('settings'):
    default:
      return ''
  }
}

const StyledBody = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  background-image: ${props => props.user && getBodyBg(props.location)};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;

  .Neko {
    height: 200px;
    position: absolute;
    bottom: 55px;
    left: 40%;
  }

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
    const { idDead } = this.props
    const location = this.props.history.location.pathname
    return (
      <StyledApp>
        {idDead ? (
          <GameOver />
        ) : ( 
        <>
        <Header user={true} />
        <StyledBody user={true} location={location}>
        {/* {user ? ( */}
          <>
            <Sidebar />
            <Switch>
              <Route exact={true} path={getPath('kitchen')} component={Kitchen} />
              <Route exact={true} path={getPath('toilet')} component={Toilet} />
              <Route exact={true} path={getPath('bathroom')} component={Shower} />
              <Route exact={true} path={getPath('garden')} component={Garden} />
              <Route exact={true} path={getPath('dancefloor')} component={Dancefloor} />
            </Switch>
            {/* <button onClick={signOut}>Se déconnexion</button> */}
          </>
        {/* ) : ( */}
          {/* <> */}
          {/* <Button 
            variant="contained" 
            size="small" 
            className="Button Button-fb" 
            onClick={() => signInWithFacebook()}>
            Se connecter avec Facebook
          </Button> */}
          {/* <Button 
            variant="contained" 
            size="small" 
            className="Button Button-google" 
            onClick={this.signInWithGoogle}>
            Se connecter avec Google
          </Button>
          </>
        )} */}
        {location === getPath('home') && <img src={require('./img/push-hello.png')} className="Neko" alt="Neko" />}
        </StyledBody>
        <Footer />
        </>
        )}
      </StyledApp>
    )
  }
}

const mapStateToProps = state => ({
  idDead: get(state, ['mood', 'idDead'])
})

export default withRouter(connect(mapStateToProps)(App))
