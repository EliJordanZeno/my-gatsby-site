import * as React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Widget from '../components/widget'
import TrendingTopics from '../components/topics'
import PostsMonitor from '../components/postsMonitor'
import Post from '../components/post'
import StakeholderList from '../components/stakeholderList'
import StakeholderOpinions from '../components/stakeholderOpinions'

const DashboardPage = () => {

    return (
        <Layout pageTitle={"Stakeholder View"}>
            <Grid style={{gridGap: "16px"}}>
                <Widget row={1} column={1}>
                    <TrendingTopics countryCode={"DE"}/>
                </Widget>
                <Widget row={1} column={2}>
                    <PostsMonitor columns={3}>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                        <Post author={"Adam Schefter"} title={"Senior NFL Insider"} content={"The Jets re-signed Quincy Williams earlier this offseason to a 3-year, $18M contract and they now reward his brother, Quinnen, with a four-year, $96 million extension. Two brothers get paid in the same offseason and get to continue to play together on the same defense."}></Post>
                    </PostsMonitor>
                </Widget>
                <Widget row={2} column={1}>
                    <StakeholderList></StakeholderList>
                </Widget>
                <Widget row={2} column={2}>
                    <StakeholderOpinions></StakeholderOpinions>
                </Widget>
            </Grid>

        </Layout>
    )
}

export default DashboardPage