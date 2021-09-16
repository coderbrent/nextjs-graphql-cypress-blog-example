import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    username: String
    password: String
  }

  input UserLogin {
    username: String
    password: String
  }

  type LoginResponse {
    id: String
    token: String
  }

  type Mutation {
    login(input: UserLogin!): LoginResponse
  }
`;
