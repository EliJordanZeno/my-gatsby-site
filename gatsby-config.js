/**
 * @type {import('gatsby').GatsbyConfig}
 */

const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")


module.exports = {
  siteMetadata: {
    title: `A Demo of GraphQL and Gatsby integration`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: 
      {
        name:'blog',
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "CountryAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "countryapi",
        // Url to query from
        url: "https://countries.trevorblades.com/",
        refetchInterval:60,
        createSchema: async () => {
          const json = JSON.parse(
            fs.readFileSync(`${__dirname}/introspection.json`)
          )
          return buildClientSchema(json.data)
        }
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://api.graphcms.com/simple/v1/swapi",

        createSchema: async () => {
          const sdl = fs.readFileSync(`${__dirname}/schema.sdl`).toString()
          return buildSchema(sdl)
        },
      },
    }
  ],
}
