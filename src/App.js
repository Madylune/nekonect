import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { FIREBASE_CONFIG, providers, auth } from './api/firebase'


const StyledHeader = styled.header`
  text-align: center;
  margin-top: 100px;
  .Logo {
    height: 200px;
  }
`

const StyledBody = styled.div`
  margin-top: 20px;
  text-align: center;
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
  render() {
    // const { user } = this.state
    const { user, signOut, signInWithGoogle, signInWithFacebook } = this.props
    return (
      <div className="App">
        <StyledHeader className="App-header">
          <img src={require('./img/logo_neko_nect.jpg')} className="Logo" alt="logo" />
        </StyledHeader>
        <StyledBody>
        {user ? (
          <div>
            Bonjour
            <button onClick={signOut}>Se déconnexion</button>
          </div>
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
            onClick={signInWithGoogle}>
            Se connecter avec Google
          </Button>
          </>
        )}
        </StyledBody>
      </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  auth,
})(App);
