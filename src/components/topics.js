import * as React from 'react'
import styled from 'styled-components'
import { GraphQLClient, useQuery } from 'graphql-hooks'


const client = new GraphQLClient({
    url:"https://countries.trevorblades.com/",

})

const topicsDisplay = styled.div`
    background-color: #A0AEAE;
    place-self: auto;
    width: 100%;
    height: 100%;
    border-radius: 10pt;
    border-color: navy;
    border-width: 10pt;
    margin: 10px;
    padding:10px;
    `

const TrendingTopics = ({ countryCode }) => {

    const query = `
      query 
      {
            country(code: "${countryCode}") 
            {
                name
                native
                capital
                emoji
                currency
                languages 
                {
                  code
                  name
                }
            }
        }
    `

    const { loading, error, data } = useQuery(query,{
        client: client,
    })

    if (loading) return "Loading..."
    if (error) return "Something bad happened"

    return (
    <div className={topicsDisplay}>
      <h1>{data.country.name}</h1>
      <h1>{data.country.emoji}</h1>
      <p>{data.country.capital}</p>
      <p>{data.country.currency}</p>
    </div>
    )
  }

export default TrendingTopics