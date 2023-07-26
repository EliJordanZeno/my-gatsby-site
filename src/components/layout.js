import * as React from 'react'
import { Link,useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import {
    siteTitle,
    logoImage,
    logoImageWrapper,
    navLinks,
    navLinkItem,
    navLinkText,
} from "./layout.module.css"

const LayoutWrapper = styled.section`
    width: 90%;
    height:100%;
    font-family: sans-serif;
    display:flex;
    flex-direction: column;
    gap:10px;
    padding: 1vw;
    justify-content: center;
    place-items: center;
    align-items:center;
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
            {/* add nav bar for other page views */}
            <nav >
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/stakeholder" className={navLinkText}>
                            Stakeholder View
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
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