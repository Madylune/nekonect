import React, { Component } from 'react'
import styled from 'styled-components'
import { timeDifference } from '../../utils/time'
import { getPlural } from '../../utils/string'

const StyledAge = styled.div`
  letter-spacing: 1px;
  font-size: 12px;
`

class Age extends Component {
  state = {
    now: new Date()
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      10000
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({
      now: new Date()
    })
  }
  render() {
    const { birthdate } = this.props
    const { now } = this.state
    const from = birthdate.toDate()
    const age = timeDifference(from, now)
    const { days, hours, minutes } = age
    return (
      <StyledAge className="Neko_age">
        {days} jour{getPlural(days, 1, 's')}, {hours} h et {minutes} min
      </StyledAge>
    )
  }
}

export default Age
