import React from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
import styled from 'styled-components'
import './index.css'
import CreateNeko from './components/CreateNeko'
import GameOver from './components/GameOver'
import Home from './components/Home'

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const App = ({ isDead, neko = true }) => (
  <StyledApp>
    {!neko ? (
      <CreateNeko />
    ) : isDead ? (
      <GameOver />
    ) : (
      <Home />
    )}
  </StyledApp>
)

const mapStateToProps = state => ({
  isDead: get(state, ['mood', 'isDead'])
})

export default connect(mapStateToProps)(App)
