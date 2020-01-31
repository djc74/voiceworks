import React from "react"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"

const BlurbHolder = styled.section`
  padding: 5vh 0 10vh;
  @media (max-width: 600px) {
    padding: 0;
  }
`

const FlashBlurb = styled.a`
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
    animation: colorchange 2s infinite ease-in-out;
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
    margin-bottom: 3rem;
    @media (max-width: 600px) {
      font-size: 4vw;
    }
    div {
      display: inline;
      text-decoration: underline;
      text-transform: uppercase;
      margin-right: 5px;
      :hover {
        color: #f72f97;
      }
    }
  }
`

const BlurbPar = styled.div`
  color: #fffafd;
  font-size: 2.4vw;
  font-weight: 100;
  line-height: 1.3;
  p {
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const Blurb = () => (
  <StaticQuery
    query={graphql`
      query BlurbQuery {
        file(relativePath: { eq: "markdown/voiceworksblurb.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <BlurbHolder>
        <FlashBlurb href="https://www.facebook.com/pages/category/Broadcasting---Media-Production-Company/Voice-Works-376825082933510/">
          <h2>Join us for Flash Briefing February!</h2>
          <p>
            <div>Click here</div>
            to see a video each day giving you the skills to build a better
            briefing
          </p>
        </FlashBlurb>
        <BlurbPar
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </BlurbHolder>
    )}
  />
)

export default Blurb
