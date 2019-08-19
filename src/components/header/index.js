import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import MoodBar from './MoodBar'

const StyledHeader = styled.header`
  display: flex;
  justify-content: ${props => props.user ? 'space-between' : 'center'};
  align-items: center;
  text-align: center;
  margin-top: ${props => props.user ? '10px' : '100px'};
  .Logo {
    height: ${props => props.user ? '60px' : '200px'};
  }
`

const Header = ({ user }) => {
  return (
    <StyledHeader className="App-header" user={user}>
      <img src={require('../../img/logo_neko_nect.jpg')} className="Logo" alt="logo" />
      <MoodBar />
      <Clock visible={user} />
    </StyledHeader>
  )
}

export default Header
