import React from "react";
import { Query } from "react-apollo";
import { STARRED_REPOS_QUERY } from "./queries";
import Loader from "./loader";

export default () => (
  <Query query={STARRED_REPOS_QUERY} variables={{ numRepos: 100 }}>
    {({ data: { viewer }, loading }) => {
      if (loading) {
        return <Loader />;
      }

      const {
        starredRepositories: { nodes: starredRepositories }
      } = viewer;

      return starredRepositories.map(({ id, name, description }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      ));
    }}
  </Query>
);
