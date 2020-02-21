import React, { useContext } from 'react';
import * as S from './Winners.styled';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { SCAN_SCORES } from 'Gql';
import { Context } from 'Store';
import {
  Box,
  Title,
} from 'Components';

export const Winners = ({ winnersList }) => {
  const { state: { isWinner, showWinnerForm }} = useContext(Context);
  const { loading, error, data } = useQuery(SCAN_SCORES);

  const readableDate = createdAt => moment(createdAt).fromNow();
  const generateListItem = (item) => (
    <S.Row key={item.username}>
      <S.Cell>{item.username}</S.Cell>
      <S.Cell>{item.score}</S.Cell>
      <S.Cell>{readableDate(item.createdAt)}</S.Cell>
    </S.Row>
  )

  if (error) {
    console.log(error);
    return null;
  }

  return (
    <S.Container>
      {isWinner && !showWinnerForm && (
        <div>You're a rock n' roll superstar</div>
      )}
      <Box>
        <Title
          marginStr="20px 0"
        >
          All Time Winners
        </Title>
        <S.Table>
          {loading ? (
              <tbody>
                <tr>
                  <th>loading...</th>
                </tr>
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <S.HeaderCell>Username</S.HeaderCell>
                  <S.HeaderCell>Score</S.HeaderCell>
                  <S.HeaderCell>When</S.HeaderCell>
                </tr>
                {data ? data.scanScores.items.map(generateListItem) : ''}
              </tbody>
            )
          }
        </S.Table>
      </Box>
    </S.Container>
  );
};