import * as React from 'react'
import styled from 'styled-components'


const Table = styled.table`
    align-self:center;
    border-spacing: 5px;
    overflow-x:scroll;
`

const Td = styled.td`
    padding: 2px 5px;
    margin: 5px 1px;
`
const TableRow = styled.tr`
    width:100%;
    gap:5px;
    background: #A2A0A0;
`


//add button for updating stakeholder list
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
        <>
        <form >
            <label>
                Name:
                <input type="text"  />
            </label>
            <input type="submit" value="Add" />
        </form>
        <Table>

            <TableData name={"Brendan Nimiera"} title={"Federal"}></TableData>
            <TableData name={"Brendan Nimiera"} title={"Federal"}></TableData>
            <TableData name={"Brendan Nimiera"} title={"Federal"}></TableData>
        </Table>
        </>
    )
}

export default StakeholderList