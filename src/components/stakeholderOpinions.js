import * as React from 'react'
import styled from 'styled-components'


const Table = styled.table`
    border: 1px solid;
    border-spacing: 5px;
    overflow-x: scroll;
    max-height: 200px;
`

const Td = styled.td`
    border: 5px solid;
`
const TableRow = styled.tr`
    width:100%;
    background: #A2A0A0;
`



const TableData = ({name,title,role,date,postText}) => {
    // preformatted row of name and accompanying title
    return (
        <TableRow>
            <Td>
                {name}
            </Td>
            <Td>
                {title}
            </Td>
            <Td>
                {role}
            </Td>
            <Td>
                {date}
            </Td>
            <Td>
                {postText}
            </Td>
        </TableRow>
    )
}

const StakeholderOpinions = () => {

    return (
        <Table>
            <TableData name={"Brendan Nimiera"} title={"Federal"} role={"FDA Leadership"} date={"February 1, 2023"} postText={"My quarterly review is now complete. It lasted 25 seconds. It took longer for me to log into the system, navigate to the ACKNOWLEDGE QUARTERLY REVIEW than the review lasted. The value of this exercise is, shall we say, debatable."}></TableData>
            <TableData name={"Brendan Nimiera"} title={"Federal"} role={"FDA Leadership"} date={"February 1, 2023"} postText={"My quarterly review is now complete. It lasted 25 seconds. It took longer for me to log into the system, navigate to the ACKNOWLEDGE QUARTERLY REVIEW than the review lasted. The value of this exercise is, shall we say, debatable."}></TableData>
            <TableData name={"Brendan Nimiera"} title={"Federal"} role={"FDA Leadership"} date={"February 1, 2023"} postText={"My quarterly review is now complete. It lasted 25 seconds. It took longer for me to log into the system, navigate to the ACKNOWLEDGE QUARTERLY REVIEW than the review lasted. The value of this exercise is, shall we say, debatable."}></TableData>
        </Table>
    )
}

export default StakeholderOpinions