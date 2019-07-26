import React from 'react'
import styled from 'styled-components'
import logo from '../../img/GIF/toilet.png'


const StyledToilet = styled.div`
  margin: 0;
  position: relative;
  .Cat {
    width: 153px;
    position: absolute;
    bottom: -397px;
    left: 43%;
  }
`


const Toilet = () =>
  <StyledToilet>
    <img className="Cat" src={logo} alt="Chat" />
  </StyledToilet>

export default Toilet
