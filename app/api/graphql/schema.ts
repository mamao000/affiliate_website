import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    created_at: String!
    authorId: ID!
    author: User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    posts: [Post] 
  }
  
  type Query {
    allUsers: [User!]!
    allPosts: [Post!]!
    user(id: String!): User
    post(id: Int!): Post
  }

  type Mutation {
    createUser(email: String!, name: String!, id: String!): User!
    createPost(authorId: String!, title: String!, content: String!): Post!
  }
`;

export default typeDefs;
