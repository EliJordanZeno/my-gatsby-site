import React from 'react'
import styled from 'styled-components'

const PostItem = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
    background-color: #A2A0A0;
    gap: 5px;
    flex-shrink:2;
    border-radius:5px;
    padding:10px;
`

const PostContent = styled.p`
    overflow-x: wrap;
    background-color:white;
    border-radius:1rem;
    padding:1rem;
    max-width:80%;
`

const PostAuthor = styled.h4`
    overflow-x: no-wrap;
    padding-right:1rem;
    margin-right:1rem;
`
const AuthorTitle = styled.p`
    overflow-x: wrap;
`
const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    min-width:20%;
    padding-right:1rem;
`


const Post = ({author,title,content}) => {
    return (
        <PostItem>
            <PostHeader>
                <PostAuthor>
                    {author}
                </PostAuthor>
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