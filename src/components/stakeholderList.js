import * as React from 'react'
import styled from 'styled-components'


const Table = styled.table`
    border: 0px solid;
    align-self:center;
    border-spacing: 5px;
`

const Td = styled.td`
    border: 0px solid;
    padding: 5px 1px;
    margin: 5px 1px;
`
const TableRow = styled.tr`
    width:100%;
    border: 0px;
    gap:5px;
    background: #A2A0A0;
`



const TableData = ({name,title}) => {
    // preformatted row of name and accompanying title
    return (
        <TableRow>
            <Td>
                {name}
            </Td>
            <Td>
                {title}
            </Td>
        </TableRow>
    )
}

const StakeholderList = () => {

    return (
        <Table>
            <TableData name={"Brendan Nimiera"} title={"Federal"}></TableData>
            <TableData name={"Brendan Nimiera"} title={"Federal"}></TableData>
            <TableData name={"Brendan Nimiera"} title={"Federal"}></TableData>
        </Table>
    )
}

export default StakeholderList