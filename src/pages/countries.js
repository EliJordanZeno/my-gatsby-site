import * as React from "react"
import Layout from "../components/layout copy"
import Seo from "../components/seo"
import CountryCall from "../components/graph"


const IndexPage = () => {
    return (
        <Layout pageTitle={"Home Page"}>
          <h1>Welcome to my Gatsby site!</h1>
          <p>This page demonstrates a GraphQL API call</p>
          <CountryCall countryCode={"TR"}/>
        </Layout>
    )
  }
  
  export const Head = () => <Seo title="Home Page" />
  
  export default IndexPage