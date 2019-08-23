import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import { motion, useSpring } from 'framer-motion'
import random from 'lodash/random'

const StyledGarden = styled.div`
  .Neko_garden {
    height: 100px;
    position: absolute;
    top: 35%;
    left: 45%;
  }
  .Football {
    height: 90px;
    position: absolute;
    transition: 0.7s;
  }
`


class Garden extends Component { 
  componentDidMount() {
    var test = document.querySelector('.soundGames');
    test.play();
  }
  render() {
    const { makeHappy } = this.props
    //const dampedX = useSpring(0)
    //const dampedY = useSpring(0)
    return (
      <StyledGarden>
      <audio className="soundGames" 
          src={require(`../../sound/airJeu.mp3`)} >
        </audio>
        <img 
          src={require('../../img/gif/faim.gif')} 
          className="Neko_garden" 
          alt="Neko" 
        />
        <motion.img 
          src={require('../../img/football.png')} 
          className="Football" 
          alt="Ballon de football" 
          onClick={() => makeHappy(random(30, 50))} 
          onDrag={() => makeHappy(random(1, 3))}
          drag
          dragMomentum={false}
          dragConstraints={{
            top: -100,
            left: -50,
            right: 50,
            bottom: 0,
          }}
          initial={{
            bottom: 0,
            left: '40%'
          }}
          /*style={{
            x: 0,
            y: 0
          }}*/
        />
      </StyledGarden>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Garden)
