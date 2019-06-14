import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import smiley from "../icons/smiley.svg"

const FormWrapper = styled.section`
  align-items: center;
  background: #f6fb0f;
  border-radius: 93px;
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 0 auto;
  min-height: 9rem;
  padding: 1rem 1rem;
`

const FormHeader = styled.h2`
  font-weight: 900;
  font-size: 4.4vw;
  text-transform: uppercase;
  color: #323300;
`

const FormFields = styled.form`
  background: #ffffe5;
  border-radius: 46px;
  display: flex;
  padding: 0.35rem 0.35rem 0.35rem 1rem;
  width: 50vw;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const EmailInput = styled.input`
  background: none;
  border: none;
  color: #969801;
  flex-grow: 1;
  font-size: 1.25rem;
`

const SubmitWrapper = styled.div`
  background: #323300;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  max-width: 70%;
  @media (max-width: 1000px) {
  }
`

const SubmitInput = styled.input`
  background: #323300;
  border: none;
  color: #ffffe5;
  font-weight: 500;
  font-size: 2vw;
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
            <SubmitWrapper>
              <img src={smiley} alt="smiley face" />
              <SubmitInput type="submit" value="Sign me up!" />
            </SubmitWrapper>
          </FormFields>
        </div>
      </FormWrapper>
    )
  }
}
