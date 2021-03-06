import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { TIME_CHANGE_TO_NIGHT } from '../../reducers/time'
import AutoPlayAudio from '../AutoPlayAudio'
import { SERVER_URL } from '../../api/serveur'
import SocketIOClient from 'socket.io-client'

const StyledNight = styled.div`
  .Neko_night {
    position: absolute;
    bottom: 125px;
    left: 70px;
    height: 200px;
  }
`

class Night extends Component {
  componentDidMount() {
    this.props.changeToNight(true)
    this.socket = SocketIOClient(SERVER_URL)
    this.socket.emit('sleep');
  }

  componentWillUnmount() {  
    this.props.changeToNight(false)
    this.socket.emit('wakeup');
    
  }

  render() {
    return (
      <StyledNight>
      <AutoPlayAudio src={require(`../../sound/soundNight.mp3`)} />
        <img 
          src={require('../../img/neko_dodo.png')} 
          className="Neko_night" 
          alt="Neko" 
        />
      </StyledNight>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeToNight: val => dispatch({ type: TIME_CHANGE_TO_NIGHT, payload: { timeIsNight: val } })
})

export default connect(null, mapDispatchToProps)(Night)
