import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import { TIME_CHANGE_TO_NIGHT } from '../../reducers/time'
import random from 'lodash/random'
import get from 'lodash/get'

const StyledNight = styled.div`
  .Neko_night {
    position: absolute;
    bottom: 125px;
    left: 70px;
    height: 200px;
  }
`

class Night extends Component {
  interval = null

  

  componentDidMount() {
    this.props.chanteToNight(true)
    this.interval = setInterval(
      () => this.tick(),
      1000
    )
    var test = document.querySelector('.soundNight');
    test.play();
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    this.props.chanteToNight(false)
  }

  tick() {
    const { moodIsMax, makeHappy } = this.props
    !moodIsMax && makeHappy(random(0,2))
  }

  render() {
    return (
      <StyledNight>
      <audio className="soundNight" 
        src={require(`../../sound/soundNight.mp3`)} >
      </audio>
        <img 
          src={require('../../img/neko_dodo.png')} 
          className="Neko_night" 
          alt="Neko" 
        />
      </StyledNight>
    )
  }
}

const mapStateToProps = state => ({
  moodIsMax: get(state, ['mood', 'moodIsMax'])
})

const mapDispatchToProps = dispatch => ({
  chanteToNight: val => dispatch({ type: TIME_CHANGE_TO_NIGHT, payload: { timeIsNight: val } }),
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Night)
