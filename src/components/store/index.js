import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import map from 'lodash/map'
import get from 'lodash/get'
import random from 'lodash/random'
import { CSSTransitionGroup } from 'react-transition-group'
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
  
  .bounce {
    animation-name: bounce;
  }

  @keyframes bounce {
    0% {  transform: translate3d(0, 0px, 0); } 
    25% {  transform: translate3d(0, -30px, 0); } 
    50% {  transform: translate3d(0, 0px, 0); } 
    75% {  transform: translate3d(0, -5px, 0); } 
    100% {  transform: translate3d(0, 0px, 0); } 
  }

  .buy-transition-leave {
    opacity: 1;
  }
  
  .buy-transition-leave.buy-transition-leave-active {
    opacity: 0;
    transition: all 1s ease-out;
    animation: bounce 1000ms ease-in;
  }
`
class Store extends Component {

  buy = i => {  
    this.props.makeHappy(random(20, 25))
    this.props.addToInventory(this.props.items[i])
    this.props.removeFromStore(this.props.items[i])
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
  }

  render() {
    const { items } = this.props
    const itemElements = map(items, (item, i) => 
      <img 
        key={i}
        src={require(`../../img/icons/${item.icon}`)} 
        id={item.name} className={`Icon-${item.name}`} 
        alt={`${item.name}`} 
        onClick={() => this.buy(i)} />
    )
    return (
      <StyledStore>
          <div className="Icon-store">
            <CSSTransitionGroup
              transitionName="buy-transition"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={1000}>
              {itemElements}
            </CSSTransitionGroup>                  
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
