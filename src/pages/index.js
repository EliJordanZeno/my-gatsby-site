import * as React from "react"
import Layout from "../components/layout copy"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (

      <Layout pageTitle={"Home Page"}>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="clifford, a reddish-brown pitbull, posing on a couch, looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>

  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage

