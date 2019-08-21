import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import random from 'lodash/random'
import { MOOD_CHANGE, MOOD_CHANGED_LIFE } from '../reducers/mood'

const StyledGameOver = styled.div`
  background-color: #ffffff;
  margin-top: 50px;
  text-align: center;
  .Title {
    font-size: 45px;
  }
  .Neko_img {
    height: 300px;
  }
  .Button_wrapper {
    width: 100%;
    text-align: center;
    .Button {
      background-color: #EDCCD3;
      color: #444444;
      padding: 10px 30px;
      font-size: 20px;
      border-radius: 40px;
      border: 1px solid #B3A99E;
    }
  }
`

const RANDOM_VALUE = random(50, 100)

class GameOver extends Component {
  playAgain = () => {
    const { moodChange, rebornCat } = this.props
    rebornCat() && moodChange(RANDOM_VALUE)
  }
  render() {
    return (
      <StyledGameOver>
        <h1 className="Title">Game Over</h1>
        <img 
          className="Neko_img"
          src={require('../img/crying.gif')} 
          alt="Neko pleure" />
        <div className="Button_wrapper">
          <button className="Button" onClick={this.playAgain}>Rejouer</button>
        </div>
      </StyledGameOver>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  moodChange: val => dispatch({ type: MOOD_CHANGE, payload: { value: val } }),
  rebornCat: () => dispatch({ type: MOOD_CHANGED_LIFE, payload: { isDead: false } })
})

export default connect(null, mapDispatchToProps)(GameOver)
