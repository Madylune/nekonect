
import React from 'react'
import styled from 'styled-components'
import sound from '../../img/icons/speaker.png'
import papatte from '../../img/backgrounds/papatte.png'

const StyledSettingsGlobal = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;

  .papatte {
    position: absolute; 
    width: 339px;
    opacity: 0.1;
    margin-left: 25px;
  }
`

const StyledSettings = styled.div` 
  margin-left: 46px;
`
const StyledText = styled.h1`
  color:#726266;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;

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
    opacity: 0.7;
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
  .button {
    width: 30px;
    width: 13rem;
    margin-top: 10px;
    background-color: #EDCCD3;
    color: white;
    border: 1.5px solid #b4a89c;
    border-radius: 45px;
    height: 30px;
  }
`

const Settings = () => (
  <StyledSettingsGlobal>
    <img src={papatte} className="papatte" alt="Patte de chat" />
    <StyledSettings>
      <StyledText>Nom : Pusheen</StyledText>
      <StyledText>Age : 33 jours</StyledText>
      <StyledText>Sexe : Masculin</StyledText>
      <StyledImg>
        <img src={sound} className="speaker" alt="Haut parleur" />
        <input type="range" className="slider" id="myRange"
          max="50" min="0" step="0.01" />
      </StyledImg>
      <StyledButton>
        <input type="button" value="Condition général" className="button"></input>
        <input type="button" value="Reset la partie" className="button"></input>
      </StyledButton>
    </StyledSettings>
  </StyledSettingsGlobal>
)

export default Settings
