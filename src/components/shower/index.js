// todo background
import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../img/GIF/douche.gif'
import Thermometer from './thermometer'



const StyledP = styled.p`
    color:red;
`

const StyledDiv = styled.div`
  background-image: url(${require('../../img/sdb.jpg')});
  width:100vw;
  height:80vh;
  background-repeat: no-repeat; 
  margin: 0;
  img.pushennGif {
      width:180px;
      position:relative;
      top: 465px;
  }
`


class Shower extends Component {

    render() {
        return (
            <StyledDiv>
                <Thermometer />
                {/* <StyledP>coucou</StyledP> */}
                <img className="pushennGif" src={logo} alt="loading..." />
            </StyledDiv>
        )
    }
}

export default Shower


