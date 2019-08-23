import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import get from 'lodash/get'
import { NEKO_DELETE_SUCCESS } from '../reducers/neko'
import { db } from '../api/firebase'
import { getPath } from '../routes'
import { withRouter } from 'react-router'

const StyledGameOver = styled.div`
  background-color: #ffffff;
  margin-top: 50px;
  text-align: center;
  .Title {
    font-size: 45px;
  }
  .Neko_img {
    height: 300px;
  }
  .Button_wrapper {
    width: 100%;
    text-align: center;
    .Button {
      background-color: #EDCCD3;
      color: #444444;
      padding: 10px 30px;
      font-size: 20px;
      border-radius: 40px;
      border: 1px solid #B3A99E;
    }
  }
`

class GameOver extends Component {
  playAgain = () => {
    this.deleteNeko()
  }

  deleteNeko = () => {
    const { neko, deleteCat, history } = this.props
    const location = get(history, ['location', 'pathname'])

    db.collection('neko').doc(neko.id).delete().then(() => {
      deleteCat()
      location === getPath('home') ? document.location.reload(true) : document.location.replace(getPath('home'))
    }).catch(function(error) {
      console.error("Error removing docu  ment: ", error)
    })
  }

  render() {
    return (
      <StyledGameOver>
        <h1 className="Title">Game Over</h1>
        <img 
          className="Neko_img"
          src={require('../img/crying.gif')} 
          alt="Neko pleure" />
        <div className="Button_wrapper">
          <button className="Button" onClick={this.playAgain}>Rejouer</button>
        </div>
      </StyledGameOver>
    )
  }
}

const mapStateToProps = state => ({
  neko: get(state, 'neko')
})

const mapDispatchToProps = dispatch => ({
  deleteCat: () => dispatch({ type: NEKO_DELETE_SUCCESS })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameOver))
