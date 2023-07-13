import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Grid from '../components/grid'
import Widget from '../components/widget'
import TrendingTopics from '../components/topics'
import  PostsMonitor from '../components/postsMonitor'
import Post from '../components/post'
import StakeholderList from '../components/stakeholderList'
import StakeholderOpinions from '../components/stakeholderOpinions'
import { useStaticQuery } from 'gatsby'


import {
    siteTitle
} from '../components/layout.module.css'

const DashboardPage = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)
    return (
        <Layout>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>

            <Grid style={{gridGap: "16px"}}>
                <Widget row={1} column={1}>
                    <TrendingTopics countryCode={"DE"}/>
                </Widget>
                <Widget row={1} column={2}>
                    <PostsMonitor columns={3}>
                        <Post></Post>
                        <Post></Post>
                        <Post></Post>
                        <Post></Post>
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