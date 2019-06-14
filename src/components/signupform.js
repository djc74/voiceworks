import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

const FormWrapper = styled.section`
  align-items: center;
  background: #f6fb0f;
  border-radius: 93px;
  display: flex;
  flex-direction: column;
  max-width: 42rem;
  margin: 0 auto;
  min-height: 9rem;
  padding: 1rem 1rem;
`

const FormHeader = styled.h2`
  font-weight: 900;
  font-size: 63px;
  text-transform: uppercase;
  color: #323300;
`

const FormFields = styled.form`
  background: #ffffe5;
  border-radius: 46px;
  display: flex;
  height: 3rem;
  padding: 0.1rem 0.1rem 0.1rem 1rem;
  width: 35rem;
`

const EmailInput = styled.input`
  background: none;
  border: none;
  color: #969801;
  flex-grow: 1;
  font-size: 1.25rem;
`

const SubmitInput = styled.input`
  background: #323300;
  border: none;
  border-radius: 36px;
  color: #ffffe5;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0.25rem;
`

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
      <FormWrapper>
        <FormHeader>Send me voice news</FormHeader>
        <div>
          <FormFields onSubmit={this._handleSubmit}>
            <EmailInput
              type="email"
              onChange={this._handleChange}
              placeholder="Enter your e-mail here"
              name="email"
            />
            <br />
            <SubmitInput type="submit" value="Sign me up!" />
          </FormFields>
        </div>
      </FormWrapper>
    )
  }
}
