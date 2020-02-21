import React, { useContext } from 'react';
import { Context } from 'Store';
import {
  Title,
  Subtitle,
} from 'Components';

export const Score = () => {
  const { state: { isGameStarted, score } } = useContext(Context);

  return (
    <>
      {isGameStarted && 
        <> 
          <Title sizeInt={100}>
            {score <= 0 ? 0 : score}
          </Title>
          <Subtitle>
            Current Score
          </Subtitle>
        </>
      }
    </>
  );
};

