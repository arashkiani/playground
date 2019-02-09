import React, { Component } from "react";
import "./App.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import MyComponent from "./containers/myComponent";
const client = new ApolloClient({
  //uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <div className="App-logo" alt="logo">
              Playground
            </div>
            <MyComponent />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
