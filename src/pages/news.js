import * as React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Widget from "../components/widget"
import RssFeed from '../components/rssFeed'


const IssuesPage = () => {
    return(
    <Layout pageTitle={"Key Issues View"}>
        <Grid style={{gridGap: "16px"}}>
        <Widget row={3} column={1} >
                    <RssFeed></RssFeed>
                </Widget>
        </Grid>
    </Layout>
    )
}


export default IssuesPage