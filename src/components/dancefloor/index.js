import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../img/GIF/party.gif'
import map from 'lodash/map'
import {Animated} from "react-animated-css";


const StyledDiv = styled.div`
  margin: 0;
  position: relative;
  /* Gif pusheen */
  img.pushennGif {
    width: 167px;
    position: absolute;
    bottom: -436%;
    right: 13%;
    height: auto;
    transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
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
  }
    
    img {
      width: 45px;
      height: 42px;
      padding-left: 6px;
    padding-right: 5px;
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
        var test = document.querySelector(`.${musics[value].name}`);
        test.play();
        
        //Move Gif
        const element =  document.querySelector('.pushennGif')
        element.classList.add('animated', 'shake')

      }

    
        render() {
            return (
                <StyledDiv>
                    <div className="List-Icon-Music">
                        {map(musics, (music, i) =>
                            <div key={i} className="Icon-Music-Img">
                                <img src={require(`../../img/icons/${music.icon}`)} id={music.name} className={`Icon-${music.name}`} alt={`${music.name}`} onClick={() => this.dance(i)} />
                                <audio className={music.name}
                                    controls
                                    src={require(`../../sound//${music.music}`)}>
                                </audio>
                            </div>
                        )}

                    </div>

                <Animated animationIn="shake" animationOut="fadeOut">
                  <img id="toto" className="pushennGif" src={logo} alt="loading..." />
                </Animated>
                   
                </StyledDiv>
            )
        }
    }
    
    export default Dancefloor
    