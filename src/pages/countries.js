import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TextInput from "../components/textInput"

const IndexPage = () => {
    return (
  
        <Layout pageTitle={"Home Page"}>
          <h1>Welcome to my Gatsby site!</h1>
          <p>This page demonstrates a GraphQL API call</p>
            <TextInput />
        </Layout>
  
    )
  }
  
  export const Head = () => <Seo title="Home Page" />
  
  export default IndexPage