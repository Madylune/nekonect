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
import { CODE_LOAD_SUCCESS } from './reducers/code'

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
    // Load an existing Neko
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

    // Load access code
    db.collection('code')
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data())
      const id = querySnapshot.docs.map(doc => doc.id)
      !isEmpty(data) && this.props.loadCodeId(id[0])
    })
  }
  
  render() {
    const { isLoading } = this.state
    const { isDead, neko, items } = this.props
    return isLoading ? ( 
      <Loader />
      ) : (
      <StyledApp>
        {isEmpty(neko) ? (
          <CreateNeko />
        ) : isDead ? (
          <GameOver />
        ) : (
          <Home items={items}/>
        )}
      </StyledApp>
    )
  }
}

const mapStateToProps = state => ({
  isDead: get(state, ['mood', 'isDead']),
  neko: get(state, 'neko'),
  items: get(state, ['inventory', 'items'])
})

const mapDispatchToProps = dispatch => ({
  createNeko: ({ name, sexe, birthdate, id }) => dispatch({ type: NEKO_CREATE_SUCCESS, payload: { name, sexe, birthdate, id } }),
  loadCodeId: id => dispatch({ type: CODE_LOAD_SUCCESS, payload: { id } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
