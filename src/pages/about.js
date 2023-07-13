import * as React from 'react'
import Layout from "../components/layout copy"
import Seo from "../components/seo"

const AboutPage = (props) => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi! I'm the creator of this site, which is being built with Gatsby</p>
        </Layout>
    )
}


export const Head = () => <Seo title="About me" />


export default AboutPage