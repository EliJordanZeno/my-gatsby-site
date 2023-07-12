import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    gap:5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color:green;
`

const DashboardPage = () => {
    
    
    return (
            <Container>
                <h1>This is some content</h1>
                <p>More Content</p>
                <p>Guess what, more content</p>
            </Container>
    )
}

export default DashboardPage