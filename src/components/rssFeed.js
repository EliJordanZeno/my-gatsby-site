import * as React from 'react'
import styled from 'styled-components'



const PostWrapper = styled.section`
    display: flex;
    flex-direction:column;
    align-items:stretch;
    place-items: center;
    align-content: center;
    max-height: 600px;
    overflow-x: scroll;
    gap:10px 5px;
`


const RssFeed = ({srcUrl}) => {
    return (
        <PostWrapper>
            <iframe width="850" height="1600" src={srcUrl} frameborder="0"></iframe>
        </PostWrapper>
    )
}



export default RssFeed