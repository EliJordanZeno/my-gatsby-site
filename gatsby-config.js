/**
 * @type {import('gatsby').GatsbyConfig}
 */

const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")


module.exports = {
  siteMetadata: {
    title: `Kraft Heinz Dashboard DEMO`,
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
      }
    },
  ],
}
