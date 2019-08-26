import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import random from 'lodash/random'
import AutoPlayAudio from '../AutoPlayAudio'
import ZingTouch from 'zingtouch'
import SocketIOClient from 'socket.io-client'

const StyledGarden = styled.div`
  height: 100%;
  overflow: hidden;

  .Play_area {
    height: 500px;
    width: 90%;
    margin-left: 50px;

    .Neko_garden {
      height: 100px;
      position: absolute;
      top: 35%;
      left: 45%;
    }
    .Football {
      height: 80px;
      width: 80px;
      transition: 2s;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`

class Garden extends Component { 
  playAreaRef = React.createRef()
  ballRef = React.createRef()
  
  componentDidMount() {
    this.initZingTouch()
  }

  initZingTouch = () => {
    const dragArea = this.playAreaRef.current
    const dragItem = this.ballRef.current
    const controlRegion = new ZingTouch.Region(dragArea)

    controlRegion.bind(dragItem, 'pan', (e) => {
      const event = e.detail.events[0]
      dragItem.style.transform = 'translate(' + (event.x - 40) + 'px, ' + (event.y - 40) + 'px)'
    })
  }
  render() { 
    const { makeHappy } = this.props
    return (
      <StyledGarden>
        <div className="Play_area" ref={this.playAreaRef}>
          <AutoPlayAudio src={require(`../../sound/airJeu.mp3`)} />
          <img 
            src={require('../../img/gif/faim.gif')} 
            className="Neko_garden" 
            alt="Neko" 
          />
          <div
            ref={this.ballRef}
            className="Football" 
            onClick={() => makeHappy(random(30, 50))} 
            style={{ transform: 'translate(50px, 400px)' }}>
            <img
              src={require('../../img/football.png')} 
              alt="Ballon de football" 
            />
          </div>
        </div>
      </StyledGarden>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Garden)
