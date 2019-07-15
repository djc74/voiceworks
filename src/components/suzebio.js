import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import SocialLogos from "./sociallogos"

const BioHolder = styled.div`
  background: #fffafd;
  margin: 0 auto;
  overflow: hidden;
  width: 95%;
`

const BioPar = styled.div`
  color: #4d4d4d;
  font-family: "Raleway", sans-serif;
  font-size: 1.4vw;
  font-weight: 500;
  line-height: 1.25;
  margin: 1rem;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

const SuzeBio = () => (
  <StaticQuery
    query={graphql`
      query BioQuery {
        file(relativePath: { eq: "markdown/suzeblurb.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <BioHolder>
        <BioPar
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
        <SocialLogos />
      </BioHolder>
    )}
  />
)

export default SuzeBio
