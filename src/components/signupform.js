import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import smiley from "../icons/smiley.svg"

const FormWrapper = styled.section`
  align-items: center;
  background: #f6fb0f;
  border-radius: 120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 9rem;
  padding: 1rem 1rem;
  @media (max-width: 600px) {
    border-radius: 0;
  }
`

const FormHeader = styled.h2`
  color: #323300;
  font-weight: 900;
  font-size: 4.4vw;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 3.8vw;
  }
`

const FormFields = styled.form`
  background: #ffffe5;
  border-radius: 60px;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.35rem 0.35rem 0.35rem 1rem;
  width: 50vw;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

const EmailInput = styled.input`
  background: none;
  border: none;
  color: #969801;
  flex-grow: 1;
  font-size: 2vw;
  @media (max-width: 1000px) {
    border-bottom: 1px solid #d7da0b;
    font-size: 3vw;
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
`

const SubmitInput = styled.input`
  background: #323300;
  border: none;
  color: #ffffe5;
  font-weight: 500;
  font-size: 2vw;
  @media (max-width: 1000px) {
    font-size: 2.5vw;
  }
`
const Message = styled.p`
  color: #5a5b00;
  max-width: 50vw;
  text-align: center;
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
        <Message>
          You'll get a short weekly roundup of the latest news. Nothing else.
          Ever.
        </Message>
      </FormWrapper>
    )
  }
}
