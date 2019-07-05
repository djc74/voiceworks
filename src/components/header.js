import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

import logo from "../icons/voiceworks-logo.svg"
import triangle from "../icons/newsletter-triangle-link.svg"

const HeaderHolder = styled.header`
  align-items: flex-start;
  display: flex;
  color: #fefefe;
  justify-content: space-between;
`

const LogoHolder = styled.img`
  width: 15vw;
  @media (max-width: 600px) {
    width: 25vw;
  }
`

const Blurb = styled.h1`
  font-size: 4vw;
  font-style: italic;
  font-weight: 300;
  margin-right: auto;
  margin-left: 1.5rem;
  padding-top: 1.5rem;
  @media (max-width: 900px) {
    margin-left: 1rem;
    padding-top: 1rem;
  }
  @media (max-width: 600px) {
    margin-left: 0.75rem;
    padding-top: 0.75rem;
  }
`

const NewsletterTriangle = styled.img`
  width: 11vw;
  transition: all 0.5s ease-in-out;
  :hover {
    cursor: pointer;
    width: 12vw;
  }
  @media (max-width: 900px) {
    width: 15vw;
  }
  @media (max-width: 600px) {
    width: 25vw;
  }
`

const Header = () => (
  <HeaderHolder>
    <LogoHolder src={logo} alt="Voice Works logo" />
    <Blurb>for all the latest in voice tech</Blurb>
    <Link to="signupform" smooth="easeInOutCubic" duration={1000}>
      <NewsletterTriangle src={triangle} alt="newsletter sign-up link" />
    </Link>
  </HeaderHolder>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
