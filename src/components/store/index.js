import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import map from 'lodash/map'
import get from 'lodash/get'
import random from 'lodash/random'
import { MOOD_CHANGED_HAPPY } from '../../reducers/mood'
import { INVENTORY_ADD } from '../../reducers/inventory'
import { INVENTORY_REMOVE } from '../../reducers/inventory'
import { STORE_REMOVE } from '../../reducers/store'
import { STORE_ADD } from '../../reducers/store'

const StyledStore = styled.div`
  background: url(${require('../../img/backgrounds/store.png')});
  background-size: cover;
  background-position: center;
  text-align: center;
  height: 77vh;

  .Icon-store {
    img {
      width: 90px;
      height: 82px;
    }
  }

  .Icon-tv {
    margin-top: 10px;
  }

  .Neko_kitchen {
      position: absolute;
      width: 180px;
      bottom: 3%;
      right: 6%;
    }

  .animate-tv {
    z-index: 1000;
    position:relative;
    animation-name: buy-tv;
    animation-duration: 1s;
  }

  @keyframes buy-tv {
    0% { top: 0px; }
    25% { top: -30px; }
    50% { top: 0px; }
    75% { top: -5px; }
    100% { top: 0px; }
  }
`
class Store extends Component {
  timeout = null   
  state = {
    animateItem: undefined
  }

  buy = i => {  
    this.setState({
      animateItem: i
    }) 

    this.timeout = setTimeout(() => {
      this.setState({
        animateItem: undefined
      })
    }, 5000)

    this.props.makeHappy(random(20, 25))
    this.props.addToInventory(this.props.items[i])
    this.props.removeFromStore(this.props.items[i])
    
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
  }

  render() {
    const { animateItem } = this.state
    const { items } = this.props
    return (
      <StyledStore>
          <div className="Icon-store">
            {map(items, (item, i) => 
              <img 
                key={i}
                src={require(`../../img/icons/${item.icon}`)} 
                id={item.name} className={`Icon-${item.name} ${animateItem === i ? `animate-${item.name}` : ''}`} 
                alt={`${item.name}`} 
                onClick={() => this.buy(i)} />
            )}                  
          </div>       
          <img src={require('../../img/gif/faim.gif')} className="Neko_kitchen" alt="Gif de Pusheen qui a faim" />
      </StyledStore>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val => dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } }),
  addToInventory: item => dispatch({ type: INVENTORY_ADD, payload: { addedItem: item } }),
  removeFromInventory: item => dispatch({ type: INVENTORY_REMOVE, payload: { removedItem: item } }),
  addToStore: item => dispatch({ type: STORE_ADD, payload: { addedItem: item } }),
  removeFromStore: item => dispatch({ type: STORE_REMOVE, payload: { removedItem: item } }),
})

const mapStateToProps = state => ({
  items: get(state, ['store', 'items'] )
})

export default connect(mapStateToProps, mapDispatchToProps)(Store)
