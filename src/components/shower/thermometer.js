import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import random from 'lodash/random'
import SocketIOClient from 'socket.io-client'
import { SERVER_URL } from '../../api/serveur'

const StyledThermometer = styled.div`
  .Buttons_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 45px;

    .Temp_btn {
      border: 2px solid white;
      border-radius: 50%;
      height: 90px;
      width: 90px;
      margin: 5px 0;
      font-size: 17px;
      color: white;
      cursor: pointer;

      &.hot {
        background-image: linear-gradient(to left, #f53b13 0%, #f58746 100%);
      }
      &.medium {
        background-image: linear-gradient(to left, #13f545 0%, #2a961d 100%);
      }
      &.cold {
        background-image: linear-gradient(to left, #1377f5 0%, #2a22ad 100%);
      }
    }
  }
  .Thermometer {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    border: 3px solid #ffffff;
    width: 20px;
    height: 350px;
    border-radius: 20px;
    overflow: hidden;

    .Temperature {
      background-color: red;
      width: 100%;
      bottom: 0px;
      transition: 2s;
      position: absolute;
    }
  }
`

class Thermometer extends Component {
  state = {
    temperature: 50
  }
  audioRef = createRef()

  handleChange = type => {
    this.audioRef.current.play()
    this.props.makeHappy(random(5, 10))
    if (type === 'hot') {
      this.setState({
        temperature: 90
      })
    }
    if (type === 'perfect') {
      this.setState({
        temperature: 50
      })
    }
    if (type === 'cold') {
      this.setState({
        temperature: 5
      })
    }
    this.socket.emit(type)
  }

  componentDidMount() {
    this.socket = SocketIOClient(SERVER_URL)
  }
  render() {
    const { temperature } = this.state
    return (
      <StyledThermometer>
        <audio 
          ref={this.audioRef}
          src={require(`../../sound/soundShower.mp3`)}>
        </audio>
        <div className="Buttons_wrapper">
          <button className="Temp_btn hot" onClick={() => this.handleChange('hot')}>Eau chaude</button>
          <button className="Temp_btn medium" onClick={() => this.handleChange('perfect')}>Eau tiède</button>
          <button className="Temp_btn cold" onClick={() => this.handleChange('cold')}>Eau froide</button>
        </div>
        <div className="Thermometer">
          <div 
            className="Temperature" 
            style={{
              height: `${temperature}%`
            }} 
          />
        </div>
      </StyledThermometer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Thermometer)
