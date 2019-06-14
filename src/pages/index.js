import React from "react"

import Layout from "../components/layout"
import SignUpForm from "../components/signupform"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SignUpForm />
  </Layout>
)

export default IndexPage
