import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import map from 'lodash/map'
import random from 'lodash/random'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import SocketIOClient from 'socket.io-client'
import { SERVER_URL } from '../../api/serveur'

const StyledKitchen = styled.div`
  .Icon-kitchen {
    background: #ffffff99;
    padding: 15px 20px;
    border-radius: 50px;
    margin-left: 21%;
    width: 60%;
    position: absolute;
    top: 7%;
    
    img {
      width: 45px;
      height: 42px;
    }
    
    img.Icon-burger, img.Icon-apple, img.Icon-coffee, img.Icon-water {
      margin-right: 20px;
    }

    img.Icon-burger, img.Icon-apple, img.Icon-cake {
      margin-bottom: 10px;
    }
  }

  .Neko_kitchen {
      position: absolute;
      width: 180px;
      bottom: 3%;
      right: 6%;
    }

  .animate-burger {
    z-index: 1000;
    position:relative;
    animation-name: eat-burger;
    animation-duration: 5s;
  }
  .animate-apple {
    z-index: 1000;
    position:relative;
    animation-name: eat-apple;
    animation-duration: 5s;
  }
  .animate-cake {
    z-index: 1000;
    position:relative;
    animation-name: eat-cake;
    animation-duration: 5s;
  }
  .animate-coffee {
    z-index: 1000;
    position:relative;
    animation-name: drink-coffee;
    animation-duration: 5s;
  }
  .animate-water {
    z-index: 1000;
    position:relative;
    animation-name: drink-water;
    animation-duration: 5s;
  }
  .animate-pint {
    z-index: 1000;
    position:relative;
    animation-name: drink-pint;
    animation-duration: 5s;
  }

  @keyframes eat-burger {
    0% { top: 0px; left: 0px }
    100% { top: 330px; left: 110px }
  }

  @keyframes eat-apple {
    0% { top: 0px; left: 0px }
    100% { top: 330px; left: 40px }
  }

  @keyframes eat-cake {
    0% { top: 0px; left: 0px }
    100% { top: 330px; left: -30px }
  }

  @keyframes drink-coffee {
    0% { top: 0px; left: 0px }
    100% { top: 270px; left: 110px }
  }

  @keyframes drink-water {
    0% { top: 0px; left: 0px }
    100% { top: 270px; left: 40px }
  }

  @keyframes drink-pint {
    0% { top: 0px; left: 0px }
    100% { top: 270px; left: -30px }
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
  timeout = null   
  state = {
    animateItem: undefined
  }

  eat = i => { 
    if (i === 0) {
      this.socket.emit('burger');     
    } else if (i === 5) {
      this.socket.emit('beer');  
    } else {
      this.socket.emit('eat');
    }
    this.setState({
      animateItem: i
    }) 
    this.timeout = setTimeout(() => {
      this.setState({
        animateItem: undefined
      })
    }, 5000)
    this.props.makeHappy(random(20, 25))
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
  }

  componentDidMount() {
    this.socket = SocketIOClient(SERVER_URL);
    this.socket.emit('badge');     

  }

  render() {
    const { animateItem } = this.state
    return (
      <StyledKitchen>
          <div className="Icon-kitchen">
            {map(foods, (food, i) => 
              <img 
                key={i}
                src={require(`../../img/icons/${food.icon}`)} 
                id={food.name} className={`Icon-${food.name} ${animateItem === i ? `animate-${food.name}` : ''}`} 
                alt={`${food.name}`} 
                onClick={() => this.eat(i)} />
            )}                  
          </div>       
          <img src={require('../../img/gif/faim.gif')} className="Neko_kitchen" alt="Gif de Pusheen qui a faim" />
      </StyledKitchen>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } })
})

export default connect(null, mapDispatchToProps)(Kitchen)
