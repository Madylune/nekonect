import React, { Component } from 'react'
import styled from 'styled-components'
import { db } from '../api/firebase'
import { NotificationManager } from 'react-notifications'

const StyledCreateNeko = styled.div`

`

class CreateNeko extends Component {
  state = {
    neko: null,
    formValues: {
      name: "",
      role: ""
    },
    formErrors: {
      name: "",
      role: ""
    },
    formValidity: {
      name: false,
      role: false
    },
    isSubmitting: false
  }

  createNeko = () => {
    const data = {
      ...this.state.formValues,
      uid: new Date().getTime()
    }
    // adding data here
    db.collection("neko")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        NotificationManager.success("A new neko has been created", "Success")
        window.location = "/"
      })
      .catch(error => {
        NotificationManager.error(error.message, "Create neko failed")
        this.setState({ isSubmitting: false })
      })
  }
  render() {
    const { formErrors, formValues, isSubmitting } = this.state
    return (
      <StyledCreateNeko>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${
                formErrors.name ? "is-invalid" : ""
              }`}
              placeholder="Enter name"
              onChange={this.handleChange}
              value={formValues.name}
            />
            <div className="invalid-feedback">{formErrors.name}</div>
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              className={`form-control ${
                formErrors.role ? "is-invalid" : ""
              }`}
              placeholder="Enter role"
              onChange={this.handleChange}
              value={formValues.role}
            />
            <div className="invalid-feedback">{formErrors.role}</div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Please wait..." : "Submit"}
          </button>
        </form>
      </StyledCreateNeko>
    )
  }
}

export default CreateNeko
