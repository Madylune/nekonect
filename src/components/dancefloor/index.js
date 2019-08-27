import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import logo from '../../img/gif/party.gif'
import map from 'lodash/map'
import random from 'lodash/random'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import SocketIOClient from 'socket.io-client'
import { SERVER_URL } from '../../api/serveur'


const StyledDiv = styled.div`
  margin: 0;
  position: relative;
  /* Gif pusheen */
  img.pushennGif {
    width: 167px;
    position: absolute;
    bottom: -552%;
    right: 13%;
    height: auto;
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    animation:  ${props => props.animated ? 'dance 1.2s infinite alternate both' : '' };
  }
  @keyframes dance {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100px);
    }
  }
  
  /* Icone music */
  .List-Icon-Music {
    background: #ffffff99;
    padding: 10px 2px;
    border-radius: 50px;
    margin-left: 20%;
    margin-right: 10%;
    margin-top: 15%;
    width: 63%;
    display:flex;
    justify-content: space-around;
  }
  .Icon-Music-Img {
    width: 45px;
    height: 42px;

    img {
      width: 45px;
      height: 42px;
      padding-left: 6px;
      padding-right: 5px;
    }
  }

  audio {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    height:0;
  }
`

// Declaration du tableau des instruments de musics
const musics = [
  {
    name: "djembe",
    icon: "djembe.png",
    music: "djembe.mp3",
  },
  {
    name: "guitar",
    icon: "guitar.png",
    music: "guitar.mp3",

  },
  {
    name: "maracas",
    icon: "maracas.png",
    music: "maracas.mp3",

  },
]

class Dancefloor extends Component {
  timeout = null
  state = {
    animated: false
  }

  // Fonction qui vas déclancher l'instrument choisie et faire bouger la peluche
  dance = value => {   
    //Arrêter les différentes musiques
    map(musics, (music, i) => {
          var soundPlayer = document.querySelector(`.${music.name}`);
          soundPlayer.pause();
          soundPlayer.currentTime = 0;
        }
    )

    // Activer le lecteur audio choisie
    var sound = document.querySelector(`.${musics[value].name}`);
    sound.play();

    // Animer le pusheen
    this.setState({
      animated: true
    })

    // Suprimer la propriétée danser
    this.timeout = setTimeout(() => {
      this.setState({
        animated: false
      })
    }, 7000)
    this.socket.emit('danse')
    this.props.makeHappy(random(5, 10))
  }

  componentDidMount() {
    this.socket = SocketIOClient(SERVER_URL)
  }

  render() {
    const { animated } = this.state
    return (
      <StyledDiv animated={animated}>
        <div className="List-Icon-Music">
          {map(musics, (music, i) =>
            <div key={i} className="Icon-Music-Img">
              <img src={require(`../../img/icons/${music.icon}`)} id={music.name} className={`Icon-${music.name}`} alt={`${music.name}`} onClick={() => this.dance(i)} />
              <audio 
                className={music.name}
                src={require(`../../sound/${music.music}`)}>
              </audio>
            </div>
          )}
        </div>
          <img className="pushennGif" src={logo} alt="loading..." />
      </StyledDiv>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})
  
export default connect(null, mapDispatchToProps)(Dancefloor)
    