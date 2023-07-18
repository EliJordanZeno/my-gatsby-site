import React from 'react'
import styled from 'styled-components'

const PostItem = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    background-color: #A2A0A0;
    opacity: 0.6;
    gap: 5px;
    flex-shrink:2;
`

const PostContent = styled.p`
    overflow-x: wrap;
`

const PostAuthor = styled.h3`
    overflow-x: no-wrap;
`
const AuthorTitle = styled.p`
    overflow-x: wrap;
`
const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    min-width:20%;
`

//GRAPHQL call to API to get posts

const Post = ({author,title,content,profilePic,}) => {
    return (
        <PostItem>
            <PostHeader>
                <PostAuthor>
                    {author}
                </PostAuthor>
                <img alt={`profile pic for ${author}`} src={"../images/icon.png"}></img>
                <AuthorTitle>
                    {title}
                </AuthorTitle>
            </PostHeader>
            <PostContent>
                {content}
            </PostContent>
        </PostItem>
    )
}

export default Post