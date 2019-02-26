import React, { useState, useEffect } from "react";
import StarredRepos from "./StarredRepos";
import { ApolloProvider } from "react-apollo-hooks";
import client from "./client";

export default function App() {
  const defaultToken = sessionStorage.getItem("token") || false;
  const [token, setToken] = useState(defaultToken);
  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);

  const handleSubmit = event => {
    event.preventDefault();
    setToken(event.target.token.value);
  };

  return token ? (
    <ApolloProvider client={client}>
      <StarredRepos />
    </ApolloProvider>
  ) : (
    <form onSubmit={handleSubmit}>
      <input name="token" placeholder="Enter your GitHub token" />
    </form>
  );
}
