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
      this.props.createNeko({
        name: get(data, ['0', 'name']),
        birthdate: get(data, ['0', 'birthdate']),
        sexe: get(data, ['0', 'sexe'])
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
        ) : (
          <Home />
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
  createNeko: ({ name, sexe, birthdate }) => dispatch({ type: NEKO_CREATE_SUCCESS, payload: { name, sexe, birthdate } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
