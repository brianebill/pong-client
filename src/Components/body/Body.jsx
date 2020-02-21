import React, { useContext } from 'react';
import { Context } from 'Store';
import {
  Loser,
  Winners,
  Motion,
  Score,
  WinnerForm,
} from '.';

export const Body = () => {
  const { state } = useContext(Context);
  const { isGameStarted, isGameOver, isWinner, showWinnerForm } = state;

  return (
    <>
      <Winners />
      {showWinnerForm && <WinnerForm />}
      {!isWinner && !isGameStarted && isGameOver && <Loser />}
      {!isGameStarted && isWinner && <Winners />}
      {isGameStarted && <Score />}
      <Motion />
    </>
  )
}