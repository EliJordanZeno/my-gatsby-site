import React from 'react'
import styled from 'styled-components'

const PostItem = styled.div`
    display: grid;
    
`
//GRAPHQL call to API to get posts

const Post = ({author,content,profilePic,}) => {
    return (
        <PostItem>
            <h3>Brendan Niemira</h3>
            <p>Research Leader of the Food Safety and Intervention Technologies</p>
            <p>I love Kraft Heinz and all of their subsidiay brands for ensuring the marketplace is flooded with safe food products!</p>
        </PostItem>
    )
}

export default Post