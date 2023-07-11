import * as React from 'react'
import Layout from "../components/layout"

const AboutPage = (props) => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi! I'm the creator of this site, which is being built with Gatsby</p>
        </Layout>
    )
}


export const Head = () => <title>About Me</title>


export default AboutPage