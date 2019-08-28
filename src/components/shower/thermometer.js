import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import random from 'lodash/random'
import SocketIOClient from 'socket.io-client'
import { SERVER_URL } from '../../api/serveur'


const StyledThermometer = styled.div`
  position: absolute;
  top: 250px;
  right: 25px;
  height: 350px;
  width: 35px;

  .Slider {
    -webkit-appearance: none;
    border-radius: 40px;  
    border: 2px solid #ffffff;
    background-image: linear-gradient(to left, #f53b13 0%, #46C8F5 100%);
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s; 

    width: 350px;
    height: 35px;
    margin: 0;
    transform-origin: 75px 75px;
    transform: rotate(-90deg);
  }

  .Slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 33px;
    height: 33px;
    border-radius: 50%; 
    background: #ffffff;
    cursor: pointer;
  }
  .Slider::-moz-range-thumb {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
`

class Thermometer extends Component {
  audioRef = createRef()
  state = {
    temperature: 50
  }

  handleChange = event => {
    this.audioRef.current.play()
    const { temperature } = this.state
    this.setState({
      temperature: event.target.value
    })
    this.props.makeHappy(random(0, 1))
    this.socket.emit('wash');
    if (temperature > 85) {
     this.socket.emit('hot');
    }
    if (temperature < 20) {
      this.socket.emit('cold');
    } 
    if (temperature > 60 && temperature < 65) { 
      this.socket.emit('perfect');
    }
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
        <input 
          className="Slider" 
          type="range" 
          orient="vertical"
          min="0" max="100" 
          value={temperature} 
          onChange={this.handleChange}
        />
      </StyledThermometer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Thermometer)
