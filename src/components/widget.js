import * as React from 'react'
import styled from 'styled-components'



const Widget = ({row,column, children}) => {
    //position is 1 of 4 places on screen, also determines size
const GridItem = styled.div`
    background-color:#A0AEAE ;
    place-self:auto;
    width: 100%;
    height: 100%;
    border-color: tomato;
    border-radius: 10px;
    border-color: navy;
    border-width: 10pt;
    margin: 10px;
    grid-area: ${row} / ${column};
`

    return(
        <GridItem>
            {children}
        </GridItem>
    )
}

export default Widget