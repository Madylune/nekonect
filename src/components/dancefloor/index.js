import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../img/GIF/party.gif'

const StyledDiv = styled.div`
  background-image: url(${require('../../img/party.jpg')});
  background-size:cover;
  background-position: center;
  width:100vw;
  height:80vh;
  background-repeat: no-repeat; 
  margin: 0;
  position: relative;
  img.pushennGif {
      width:180px;
      position:absolute;
      bottom: 11%;
     right: 17%;
  }
`


class Dancefloor extends Component {
    // Fonction js declarer 
    
        render() {
            return (
                <StyledDiv>
                    <img className="pushennGif" src={logo} alt="loading..." />
                </StyledDiv>
            )
        }
    }
    
    export default Dancefloor
    