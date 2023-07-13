import React from 'react'
import styled from 'styled-components'

const GridWrapper = styled.section`
    display:grid;
    grid-template-columns: 1fr,2fr;
`


const Grid = ({children,style}) => {
    return (
        <GridWrapper style ={style}>
            {children}
        </GridWrapper>
    )
}

export default Grid