import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTrait = styled.hr`
  margin: 23px auto;
  width: 50%;
  height: 0.5px;
  background-color: black;
  margin-left: 3.6px;
  z-index: 3;
`

class Trait extends Component {
    render() {
        return (
            <StyledTrait>
            </StyledTrait>
        )
    }
}
export default Trait