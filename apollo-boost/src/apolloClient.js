import ApolloBoost from "apollo-boost";

const client = new ApolloBoost({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: { Authorization: `bearer ${sessionStorage.getItem("token")}` }
    });
  }
});

export default client;
