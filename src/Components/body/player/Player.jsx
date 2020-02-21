// import React from 'react';
// import { config as C } from 'Config';
// import { data as D } from 'Data';
// import { Context } from 'Store';
// import {
//   Title,
//   Subtitle,
//   Button,
// } from 'Components';

export const Player = () => {
  // init hooks
  // const { state, dispatch } = useContext(Context);
  // const { score, isInPlay, timeToReturnBy } = state;

  //create audio
  // const outgoing = C.createAudio(D.OUTGOING_BALL);
  // const incoming = C.createAudio(D.INCOMING_BALL);
  // const gameOver = C.createAudio(D.GAME_OVER)

  // const calculateTimeToReturn = () => {
  //   let timeToReturn = D.TIME_TO_RETURN;
  //   const difficulty = truncateToDecimals((score + 1)/100);
  //   console.log('difficulty', difficulty);
  //   if (score > 0 && difficulty >= .1) {
  //     timeToReturn = timeToReturn * (1 - difficulty)
  //   }
  //   console.log('timeToReturn', timeToReturn);
  //   return timeToReturn;
  // }

  // const calculateWaitTime = () => {
    
  //   let waitTime = randomizeWaitTime;
  //   if (score > 0) {
  //     waitTime = waitTime * (1 - score/10)
  //   }
  //   return waitTime;
  // }

  // calculateTimeWithDifficulty takes the number of successful returns (score)
  // divides by 100 then removes decimals to the tenth to get a 
  // factor by which to increase the difficulty every ten
  // successful returns
  // const calculateTimeWithDifficulty = ({ time }) => {
  //   const difficulty = C.truncateToDecimals((score + 1)/100);
  //   if (score > 0 && difficulty >= .1) {
  //     return time = time * (1 - difficulty);
  //   }
  //   return time;
  // }

  // const gameOn = async ({
  //   waitTime,
  //   timeToReturn,
  // }) => {
  //   C.dispatcher({ dispatch, prop: 'isInPlay', payload: false });
  //   outgoing.play();
  //   await C.simulateHangtime({ duration: waitTime });
  //   incoming.play();
  //   const now = C.timestamp();
  //   C.dispatcher({ dispatch, prop: 'timeToReturnBy', payload: now + timeToReturn });
  //   C.dispatcher({ dispatch, prop: 'isInPlay', payload: true });
  //   await C.simulateHangtime({ duration: timeToReturn });
  // };

  // const handleMotion = () => {
  //   // check to see if this is a new game, i.e., (score === -1)
  //   // or a successful return
  //   if (score === -1 || now < timeToReturnBy) {
  //     // iterate score to begin game and track success
  //     C.dispatcher({ dispatch, prop: 'score', payload: score + 1 })
  //     // setup and call game loop
  //     const randomizedWaitTime = C.random({ min: D.MIN, max: D.MAX });
  //     const waitTime = C.calculateTimeWithDifficulty({ time: randomizedWaitTime });
  //     const timeToReturn = C.calculateTimeWithDifficulty({ time: D.TIME_TO_RETURN });
  //     C.gameOn({
  //       waitTime,
  //       timeToReturn,
  //     });
  //   } else { // epic failure
  //     C.dispatcher({ dispatch, prop: 'isGameOver', payload: true });
  //     gameOver.play();
  //   }
  // }

  return null
  
  // (
  //   <>
  //     <Title sizeInt={100}>
  //       {score < 0 ? 0 : score}
  //     </Title>
  //     <Subtitle>
  //       Current Score
  //     </Subtitle>

  //   </>
  // )
};

// {isInPlay && (
//   <Button
//     className="btn"
//     type="button"
//     onClick={async () => null}
//   >
//     swing paddle
//   </Button>
// )}