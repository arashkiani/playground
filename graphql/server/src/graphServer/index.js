import { ApolloServer, gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    bye: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (parent, args, context, info) => {
      console.log(args);
      return "Hello world!";
    },
    bye: () => "Goodbye world!"
  }
};

export const graphServer = new ApolloServer({ typeDefs, resolvers });
