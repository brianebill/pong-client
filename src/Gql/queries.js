import gql from "graphql-tag";

export const SCAN_SCORES = gql`
  query scanScores {
    scanScores {
      items {
        username
        score
        createdAt
      }
    }
  }
`;