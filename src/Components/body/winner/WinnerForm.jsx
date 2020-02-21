import React, { useState, useContext } from 'react';
import { Box } from 'Components';
import * as S from './WinnerForm.styled';
import { useMutation } from '@apollo/react-hooks';
import {
  Title,
  Subtitle,
} from 'Components';
import {
  PUT_SCORE,
  SCAN_SCORES
} from 'Gql';
import { Context } from 'Store';
import { config as C } from 'Config';

export const WinnerForm = () => {
  const { state: { score },  dispatch } = useContext(Context);
  const [putScore] = useMutation(PUT_SCORE);
  const [text, setText] = useState('');

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      username: text,
      score,
    };

    putScore({
      variables: { ...data },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: SCAN_SCORES }],
    })
      .then(() => {
        C.dispatcher({ dispatch, prop: 'showWinnerForm', payload: false });
      });
  };

  return (
    <S.Container>
      <Box colorStr="lime">
        <Title
          colorStr="lime"
          marginStr="20px 0"
        >
          You did it!
        </Title>
        <Subtitle
          colorStr="lime"
          sizeInt={24}
        >
          You're an all-time winner!
        </Subtitle>
        <Title
          colorStr="lime"
          sizeInt={32}
          marginStr="0 0 20px 0"
        >
          Score: {score}
        </Title>
        <form onSubmit={(e) => submitData(e)}>
          <S.Input
            type='text'
            placeholder='Enter username'
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="username"
          />
          <S.Button
            type="submit"
          >
            Save your score
          </S.Button>
        </form>
      </Box>
    </S.Container>
  )
};