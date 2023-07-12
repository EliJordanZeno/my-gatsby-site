import * as React from 'react'
import { GraphQLClient, useQuery } from 'graphql-hooks'

const client = new GraphQLClient({
    url:"https://countries.trevorblades.com/",

})


const CountryCall = ({ countryCode }) => {

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
    <>
      <h1>{data.country.name}</h1>
      <h1>{data.country.emoji}</h1>
      <p>{data.country.capital}</p>
      <p>{data.country.native}</p>
      <p>{data.country.currency}</p>
      </>
    )
  }

export default CountryCall