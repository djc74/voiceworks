import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/signupform"
import NameBoxes from "../components/namebox"
import Blurb from "../components/blurb"
import Toggle from "../components/toggle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NameBoxes />
    <Blurb />
    <SignUpForm />
    <Toggle />
  </Layout>
)

export default IndexPage
