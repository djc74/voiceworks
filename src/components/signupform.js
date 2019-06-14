import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"

export default class SignupForm extends React.Component {
  state = {
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <>
        <p>Submit the form below and check your browser console!</p>
        <div>
          <form onSubmit={this._handleSubmit}>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </>
    )
  }
}
