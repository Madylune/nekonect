import React, { Component } from 'react'
import styled from 'styled-components'
import random from 'lodash/random'

const StyledMoodBar = styled.div`
  border: 1px solid #cecece;
  width: 100%;
  height: 20px;
  margin: 5px;
  border-radius: 40px;
  overflow: hidden;
`

const StyledProgressBar = styled.div`
  height: 100%;
`

const RANDOM_VALUE = random(50, 100)
const GREEN_BG = 'linear-gradient(to left, #AEF84A 0%, #43CE98 100%)'
const RED_BG = 'linear-gradient(to left, #F79D36 0%, #EB3A8A 100%)'

class MoodBar extends Component {
  animationFrame = null
  state = {
    value: 0
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
    this.setState({
      value: RANDOM_VALUE
    })
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick = async () => {
    const { value } = this.state
    if (value > 0) {
      this.setState({
        value: value - 1
      })
    }
  }

  render() {
    const { value } = this.state
    const style = {
      width: `${value}%`,
      transition: '1s ease-out',
      backgroundImage: `${value > 50 ? GREEN_BG : RED_BG }`
    }
    return (
      <StyledMoodBar>
        <StyledProgressBar style={style} />
      </StyledMoodBar>
    )
  }
}

export default MoodBar
