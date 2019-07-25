import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../img/GIF/party.gif'
import map from 'lodash/map'


const StyledDiv = styled.div`
  background-image: url(${require('../../img/party.jpg')});
  background-size:cover;
  background-position: center;
  width:100vw;
  height:80vh;
  background-repeat: no-repeat; 
  margin: 0;
  position: relative;
  /* Gif pusheen */
  img.pushennGif {
    width: 159px;
    position: absolute;
    bottom: 14%;
    right: 19%;
  }

/* Icone music */
  .Icon-Music {
    background: #ffffff99;
    padding: 17px 20px;
    border-radius: 50px;
    margin-left: 25%;
    margin-right: 20px;
    width: 55%;
    position: absolute;
    top: 13%
    
    img {
      width: 45px;
      height: 42px;
      padding-left: 6px;
    padding-right: 5px;
    }
    
    img.Icon-burger, img.Icon-apple, img.Icon-coffee, img.Icon-water {
      margin-right: 20px;
    }
    img.Icon-burger, img.Icon-apple, img.Icon-cake {
      margin-bottom: 10px;
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
        console.log(musics[value])
        if (musics[value].name == "guitar") 
        {
            console.log("good");
            var test = document.querySelector(".audio");
            test.play();
        }   
      }
    
        render() {
            return (
                <StyledDiv>
                    <div className="Icon-Music">
                        {map(musics, (music, i) =>
                            <>
                                <img src={require(`../../img/icons/${music.icon}`)} id={music.name} className={`Icon-${music.name}`} alt={`${music.name}`} onClick={() => this.dance(i)} />
                                <audio className="audio"
                                    controls
                                    src={require(`../../sound//${music.music}`)}>
                                </audio>
                            </>
                        )}

                    </div>
                    <img className="pushennGif" src={logo} alt="loading..." />
                    {/* <audio>
                    </audio> */}
                </StyledDiv>
            )
        }
    }
    
    export default Dancefloor
    