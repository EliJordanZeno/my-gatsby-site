import * as React from 'react'
import styled from 'styled-components'
import Post from './post'
import { GraphQLClient, useQuery } from 'graphql-hooks'
import { StaticQuery, graphql } from 'gatsby'

const client = new GraphQLClient({
    url:"https://graphqlzero.almansi.me/api",

})


const PostWrapper = styled.section`
    display: flex;
    flex-direction:column;
    align-items:stretch;
    place-items: center;
    align-content: center;
    max-height: 600px;
    overflow-x: scroll;
    gap:10px 5px;
`

//takes post components as arguments and displays them in a grid-like format within the widget space 
const PostsMonitor = ({columns,style}) => {

    let options = {
        "options": {
          "paginate": {
            "page": 1,
            "limit": 5
          }
        }
      }
    const query = `
    query 
    (
        $options: PageQueryOptions
    )
    {
    posts(options:$options){
      data{
      id
      title
      body
        user{
          id
          name
        }
      }
      meta{
        totalCount
      }
    }
  }
    `

    const { loading, error, data } = useQuery(query,{
        client: client,
    })

    if (loading) return "Loading..."
    if (error) return "Something bad happened"
    let posts = []
    for(let i = 0; i< 30;i++){
        posts.push(<Post author={data.posts.data[i].user.name} title={data.posts.data[i].title} content={data.posts.data[i].body}></Post>)
    }

    return (
        <PostWrapper columns={columns} style={style}>
            {posts}
        </PostWrapper>
    )
}


export default PostsMonitor