import React from "react"
import styled from "styled-components"

import twitter from "../icons/twitter-logo.svg"
import linkedin from "../icons/linkedin-logo.svg"

const LogoWrapper = styled.div`
  display: flex;
  margin: 1rem;
`

const Logo = styled.img`
  height: 2rem;
  margin-right: 1rem;
  transition: all 1s;
  :hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`

const SocialLogos = () => (
  <LogoWrapper>
    <a href="https://twitter.com/BigTentSocial?lang=en-gb">
      <Logo src={twitter} alt="Twitter logo" />
    </a>
    <a href="https://www.linkedin.com/in/suzecooper/">
      <Logo src={linkedin} alt="LinkedIn logo" />
    </a>
  </LogoWrapper>
)

export default SocialLogos
