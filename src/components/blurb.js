import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const BlurbHolder = styled.section`
  padding: 5vh 0 10vh;
  @media (max-width: 600px) {
    padding: 0;
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
