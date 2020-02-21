import React from 'react';
import {
  Title,
  Subtitle,
  Winners,
} from 'Components';
import { data as D } from 'Data';
import { config as C } from 'Config';

export const Loser = () => {
  // const { dispatch } = useContext(Context);

  const tauntIndex = C.random({ min: 0, max: 7 });
  const taunt = D.taunts[tauntIndex];

  return (
    <>
      <Title
        colorStr="lime"
      >
        Game Over
      </Title>
      <Subtitle
        inlineBool={false}
        sizeInt={16}
        colorStr="lime"
      >
        {taunt}
      </Subtitle>
      <Winners />
    </>
  );
};