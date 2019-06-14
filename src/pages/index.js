import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SignUpForm from "../components/signupform"
import SEO from "../components/seo"

const Heading = styled.h1`
  color: #fefefe;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <SignUpForm />
  </Layout>
)

export default IndexPage
