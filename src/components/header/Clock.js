import React, { Component } from 'react'
import styled from 'styled-components'
import { getTime } from '../../utils/time'

const StyledClock = styled.div`
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-top: 3px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1px;
  width: 55px;
`

class Clock extends Component {
  state = {
    time: getTime(Date.now())
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({
      time: getTime(Date.now())
    })
  }
  render() {
    const { time } = this.state
    return (
      <StyledClock>
        {time}
      </StyledClock>
    )
  }
}

export default Clock
