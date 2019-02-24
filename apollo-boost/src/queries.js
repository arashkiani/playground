import gql from "graphql-tag";

export const STARRED_REPOS_QUERY = gql`
  query StarredReposQuery($numRepos: Int) {
    viewer {
      id
      starredRepositories(last: $numRepos) {
        nodes {
          id
          name
          description
          url
        }
      }
    }
  }
`;
