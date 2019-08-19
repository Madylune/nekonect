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
  state = {
    value: 0
  }
  componentDidMount() {
    const { moodChange } = this.props
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
    moodChange(RANDOM_VALUE)
    this.initMoodValue()
  }
  componentDidUpdate(prevProps) {
    const { moodValue, makeHappyVal } = this.props
    if (prevProps.moodValue !== moodValue) {
      this.initMoodValue()
    }
    if (prevProps.makeHappyVal !== makeHappyVal) {
      this.setState({
        value: this.state.value + makeHappyVal
      })
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  initMoodValue = () => {
    const { moodValue } = this.props
    this.setState({
      value: moodValue
    })
  }

  tick = async () => {
    const { value } = this.state
    if (value >= 0) {
      this.setState({
        value: value - 1
      })
    }
    if (value <= 0) {
      clearInterval(this.intervalID)
      this.props.killCat()
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

const mapStateToProps = state => ({
  moodValue: get(state, ['mood', 'value']),
  makeHappyVal: get(state, ['mood', 'makeHappyVal'])
})

const mapDispatchToProps = dispatch => ({
  moodChange: val => dispatch({ type: MOOD_CHANGE, payload: { value: val } }),
  killCat: () => dispatch({ type: MOOD_CHANGED_LIFE, payload: { idDead: true } })
})

export default connect(mapStateToProps, mapDispatchToProps)(MoodBar)
