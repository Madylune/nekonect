import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import random from 'lodash/random'
import get from 'lodash/get'
import { MOOD_CHANGE, MOOD_CHANGED_LIFE } from '../../reducers/mood'

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
  intervalID = null
  state = {
    value: 0
  }

  componentDidMount() {
    this.startTicking()
  }

  componentDidUpdate(prevProps) {
    const { moodValue, makeHappyVal, moodChange } = this.props
    const { value } = this.state
    if (prevProps.moodValue !== moodValue) {
      this.initMoodValue()
    }
    // Add points to mood when receive action "MOOD_CHANGED_HAPPY"
    if (prevProps.makeHappyVal !== makeHappyVal && value < 100) {
      this.setState({
        value: this.state.value + makeHappyVal
      })
      // Put mood value into the store each time it changes
      moodChange(this.state.value + makeHappyVal)
    }
  }
  
  componentWillUnmount() {
    this.stopTicking()
  }

  initMoodValue = () => {
    const { moodValue } = this.props
    this.setState({
      value: moodValue
    })
  }

  startTicking = () => {
    const { moodChange, moodValue } = this.props
    this.intervalID = setInterval(
      () => this.tick(),
      3000
    )
    moodChange(moodValue ? moodValue : RANDOM_VALUE)
    this.initMoodValue()
  }

  stopTicking = () => this.intervalID && clearInterval(this.intervalID)

  tick = async () => {
    const { value } = this.state
    const { isNight } = this.props
    if (isNight && value <= 100) {
      this.incrementMood(value)
    } else {
      if (value >= 0) {
        this.decrementMood(value)
      }
      if (value <= 0) {
        clearInterval(this.intervalID)
        this.props.killCat()
      }
    }
  }

  incrementMood = value => this.setState({ value: value + 1 })

  decrementMood = value => this.setState({ value: value - 1 })

  render() {
    const { value } = this.state
    const style = {
      width: `${value}%`,
      transition: '2s ease-out',
      backgroundImage: `${value > 50 ? GREEN_BG : RED_BG }`
    }
    return (
      <StyledMoodBar>
        <StyledProgressBar style={style} />
      </StyledMoodBar>
    )
  }
}

const mapStateToProps = state => ({
  moodValue: get(state, ['mood', 'value']),
  makeHappyVal: get(state, ['mood', 'makeHappyVal']),
  isNight: get(state, ['time', 'timeIsNight'])
})

const mapDispatchToProps = dispatch => ({
  moodChange: val => dispatch({ type: MOOD_CHANGE, payload: { value: val } }),
  killCat: () => dispatch({ type: MOOD_CHANGED_LIFE, payload: { isDead: true } })
})

export default connect(mapStateToProps, mapDispatchToProps)(MoodBar)
