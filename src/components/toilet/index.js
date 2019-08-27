
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import logo from '../../img/gif/toilet.png'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import throttle from 'lodash/throttle'
import random from 'lodash/random'
import SocketIOClient from 'socket.io-client'
import { SERVER_URL } from '../../api/serveur'

const StyledToilet = styled.div`
  margin: 0;
  position: relative;
  .Cat {
    width: 153px;
    position: absolute;
    left: 43%;
    transition: rotate 1s;
  }
`

const StyledFlush = styled.div`
  margin-left: 77vw;
  margin-top: 20vh;
  height: 67px;
  width: 6px;
  background-color: #555;
  border-radius: 61px 61px 61px 61px;
  -moz-border-radius: 61px 61px 61px 61px;
  -webkit-border-radius: 61px 61px 61px 61px;
  border: 1px solid #000000;
  transition: 2s;
  animation: ${props => props.animated ? 'rotate-bottom 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both' : ''};

  @keyframes rotate-bottom {
    0% {
      transform: rotate(0);
      transform-origin: bottom;
    }
    100% {
      transform: rotate(90deg);
      transform-origin: bottom;
    }
  }
`
const ANIMATION_TIME = 1500

class Toilet extends Component {
  constructor(props) {
    super(props)
    this.timeout = null
    this.throttle = throttle(this.flush, ANIMATION_TIME)
    this.state = {
      animated: false
    }
  }

  flush = () => {
    const { makeHappy } = this.props
    makeHappy(random(10, 15))

    var sound = document.querySelector(".Flush")
    sound.play()
    this.socket.emit('toilet')
    this.setState({
      animated: true
    })
    this.timeout = setTimeout(() => {
      this.setState({
        animated: false
      })
    }, ANIMATION_TIME)
  }

  componentWillUnmount() {
    this.throttle.cancel()
    this.timeout && clearTimeout(this.timeout)
  }

  componentDidMount() {
    this.socket = SocketIOClient(SERVER_URL)
  }
  render() {
    const { animated } = this.state
    return (
      <StyledToilet>
        <StyledFlush animated={animated} onClick={this.flush} >
          <audio className="Flush"
            src={require(`../../sound//chasseEau.mp3`)}>
          </audio>
        </StyledFlush>
        <img className="Cat" src={logo} alt="Chat" />
      </StyledToilet>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Toilet)
