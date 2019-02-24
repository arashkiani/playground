import React, { useState, useEffect } from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apolloClient";
import StarredRepos from "./StarredRepos";

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
  return (
    <div className="App">
      {token ? (
        <ApolloProvider client={apolloClient}>
          <StarredRepos />
        </ApolloProvider>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="token" placeholder="Enter your GitHub token" />
        </form>
      )}
    </div>
  );
}
