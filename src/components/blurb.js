import React from "react"
import styled from "styled-components"

import { StaticQuery, graphql } from "gatsby"

const BlurbHolder = styled.section`
  color: #fffafd;
  font-size: 2.4vw;
  font-weight: 100;
  padding: 5vh 0 10vh;
  @media (max-width: 600px) {
    font-size: 3.5vw;
    padding: 0;
  }
`

const Blurb = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        file(relativePath: { eq: "markdown/voiceworksblurb.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <BlurbHolder>
        <p
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </BlurbHolder>
    )}
  />
)

export default Blurb
