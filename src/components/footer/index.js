import React from 'react'
import styled from 'styled-components'
import { getPath } from '../../routes'
import { Link } from 'react-router-dom'

const StyledFooter = styled.div`
  padding: 8px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .Icon {
    height: 50px;
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Link to={getPath('store')}>
        <img className="Icon" src={require('../../img/icons/store.png')} alt="Boutique" />
      </Link>
      <Link to={getPath('home')}>
        <img className="Icon" src={require('../../img/icons/cat.png')} alt="Chat" />
      </Link>
      <Link to={getPath('settings')}>
        <img className="Icon" src={require('../../img/icons/settings.png')} alt="Paramètres" />
      </Link>
    </StyledFooter>
  )
}

export default Footer
