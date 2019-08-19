
import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../img/GIF/toilet.png'


const StyledToilet = styled.div`
  margin: 0;
  position: relative;
  .Cat {
    width: 153px;
    position: absolute;
    left: 43%;
    transition: rotate 1s;
  }
`

const StyledChasse = styled.div`
    margin-left: 77vw;
    margin-top: 28vh;
    height: 67px;
    width: 6px;
    background-color: #555;
    border-radius: 61px 61px 61px 61px;
    -moz-border-radius: 61px 61px 61px 61px;
    -webkit-border-radius: 61px 61px 61px 61px;
    border: 1px solid #000000;


    /* .rotate {
        background-color: blue!important;
        margin-left: 85vw;
            margin-top: 32vh;
            /* transform: rotate(90deg)!important; */
`

class Toilet extends Component {
    chasse() {
    var rotated = false;

        console.log("coucou");
        var div = document.querySelector('.toiletChasse');

        var deg = rotated ? 0 : 180;

        div.style.webkitTransform = 'rotate('+deg+'deg)'; 
        div.style.mozTransform    = 'rotate('+deg+'deg)'; 
        div.style.msTransform     = 'rotate('+deg+'deg)'; 
        div.style.oTransform      = 'rotate('+deg+'deg)'; 
        div.style.transform       = 'rotate('+deg+'deg)'; 

        rotated = !rotated;
       //document.querySelector('.toiletChasse').style.transform = rotate("90deg");
       
    }
    render() {
        return (

            <StyledToilet>
                <StyledChasse className="toiletChasse" onClick={() => this.chasse()} >

                </StyledChasse>
                <img className="Cat" src={logo} alt="Chat" />
            </StyledToilet>

        )
    }
}

export default Toilet
