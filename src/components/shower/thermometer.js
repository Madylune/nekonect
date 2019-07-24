import React, { Component } from 'react'
import styled from 'styled-components'
import Trait from './trait'

const StyledBar = styled.div`
  height: 45vh;
  width: 10px;
  border-radius: 0px 0px 200px 200px;
  -moz-border-radius: 0px 0px 200px 200px;
  -webkit-border-radius: 0px 0px 200px 200px;
  border: 1px solid #000000;
  background-color: white;
  z-index: 1;
  position: relative;
`

const StyledBarWrapper = styled.div`
  bottom: 0;
  height: 13%;
  width: 10px;
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
  bottom: -20px;
  right: -12px;

`

const StyledThermometer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 52px;
  top: 60px;
  
  .Bar_wrapper {
    position: relative;
  }
`

class Thermometer extends Component {
    render() {
        return (
            <StyledThermometer>
                <div className="Bar_wrapper">
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
                    <StyledBarWrapper>
                        
                    </StyledBarWrapper>

                </StyledBar>
                <StyledCercle>

                </StyledCercle>
                </div>
            </StyledThermometer>

        )
    }
}

export default Thermometer
