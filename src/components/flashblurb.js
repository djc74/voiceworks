import React from "react"
import styled from "styled-components"

const FlashBlurbHolder = styled.section`
  border: 1px solid #f72f97;
  margin-bottom: 10vh;
  padding: 2rem;
  @media (min-width: 600px) {
    margin-top: 5vh;
  }
`

const FlashBlurbContent = styled.a`
  @keyframes colorchange {
    0% {
      color: #fee6f3;
    }
    50% {
      color: #f72f97;
    }
    100% {
      color: #fee6f3;
    }
  }
  text-align: center;
  text-decoration: none;
  h2 {
    animation: colorchange 5s infinite ease-in-out;
    color: #f72f97;
    font-size: 3.8vw;
    font-weight: 900;
    text-transform: uppercase;
    @media (max-width: 600px) {
      font-size: 5.5vw;
    }
  }
  p {
    display: inline-block;
    color: #fee6f3;
    font-size: 2.4vw;
    font-weight: 100;
    line-height: 1.5;
    @media (max-width: 600px) {
      font-size: 4vw;
    }
    span {
      text-decoration: underline;
      text-transform: uppercase;
      margin-right: 5px;
      :hover {
        color: #f72f97;
      }
    }
  }
`

const FlashBlurb = () => (
  <FlashBlurbHolder>
    <FlashBlurbContent href="https://www.facebook.com/pages/category/Broadcasting---Media-Production-Company/Voice-Works-376825082933510/">
      <h2>Join us for Flash Briefing February!</h2>
      <p>
        <span>Click here</span>
        to see a video each day giving you the skills to build a better briefing
      </p>
    </FlashBlurbContent>
  </FlashBlurbHolder>
)

export default FlashBlurb
