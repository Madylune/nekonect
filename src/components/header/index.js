import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Clock from './Clock'
import MoodBar from './MoodBar'
import get from 'lodash/get'
import { timeDifference } from '../../utils/time'
import { getPlural } from '../../utils/string'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  margin: 10px 5px;
  font-family: 'Raleway', sans-serif;
  .Neko_infos_life {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    margin: 0 10px;
    .Neko_age {
      letter-spacing: 1px;
      font-size: 12px;
    }
  }
  .Neko_infos {
    display: flex;
    flex-direction: column;
    .Logo {
      height: 30px;
      width: 60px;
    }
    .Neko_name {
      font-weight: 900;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`

const Header = ({ neko }) => {
  const from = get(neko, 'birthdate').toDate()
  const now = new Date()
  const age = timeDifference(from, now)
  const { days, hours, minutes } = age
  return (
    <StyledHeader className="App-header">
      <div className="Neko_infos">
        <img src={require('../../img/logo_neko_nect.jpg')} className="Logo" alt="logo" />
        <div className="Neko_name">
          {get(neko, 'name')}
        </div>
      </div>
      <div className="Neko_infos_life">
        <MoodBar age={age} />
        <div className="Neko_age">
          {days} jour{getPlural(days, 1, 's')}, {hours} h et {minutes} min
        </div>
      </div>
      <Clock />
    </StyledHeader>
  )
}

const mapStateToProps = state => ({
  neko: get(state, 'neko')
})

export default connect(mapStateToProps)(Header)
