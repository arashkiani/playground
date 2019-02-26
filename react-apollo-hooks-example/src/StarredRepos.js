import React from "react";
import { useQuery } from "react-apollo-hooks";
import { STARRED_REPOS_QUERY } from "./queries";
import Loader from "./loader";

export default () => {
  const {
    data: { viewer },
    error,
    loading
  } = useQuery(STARRED_REPOS_QUERY, {
    variables: { numRepos: 25 }
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  const {
    starredRepositories: { nodes: starredRepositories }
  } = viewer;
  return starredRepositories.map(({ id, name, description }) => (
    <div key={id}>
      <strong>{name}</strong>
      {description}
    </div>
  ));
};
