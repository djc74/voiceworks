import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import smiley from "../icons/smiley.svg"

const FormWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10vh 0 20vh;
`

const FormHeader = styled.h2`
  color: #f6fb0f;
  font-weight: 900;
  font-size: 4.4vw;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 6vw;
  }
`

const FormFields = styled.form`
  background: #ffffe5;
  border-radius: 60px;
  display: flex;
  margin-bottom: 2rem;
  padding: 0.35rem 0.35rem 0.35rem 1rem;
  min-width: 52vw;
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    min-width: 70vw;
  }
`

const EmailInput = styled.input`
  background: none;
  border: none;
  color: #969801;
  flex-grow: 1;
  font-size: 2vw;
  outline-color: #d7da0b;
  @media (max-width: 900px) {
    font-size: 3vw;
  }
  @media (max-width: 600px) {
    border-bottom: 1px solid #d7da0b;
    font-size: 4vw;
    margin: 0.5rem 0;
  }
`

const SubmitWrapper = styled.div`
  background: #323300;
  border-radius: 36px;
  box-shadow: 0 7px 5px -3px hsla(61, 100%, 10%, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  max-width: 70%;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const SubmitInput = styled.input`
  background: #323300;
  border: none;
  color: #ffffe5;
  font-weight: 500;
  font-size: 2vw;
  outline-color: #d7da0b;
  @media (max-width: 900px) {
    font-size: 2.5vw;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const Message = styled.p`
  color: #fbfc9c;
  text-align: center;
`

export default class SignupForm extends React.Component {
  state = {
    email: null,
    status: null,
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
    console.log(this.state)
    return (
      <FormWrapper id="signupform">
        <FormHeader>Stay up to date with the Voice Works newsletter</FormHeader>
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
        <Message>
          We'll bring the latest voice news to your inbox every week. We will
          also let you know about events and meet-ups, and how you can get in
          touch to discuss voice experience creation and consultancy.
        </Message>
      </FormWrapper>
    )
  }
}
