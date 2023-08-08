import * as React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Widget from '../components/widget'
import TrendingTopics from '../components/topics'
import PostsMonitor from '../components/postsMonitor'

import StakeholderList from '../components/stakeholderList'
import StakeholderOpinions from '../components/stakeholderOpinions'

const DashboardPage = () => {

    return (
        <Layout pageTitle={"Stakeholder View"}>
            <Grid style={{gridGap: "16px"}}>
                <Widget row={1} column={1}>
                    <h2>This is just a demo for GraphQL integration</h2>
                    <TrendingTopics countryCode={"DE"}/>
                </Widget>
                <Widget row={1} column={2}>
                    <h2>Trending Posts</h2>
                    <PostsMonitor columns={3}>
                        
                    </PostsMonitor>
                </Widget>
                <Widget row={2} column={1}>
                    <h2>Stakeholder Watchlist</h2>
                    <StakeholderList></StakeholderList>
                </Widget>
                <Widget row={2} column={2}>
                    <h2>Stakeholder Opinions</h2>
                    <StakeholderOpinions></StakeholderOpinions>
                </Widget>
            </Grid>

        </Layout>
    )
}

export default DashboardPage