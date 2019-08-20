import React, { useRef } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import map from 'lodash/map'
import random from 'lodash/random'

const StyledThermometer = styled(motion.div)`
  position: absolute;
  top: 25px;
  right: 25px;

  .Wrapper {
    width: 35px;
    height: 350px;
    display: flex;
    flex-direction: column;
    place-content: center;
    overflow: hidden;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, #f53b13 0%, #46C8F5 100%);
    position: relative;
    border: 2px solid #ffffff;

    .Cursor {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background: #ffffff;
      position: absolute;
      left: 1px;
    }
  }
`

const StyledStep = styled.div`
  border-bottom: 1px solid #ffffff;
  width: 50%;
`

export const TEMPERATURES = [
  {
    from: 0,
    to: 20, 
    value: 'VERY_COLD'
  },
  {
    from: 20,
    to: 40,
    value: 'COLD'
  },
  {
    from: 40,
    to: 60,
    value: 'MEDIUM'
  },
  {
    from: 60,
    to: 80,
    value: 'HOT'
  },
  {
    from: 80,
    to: 100,
    value: 'VERY_HOT'
  }
]

const Thermometer = ({ makeHappy }) => {
    const constraintsRef = useRef(null)
    const cursorRef = useRef(null)
    const y = useMotionValue(0)
    return (
      <StyledThermometer>
        <div className="Wrapper" ref={constraintsRef}>
          {map(TEMPERATURES, temp => (
            <StyledStep 
              key={temp.value}
              style={{ height: `${temp.to - temp.from}%` }}
            />
          ))}
          <motion.div
            ref={cursorRef}
            onDrag={() => makeHappy(random(20, 30))}
            className="Cursor"
            drag="y"
            dragConstraints={constraintsRef}
            style={{ y }}
          />
        </div>
      </StyledThermometer>
    )
  }

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Thermometer)
