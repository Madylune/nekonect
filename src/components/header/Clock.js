import React, { Component } from 'react'
import styled from 'styled-components'
import { getTime } from '../../utils/time'

const StyledClock = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  font-weight: bold;
  font-size: 22px;
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
    const { visible } = this.props
    const { time } = this.state
    return (
      <StyledClock visible={visible}>
        {time}
      </StyledClock>
    )
  }
}

export default Clock
