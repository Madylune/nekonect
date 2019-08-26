
import React, { Component } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
import styled from 'styled-components'
import sound from '../../img/icons/speaker.png'
import papatte from '../../img/backgrounds/papatte.png'
import { getPlural } from '../../utils/string'
import { timeDifference } from '../../utils/time'

const StyledSettingsGlobal = styled.div`
  margin-top: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  .Code {
    position: absolute;
    top: 10px;
    right: 5px;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    color:#726266;
    .Label {
      text-transform: uppercase;
    }
  }

  .papatte {
    position: absolute; 
    width: 339px;
    opacity: 0.1;
    margin-left: 25px;
  }
`

const StyledSettings = styled.div` 
  margin-left: 46px;
  z-index: 1;
`
const StyledText = styled.h1`
  color:#726266;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  text-align: left;
  margin-left: 40px;
  .Label {
    text-transform: uppercase;
  }
`

const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .speaker {
    width: 24px;
    padding-right: 10px;
  }
  .slider {
    -webkit-appearance: none;
    width: 50%;
    height: 5px;
    border-radius: 5px;   
    background: #b4a89c;
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 
    background: #f19fb1;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fdefe6;
    cursor: pointer;
  }
`
const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .button {
    width: 250px;
    height: 35px;
    margin-top: 10px;
    background-color: #EDCCD3;
    color: white;
    border: 1.5px solid #b4a89c;
    border-radius: 45px;
    font-size: 15px;
  }
`

class Settings extends Component {
  state = {
    now: new Date()
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      10000
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({
      now: new Date()
    })
  }
  render() {
    const { now } = this.state
    const { neko, fbCode } = this.props
    const from = get(neko, 'birthdate').toDate()
    const age = timeDifference(from, now)
    const { days, hours, minutes } = age

    return (
      <StyledSettingsGlobal>
      <div className="Code"><span className="Label">Code de ta peluche: </span>{fbCode}</div>
        <img src={papatte} className="papatte" alt="Patte de chat" />
        <StyledSettings>
          <StyledText><span className="Label">Nom : </span>{get(neko, 'name', 'Neko')}</StyledText>
          <StyledText><span className="Label">Age : </span>{days} jour{getPlural(days, 1, 's')}, {hours} h et {minutes} min</StyledText>
          <StyledText><span className="Label">Sexe : </span>{get(neko, 'sexe') === 'male' ? 'Masculin' : 'Féminin'}</StyledText>
          <StyledImg>
            <img src={sound} className="speaker" alt="Haut parleur" />
            <input type="range" className="slider" id="myRange"
              max="50" min="0" step="0.01" />
          </StyledImg>
          <StyledButton>
            <input type="button" value="Conditions générales" className="button"></input>
            <input type="button" value="Réinitialiser" className="button"></input>
          </StyledButton>
        </StyledSettings>
      </StyledSettingsGlobal>
    )
  }
}

const mapStateToProps = state => ({
  neko: get(state, 'neko'),
  fbCode: get(state, ['code', 'id'])
})

export default connect(mapStateToProps)(Settings)
