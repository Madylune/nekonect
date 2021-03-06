import React from 'react'
import styled from 'styled-components'
import logo from '../../img/gif/douche.gif'
import Thermometer from './thermometer'

const StyledShower = styled.div`
  margin: 0;
  position: relative;
  .Cat {
    width: 180px;
    position: absolute;
    top: 300px;
    left: 25%;
  }
`

const Shower = () =>
  <StyledShower>
    <Thermometer />
    <img className="Cat" src={logo} alt="Chat" />
  </StyledShower>

export default Shower


