import React, { Component } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'

const Styled = styled.div`
  background: url(${require('../../img/neko_nect_cuisine.jpg')});
  background-size: cover;
  background-position: center;
  text-align: center;
  height: 100vh;
  

  .Icon-kitchen {
    background: #ffffff99;
    padding: 15px 20px;
    border-radius: 50px;
    margin-left: 25%;
    margin-right: 20px;
    width: 60%;
    position: absolute;
    top: 7%;
    
    img {
      width: 49px;
      height: 42px;
    }
    
    img.Icon-burger, img.Icon-apple, img.Icon-coffee, img.Icon-water {
      margin-right: 20px;
    }

    img.Icon-burger, img.Icon-apple, img.Icon-cake {
      margin-bottom: 10px;
    }
  }


  img.Gif-faim {
      position: absolute;
      width: 180px;
      bottom: 3%;
      right: 6%;
    }

`

const foods = [
  {
    name: "burger",
    icon: "burger.png",
  },
  {
    name: "apple",
    icon: "apple.png",
  },
  {
    name: "cake",
    icon: "cake.png",
  },
  {
    name: "coffee",
    icon: "coffee.png",
  },
  {
    name: "water",
    icon: "water.png",
  },
  {
    name: "pint",
    icon: "pint.png",
  },
]


class Kitchen extends Component {   
    
    eat = value => {

                  
      document.getElementById(foods[value].name).classList.add('animate');
      document.getElementsByClassName('animate').classList.remove('animate');

      console.log(foods[value])
    }

    render() {
      
      return (
        
        <Styled>
            
            <div className="Icon-kitchen">
              {map(foods, (food, i) => 
                <img src={require(`../../img/icons/${food.icon}`)} id={food.name} className={`Icon-${food.name}`} alt={`${food.name}`} onClick={() => this.eat(i)} />
              )}                  
            </div>
            
            <img src={require('../../img/gif/faim.gif')} className="Gif-faim" alt="Pusheen qui a faim" />

        </Styled>

      )
    }
  }
  
  export default Kitchen