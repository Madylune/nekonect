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
  overflow: hidden;
`

const StyledProgressBar = styled.div`
  bottom: 0;
  height: 10px;
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
  state = {
    progressHeight: 250
  }
  progressBarRef = React.createRef()
  barRef = React.createRef()

  onTouch = e => {
    const touchPosition = e.clientY
    const barHeight = this.barRef.current.offsetHeight
    this.setState({
      progressHeight: touchPosition
    })
    console.log({ touchPosition })
    // console.log('progressBarRef', this.progressBarRef.current.offsetTop)
    // console.log('barHeight', barHeight)
  }
  
  render() {
    const { progressHeight } = this.state
    return (
      <StyledThermometer>
        <StyledBar ref={this.barRef} onClick={this.onTouch}>
          {/* <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait />
          <Trait /> */}
          <StyledProgressBar 
            ref={this.progressBarRef}
            style={{
              transform: `translateY(${-progressHeight}px)`
              // height: `${progressHeight}px`
            }}
          />
        </StyledBar>
        <StyledCercle />
      </StyledThermometer>
    )
  }
}

export default Thermometer
