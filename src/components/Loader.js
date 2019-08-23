import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .Neko_img {
    width: 100%;
  }
`

const Loader = () => (
  <StyledLoader>
    Chargement ...
    <img 
      className="Neko_img"
      src={require('../img/gif/loader.gif')} 
      alt="Neko" />
  </StyledLoader>
)

export default Loader
