import React from 'react'
import styled from 'styled-components'

const PostItem = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    background-color: coral;
    gap: 5px;
`
//GRAPHQL call to API to get posts

const Post = ({author,title,content,profilePic,}) => {
    return (
        <PostItem>
            <h3>{author}</h3>
            <img alt={`profile pic for ${author}`} src={profilePic}></img>
            <p>{title}</p>
            <p>{content}</p>
        </PostItem>
    )
}

export default Post