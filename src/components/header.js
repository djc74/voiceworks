import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../icons/voiceworks-logo.svg"

const HeaderHolder = styled.header`
  align-items: flex-start;
  display: flex;
  color: #fefefe;
  justify-content: space-between;
`

const LogoHolder = styled.img`
  width: 15vw;
  @media (max-width: 600px) {
    width: 20vw;
  }
`

const Blurb = styled.h1`
  font-size: 4vw;
  font-style: italic;
  font-weight: 300;
  padding-right: 6vw;
  padding-top: 1rem;
`

const Header = () => (
  <HeaderHolder>
    <LogoHolder src={logo} alt="Voice Works logo" />
    <Blurb>for all the latest in voice tech</Blurb>
  </HeaderHolder>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
