/**
 * @type {import('gatsby').GatsbyConfig}
 */

const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")


module.exports = {
  siteMetadata: {
    title: `Kraft Heinz Dashboard DEMO`
    ,siteUrl: `https://www.yourdomain.tld`
    ,stakeholders:[
      "Clementine Bauch"
      ,"Leanne Graham"
      ,"Ervin Howell"
    ]
  },
  plugins: [
    "gatsby-plugin-image"
    ,"gatsby-plugin-sharp"
    ,{
      resolve:"gatsby-source-rest-api",
      options:{
        endpoints:[
          "https://jsonplaceholder.typicode.com/posts"
          ,
        ]
      }
    }
    ,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GraphQLzero",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "zeroPosts",
        // Url to query from
        url: "https://graphqlzero.almansi.me/api",
      }
    },
  ],
}
