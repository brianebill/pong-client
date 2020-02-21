import gql from "graphql-tag";

export const PUT_SCORE = gql`
  mutation putScore($username: String!, $score: String!) {
    putScore(username: $username, score: $score) {
      username
      score
      createdAt
    }
  }
`;

export const DELETE_SCORE = gql`
  mutation deleteScore($username: String!) {
    deleteScore(username: $username) {
        username
        score
        createdAt
    }
  }
`;

 