import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { auth, googleProvider } from './api/firebase'


const StyledHeader = styled.header`
  text-align: center;
  margin-top: 100px;
  color: ${props => props.toto};
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
    return (
      <div className="App">
        <StyledHeader className="App-header" toto={'red'}>
          <img src={require('./img/logo_neko_nect.jpg')} className="Logo" alt="logo" />
        </StyledHeader>
        <StyledBody>
        {user ? (
          <div>
            Bonjour
            {/* <button onClick={signOut}>Se déconnexion</button> */}
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
            onClick={this.signInWithGoogle}>
            Se connecter avec Google
          </Button>
          </>
        )}
        </StyledBody>
      </div>
    )
  }
}

export default App
