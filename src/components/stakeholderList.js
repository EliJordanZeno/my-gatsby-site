import { graphql, useStaticQuery } from 'gatsby'
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
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                stakeholders
            }
        }
    }`
    )
    console.log(data)
    let tableDatas = []
    for(let i = 0; i < data.site.siteMetadata.stakeholders.length; i++){
        tableDatas.push(<TableData name={data.site.siteMetadata.stakeholders[i]} title={"demo"}></TableData>)
    }
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
            {tableDatas}
        </Table>
        </>
    )
}

export default StakeholderList