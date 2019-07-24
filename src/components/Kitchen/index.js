import React, { Component } from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  background: url(${require('../../img/neko_nect_cuisine.jpg')});
  background-size: cover;
  background-position: center;
  text-align: center;
  height: 100vh;
  padding-top: 80px;
  

  .Icon-kitchen {
    background: #ffffff99;
    padding: 15px 20px;
    border-radius: 50px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    
    img {
      width: 53px;
      height: 50px;
    }
    
  }

  .active {
    background: #80808070;
    padding: 8px;
    border-radius: 50%;
  }

  img.Gif-faim {
      width: 180px;
      position: absolute;
      bottom: 116px;
      right: 84px;
    }

`

class Kitchen extends Component {   
  
    render() {
      
      return (
        
        <Styled>
            

            <div className="Icon-kitchen">
                <img src={require('../../img/icon/burger.png')} className="Icon-burger" alt="Burger" />
                <img src={require('../../img/icon/apple.png')} className="Icon-apple active" alt="Apple" />
                <img src={require('../../img/icon/cake.png')} className="Icon-cake" alt="Cake" />
            </div>
            
            <img src={require('../../img/gif/faim.gif')} className="Gif-faim" alt="Pusheen qui a faim" />

        </Styled>

      )
    }
  }
  
  export default Kitchen