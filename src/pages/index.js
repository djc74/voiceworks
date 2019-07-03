import React from "react"
import { Link } from "react-scroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/signupform"
import NameBoxes from "../components/namebox"
import Blurb from "../components/blurb"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NameBoxes />
    <Blurb />
    <SignUpForm />
  </Layout>
)

export default IndexPage
