import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { db } from '../api/firebase'
import { NEKO_CREATE_SUCCESS } from '../reducers/neko'
import { withRouter } from 'react-router'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

const StyledCreateNeko = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .Logo {
    height: 200px;
  }
  .Form {
    margin-top: 10px;
    padding: 15px;
    background-color: #ffffff;
    border: 5px solid #EDCCD3;
    border-radius: 20px;
    height: 200px;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;

    .Form_inputs {
      line-height: 40px;
      font-size: 20px;
      text-align: center;

      .Form-group {
        &.Form-group-sexe {
          display: flex;
          justify-content: center;
        }
        &.Form-group-name {
          .Input {
            border: 1px solid #EDCCD3;
            border-radius: 4px;
            height: 30px;
            width: 100%;
            padding-left: 5px;
          }
        }
        .Label {
          margin: 10px;
        }
      }
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
  }
`

class CreateNeko extends Component {
  state = {
    neko: undefined,
    name: '',
    sexe: '',
    isSubmitting: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createNeko = e => {
    const { name, sexe } = this.state
    e.preventDefault()
    const neko = db.collection('neko')
      .add({
        name: name,
        birthdate: new Date(),
        sexe: sexe
      })
      .then(() => {
        db.collection('neko')
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data())
          const id = querySnapshot.docs.map(doc => doc.id)
          !isEmpty(data) && this.props.createNeko({
            name: get(data, ['0', 'name']),
            birthdate: get(data, ['0', 'birthdate']),
            sexe: get(data, ['0', 'sexe']),
            id: id[0]
          })
        })
      })
      .catch(error => {
        this.setState({ isSubmitting: false })
      })
    this.setState({
      name: '',
      sexe: '',
      neko: neko
    })
  }

  render() {
    const { name, sexe, isSubmitting } = this.state
    return (
      <StyledCreateNeko>
        <img src={require('../img/logo_neko_nect.jpg')} className="Logo" alt="logo" />
        <form className="Form" onSubmit={this.createNeko}>
          <div className="Form_inputs">
            <div className="Form-group Form-group-name">
              <label className="Label">Donne un nom à ton chat:</label>
              <input
                type="text"
                name="name"
                className="Input"
                placeholder="Nom du chat"
                onChange={this.handleChange}
                value={name}
              />
            </div>
            <div className="Form-group Form-group-sexe">
              <div>
                <input 
                  type="radio" 
                  name="sexe" 
                  value="male" 
                  checked={sexe === 'male'} 
                  onChange={this.handleChange}
                />
                <label className="Label" htmlFor="male">Mâle</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  name="sexe" 
                  value="female" 
                  checked={sexe === 'female'}
                  onChange={this.handleChange}
                />
                <label className="Label" htmlFor="female">Femelle</label>
              </div>
            </div>
          </div>
          <div className="Button_wrapper">
            <button
              type="submit"
              className="Button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Chargement..." : "Créer"}
            </button>
          </div>
        </form>
      </StyledCreateNeko>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNeko: ({ name, sexe, birthdate, id }) => dispatch({ type: NEKO_CREATE_SUCCESS, payload: { name, sexe, birthdate, id } })
})

export default withRouter(connect(null, mapDispatchToProps)(CreateNeko))
