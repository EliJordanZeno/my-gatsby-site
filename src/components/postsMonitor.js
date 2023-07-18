import * as React from 'react'
import styled from 'styled-components'


const PostWrapper = styled.section`
    display: flex;
    flex-direction:column;
    x-overflow: scroll;
    align-items:stretch;
    place-items: center;
    align-content: center;
    max-height: 60%;
    gap:10px 5px;
`

//takes post components as arguments and displays them in a grid-like format within the widget space 
const PostsMonitor = ({columns,children,style}) => {

    return (
        <PostWrapper columns={columns} style={style}>
            {children}
        </PostWrapper>
    )
}


export default PostsMonitor