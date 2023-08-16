import * as React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Widget from "../components/widget"
import RssFeed from '../components/rssFeed'


const IssuesPage = () => {

    return(
    <Layout pageTitle={"Key Issues View"}>
        <Grid style={{gridGap: "16px"}}>
            <Widget row={1} column={1} >
                <RssFeed srcUrl={"https://rss.app/embed/v1/list/tFfvd3g1ydZN1OuN"}></RssFeed>
            </Widget>
            <Widget row={2} column={1} >
                <RssFeed srcUrl={"https://rss.app/embed/v1/wall/F0JaWvddpbNxjeKO"}></RssFeed>
            </Widget>
            <Widget row={3} column={1} >
                <RssFeed srcUrl={"https://rss.app/embed/v1/wall/BGzFdz7fZkkiEjDe"}></RssFeed>
            </Widget>
            <Widget row={4} column={1} >
                <RssFeed srcUrl={"https://rss.app/embed/v1/list/bDwJjPhLphcNewfU"}></RssFeed>
            </Widget>
        </Grid>
    </Layout>
    )
}


export default IssuesPage