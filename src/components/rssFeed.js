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


const RssFeed = () => {
    return (
        <PostWrapper>
<iframe width="850" height="1600" src="https://rss.app/embed/v1/list/tFfvd3g1ydZN1OuN" frameborder="0"></iframe>
        </PostWrapper>
    )
}

setInterval(RssFeed,10000)


export default RssFeed