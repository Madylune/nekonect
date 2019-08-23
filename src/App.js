import React, { Component } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import styled from 'styled-components'
import './index.css'
import CreateNeko from './components/CreateNeko'
import GameOver from './components/GameOver'
import Home from './components/Home'
import Loader from './components/Loader'
import { db } from './api/firebase'
import { NEKO_CREATE_SUCCESS } from './reducers/neko'

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

class App extends Component {
  state = {
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    db.collection('neko')
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data())
      const id = querySnapshot.docs.map(doc => doc.id)
      !isEmpty(data) && this.props.createNeko({
        name: get(data, ['0', 'name']),
        birthdate: get(data, ['0', 'birthdate']),
        sexe: get(data, ['0', 'sexe']),
        id: id[0]
      })
      this.setState({ isLoading: false })
    })
  }
  
  render() {
    const { isLoading } = this.state
    const { isDead, neko } = this.props
    return isLoading ? ( 
      <Loader />
      ) : (
      <StyledApp>
        {isEmpty(neko) ? (
          <CreateNeko />
        ) : isDead ? (
          <GameOver />
<<<<<<< HEAD
        ) : (
          <Home />
=======
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
              <Route exact={true} path={getPath('store')} component={Store} />
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
        <Furniture items={items.filter(item => item.place === location)}/>
        <Footer />
        </>
>>>>>>> added animations to the store
        )}
      </StyledApp>
    )
  }
}

const mapStateToProps = state => ({
  isDead: get(state, ['mood', 'isDead']),
  neko: get(state, 'neko')
})

const mapDispatchToProps = dispatch => ({
  createNeko: ({ name, sexe, birthdate, id }) => dispatch({ type: NEKO_CREATE_SUCCESS, payload: { name, sexe, birthdate, id } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
