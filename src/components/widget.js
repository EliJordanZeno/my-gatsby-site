import * as React from 'react'
import styled from 'styled-components'



const Widget = ({row,column, children}) => {
    //position is 1 of 4 places on screen, also determines size
const GridItem = styled.div`
    background-color:#F1F0F3 ;
    place-self:auto;
    width: 100%;
    height: 100%;
    padding:10px;
    border: 0.5px solid;
    border-color: #585B5A;
    border-radius: 10px;
    border-width: 10pt;
    margin: 20px;
    grid-area: ${row} / ${column};
    filter: drop-shadow(2px 2px 4px lightgrey);
`
    return(
        <GridItem>
            {children}
        </GridItem>
    )
}

export default Widget