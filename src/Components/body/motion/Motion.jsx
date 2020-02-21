import React, { useContext } from 'react';
import { Context } from 'Store';
import { config as C } from 'Config';
import { data as D } from 'Data';
import {
  Button,
  Subtitle,
} from 'Components';

export const Motion = () => {
  const { state: { isGameStarted },  dispatch } = useContext(Context);

  //create audio
  let audio = C.createAudio(D.START_GAME);

  let game = { ...D.INITIAL_GAME_STATE };

  const checkForWinner = () => {
    if (game.score > 30) {
      C.dispatcher({ dispatch, prop: 'isWinner', payload: true });
      C.dispatcher({ dispatch, prop: 'finalScore', payload: game.score });
      C.dispatcher({ dispatch, prop: 'showWinnerForm', payload: true });
    }
  };

  const endGame = async () => {
    audio.src = D.GAME_OVER;
    audio.play();
    window.removeEventListener('deviceorientation', motionHandler);
    await checkForWinner();
    C.dispatcher({ dispatch, prop: 'isGameStarted', payload: false });
    C.dispatcher({ dispatch, prop: 'isGameOver', payload: true });
  };

  const playAudio = ({ audio, src }) => {
    return new Promise((resolve) => {
      audio.onended = resolve;
      if (src) audio.src = src;
      audio.play();
    });
  };

  const handleReturn = async () => {
    game.isInPlay = false;
    const randomizedHangTime = C.random({ min: D.MIN, max: D.MAX });
    const hangtime = calculateTimeWithDifficulty({ time: randomizedHangTime });
    await C.hangtime({ duration: hangtime });
    await playAudio({ audio, src: D.INCOMING_BALL });
    return;
  }

  const calculateTimeWithDifficulty = ({ time }) => {
    const difficulty = C.truncateToDecimals((game.score + 1)/100);
    if (game.score > 0 && difficulty >= .1) {
      return time = time * (1 - difficulty);
    }
    return time;
  };

  const setTimeToReturnBy = async () => {
    let timeToSwing = -1;
    if (game.score === -1) {
      timeToSwing = D.TIME_OUT_IN_MS;
    } else {
      timeToSwing = calculateTimeWithDifficulty({ time: D.TIME_TO_RETURN });
    };

    const now = C.timestamp();
    const timeToReturnBy = now + timeToSwing;

    game.timeToReturnBy = timeToReturnBy;
  };

  const recursiveGameLoop = async () => {
    // setup game loop with extra time to serve for first swing
    if (game.timeToReturnBy === -1) {
      await setTimeToReturnBy();
      game.isInPlay = true;
    };

    // check for game over
    if (game.score >= 0) {      
      const now = C.timestamp();
      if (now > game.timeToReturnBy) {
        endGame();
        return;
      }
    };

    // check for sucessful swing
    if (game.lastSwingTime !== -1) {
      // iterate game vars and reset isInPlay
      game.score = game.score + 1;
      C.dispatcher({ dispatch, prop: 'score', payload: game.score });
      await playAudio({ audio, src: D.OUTGOING_BALL });
      await handleReturn();
      // reset game loop vars
      game.timeToReturnBy = -1;
      game.lastSwingTime = -1;
      // restart the loop
      // until a swing is registered
      // or time's up
      recursiveGameLoop();
    }
  };

  // only record a swing while the ball is in play
  // and close the window for the ball being in 
  // play immediately after registering a swing
  const swingHandler = () => {
    if (game.isInPlay) {
      game.lastSwingTime = C.timestamp();
      game.isInPlay = false;
      recursiveGameLoop();
    }
  };

  // filter all motion for actual swings
  const motionHandler = async (e) => {
    let alpha = e.alpha;
    // if alpha goes past 360 (to 1), reset to 360
    if (alpha < 10) alpha = 360;
    // swing equals > 10 degrees rotation on a flat plane

    const diff = Math.abs(alpha - game.lastAlpha);
    if (diff > 15) {
      game.lastAlpha = alpha;
      swingHandler();
      return
    }
  };

  const clickHandler = async () => {
    C.dispatcher({ dispatch, prop: 'isWinner', payload: false });
    game = { ...D.INITIAL_GAME_STATE };
    audio.play();    
    // feature detect
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', motionHandler);
            C.dispatcher({ dispatch, prop: 'isGameStarted', payload: true });
            game.isInPlay = true;
          }
        })
        .catch(rejected => alert(rejected));
    } else {
      alert('This device is not yet fully supported');
      // TODO: handle non iOS 13+ devices
      window.addEventListener('deviceorientation', motionHandler);
      C.dispatcher({ dispatch, prop: 'isGameStarted', payload: true });
      game.isInPlay = true;
    }
  };

  return (
    <section>
      {!isGameStarted &&
        <Button
          id='request'
          onClick={() => clickHandler()}
        >
            Start a New Game
        </Button>
      }
      
      {game.score === -2 && isGameStarted &&
        <Subtitle>
          To start the game, 
          rotate your phone more than 30&#xb0;
          to take a swing
        </Subtitle>
      }
    </section>
  );
};