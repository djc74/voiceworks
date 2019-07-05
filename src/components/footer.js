import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  align-items: baseline;
  color: hsla(0, 9%, 100%, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 1rem 6vw;
  a {
    color: inherit;
    font-weight: 800;
    text-decoration: none;
    :hover {
      color: #ff8001;
    }
  }
`

const FooterText = styled.h6`
  font-size: 1vw;
  @media (max-width: 900px) {
    font-size: 1.5vw;
  }
  @media (max-width: 600px) {
    font-size: 2.5vw;
  }
  :last-of-type {
    text-align: right;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>© Voice Works {new Date().getFullYear()}</FooterText>
    <FooterText>
      Built with &hearts; in
      <a href="https://www.instagram.com/rochesterdaily/?hl=en">
        {" "}
        Rochester
      </a>{" "}
      by
      <a href="https://www.bigtent.media"> Big Tent</a>
    </FooterText>
  </FooterWrapper>
)

export default Footer
