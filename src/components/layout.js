import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import {
    siteTitle,
    logoImage,
    logoImageWrapper
} from "./layout.module.css"

const LayoutWrapper = styled.section`
    width: 100%;
    height:100%;
    font-family: sans-serif;
    display:grid;
    gap:10px;
    justify-content: center;
    flex-grow:1;
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
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <h2>{pageTitle}</h2>
            {children}
            <footer>
                <StaticImage 
                src="../images/zeno_khc_logo.png"
                imgClassName={logoImage}
                className={logoImageWrapper}
                />
            </footer>
        </LayoutWrapper>
    )
}

export default Layout