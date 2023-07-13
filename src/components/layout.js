import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Widget from './widget'

const container = styled.div`
    margin:auto;
    max-width: 500px;
    font-family: sans-serif;
    display:grid;
    grid-template-columns: 5vw 20vw 70vw;
    grid-template-rows: 5vw 10vw;
    gap:10px;
`

const LayoutWrapper = styled.section`
    width: 100vw;
    font-family: sans-serif;
    display:grid;

    gap:10px;
`

const Layout = ({pageTitle, children }) => {
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
        
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    )
}

export default Layout