import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/signupform"
import NameBoxes from "../components/namebox"
import Blurb from "../components/blurb"
import FooterLinks from "../components/footerlinks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NameBoxes />
    <Blurb />
    <SignUpForm />
    <FooterLinks />
  </Layout>
)

export default IndexPage
