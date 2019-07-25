import React, { Component } from 'react'
import styled from 'styled-components'
import Trait from './trait'

const StyledThermometer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 60px;
  
  .Bar_wrapper {
    position: relative;
  }
`

const StyledBar = styled.div`
  height: 45vh;
  width: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #000000;
  border-bottom: transparent;
  background-color: white;
  z-index: 1;
  position: relative;
`

const StyledProgressBar = styled.div`
  bottom: 0;
  height: 13%;
  width: 100%;
  background-color: red;
  position: absolute;
  z-index: 2;
`

const StyledCercle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  border: 1px solid #000000;
  background-color:red;
  position:absolute;
  bottom: -33px;
  right: -10px;

`

class Thermometer extends Component {
  render() {
    return (
      <StyledThermometer>
        <StyledBar>
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <StyledProgressBar />
        </StyledBar>
        <StyledCercle />
      </StyledThermometer>
    )
  }
}

export default Thermometer
