import React from 'react'
import styled from 'styled-components'

const StyledGarden = styled.div`
  background-image: url(${require('../../img/garden.jpg')});
  height: 100%;
`

const Garden = () => {
  return (
    <StyledGarden>

    </StyledGarden>
  )
}

export default Garden
