
import React, { Component } from 'react'
import styled from 'styled-components'
import sound from '../../img/icons/speaker2.png'



const StyledSettings = styled.div`
margin-top: 118px;
`
const StyledText = styled.h1`
    color:#b4a89c;
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
      background-color: white;
      color: #b4a89c;
      border: 1.5px solid #f19fb1;
      border-radius: 45px;
      height: 30px;
    }

`


class Settings extends Component {
   controlMusicVolume = () => {
      let bgMusic = document.querySelector('#bgSong');
    let volumeValue = document.querySelector('.music-volume').value;
    if (volumeValue == 50) {
        bgMusic.volume = 1.0;
    } else if (volumeValue < 50 && volumeValue >= 20) {
        bgMusic.volume = 0.5;
    } else if (volumeValue < 20 && volumeValue >= 5) {
        bgMusic.volume = 0.2;
    } else {
        bgMusic.volume = 0;
    }
}
    render() {
      
        return (
            <StyledSettings>
              <StyledText>Nom : Pusheen</StyledText>
              <StyledText>Age : 33 jours</StyledText>
              <StyledText>Sexe : Masculin</StyledText>
              <StyledImg>
              <img src={sound}  className="speaker"/>

  <input type="range" className="slider" id="myRange"
          max="50" min="0" step="0.01"/>

              </StyledImg>
              <StyledButton>
              <input type="button" value="Condition général" className="button"></input>
              <input type="button" value="Reset la partie" className="button"></input>
            
              </StyledButton>

            </StyledSettings>


        )
    }
}

export default Settings
