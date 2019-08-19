import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'

const StyledGarden = styled.div`
  .Football {
    height: 105px;
    position: absolute;
    bottom: 0;
    left: 40%;
  }
`

const Garden = ({ makeHappy }) => {
  return (
    <StyledGarden>
      <img 
        src={require('../../img/football.png')} 
        className="Football" 
        alt="Ballon de football" 
        onClick={() => makeHappy(50)} 
      />
    </StyledGarden>
  )
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Garden)
