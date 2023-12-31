import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
        <h1>Welcome to Zeno Dash, Kraft Heinz!</h1>
      </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage

