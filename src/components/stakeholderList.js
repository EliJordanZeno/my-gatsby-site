import * as React from 'react'
import styled from 'styled-components'


const Table = styled.table`
    border: 1px solid;
`

const Td = styled.td`
    border: 5px solid;
`
const TableRow = styled.tr`
    width:100%;
    border: 1px dashed;
    background: antiquewhite;
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