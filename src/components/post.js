import React from 'react'
import styled from 'styled-components'

const PostItem = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    background-color: lightblue;
    gap: 5px;
`

const PostContent = styled.p`
    overflow-x: scroll;
`
//GRAPHQL call to API to get posts

const Post = ({author,title,content,profilePic,}) => {
    return (
        <PostItem>
            <h3>{author}</h3>
            <img alt={`profile pic for ${author}`} src={"../images/icon.png"}></img>
            <p>{title}</p>
            <PostContent>
                {content}
            </PostContent>
        </PostItem>
    )
}

export default Post