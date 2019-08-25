import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./item";
import styled from "styled-components";
import map from "lodash/map";
import get from "lodash/get";
import random from "lodash/random";
import { CSSTransitionGroup } from "react-transition-group";
import { MOOD_CHANGED_HAPPY } from "../../reducers/mood";
import { INVENTORY_ADD } from "../../reducers/inventory";
import { INVENTORY_REMOVE } from "../../reducers/inventory";
import { STORE_REMOVE } from "../../reducers/store";
import { STORE_ADD } from "../../reducers/store";

const StyledStore = styled.div`
  background: url(${require("../../img/backgrounds/store.png")});
  background-size: cover;
  background-position: center;
  text-align: center;
  height: 79vh;

  .Icon-store {
    img {
      width: 90px;
      height: 82px;
    }
  }

  .Icon-tv {
    position: absolute;
    top: 12px;
    left: 40%;
  }

  .Icon-umbrella {
    position: absolute;
    top: 162px;
    left: 40%;
  }

  .bounce {
    animation-name: bounce;
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0, 0px, 0);
    }
    25% {
      transform: translate3d(0, -30px, 0);
    }
    50% {
      transform: translate3d(0, 0px, 0);
    }
    75% {
      transform: translate3d(0, -5px, 0);
    }
    100% {
      transform: translate3d(0, 0px, 0);
    }
  }

  .animation-leave {
    opacity: 1;
  }

  .animation-leave.animation-leave-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
    animation: bounce 1s ease-in;
  }
`;
class Store extends Component {
  buy = i => {
    this.props.makeHappy(random(20, 25));
    this.props.removeFromStore(this.props.items[i]);
    this.props.addToInventory(this.props.items[i]);
  };

  playAudio = () => {
    let audio = document.querySelector("#store-audio");
    audio.play();
  };

  render() {
    const { items } = this.props;
    const itemElements = map(items, (item, i) => (
      <Item
        key={item.name}
        src={require(`../../img/icons/${item.icon}`)}
        id={item.name}
        className={`Icon-${item.name}`}
        alt={`${item.name}`}
        onClick={() => {
          this.buy(i);
          this.playAudio();
        }}
      />
    ));
    return (
      <StyledStore>
        <div className="Icon-store">
          <CSSTransitionGroup
            transitionName="animation"
            transitionEnterTimeout={0}
            transitionLeaveTimeout={800}
          >
            {itemElements}
          </CSSTransitionGroup>
          <audio id="store-audio" src={require(`../../sound/buy.mp3`)}></audio>
        </div>
      </StyledStore>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  makeHappy: val =>
    dispatch({ type: MOOD_CHANGED_HAPPY, payload: { makeHappyVal: val } }),
  addToInventory: item =>
    dispatch({ type: INVENTORY_ADD, payload: { addedItem: item } }),
  removeFromInventory: item =>
    dispatch({ type: INVENTORY_REMOVE, payload: { removedItem: item } }),
  addToStore: item =>
    dispatch({ type: STORE_ADD, payload: { addedItem: item } }),
  removeFromStore: item =>
    dispatch({ type: STORE_REMOVE, payload: { removedItem: item } })
});

const mapStateToProps = state => ({
  items: get(state, ["store", "items"])
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);
