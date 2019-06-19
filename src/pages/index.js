import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/signupform"
import NameBoxes from "../components/namebox"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NameBoxes />
    <SignUpForm />
  </Layout>
)

export default IndexPage
