import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Background = styled.div`
  background: #161616;
  min-height: 100vh;
`

const MainWrapper = styled.main`
  min-height: 55vh;
  padding: 0 15vw;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </Background>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
